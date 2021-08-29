import {html, nothing} from "./../../../node_modules/lit-html/lit-html.js"

export const teamsTemplate = (viewModel) =>html`<section id="browse">

<article class="pad-med">
    <h1>Team Browser</h1>
</article>
${viewModel.isLogged ? createTeamsButton() : nothing}
${viewModel.teams.length > 0 ? viewModel.teams.map(x => singleTeamTemplate(x)) : nothing}
</section>
`;
const singleTeamTemplate = (team) => html`
<article class="layout">
    <img src=${team.logoUrl} class="team-logo left-col">
    <div class="tm-preview">
        <h2>${team.name}</h2>
        <p>${team.description}</p>
        <span class="details">${team.members} Members</span>
        <div><a href="/details/${team._id}" class="action">See details</a></div>
    </div>
</article>`;

const createTeamsButton = () => html`
<article class="layout narrow">
    <div class="pad-small"><a href="/create" class="action cta">Create Team</a></div>
</article>`