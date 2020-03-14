package router

import (
	mid "gobox/middleware"

	"github.com/gorilla/mux"
)

// Router is exported and used in main.go
func Router() *mux.Router {

	router := mux.NewRouter()

	router.HandleFunc("/api/v1/user", mid.CreateUser).Methods("POST", "OPTIONS")
	router.HandleFunc("/api/v1/user", mid.GetAllUsers).Methods("GET", "OPTIONS")
	router.HandleFunc("/api/v1/user/{id}", mid.GetUser).Methods("GET", "OPTIONS")
	router.HandleFunc("/api/v1/deleteUser/{id}", mid.DeleteUser).Methods("DELETE", "OPTIONS")
	router.HandleFunc("/api/v1/deleteAllUsers", mid.GetAllUsers).Methods("DELETE", "OPTIONS")

	return router
}
