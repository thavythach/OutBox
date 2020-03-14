package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type ToDoList struct {
	ID     primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Task   string             `json:"task,omitempty"`
	Status bool               `json:"status,omitempty"`
}

// type Email struct {
// 	ID				primitive.ObjectID		`json:"_idomitempty" bson:"_id,omitempty`
// 	Title			string					`json:"title,omitempty"`
// 	PinStatus		bool					`json:"pinStatus,omitempty`
// 	SnoozeStatus	bool					`json:"snoozeStatus,omitempty`
// }

type User struct {
	ID        primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Address   string             `json:"address,omitempty"` // TODO: unique
	Password  string             `json:"password,omitempty"`
	FirstName string             `json:"firstname,omitempty"`
	LastName  string             `json:"lastname,omitempty"`
	DarkMode  bool               `json:"darkmode,omitempty"`
}