package main

import (
	"fmt"
	"gobox/middleware"
	"gobox/controller"
	"github.com/gin-gonic/gin"
)

func main() {

	test := middleware.NewConnection()
	collection := test.Use("test", "Users")

	// start gin server
	router := gin.Default()
	// test out the results
	results := controller.GetAllUsersFromDatabase(collection)
	fmt.Println("test", results)
	
	//create router group
	emailControl := new(controller.EmailController)
	emailControl.Collection = collection
	v1 := router.Group("/api/v1")
	{
		v1.GET("/users", emailControl.GetUsers)
		// router.POST("/email/emailid", emailPOST)
		// router.DELETE("/email/emailid", emailDELETE)
		// router.GET("/stream/:emailid", stream)
	}
	router.NoRoute(func(c *gin.Context) {
		c.JSON(404, gin.H{"message": "Not Found"})
	})
	router.Run()

}