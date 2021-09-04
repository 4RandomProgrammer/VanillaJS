const calendar = document.querySelector('#app-calendar');

const isWeekend = day => {
    if(day % 7 === 6 || day % 7 === 0) {
        return true;
    }
    else {
        return false;
    }
};

const getDayName = day => {
    const date = new Date(Date.UTC(2018, 0, day));

    const options = {
        weekday : "short"
    };

    return new Intl.DateTimeFormat("en-US", options).format(date);
};

for(let day = 1; day <= 31; day++){



    const dayName = getDayName(day);
    const weekend = isWeekend(day);

    let nome = "";
    if (day <= 7) {
        nome = `<div class="name">${dayName}</div>`;
    }

    calendar.insertAdjacentHTML("beforeend", `<div class ="day ${weekend ? "weekend" : ""}">${nome}${day}</div>`);
}


document.querySelectorAll("#app-calendar .day").forEach(day => {
    day.addEventListener("click", event =>{
        event.currentTarget.classList.toggle("selected");
    });
});


