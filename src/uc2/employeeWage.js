const FULL_TIME = 1;
const PART_TIME = 2;
const WAGE_PER_HOUR = 20;

let empCheck = Math.floor(Math.random() * 3);
let empHours = 0;

if (empCheck === FULL_TIME) {
    empHours = 8;
} else if (empCheck === PART_TIME) {
    empHours = 4;
}

let dailyWage = empHours * WAGE_PER_HOUR;
console.log(`Employee worked ${empHours} hours. Daily Wage: $${dailyWage}`);
