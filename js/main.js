const daily = document.querySelector('.daily');
const monthly = document.querySelector('.monthly');
const weekly = document.querySelector('.weekly');
const times = document.querySelectorAll('.times');

let timeline = 'daily';
let timespan;

const workhrs = document.querySelector('.workhrs');
const worktime = document.querySelector('.worktime');
const playhrs = document.querySelector('.playhrs');
const playtime = document.querySelector('.playtime');
const studyhrs = document.querySelector('.studyhrs');
const studytime = document.querySelector('.studytime');
const exercisehrs = document.querySelector('.exercisehrs');
const exercisetime = document.querySelector('.exercisetime');
const socialhrs = document.querySelector('.socialhrs');
const socialtime = document.querySelector('.socialtime');
const selfhrs = document.querySelector('.selfhrs');
const selftime = document.querySelector('.selftime');


let my_data = JSON.parse(data)


console.log(my_data);


daily.addEventListener('click',()=>{
    times.forEach(ele => {
       if(ele.classList.contains('daily')){
           ele.classList.add('active');
       } else{
           ele.classList.remove('active')
       }
    })
    timeline = "daily"
    setData();
})


weekly.addEventListener('click',()=>{
    times.forEach(ele => {
        if(ele.classList.contains('weekly')){
            ele.classList.add('active');
        } else{
            ele.classList.remove('active')
        }
     })
    timeline = "weekly"
    setData();
})

monthly.addEventListener('click',()=>{
    times.forEach(ele => {
        if(ele.classList.contains('monthly')){
            ele.classList.add('active');
        } else{
            ele.classList.remove('active')
        }
     })
    timeline = "monthly"
    setData();
})


function setData(){
    switch(timeline){
        case 'daily':
            timespan = "Day";
            break
        case 'weekly':
            timespan = "Week";
            break
        case 'monthly':
            timespan = "Month";
            break
        default:
            timespan = "";
    }
    my_data.forEach(element => {
        if(element.title == "Work"){
          workhrs.innerText = `${element.timeframes[timeline].current}hrs`;
          worktime.innerText = `Last ${timespan} - ${element.timeframes[timeline].previous}hrs`;
        }
        if(element.title == "Play"){
            playhrs.innerText = `${element.timeframes[timeline].current}hrs`;
            playtime.innerText = `Last ${timespan} - ${element.timeframes[timeline].previous}hrs`;
          }
        if(element.title == "Study"){
            studyhrs.innerText = `${element.timeframes[timeline].current}hrs`;
            studytime.innerText = `Last ${timespan} - ${element.timeframes[timeline].previous}hrs`;
          }
          if(element.title == "Exercise"){
            exercisehrs.innerText = `${element.timeframes[timeline].current}hrs`;
            exercisetime.innerText = `Last ${timespan} - ${element.timeframes[timeline].previous}hrs`;
          }
          if(element.title == "Social"){
              socialhrs.innerText = `${element.timeframes[timeline].current}hrs`;
              socialtime.innerText = `Last ${timespan} - ${element.timeframes[timeline].previous}hrs`;
            }
          if(element.title == "Self Care"){
              selfhrs.innerText = `${element.timeframes[timeline].current}hrs`;
              selftime.innerText = `Last ${timespan} - ${element.timeframes[timeline].previous}hrs`;
            }
    });
}