const Pomodoro = function (timePomodoro, tempoBreak, tempoLongBreak) {
    this.timePomodoro = timePomodoro;
    this.tempoBreak = tempoBreak;
    this.tempoLongBreak = tempoLongBreak;
};

function startPomodoro(userPomodoro, userBreak, userLongBreak) {
    let pomodoro = new Pomodoro(userPomodoro, userBreak, userLongBreak);
    let sec = 60
    let pomodoroCount = [pomodoro.timePomodoro, sec]

    let timeText = document.getElementById('timer__text');

    while (pomodoroCount[0] >= -1) {
        window.setInterval(updateTime(), 1000);
        console.log(`MINUTO: ${pomodoroCount[0]}`);
        console.log(`SEGUNDO: ${pomodoroCount[1]}`);
    };

    function updateTime() {
        pomodoroCount[1]--;
        if (pomodoroCount[1] < 0) {
            pomodoroCount[1] = 59;
            pomodoroCount[0]--;
        }
        timeText.innerHTML = `${pomodoroCount[0]}:${pomodoroCount[1]}`;
        timeOver()
    };


    function timeOver() {
        if (pomodoroCount[0] == 0 && pomodoroCount[1] == 0) {
            pomodoroCount[0] = -1;
        }
    };
};