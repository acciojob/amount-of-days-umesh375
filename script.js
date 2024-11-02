function daysofAYear(year) {
	const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

	return isLeapYear ? 366 : 365;
}

// Examples
console.log(daysofAYear(2022)); //365
console.log(daysofAYear(2024)); //365
console.log(daysofAYear(1900)); //365
console.log(daysofAYear(2000)); //365