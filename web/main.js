let videoWrapper = document.getElementById("video_wrapper");

let w;
let h;
let bodyWidth;
let bodyHeight;

// get window size and resize the iframe
function resizeIframeWrapper() {
    w = window.innerWidth;
    h = window.innerHeight;

    videoWrapper.style["width"] = `${w}px`;
    videoWrapper.style["height"] = `${h - 200}px`;
}

// call the resize function when windows is resized and after load
window.onload = resizeIframeWrapper;
window.onresize = resizeIframeWrapper;
