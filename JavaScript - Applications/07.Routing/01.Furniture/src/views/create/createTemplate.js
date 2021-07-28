import {html} from "./../../../node_modules/lit-html/lit-html.js"
import { ifDefined } from "./../../../node_modules/lit-html/directives/if-defined.js";

const smallError = (message) => html`<small class="error-message">${message}</small>`

export const createTemplate = ({
    title,
    onSubmit,
    btnText,
    make,
    model,
    year,
    description,
    price,
    img}, 
    makeValue,
    modelValue,
    yearValue,
    descriptionValue,
    priceValue,
    imgValue,
    materialValue) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>${title}</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form @submit=${onSubmit}>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-make">Make</label>
                <input class="form-control ${make ? make : ''}" id="new-make" type="text" name="make" .value=${ifDefined(makeValue)}>
                ${make == 'is-invalid' ? smallError('Make must be at least 4 symbols long') : ''}
            </div>
            <div class="form-group has-success">
                <label class="form-control-label" for="new-model">Model</label>
                <input class="form-control ${model ? model : ''}" id="new-model" type="text" name="model" .value=${ifDefined(modelValue)}>
                ${model == 'is-invalid' ? smallError('Model must be at least 4 symbols long') : ''}
            </div>
            <div class="form-group has-danger">
                <label class="form-control-label" for="new-year">Year</label>
                <input class="form-control ${year ? year : ''}" id="new-year" type="number" name="year" .value=${ifDefined(yearValue)}>
                ${year == 'is-invalid' ? smallError('Year must be between 1950 and 2050') : ''}
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-description">Description</label>
                <input class="form-control ${description ? description : ''}" id="new-description" type="text" name="description" .value=${ifDefined(descriptionValue)}>
                ${description == 'is-invalid' ? smallError('Description must be more than 10 symbols') : ''}
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-price">Price</label>
                <input class="form-control ${price ? price : ''}" id="new-price" type="number" name="price" .value=${ifDefined(priceValue)}>
                ${price == 'is-invalid' ? smallError('Price must be a positive number') : ''}
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-image">Image</label>
                <input class="form-control ${img ? img : ''}" id="new-image" type="text" name="img" .value=${ifDefined(imgValue)}>
                ${img == 'is-invalid' ? smallError('Image URL is required') : ''}
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-material">Material (optional)</label>
                <input class="form-control" id="new-material" type="text" name="material" .value=${ifDefined(materialValue)}>
            </div>
            <input type="submit" class="btn btn-primary" value=${btnText} />
        </div>
    </div>
</form>`;