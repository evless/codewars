// https://www.codewars.com/kata/matching-and-substituting/train/go

package main

import (
	"fmt"
	"strings"
)

func Change(s string, prog string, version string) string {
	str := strings.Split(s, "\n")
	return "Program: " + prog + " Author: g964 " + +" Date: 2019-01-01 V"
}

func main() {
	s1 := "Program title: Primes\nAuthor: Kern\nCorporation: Gold\nPhone: +1-503-555-0091\nDate: Tues April 9, 2005\nVersion: 6.7\nLevel: Alpha"
	result := Change(s1, "Ladder", "1.1")
	correct := "Program: Ladder Author: g964 Phone: +1-503-555-0090 Date: 2019-01-01 Version: 1.1"
	fmt.Println(result, result == correct)
}
