function disolve_up(element, time, callback) {
    setTimeout(() => {
        element.style = "opacity:0;transform:translateY(-" + element.offsetHeight + "px)";
        callback();
    }, time * 1000);
}