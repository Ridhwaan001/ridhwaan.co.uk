
function redirect(url) {
    var body = document.body;
    body.classList.add("animate__fadeOut");
    window.location.assign(url);
    }




function ext(url) {
    var body = document.body;
    body.classList.add("animate__fadeOut");
    window.location.assign(`https://ridhwaan.co.uk/external-redirect/?url=${url}`);
    }