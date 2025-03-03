import getWorkingHours from "../utils/workHoursUtil.js";

const WAGE_PER_HOUR = 20;
const MAX_HOURS = 160;
const MAX_DAYS = 20;

let totalHours = 0;
let totalDays = 0;
let dailyWages = [];

while(totalHours < MAX_HOURS && totalDays < MAX_DAYS) {
    totalDays++;
    let empCheck = Math.floor(Math.random() * 3);
    let empHours = getWorkingHours(empCheck);
    totalHours += empHours;

    let dailyWage = empHours * WAGE_PER_HOUR;
    dailyWages.push({day: totalDays, wage: dailyWage}); //Store as an object
}

// UC 7A: Calculate Total Wage using `reduce()`
let totalWage = dailyWages.map(day => day.wage).reduce((sum, wage) => sum + wage, 0);
console.log(`Total Wage using reduce: $${totalWage}`);

// UC 7B: Show Day along with Daily Wage using `map()`
console.log("Day-wise Wages:");
dailyWages.map(day => console.log(`Day ${day.day}: $${day.wage}`));

// UC 7C: Show Days with Full-Time Wage (160) using `filter()`
let fullTimeDays = dailyWages.filter(day => day.wage === 160).map(day => day.day);
console.log("Days with full time wage (160): ", fullTimeDays);

// UC 7D: Find First Occurrence of Full-Time Wage using `find()`
let firstFullTimeDay = dailyWages.find(day => day.wage === 160);
console.log("First Day with Full-Time Wage:", firstFullTimeDay ? firstFullTimeDay.day : "None");

// UC 7E: Check if Every Element is a Full-Time Wage using `every()`
let isAllFullTime = dailyWages.every(day => day.wage === 160);
console.log("All Days have Full-Time Wage ? ", isAllFullTime);

// UC 7F: Check if there is any Part-Time Wage using `some()`
let hasPartTime = dailyWages.some(day => day.wage === 80);
console.log("Has any Part-Time Wage ?", hasPartTime);

// UC 7G: Count Number of Days Worked
let daysWorked = dailyWages.length;
console.log("Total Days Worked:", daysWorked);