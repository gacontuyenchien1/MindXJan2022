import date from 'date-and-time';

export const nameDayOfWeek = (day: number | undefined):string =>{
    const daysName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    if (day !== undefined && day >= 0 && day < 7){
        return daysName[day];
    } else {
        console.log("days", day);
        if (day && day > -1){
            console.log("days > -1");
        }
        return "Unknown";
    }
}

export const getDayOfWeek = (dateInput: string | undefined):string =>{
    if (dateInput){
        return nameDayOfWeek(date.parse(dateInput, "YYYY-MM-DD").getDay());
    } else return "Unknown";
}