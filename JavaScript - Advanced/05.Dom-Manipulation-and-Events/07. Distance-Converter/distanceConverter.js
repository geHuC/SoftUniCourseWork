function attachEventsListeners() {
    const button = document.getElementById('convert');
    const input = document.getElementById('inputDistance');
    const result = document.getElementById('outputDistance');
    const [iUnit,oUnit] = document.querySelectorAll('select');
    button.addEventListener('click',onClick);

    function onClick(){
        const convertToMeter = {
            km: function(num){return num*1000;},
            m: function(num){return num;},
            cm: function(num){return num*0.01;},
            mm: function(num){return num*0.001;},
            mi: function(num){return num*1609.34;},
            yrd: function(num){return num*0.9144;},
            ft: function(num){return num*0.3048;},
            in: function(num){return num*0.0254;},
        }
        const convertFromMeter = {
            km: function(num){return num/1000;},
            m: function(num){return num;},
            cm: function(num){return num/0.01;},
            mm: function(num){return num/0.001;},
            mi: function(num){return num/1609.34;},
            yrd: function(num){return num/0.9144;},
            ft: function(num){return num/0.3048;},
            in: function(num){return num/0.0254;},
        }
        let distMeters = convertToMeter[iUnit.value](input.value);
        
        result.value = convertFromMeter[oUnit.value](distMeters);
    }
}