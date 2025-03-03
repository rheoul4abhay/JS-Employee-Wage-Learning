const FULL_TIME = 1;
const PART_TIME = 2;

/**
 * Returns working hours based on employee type.
 */
function getWorkingHours(empCheck) {
    switch(empCheck) {
        case PART_TIME:
            return 4;

        case FULL_TIME:
            return 8;
        
        default:
            return 0;
    }
}

export default getWorkingHours;
