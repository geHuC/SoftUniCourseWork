import {html} from "./../../../node_modules/lit-html/lit-html.js"
import { ifDefined } from "./../../node_modules/lit-html/directives/if-defined.js"

export const navigationTemplate = ({logged, logoutHandler}) => html`
<a href="/home" class="site-logo">Team Manager</a>
<nav>
    <a href="/teams" class="action">Browse Teams</a>
    ${logged ? loggedView(logoutHandler) : guestView()}
</nav>`;

const loggedView = (logoutHandler) => html`
    <a href="/my-teams" class="action">My Teams</a>
    <a @click=${logoutHandler} href="javascript:void(0)" class="action">Logout</a>`;

const guestView = () => html`
    <a href="/login" class="action">Login</a>
    <a href="/register" class="action">Register</a>`;