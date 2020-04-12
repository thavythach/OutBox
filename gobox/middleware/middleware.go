package middleware

import (
	"context"
	"fmt"
	config "gobox/environments"
	"log"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/mongo/readpref"
)

// DBConnection defines the connection structure
type DBConnection struct {
	session *mongo.Client
	context context.Context
}

// NewConnection handles connecting to a mongo database
func NewConnection() (conn *DBConnection) {

	// define connection information
	dbhost := "mongodb+srv://"
	dbuser := config.GetEnv("DBUSER")
	dbpass := config.GetEnv("DBPASSWORD")
	dbname := "@outbox-r7ux8.mongodb.net/test?retryWrites=true&w=majority"

	connection := fmt.Sprintf("%s%s:%s%s", dbhost, dbuser, dbpass, dbname)

	// configure client to connect
	client, err := mongo.NewClient(options.Client().ApplyURI(connection))

	if err != nil {
		log.Fatal(err)
	}

	ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)

	err = client.Connect(ctx)

	if err != nil {
		log.Fatal(err)
	}

	// ping
	err = client.Ping(ctx, readpref.Primary())

	if err != nil {
		log.Fatal(err)
	}

	conn = &DBConnection{client, ctx}
	return conn
}

// Use test
func (conn *DBConnection) Use(dbName string, colName string) (collection *mongo.Collection) {
	return conn.session.Database(dbName).Collection(colName)
}

// TODO: make this actually work
// Close handles closing the db connection with the database
func (conn *DBConnection) Close() {
	conn.session.Disconnect(conn.context)
}
