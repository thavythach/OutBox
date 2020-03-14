package main

import (
	"fmt"
	"log"
	"net/http"
	
	// env "gobox/environments"
	"gobox/router"

)

func main() {
	// fmt.Println(environments.GetEnv("DBUSER"))
	// fmt.Println(environments.GetEnv("DBPASSWORD"))

	r := router.Router()

	fmt.Println("Starting server on the port 8080")
	log.Fatal(http.ListenAndServe(":8080", r))

	
}

