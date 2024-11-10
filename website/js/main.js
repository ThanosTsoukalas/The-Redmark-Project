const DownloadButton = document.getElementById('download-btn');


if (navigator.userAgent.indexOf("Win") != -1) {
    DownloadButton.innerHTML = "Download for Windows";

}else if (navigator.userAgent.indexOf("Mac") != -1) {
    DownloadButton.innerHTML = "Download for MacOS (Intel & ARM)";
}else if (navigator.userAgent.indexOf("Linux") != -1) {
    DownloadButton.innerHTML = "Dwonload for Ubuntu Based Linux";
} else{
    DownloadButton.innerHTML = "Unavailable for your Operating System";
    DownloadButton.style.backgroundColor = 'var(--color-navbar-gray)';
    DownloadButton.style.color = 'var(--color-text-black)';
}
