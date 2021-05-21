function timeToWalk(steps,lenght,speed){
    const breakDistance = 500;
    let distance = steps*lenght;
    let breaks = Math.floor(distance/breakDistance);
    let speedInMS = (speed * 5) / 18;
    let timeInSeconds = Math.round((breaks*60) + (distance/speedInMS));
    let time = new Date("Jan 01, 1970 00:00:00");
    time.setSeconds(timeInSeconds);
    console.log(time.toTimeString().slice(0,8));
}

//Test Cases
timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);