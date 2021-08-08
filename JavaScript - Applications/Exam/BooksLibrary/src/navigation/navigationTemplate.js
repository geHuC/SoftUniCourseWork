import {html} from "./../../../node_modules/lit-html/lit-html.js"
import { ifDefined } from "./../../node_modules/lit-html/directives/if-defined.js"

export const navigationTemplate = (viewModel) => html`
<nav class="navbar">
<section class="navbar-dashboard">
    <a href="/dashboard">Dashboard</a>
${!viewModel.logged 
    ? html`
<div id="guest">
    <a class="button" href="/login">Login</a>
    <a class="button" href="/register">Register</a>
</div>`
: html`
<div id="user">
    <span>Welcome, ${viewModel.email}</span>
    <a class="button" href="/my-books">My Books</a>
    <a class="button" href="/create">Add Book</a>
    <a class="button" href="javascript:void(0)" @click=${viewModel.logoutHandler}>Logout</a>
</div>`}
</section>
</nav>`;