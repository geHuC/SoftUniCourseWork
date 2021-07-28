import {html} from "./../../../node_modules/lit-html/lit-html.js"
import { ifDefined } from "./../../node_modules/lit-html/directives/if-defined.js"

export const navigationTemplate = (viewModel) => html`
<h1><a href="/dashboard">Furniture Store</a></h1>
<nav>
    <a id="catalogLink" href="/dashboard" class="${ifDefined(viewModel['/dashboard'])}">Dashboard</a>
    ${viewModel.logged 
    ? html`
    <div id="user">
        <a id="createLink" href="/create" class="${ifDefined(viewModel['/create'])}">Create Furniture</a>
        <a id="createLink" href="/my" class="${ifDefined(viewModel['/my'])}">My Publications</a>
        <a id="logoutBtn" href="/logout">Logout</a>
    </div>`
    : html`
    <div id="guest">
        <a id="loginLink" href="/login" class="${ifDefined(viewModel['/login'])}">Login</a>
        <a id="registerLink" href="/register" class="${ifDefined(viewModel['/register'])}">Register</a>
    </div>`}
</nav>`;