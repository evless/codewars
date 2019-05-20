package main

import (
	"fmt"
	"math/rand"
	"strconv"
	"strings"
	"time"
)

// GetRandomOgrn get first letter from snils or generate all random letter to snils snils
func GetRandomOgrn(firstLetter string) string {
	var result string
	var control string
	arr := make([]int, 12)
	firstLetterLength := 0

	if firstLetter != "" {
		firstLetterArr := strings.Split(firstLetter, "")
		firstLetterLength = len(firstLetterArr)

		for i := 0; i < firstLetterLength; i++ {
			num, err := strconv.Atoi(firstLetterArr[i])
			if err == nil {
				arr[i] = num
			}
		}
	}

	rand.Seed(time.Now().UnixNano())

	/* С (1-й знак) — признак отнесения государственного регистрационного номера записи: к основному государственному регистрационному номеру (ОГРН)* — 1, 5 (присваивается юридическому лицу)*/
	arr[0] = rand.Intn(2)

	if arr[0] == 0 {
		arr[0] = 5
	}

	/* ГГ (со 2-го по 3-й знак) — две последние цифры года внесения записи в государственный реестр */
	arr[1] = rand.Intn(2)
	arr[2] = rand.Intn(9)

	/* КК (4-й, 5-й знаки) — порядковый номер субъекта Российской Федерации по перечню субъектов Российской Федерации, установленному статьей 65 Конституции Российской Федерации */
	arr[3] = rand.Intn(9)
	arr[4] = rand.Intn(10)

	/* ХХХХХXX (с 6-го по 12-й знак) — номер записи, внесенной в номер записи, внесенной соответственно в ЕГРЮЛ в течение года */
	for i := 0; i < 7; i++ {
		arr[i+5] = rand.Intn(10)
	}

	/* Ч (13-й знак) — контрольное число: младший разряд остатка от деления предыдущего 12-значного числа на 11, если остаток от деления равен 10, то контрольное число равно 0 (нулю). */
	for i := 0; i < len(arr); i++ {
		result += strconv.Itoa(arr[i])
	}

	summ, err := strconv.Atoi(result)
	if err == nil {
		control = strconv.Itoa((summ % 11) % 10)
	}

	if control == "10" {
		control = "0"
	}

	result += control

	return result
}

func main() {
	fmt.Println(GetRandomOgrn())
}
