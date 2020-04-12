package middlware

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	env "gobox/environments"
	"gobox/models"

	"github.com/gorilla/mux"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

//DB Connection string
// for localhost string
// const connectionString = "mongodb;//localhost:27017"
var connectionString = ("mongodb+srv://" + env.GetEnv("DBUSER") + ":" + env.GetEnv("DBPASSWORD") + "@outbox-r7ux8.mongodb.net/test?retryWrites=true&w=majority")

// Database name
const dbName = "test"

// Collection name
const collName = "Users"

// collection object/instance
var collection *mongo.Collection

//create connection with mongo db
func Init() {

	// set client options
	clientOptions := options.Client().ApplyURI(connectionString)

	// connect to mongoDB
	client, err := mongo.Connect(context.TODO(), clientOptions)

	if err != nil {
		log.Fatal(err)
	}

	// check the connection
	err = client.Ping(context.TODO(), nil)

	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Connected to MongoDB!")

	collection = client.Database(dbName).Collection(collName)

	fmt.Println("Collection instance created!")
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

// // GetAllUsers get all users
// func GetAllUsers(w http.ResponseWriter, r *http.Request) {
// 	w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
// 	w.Header().Set("Access-Control-Allow-Origin", "*")

// 	payload := getAllUsers()
// 	json.NewEncoder(w).Encode(payload)
// }

// // getAllUsers
// func getAllUsers() []primitive.M {
// 	cur, err := collection.Find(context.Background(), bson.D{{}})

// 	if err != nil {
// 		log.Fatal(err)
// 	}

// 	var results []primitive.M
// 	for cur.Next(context.Background()) {
// 		var result bson.M
// 		e := cur.Decode(&result)
// 		if e != nil {
// 			log.Fatal(e)
// 		}

// 		results = append(results, result)
// 	}

// 	if err := cur.Err(); err != nil {
// 		log.Fatal(err)
// 	}

// 	cur.Close(context.Background())

// 	return results

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

