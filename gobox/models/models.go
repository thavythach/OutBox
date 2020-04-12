package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type ToDoList struct {
	ID     primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Task   string             `json:"task,omitempty"`
	Status bool               `json:"status,omitempty"`
}

// User user
type User struct {
	ID        primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Address   string             `json:"address,omitempty"` // TODO: unique
	Password  string             `json:"password,omitempty"`
	FirstName string             `json:"firstname,omitempty"`
	LastName  string             `json:"lastname,omitempty"`
	DarkMode  bool               `json:"darkmode,omitempty"`
}

// Email email
type Email struct {
	ID          primitive.ObjectID `bson:"_id, omitempty"`
	fromAddress string             `bson:"fromAddress, omitempty"`
	toAddress   string             `bson:"toAddress, omitempty"`
	timeStamp   time.Time          `bson:"timestamp, omitempty"`
	content     string             `bson:"content, omitempty"`
}
