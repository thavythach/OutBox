package main

import (
	"context"
	"fmt"
	"gobox/middleware"
	"log"

	// "github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func main() {

	test := middleware.NewConnection()
	collection := test.Use("test", "Users")

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

	fmt.Println("test", results)

	/*
		// start gin server
		router := gin.Default()

		//create router group
		v1 := router.Group("/api/v1")
		{
			emailControl := new(emc.EmailController)
			v1.GET("/email/user", emailControl.Default)
			// router.POST("/email/emailid", emailPOST)
			// router.DELETE("/email/emailid", emailDELETE)
			// router.GET("/stream/:emailid", stream)
		}
		router.NoRoute(func(c *gin.Context) {
			c.JSON(404, gin.H{"message": "Not Found"})
		})
		router.Run()
	*/
}
