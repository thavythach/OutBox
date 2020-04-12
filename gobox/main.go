package main

import (
	"log"
	emc "gobox/controller"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	// "go.mongodb.org/mongo-driver/mongo"
	// "go.mongodb.org/mongo-driver/mongo/options"
)

func init() {
	if err := godotenv.Load(); err!= nil {
		log.Printf("No .env file found")
	}
}

func main() {
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
}
