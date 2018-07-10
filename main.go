package main

import (
	"log"
	"net/http"
	"os"
)

func main() {

	ENV := os.Getenv("ENV")
	var host string
	var port string

	if ENV == "" {
		log.Fatal("must set ENV var")
	}

	if ENV == "local-dev" {
		host = ""
		port = "8080"
	} else if ENV == "local-docker-dev" {
		host = ""
		port = "80"
	} else if ENV == "compute-engine" {
		host = ""
		port = "80"
	}

	mux := http.NewServeMux()
	mux.Handle("/", http.FileServer(http.Dir("./build"))) // serve application

	addr := host + ":" + port

	srv := &http.Server{
		Addr:    addr,
		Handler: mux,
	}

	log.Printf("Listening at: %v", addr)
	err := srv.ListenAndServe()

	if err != nil {
		log.Fatalf("Unable to listen and serve: %v", err)
	}
}
