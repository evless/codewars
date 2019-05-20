package main

import (
	"fmt"
	"strings"
)

func TwoToOne(s1 string, s2 string) string {
	alphabite := []string{"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"}
	result := ""

	for i := 0; i < len(alphabite); i++ {
		letter := alphabite[i]
		if strings.Contains(s1, letter) || strings.Contains(s2, letter) {
			result += letter
		}
	}

	return result
}

func main() {
	result := TwoToOne("xyaabbbccccdefww", "xxxxyyyyabklmopq")
	fmt.Println(result, result == "abcdefklmopqwxy")
}
