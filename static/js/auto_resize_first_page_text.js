function resizeFirstPageText() {
    const mainTitleElement = document.getElementById('first-page-main-title-text');
    const subTitleElement = document.getElementById('first-page-sub-title-text');
    const videoSpeedElement = document.getElementById('bg-video-speed-text');
    const windowWidth = window.innerWidth;
    if (windowWidth < 810) {
        mainTitleElement.classList=['is-size-4'];
        subTitleElement.classList=['is-size-5'];
        videoSpeedElement.classList=['is-size-5'];
    } else {
        mainTitleElement.classList=['is-size-1'];
        subTitleElement.classList=['is-size-3'];
        videoSpeedElement.classList=['is-size-5'];
    }
}

document.addEventListener('DOMContentLoaded', function () {
    resizeFirstPageText();
    window.addEventListener('resize', resizeFirstPageText);
});
