import getWorkingHours from "../utils/workHoursUtil.js";

const WAGE_PER_HOUR = 20;
const MAX_HOURS = 160;
const MAX_DAYS = 20;

let totalHours = 0;
let totalDays = 0;
let dailyWorkArray = [];

while(totalHours < MAX_HOURS && totalDays < MAX_DAYS){
    totalDays++;
    let empCheck = Math.floor(Math.random() * 3);
    let empHours = getWorkingHours(empCheck);
    totalHours += empHours;

    let dailyWage = empHours * WAGE_PER_HOUR;
    dailyWorkArray.push({day: totalDays, hours: empHours, wage: dailyWage, toString() {
        return "\nDay" + this.day + " => working hours is " + this.hours + " and wage earned : $" + this.wage;
    }});
}

// UC 11A: Calculate Total Wage and Hours using `reduce()`
const totalWage = dailyWorkArray.reduce((sum, work) => sum + work.wage, 0);
const totalHoursWorked = dailyWorkArray.reduce((sum, work) => sum + work.hours, 0);
console.log(`Total Wage: $${totalWage}, Total Hours Worked: ${totalHours}`);

// UC 11B: Show Full Working Days using `forEach()`
console.log("Full working days:");
dailyWorkArray.forEach(work => {
    if(work.hours === 8) console.log(`Day ${work.day}`);
})

// UC 11C: Show Part-Time Working Days using `map()`
const partTimeDays = dailyWorkArray.filter(work => work.hours === 4).map(work => `Day ${work.day}`);
console.log("Part-Time Working Days:", partTimeDays.join(", "));

// UC 11D: Show No Work Days using `filter()`
const noWorkDays = dailyWorkArray.filter(work => work.hours === 0).map(work => `Day ${work.day}`);
console.log("No work days:", noWorkDays.join(", "));