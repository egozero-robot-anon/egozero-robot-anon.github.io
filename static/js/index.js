window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {
    var options = {
			slidesToScroll: 1,
			slidesToShow: 3,
			loop: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 3000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);

    // Loop on each carousel initialized
    for(var i = 0; i < carousels.length; i++) {
    	// Add listener to  event
    	carousels[i].on('before:show', state => {
    		console.log(state);
    	});
    }

    // Access to bulmaCarousel instance of an element
    var element = document.querySelector('#my-element');
    if (element && element.bulmaCarousel) {
    	// bulmaCarousel instance is available as element.bulmaCarousel
    	element.bulmaCarousel.on('before-show', function(state) {
    		console.log(state);
    	});
    }
})

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".content").forEach(section => {
    const tabs = section.querySelectorAll(".tabs li");
    const contents = section.querySelectorAll(".video-content");
    tabs.forEach(tab => {
      tab.addEventListener("click", function () {
        tabs.forEach(t => t.classList.remove("is-active"));
        tab.classList.add("is-active");
        const targetId = tab.getAttribute("data-target");
        contents.forEach(c => c.classList.remove("is-active"));
        const target = section.querySelector(`#${targetId}`);
        if (target) target.classList.add("is-active");
      });
    });
  });
});
