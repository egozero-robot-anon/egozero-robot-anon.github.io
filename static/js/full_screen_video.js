document.addEventListener('DOMContentLoaded', function () {
    const videoElement = document.getElementById('bg-video');
    const videoSpeedElement = document.getElementById('bg-video-speed');

    // When the video metadata is loaded
    videoElement.addEventListener('loadedmetadata', function () {
        // Start playing the video
        // videoElement.play();
        // Gradually fade in the video after it finishes loading
        videoElement.style.opacity = 1.0;
        videoSpeedElement.style.opacity = 1.0;
    });
});
