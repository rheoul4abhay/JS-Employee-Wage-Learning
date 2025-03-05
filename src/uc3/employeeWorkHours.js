import getWorkingHours from "../utils/workHoursUtil.js";

let empCheck = Math.floor(Math.random() * 3);
let empHours = getWorkingHours(empCheck);
console.log(`Employee worked ${empHours} hours.`);
