package main

import (
	"math/rand"
	"strconv"
	"strings"
	"time"
)

import "fmt"

// GetRandomSnils get first letter from snils or generate random snils
func GetRandomSnils(prev string) string {
	arr := make([]int, 11)
	summ := 0
	length := 9
	prevLength := len(prev)

	rand.Seed(time.Now().UnixNano())

	if prev != "" {
		prevArr := strings.Split(prev, "")

		for i := 0; i < 9-prevLength; i++ {
			num, err := strconv.Atoi(prevArr[i])
			if err == nil {
				arr[i] = num
			}
		}
	}

	for i := prevLength - 1; i < length; i++ {
		arr[i] = rand.Intn(9)
	}

	for i := 0; i < len(arr); i++ {
		num := arr[i]
		summ = summ + num*(9-i)
	}

	if summ > 101 {
		summ = summ % 101
	}

	if summ == 100 || summ == 101 {
		arr[len(arr)-1] = 0
		arr[len(arr)-2] = 0
	} else {
		first := int(summ / 10)
		second := summ % 10

		arr[len(arr)-2] = first
		arr[len(arr)-1] = second
	}

	result := ""

	for i := 0; i < len(arr); i++ {
		str := strconv.Itoa(arr[i])
		result = result + str
	}

	return result
}

func main() {
	result := GetRandomSnils("")
	fmt.Println(result)
}
