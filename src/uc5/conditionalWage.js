import getWorkingHours from "../utils/workHoursUtil.js";

const WAGE_PER_HOUR = 20;
const MAX_HOURS = 160;
const MAX_DAYS = 20;

let totalHours = 0;
let totalDays = 0;

while (totalHours < MAX_HOURS && totalDays < MAX_DAYS) {
    totalDays++;
    let empCheck = Math.floor(Math.random() * 3);
    totalHours += getWorkingHours(empCheck);
}

console.log(`Total Wage: $${totalHours * WAGE_PER_HOUR} for ${totalHours} hours over ${totalDays} days.`);
