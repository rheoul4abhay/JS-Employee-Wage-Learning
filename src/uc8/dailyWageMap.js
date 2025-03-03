import getWorkingHours from "../utils/workHoursUtil.js";

const WAGE_PER_HOUR = 20;
const MAX_HOURS = 160;
const MAX_DAYS = 20;

let totalHours = 0;
let totalDays = 0;
let dailyWages = new Map();

while(totalHours < MAX_HOURS && totalDays < MAX_DAYS) {
    totalDays++;
    let empCheck = Math.floor(Math.random() * 3);
    let empHours = getWorkingHours(empCheck);
    totalHours += empHours;

    let dailyWage = empHours * WAGE_PER_HOUR;
    dailyWages.set(totalDays, dailyWage);
}

//Calculate total wage using Map
let totalWage = [...dailyWages.values()].reduce((sum, wage) => sum + wage, 0);

console.log("Day-wise Wage Map:", dailyWages);
console.log(`Total Wage using Map: $${totalWage}`);