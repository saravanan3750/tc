$(document).ready(function() {
  // Function to check if the element is in the viewport
  function isInViewport(element) {
    var rect = element[0].getBoundingClientRect();
    return (rect.top >= 0 && rect.top <= $(window).height());
  }

  // Function to change the image based on the heading in the viewport
  function checkHeadingVisibility() {
    var image = $('#image');  // Image in the second column

    // Check if each heading is in the viewport and change image accordingly
    if (isInViewport($('#heading1'))) {
      image.attr('src', 'images/rc-home-care-teams-01.png');  // Change to Image 1
    } else if (isInViewport($('#heading2'))) {    
      image.attr('src', 'images/rc-home-care-teams-02.png');  // Change to Image 2
    } else if (isInViewport($('#heading3'))) {
      image.attr('src', 'images/rc-home-care-teams-03.png');  // Change to Image 3
    }
  }

  // Trigger the image change when the page is scrolled
  $(window).on('scroll', function() {
    checkHeadingVisibility();  // Check each heading on scroll
  });

  // Initial check to see if any heading is already in view when the page loads
  checkHeadingVisibility();
});
