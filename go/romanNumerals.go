package main

import (
	"fmt"
	"strings"
)

var dictionary = map[string]int{
	"I": 1,
	"V": 5,
	"X": 10,
	"L": 50,
	"C": 100,
	"D": 500,
	"M": 1000,
}

func reverse(numbers []string) []string {
	for i := 0; i < len(numbers)/2; i++ {
		j := len(numbers) - i - 1
		numbers[i], numbers[j] = numbers[j], numbers[i]
	}
	return numbers
}

func Decode(roman string) int {
	arr := reverse(strings.Split(roman, ""))
	summ := 0

	for i := 0; i < len(arr); i++ {
		sign := 1

		if i > 0 && dictionary[arr[i]] < dictionary[arr[i-1]] {
			sign = -1
		}

		summ += sign * dictionary[arr[i]]
	}

	if summ < 0 {
		return summ * -1
	}

	return summ
}

func main() {
	fmt.Println(Decode("MCIV"), Decode("MCIV") == 1104)
}
