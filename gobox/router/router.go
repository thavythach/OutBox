package router


import (
	task "gobox/middleware"
	"github.com/gorilla/mux"
)

// Router is exported and used in main.go
func Router() *mux.Router {
	
	router := mux.NewRouter()

	router.HandleFunc("/api/task", task.GetAllTask).Methods("GET", "OPTIONS")
	router.HandleFunc("/api/task", task.CreateTask).Methods("POST", "OPTIONS")
	router.HandleFunc("/api/task/{id}", task.TaskComplete).Methods("PUT", "OPTIONS")
	router.HandleFunc("/api/undoTask/{id}", task.UndoTask).Methods("PUT", "OPTIONS")
	router.HandleFunc("/api/deleteTask/{id}", task.DeleteTask).Methods("DELETE", "OPTIONS")
	router.HandleFunc("/api/deleteAllTask", task.DeleteAllTask).Methods("DELETE", "OPTIONS")

	return router
}