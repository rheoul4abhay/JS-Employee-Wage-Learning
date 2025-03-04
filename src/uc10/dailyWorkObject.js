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

console.log("Daily Work Records:", dailyWorkArray.toString());