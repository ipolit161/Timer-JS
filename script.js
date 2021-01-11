let btnMinus = document.getElementById('button-minus');
let btnPlus = document.getElementById('button-plus');
let btnStart = document.getElementById('start');
let timer = document.getElementById('timer');

let totalTime = 0;

btnPlus.addEventListener('click', function(){
    totalTime += 10
    countTimer()
})

btnMinus.addEventListener('click', function(){
    totalTime -= 25
    countTimer()
})


function countTimer() {
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return timer.innerHTML = `${minutes}:${seconds}`;
}

function getTimeMin() {
    return minutes = Math.floor(totalTime / 60);
}

function getTimeSec() {
    return seconds = totalTime % 60;
}

let clicks = 0;

function countdown(element, minutes, seconds) {
    let li = document.createElement('li');
    let timerText = document.createElement('p');
    let btnWrapperCreate = document.createElement('div');
    let btnCreateStop = document.createElement('button');
    let btnCreateDel = document.createElement('button');
    let btnStop = document.getElementById('stop');
    let btnRestStart = document.createElement('button');
    
    li.classList.add('timer-list__item', 'border', 'rounded-bottom', 'p-2', 'd-flex', 'justify-content-between');

    timerText.classList.add('mb-0');
    timerText.setAttribute('id', `timer${clicks}`);
    li.append(timerText);

    let timerList = document.querySelector('#timerList');
    
    timerList.appendChild(li);

    btnWrapperCreate.classList.add('timer-btn');
    li.append(btnWrapperCreate);

    btnCreateStop.classList.add('btn', 'btn-outline-primary');
    btnCreateStop.setAttribute('id', 'stop');
    btnCreateStop.innerHTML = 'II'
    btnWrapperCreate.append(btnCreateStop);

    btnCreateDel.classList.add('btn', 'btn-outline-danger');
    btnCreateDel.innerHTML = 'X'
    btnWrapperCreate.append(btnCreateDel);

    var el = document.getElementById(element);

    // Set the timer
    var interval = setInterval(function() {
        if(seconds == 0) {
            if(minutes == 0) {
                (el.innerHTML = "00:00");
                clearInterval(interval);
                       
                       btnWrapperCreate.hidden = true;
                       btnRestStart.classList.add('btn', 'btn-outline-primary');
                       btnRestStart.innerHTML = 'Restart';
                       li.append(btnRestStart);
                return;
            } else {
                minutes--;
                seconds = 60;
            }
        }

        
        var minute_text = minutes < 10 ? "0" + minutes : minutes;
        var second_text = seconds < 10 ? "0" + seconds : seconds;
      
        el.innerHTML = minute_text + ':' + second_text;
        seconds--;
    }, 1000);
  

  btnCreateDel.addEventListener('click', (e) => {
    timerList.removeChild(li);
    clicks -= 1;
  })
  
  btnCreateStop.addEventListener('click', (e) => {
    
  let stopp = timerText.getAttribute('id');
    clearInterval(interval);
  })

  
}

btnStart.onclick = function() {

  countdown(`timer${clicks}`, getTimeMin(), getTimeSec());
  totalTime = 0;
  timer.innerHTML = `00:00`;
    clicks += 1;
}


