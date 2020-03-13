package router


import (
	mid "gobox/middleware"
	"github.com/gorilla/mux"
)

// Router is exported and used in main.go
func Router() *mux.Router {
	
	router := mux.NewRouter()

	router.HandleFunc("/api/task", mid.GetAllTask).Methods("GET", "OPTIONS")
	router.HandleFunc("/api/task", mid.CreateTask).Methods("POST", "OPTIONS")
	router.HandleFunc("/api/task/{id}", mid.TaskComplete).Methods("PUT", "OPTIONS")
	router.HandleFunc("/api/undoTask/{id}", mid.UndoTask).Methods("PUT", "OPTIONS")
	router.HandleFunc("/api/deleteTask/{id}", mid.DeleteTask).Methods("DELETE", "OPTIONS")
	router.HandleFunc("/api/deleteAllTask", mid.DeleteAllTask).Methods("DELETE", "OPTIONS")

	router.HandleFunc("/api/v1/user", mid.CreateUser).Methods("POST", )

	return router
}