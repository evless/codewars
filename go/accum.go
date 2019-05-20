package main

import (
	"fmt"
	"strings"
)

func Accum(s string) string {
	str := strings.Split(strings.ToLower(s), "")
	result := ""

	for i := 0; i < len(str); i++ {
		if i > 0 {
			result += "-"
		}

		result += strings.Title(strings.Repeat(str[i], i+1))
	}

	return result
}

func main() {
	result := Accum("ABCD")
	fmt.Println(result, result == "A-Bb-Ccc-Dddd")
}
