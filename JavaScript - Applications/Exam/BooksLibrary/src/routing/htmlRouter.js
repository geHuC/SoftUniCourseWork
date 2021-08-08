import htmlRoutingTable from "./htmlRoutingTable.js";

function init(page){
    htmlRoutingTable.attachTable(page);
    page.start();
}

export default {
    init
}