$(document).ready(function () {
    // Toggle Sidebar Visibility
    $("#toggleSidebar").click(function () {
      $("#sidebar").toggle();
    });
  
    // Toggle Features Section Visibility
    $("#toggleFeatures").click(function () {
      $("#features").toggle();
    });
  
    // Show All Elements
    $("#showAll").click(function () {
      $("#sidebar, #features").show();
    });

    function getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  
    // Change footer background color every 1 second
    setInterval(function () {
      const newColor = getRandomColor();
      $(".footer").css("background-color", newColor);
    }, 5000);
    
  });
  