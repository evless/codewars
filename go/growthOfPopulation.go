package main

import "fmt"

func NbYear(p0 int, percent float64, aug int, p int) int {
	summ := p0
	years := 0

	for summ < p {
		summ += int(float64(summ)*(percent/100)) + aug
		years++
	}

	return years
}

func main() {
	result := NbYear(1500, 5, 100, 5000)
	fmt.Println(result, result == 15)
}
