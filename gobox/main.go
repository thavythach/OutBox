package main

import (
	emc "gobox/controller"

	"github.com/gin-gonic/gin"
	mw "gobox/middleware"
	// "go.mongodb.org/mongo-driver/mongo"
	// "go.mongodb.org/mongo-driver/mongo/options"
)

func main() {
	// start gin server

	mw.Init()
	router := gin.Default()
	//create router group
	v1 := router.Group("/api/v1")
	{
		emailControl := new(emc.EmailController)
		v1.GET("/email", emailControl.Default)
		v1.GET("/user", emailControl.Default)
		// router.POST("/email/emailid", emailPOST)
		// router.DELETE("/email/emailid", emailDELETE)
		// router.GET("/stream/:emailid", stream)
	}
	router.NoRoute(func(c *gin.Context) {
		c.JSON(404, gin.H{"message": "Not Found"})
	})
	router.Run()
}
