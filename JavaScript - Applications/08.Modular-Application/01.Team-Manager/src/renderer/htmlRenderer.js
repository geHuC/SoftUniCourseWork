import { render } from "./../../node_modules/lit-html/lit-html.js";

export class HtmlRenderer {
    constructor(){};

    createRenderHandler(domTarget){
        return function(template){
            render(template,domTarget);
        }
    }
}