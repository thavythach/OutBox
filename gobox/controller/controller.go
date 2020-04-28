package controller

import (
	"log"
	"context"
	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type EmailController struct{
	Collection *mongo.Collection
}

func (e *EmailController) Default(c *gin.Context) {

	results := GetAllUsersFromDatabase(e.Collection)
	c.JSON(200, gin.H{"results": results})
}

//TODO fix this so it can be easily called in Default()
// GetAllUsers get all users
// func GetAllUsers(w http.ResponseWriter, r *http.Request, collection *mongo.Collection) {
// 	c.Writer.Header().Set("Context-Type", "application/x-www-form-urlencoded")
// 	c.Writer.Header().Set("Access-Control-Allow-Origin", "*")

// 	payload := GetAllUsersFromDatabase(collection)
// 	json.NewEncoder(c.Writer).Encode(payload)
// }

// GetAllUsersFromDatabase
func GetAllUsersFromDatabase(collection *mongo.Collection) []primitive.M {
	cur, err := collection.Find(context.Background(), bson.D{{}})

	if err != nil {
		log.Fatal(err)
	}

	var results []primitive.M
	for cur.Next(context.Background()) {
		var result bson.M
		e := cur.Decode(&result)
		if e != nil {
			log.Fatal(e)
		}

		results = append(results, result)
	}

	if err := cur.Err(); err != nil {
		log.Fatal(err)
	}

	cur.Close(context.Background())

	return results
} 