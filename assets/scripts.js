

let years = 0,
months = 0,
days = 0;
function ageYears(years){
    let year_seconds = years * 365*24*60*60;
    console.log("years in seconds: "+ year_seconds);
    return year_seconds;
}

function ageMonths(months){
   let month_seconds =  months *30*24*60*60;
   console.log("months in seconds: "+ month_seconds);
   return month_seconds;
}

function ageDays(days){
    let day_seconds =  days *30*24*60*60;
    console.log("days in seconds: "+ day_seconds);
    return day_seconds;
 }


// seconds = ageYears(years);
// seconds += ageMonths(months);
// seconds += ageDays(days);
// console.log("total seconds: "+ seconds);

let age_form = document.getElementById("age_form");
age_form.addEventListener("submit", function(event){
    event.preventDefault();
    years = document.getElementById("year").value;
    months = document.getElementById("month").value;
    days = document.getElementById("day").value;

    seconds = ageYears(years);
    seconds += ageMonths(months);
    seconds += ageDays(days);
    console.log("total seconds: "+ seconds);

    let result = document.getElementById("result");

    let html = `<h5>Your age is ${years} year(s) ${months} month(s) ${days} day(s)</h5>`;
    html += `<h3>You are ${seconds} seconds old</h3>`;
    
    result.innerHTML = html;

})