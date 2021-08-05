export default function formValidation(form){
    //get all
    let entries = Object.fromEntries(new FormData(form));
    //assume all inputs are valid
    let obj = {
        make: 'is-valid',
        model: 'is-valid',
        year: 'is-valid',
        description: 'is-valid',
        price: 'is-valid',
        img: 'is-valid',
    }

    if(entries.make.trim().length < 4){
        obj.make = 'is-invalid';
    };
    if(entries.model.trim().length < 4){
        obj.model = 'is-invalid';
    };
    if(isNaN(entries.year) || entries.year <1950 || entries.year > 2050){
        obj.year = 'is-invalid';
    }
    if(entries.description.trim().length <= 10){
        obj.description = 'is-invalid';
    }
    if(entries.img.trim().length <1){
        obj.img = 'is-invalid';
    }
    if(entries.price.trim() ===''|| isNaN(entries.price) || entries.price < 0){
        obj.price = 'is-invalid'
    }

    return obj;
}