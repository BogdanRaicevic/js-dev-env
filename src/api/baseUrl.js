export default function getBaseUrl() {
    return getQueryStringParaameterByName('useMockApi') ? 'http://localhost:3001/' : 'https://powerful-springs-97640.herokuapp.com/';
}

function getQueryStringParaameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}