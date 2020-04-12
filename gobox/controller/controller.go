package controller

import (
	"github.com/gin-gonic/gin"
)

type EmailController struct{}

func (e *EmailController) Default(c *gin.Context) {
	c.JSON(200, gin.H{"message": "Email controller response"})
}