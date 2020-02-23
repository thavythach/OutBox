package OBenv

import(
	"os"
	"log"
	
	//
	"github.com/joho/godotenv"
)

const (
	morning = "hello"
)

// use godot package to load/read the .env file and return the value of the key
func getEnv(key string) string {
	
	// load .env file
	err := godotenv.Load("test.env")

	if err != nil {
		log.Fatalf("Error loading .env file")
	}

	return os.Getenv(key)
}