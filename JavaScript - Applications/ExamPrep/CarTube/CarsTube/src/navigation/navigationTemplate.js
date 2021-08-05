import {html} from "./../../../node_modules/lit-html/lit-html.js"
import { ifDefined } from "./../../node_modules/lit-html/directives/if-defined.js"

export const navigationTemplate = (viewModel) => html`
<nav>
<a class=${ifDefined(viewModel['/home'])} href="/home">Home</a>
<a class=${ifDefined(viewModel['/all'])} href="/all">All Listings</a>
<a class=${ifDefined(viewModel['/by-year'])} href="/by-year">By Year</a>
${!viewModel.logged 
    ? html`
<div id="guest">
    <a class=${ifDefined(viewModel['/login'])} href="/login">Login</a>
    <a class=${ifDefined(viewModel['/register'])} href="/register">Register</a>
</div>`
: html`
<div id="profile">
    <a>Welcome ${viewModel.username}</a>
    <a class=${ifDefined(viewModel['/my-listings'])} href="/my-listings">My Listings</a>
    <a class=${ifDefined(viewModel['/create'])} href="/create">Create Listing</a>
    <a href="javascript:void(0)" @click=${viewModel.logoutHandler}>Logout</a>
</div>`}
</nav>`;