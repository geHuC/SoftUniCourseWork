import changeView from "./changeView.js";
import errorStyling from "./errorStyling.js";
import fetcher from "./fetcher.js";
import validator from "./validator.js";

function addMovie(e){
    e.preventDefault();
    errorStyling.clear(e);
    console.log('called addMOvie');
    //take inputs the old way to help with error styling
    const title = e.target.querySelector('input[name="title"');
    const description = e.target.querySelector('textarea[name="description"');
    const img = e.target.querySelector('input[name="imageUrl"');
     //validate inputs 
     //probalby should be it's own function
     let inputIsValid = true;
     if(!validator.inputTextNodeValue(title)) inputIsValid = false; 
     if(!validator.textAreaNodeValue(description)) inputIsValid = false; 
     if(!validator.urlNodeValue(img)) inputIsValid = false; 
     if(!inputIsValid) return; // stop if input isn't valid 

     let movieObject = {
         title : title.value,
         description : description.value,
         img : img.value
     }
     //delegate whether we add or update a movie 
     if(e.target.classList.contains('edit-movie-form')){
         fetcher.updateMovie(movieObject,e.target.dataset.movieId);
     }
     if(e.target.classList.contains('add-movie-form')){
         fetcher.postMovie(movieObject);
     }
     e.target.reset();
     changeView('home');
}

export default addMovie;