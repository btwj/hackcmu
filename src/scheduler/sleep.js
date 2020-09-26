const getLatestTime = (calendar) => {
    let latestTime = 0;
    for (const day of calendar) {
        for (const event of day) {
            if (event.to > latestTime) latestTime = event.to
        }
    }

    return latestTime;
};

const getEarliestTime = (calendar) => {
    let earliestTime = 1440;
    for (const day of calendar) {
        for (const event of day) {
            if (event.to < earliestTime) earliestTime = event.to
        }
    }
    return earliestTime;
};

export const getSleep = (calendar, personType) => {
    let sleepStart = 1;
    let sleepEnd = 0;
    const earliestSleep = 22 * 60;
    const latestWakeUp = 9*60 - 30;

    const latestClassTime = getLatestTime(calendar);
    const earliestClassTime = getLatestTime(calendar);

    if (personType == "day") {
        if (latestClassTime <= earliestSleep - 30) {
            sleepStart = earliestSleep;
        } else {
            sleepStart = latestClassTime + 30;
        }
        sleepEnd = 8*60 - (24*60 - sleepStart);
    } else {
        if (earliestClassTime >= latestWakeUp + 30) {
            sleepEnd = latestWakeUp;
            sleepStart = sleepEnd - 8*60;
        } else {
            sleepEnd = earliestClassTime - 30;
            if (sleepEnd >= 510) {
                sleepStart = sleepEnd - 480;
            } else {
                sleepStart = (1410 - (480 - sleepEnd)) % 1440;
            }
        }
    }

    if (sleepStart < 12 * 60) {
        sleepStart = 24 * 60;
    }

    if (sleepStart < 22 * 60) sleepStart = 22 * 60;

    if (sleepEnd < 0) {
        sleepEnd = 6 * 60;
    }

    return [sleepStart, sleepEnd];
}