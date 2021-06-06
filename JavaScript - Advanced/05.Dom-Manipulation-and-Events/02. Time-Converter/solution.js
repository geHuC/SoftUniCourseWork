function attachEventsListeners() {
    const inputs = Array.from(document.getElementsByTagName('input'));
    let buttons = inputs.filter(x => x.type == 'button');
    let inOut = inputs.filter(x => x.type == 'text').reduce((obj,x) => {obj[x.id] = x; return obj},{});

    buttons.forEach(x=> x.addEventListener('click',onClick));

    function onClick(e){
        let seconds = 0;
        switch(e.target.id){
            case 'daysBtn':
                seconds = convertSeconds(Number(inOut.days.value), 'days');
            break;
            case 'hoursBtn':
                seconds = convertSeconds(Number(inOut.hours.value), 'hours');
            break;
            case 'minutesBtn':
                seconds = convertSeconds(Number(inOut.minutes.value), 'minutes');
            break;
            case 'secondsBtn':
                seconds = Number(inOut.seconds.value);
            break;
        }
        inOut.days.value = convertDays(seconds);
        inOut.hours.value = convertHours(seconds);
        inOut.minutes.value = convertMinutes(seconds);
        inOut.seconds.value = seconds;
    }
    function convertDays(seconds){
        return (seconds / 86400);
    }
    function convertHours(seconds){
        return (seconds / 3600);
    }
    function convertMinutes(seconds){
        return (seconds / 60);
    }
    function convertSeconds(data, type){
        switch(type){
            case 'days': return (data * 86400); break;
            case 'hours': return (data * 3600); break;
            case 'minutes': return (data * 60); break;
            default: return data; break;
        }
    }
}
