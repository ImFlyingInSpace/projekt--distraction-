const today = new Date();
let month = today.getMonth();
const scheduleMonth = month +1;
let year = today.getFullYear();
console.log(scheduleMonth);
function getDaysInMonth(scheduleMonth, year){
    return new Date(year, scheduleMonth +1, 0).getDate();
}
console.log(getDaysInMonth(scheduleMonth, year));

function writeCalendar(scheduleMonth,year){
    let days = getDaysInMonth(scheduleMonth, year);
    const calendar = document.getElementById("calendar");
    for (let day = 1; day <= days; day++){
        calendar.innerHTML += `
            <tr>
                <td>${day}.</td>
                <td>
                    <select>
                        <option class="day">Celý den</option>
                        <option class="morning">Ráno</option>
                        <option class="noon">Odpoledne</option>
                        <option class="night">Noc</option>
                    </select>
                </td>
            </tr>
        `;
    }
}
writeCalendar(scheduleMonth,year);