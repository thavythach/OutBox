package middleware

import (
	"context"
	"fmt"
	config "gobox/environments"
	"log"
	"time"
	// "encoding/json"
	// "net/http"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/mongo/readpref"
	// "go.mongodb.org/mongo-driver/bson"
	// "go.mongodb.org/mongo-driver/bson/primitive"
	
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
	// collection = client.Database(dbname).Collection("Users")
	return conn
}

// // CreateUser create user route
// func CreateUser(w http.ResponseWriter, r *http.Request) {
// 	w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
// 	w.Header().Set("Access-Control-Allow-Origin", "*")
// 	w.Header().Set("Access-Control-Allow-Methods", "POST")
// 	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

// 	var user models.User
// 	_ = json.NewDecoder(r.Body).Decode(&user)
// 	insertUser(user)
// 	json.NewEncoder(w).Encode(user)
// }

// // insert one user into the database
// func insertUser(user models.User) {
// 	insertResult, err := collection.InsertOne(context.Background(), user)

// 	if err != nil {
// 		log.Fatal(err)
// 	}
// 	fmt.Println("Inserted a Single User Record", insertResult.InsertedID)

// }

// // GetUser via id
// func GetUser(w http.ResponseWriter, r *http.Request) {
// 	w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
// 	w.Header().Set("Access-Control-Allow-Origin", "*")

// 	params := mux.Vars(r)
// 	user := getUser(params["id"])
// 	json.NewEncoder(w).Encode(user)
// }

// func getUser(userID string) models.User {
// 	fmt.Println("is this the right USERID yooo", userID)

// 	result := models.User{}
// 	id, _ := primitive.ObjectIDFromHex(userID)
// 	filter := bson.M{"_id": id}
// 	collection.FindOne(context.Background(), filter).Decode(&result)

// 	fmt.Println("we got the data", result)
// 	return result
// }

// // DeleteUser lol
// func DeleteUser(w http.ResponseWriter, r *http.Request) {
// 	w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
// 	w.Header().Set("Access-Control-Allow-Origin", "*")
// 	w.Header().Set("Access-Control-Allow-Methods", "DELETE")
// 	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

// 	params := mux.Vars(r)
// 	deleteUser(params["id"])
// 	json.NewEncoder(w).Encode(params["id"])
// 	// json.NewEncoder(w).Encode("Task not found")
// }

// // delete one user from the DB, delete by ID
// func deleteUser(userID string) {
// 	fmt.Println(userID)
// 	id, _ := primitive.ObjectIDFromHex(userID)
// 	filter := bson.M{"_id": id}
// 	d, err := collection.DeleteOne(context.Background(), filter)

// 	if err != nil {
// 		log.Fatal(err)
// 	}

// 	fmt.Println("Deleted document", d.DeletedCount)
// }
// Use test
func (conn *DBConnection) Use(dbName string, colName string) (collection *mongo.Collection) {
	return conn.session.Database(dbName).Collection(colName)
}

// TODO: make this actually work
// Close handles closing the db connection with the database
func (conn *DBConnection) Close() {
	conn.session.Disconnect(conn.context)
}
