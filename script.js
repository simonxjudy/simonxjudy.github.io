// Function to toggle password visibility
function togglePasswordVisibility() {
  var passwordInput = document.getElementById("passwordInput");
  var eyeIcon = document.getElementById("eyeIcon");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.src = "eye-slash.svg";
  } else {
    passwordInput.type = "password";
    eyeIcon.src = "eye.svg";
  }
}

function simulateLoading() {
  // Show loading screen
  var loadingScreen = document.getElementById("loadingScreen");
  loadingScreen.classList.remove("hidden");

  // Start loading animation
  var loadingBar = document.querySelector(".progress .color");
  loadingBar.style.animationPlayState = "running";

  // Hide loading screen and show hidden content after animation completes
  setTimeout(function() {
    loadingScreen.classList.add("hidden");
    document.getElementById("hiddenContent").classList.remove("hidden");

    // Add a delay between stamping animations for each polaroid
    var polaroids = document.querySelectorAll("#hiddenContent figure");
    polaroids.forEach(function(polaroid) {
      var delay = parseInt(polaroid.getAttribute("data-delay")) || 500; // Default delay is 500ms
      setTimeout(function() {
        polaroid.classList.add("stamped");
      }, delay);
    });
    // Add a delay between stamping animations for each heart
    var hearts = document.querySelectorAll("#heartContainer .heart");
    hearts.forEach(function(heart) {
      var delay = parseInt(heart.getAttribute("data-delay")) || 500; // Default delay is 500ms
      setTimeout(function() {
        heart.classList.add("stamped");
      }, delay);
    });
    // Stamp in the "Click Me" text after a delay
    setTimeout(function() {
      var bottomContent = document.getElementById("bottomContent");
      bottomContent.classList.add("stamped");
    }, 6000); // Adjust the delay (in milliseconds) as needed

  }, 7200); // Duration of the loading animation (in milliseconds)
}


// Function to check the password
function checkPassword() {
  var passwordInput = document.getElementById("passwordInput");
  var passwordValue = passwordInput.value;
  var correctPassword = "12345"; // Set the correct password
  
  // Check if the entered password is correct
  if (passwordValue === correctPassword) {
    // Hide the landing page
    var landingPage = document.getElementById("landingPage");
    landingPage.classList.add("hidden");

    // Hide the bday text
    var bdayText = document.getElementById("bday-text");
    bdayText.classList.add("hidden");

    // Start playing the background music
    var bgMusic = document.getElementById("bgMusic");
    bgMusic.play();

    // Simulate loading before revealing hidden content
    document.querySelector('.speaker-icon').style.display = 'block';
    simulateLoading();
  } else {
    // Display an alert for incorrect password
    alert("Incorrect password! Please try again.");
  }
}


// Add event listener for Enter key press in password field
document.getElementById("passwordInput").addEventListener("keyup", function(event) {
  // Check if the Enter key was pressed (key code 13)
  if (event.keyCode === 13) {
    // Call the checkPassword function
    checkPassword();
  }
});

function showPopup(popupId) {
  var popup = document.getElementById(popupId);
  popup.classList.remove("hidden");
}

// Add event listener to close popups when clicked outside
document.addEventListener("click", function(event) {
  var popups = document.querySelectorAll(".popup");
  popups.forEach(function(popup) {
    if (!popup.contains(event.target)) {
      popup.classList.add("hidden");
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  // Delay the password field animation by a short interval
  setTimeout(function() {
    var passwordContainer = document.querySelector(".password-container");
    passwordContainer.classList.add("fade-in");
  }, 4000); // Adjust the delay time as needed
});


document.addEventListener("DOMContentLoaded", function() {
  // Fade in the centered div after a delay
  setTimeout(function() {
    var centeredDiv = document.querySelector(".centered");
    if (centeredDiv) {
      // Set initial opacity to 0
      centeredDiv.style.opacity = 0;
      // Fade in gradually
      var opacity = 0;
      var fadeInInterval = setInterval(function() {
        opacity += 0.05; // Increment opacity gradually
        centeredDiv.style.opacity = opacity;
        if (opacity >= 1) {
          clearInterval(fadeInInterval); // Stop interval when opacity reaches 1
        }
      }, 45); // Adjust interval duration as needed
    }
  }, 3150); // Adjust the delay (in milliseconds) as needed
});


// Function to toggle background music
function toggleSound() {
  var bgMusic = document.getElementById("bgMusic");
  var speakerBtn = document.getElementById("speakerBtn");

  if (bgMusic.paused) {
    bgMusic.play();
    speakerBtn.src = "volume-up-fill.svg"; // Change speaker icon to on
  } else {
    bgMusic.pause();
    speakerBtn.src = "volume-mute-fill.svg"; // Change speaker icon to off
  }
}

function expandPolaroid(polaroid, message) {
  // Toggle expanded class for the clicked polaroid
  polaroid.classList.toggle("expanded");

  // Toggle active class for the overlay
  var overlay = document.getElementById("overlay");
  overlay.classList.toggle("active");

  // Toggle active class for the text box
  var textBox = document.querySelector(".textBox");
  textBox.innerText = message; // Set the text message
  textBox.classList.toggle("active");
}

function showHeartContent(heart, message) {
  // Toggle active class for the overlay
  var overlay = document.getElementById("overlay");
  overlay.classList.toggle("active");

  // Toggle active class for the message box
  var textBox = document.querySelector(".contentBox");
  textBox.innerText = message; // Set the text message
  textBox.classList.toggle("active");

}

function showClickContent(element, message) {
  // Toggle active class for the overlay
  var overlay = document.getElementById("overlay");
  overlay.classList.toggle("active");

  // Toggle active class for the message box
  var textBox = document.querySelector(".contentBox");
  textBox.innerText = message; // Set the text message
  textBox.classList.toggle("active");

}

document.addEventListener("click", function(event) {
  var overlay = document.getElementById("overlay");
  var contentBox = document.querySelector(".contentBox");
  var heartContainer = document.getElementById("heartContainer");
  var polaroids = document.querySelectorAll(".polaroid");
  var textBoxes = document.querySelectorAll(".textBox");

  // Check if the clicked element is not the overlay, content box, heart container, or any polaroid
  if (!overlay.contains(event.target) && !contentBox.contains(event.target) && !heartContainer.contains(event.target) && !textBox.contains(event.target)) {
    // Minimize the content back to its original state
    overlay.classList.remove("active");
    contentBox.classList.remove("active");

    // Minimize any expanded polaroids
    polaroids.forEach(function(polaroid) {
      polaroid.classList.remove("expanded");
    });
    textBoxes.forEach(function(textBox) {
      textBox.classList.remove("active");
    });
  } else if (overlay.contains(event.target)) {
    // Minimize the content if clicked inside the overlay
    overlay.classList.remove("active");
    contentBox.classList.remove("active");

    // Minimize any expanded polaroids
    polaroids.forEach(function(polaroid) {
      polaroid.classList.remove("expanded");
    });
    textBoxes.forEach(function(textBox) {
      textBox.classList.remove("active");
    });
  }
});
const botContent = document.getElementById('bottomContent');
const animalImage = document.getElementById('animalImage');

botContent.addEventListener('mouseover', function() {
  animalImage.src = 'hover.png';
});

botContent.addEventListener('mouseout', function() {
  animalImage.src = 'idle.png';
});







