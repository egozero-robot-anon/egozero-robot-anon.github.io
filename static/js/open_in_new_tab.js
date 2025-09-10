document.addEventListener('DOMContentLoaded', function () {
        document.querySelectorAll('a').forEach(function(anchor) {
        anchor.setAttribute('target', '_blank');
    });
});