var dayOfTheWeek = function (day, month, year) {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var d = new Date(year, month - 1, day);
    return days[d.getDay()];
};