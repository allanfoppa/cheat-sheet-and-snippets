package main

import (
	"fmt"
)

type pokemonType string

var squirtle pokemonType

func main() {
	fmt.Println(squirtle)
	fmt.Printf("%T\n", squirtle)
	// squirtle = 10 // error
	squirtle = "water" // correct
	fmt.Println(squirtle)
}