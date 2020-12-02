let day = new Date;
weekDay = day.getDay();
let day1;
let day2;


switch(weekDay){
    case 0:
        day1 = 1;
        day2 = 2;
        break;
    case 1:
        day1 = 2;
        day2 = 3;
        break;
    case 2:
        day1 = 3;
        day2 = 4;
        break;
    case 3:
        day1 = 4;
        day2 = 5;
        break;
    case 4:
        day1 = 5;
        day2 = 6;
        break;
    case 5:
        day1 = 6;
        day2 = 0;
        break;
    case 6:
        day1 = 0;
        day2 = 1;
        break;
    default:
        console.log("Wrong Value 65")
}

function getDayName(n) {
    switch(n){
        case 0:
            return "Sun"
            break;
        case 1:
            return "Mon"
            break;
        case 2:
            return "Tue"
            break;
        case 3:
            return "Wed"
            break;
        case 4:
            return "Thu"
            break;
        case 5:
            return "Fri"
            break;
        case 6:
            return "Sat"
            break;
        default:
            console.log("Wrong Value 85")
    }
}

let day1Name = getDayName(day1);
let day2Name = getDayName(day2);

document.getElementById("day2").innerHTML = day1Name;
document.getElementById("day3").innerHTML = day2Name;