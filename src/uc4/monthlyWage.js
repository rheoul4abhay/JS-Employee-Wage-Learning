import getWorkingHours from "../utils/workHoursUtil.js";

const WAGE_PER_HOUR = 20;
const WORKING_DAYS_PER_MONTH = 20;

let totalWage = 0;

for(let day = 1; day <= WORKING_DAYS_PER_MONTH; day++){
    let empCheck = Math.floor(Math.random() * 3);
    totalWage += getWorkingHours(empCheck) * WAGE_PER_HOUR;
}

console.log(`Total Monthly Wage: $${totalWage}`);