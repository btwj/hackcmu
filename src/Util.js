export const timeStrToMins = (timeStr) => {
    let [hours, mins] = timeStr.split(":");
    hours = parseInt(hours);
    mins = parseInt(mins);
    return hours * 60 + mins;
}

export const timeStr12HrToMins = (timeStr) => {
    let hours = parseInt(timeStr.slice(0, 2));
    const mins = parseInt(timeStr.slice(3, 5));
    const amPm = timeStr.slice(5);

    if (amPm == 'PM' && hours != 12) {
        hours += 12;
    }

    return hours * 60 + mins;
}

export const minsToTimeStr = (mins) => {
    const hour = Math.floor(mins / 60);
    const min = mins % 60;
    
    let hourStr = (hour < 10 ? "0" : "") + hour;
    const minStr = (min < 10 ? "0" : "") + min;

    if (hourStr == "24") hourStr = "00";
    
    return hourStr + ":" + minStr;
}

export const dayStrs = ['', 'M', 'T', 'W', 'R', 'F', 'S', 'U']

export const dayTimeToStr = (days, from, to) => {
    let output = "";

    for (var day of days.sort()) {
        output += dayStrs[day];
    }
    
    output += " ";

    output += minsToTimeStr(from);
    output += "–";
    output += minsToTimeStr(to);
    return output;
}