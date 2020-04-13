package controller

import (
	"github.com/gin-gonic/gin"
	mw "gobox/middleware"
)

type EmailController struct{}

func (e *EmailController) Default(c *gin.Context) {
	results := mw.GetAllUsersFromDatabase()
	c.JSON(200, gin.H{"results": results})
}