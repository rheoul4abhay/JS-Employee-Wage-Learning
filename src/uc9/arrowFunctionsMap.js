import getWorkingHours from "../utils/workHoursUtil.js";

const WAGE_PER_HOUR = 20;
const MAX_HOURS = 160;
const MAX_DAYS = 20;

let totalHours = 0;
let totalDays = 0;
let dailyWageMap = new Map();
let dailyHourMap = new Map();

while(totalHours < MAX_HOURS && totalDays < MAX_DAYS) {
    totalDays++;
    let empCheck = Math.floor(Math.random() * 3);
    let empHours = getWorkingHours(empCheck);
    totalHours += empHours;

    let dailyWage = empHours * WAGE_PER_HOUR;
    dailyWageMap.set(totalDays, dailyWage);
    dailyHourMap.set(totalDays, empHours);
}

// UC 9A: Calculate Total Wage and Total Hours using Arrow Function
const totalWage = [...dailyWageMap.values()].reduce((sum, wage) => sum + wage, 0);
const totalHoursWorked = [...dailyHourMap.values()].reduce((sum, hour) => sum + hour, 0);
console.log(`Total Wage: $${totalWage}, Total Hours Worked: ${totalHoursWorked}`);

// UC 9B: Categorize Full-Time, Part-Time, and No Work Days
let fullTimeDays = [...dailyHourMap.entries()].filter(([day, hours]) => hours === 8).map(([day, _]) => day); 
//_ is used as a throwaway variable (meaning "we don’t care about this value").

let partTimeDays = [...dailyHourMap.entries()].filter(([day, hours]) => hours === 4).map(([day, _]) => day);

let noWorkDays = [...dailyHourMap.entries()].filter(([day, hours]) => hours === 0).map(([day, _]) => day);
console.log("Full Working Days:", fullTimeDays);
console.log("Part-Time Working Days:", partTimeDays);
console.log("No Work Days:", noWorkDays);