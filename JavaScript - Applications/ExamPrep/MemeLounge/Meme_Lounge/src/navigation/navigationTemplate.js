import {html} from "./../../../node_modules/lit-html/lit-html.js"
import { ifDefined } from "./../../node_modules/lit-html/directives/if-defined.js"

export const navigationTemplate = (viewModel) => html`
<a href="/all" class="${ifDefined(viewModel['/all'])}">All Memes</a> 
${viewModel.logged 
? html`
<div class="user">
   <a href="/create" class="${ifDefined(viewModel['/create'])}">Create Meme</a>
   <div class="profile">
       <span>Welcome, ${viewModel.email}</span>
       <a href="/my-profile" class="${ifDefined(viewModel['/my-profile'])}">My Profile</a>
       <a href="javascript:void(0)" @click=${viewModel.logoutHandler}>Logout</a>
   </div>
</div>`
: html`
<!-- Guest users -->
<div class="guest">
   <div class="profile">
       <a href="/login" class="${ifDefined(viewModel['/login'])}">Login</a>
       <a href="/register" class="${ifDefined(viewModel['/register'])}">Register</a>
   </div>
   <a href="/home" class="${ifDefined(viewModel['/home'])}">Home Page</a>
</div>`}`;