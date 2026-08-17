//konstanty a predmety

const today = new Date();
let month = today.getMonth();
let scheduleMonth = month +1;
let year = today.getFullYear();
let scheduleYear = year;
if(scheduleMonth>11){
    scheduleMonth = 0;
    scheduleYear++;
}
console.log(scheduleMonth);
const months = ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen","Listopad","Prosinec"];
const save = document.getElementById("save");










//funkce


function getDaysInMonth(scheduleMonth, scheduleYear){
    return new Date(scheduleYear, scheduleMonth +1, 0).getDate();
}
console.log(getDaysInMonth(scheduleMonth, scheduleYear));

function writeCalendar(scheduleMonth,scheduleYear){
    let days = getDaysInMonth(scheduleMonth, scheduleYear);
    const calendar = document.getElementById("calendar");
    const monthYear = document.getElementById("month-year");
    monthYear.innerHTML = `
        <h3>${months[scheduleMonth]} ${scheduleYear}</h3>
    `;
    for (let day = 1; day <= days; day++){
        calendar.innerHTML += `
            <div class="day-box">
                <div class="day-number">${day}.</div>
                <select>
                    <option value="" selected disabled>Dostupnost</option>
                    <option value="X">X</option>
                    <option value="CD">Celý den</option>
                    <option value="R">Ráno 10-14</option>
                    <option value="O">Odpoledne 14-19</option>
                    <option value="P">Pozdní 15-19</option>
                </select>
            </div>
        `;
    }
}

save.addEventListener("click", function(){
    let hasError = false;
    const availability = [];
    const selects = document.querySelectorAll("select");
    for (const select of selects){
        //console.log(select.value);
        if(select.value===""){
            alert("Vyplňte prosím všechny dny.");
            hasError = true;
            break;
        }
        availability.push(select.value);
    }
    if(!hasError){
        localStorage.setItem("availability",JSON.stringify(availability));
    }
});


//volani

writeCalendar(scheduleMonth,scheduleYear);
//document.getElementById("name")