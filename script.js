function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}
// JavaScript for handling the form submission
document.getElementById("signup-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission behavior
    
    // Get the entered email
    var email = document.getElementById("email").value;
    
    // You can add your own code here to process the email (e.g., send it to a server, store it in a database, etc.)
    
    // For this example, we'll just display a thank you message
    alert("Thank you for subscribing!");
});

// JavaScript code to navigate to semester pages
function navigateToSemesteree(semesterNumber) {
    // Define the URL for the semester page (replace with your actual URLs)
    const semesterURLs = {
        1: "ee1.html",
        2: "ee2.html",
        3: "ee3.html",
        4: "ee4.html",
        5: "ee5.html",
        6: "ee6.html",
        7: "ee7.html",
        8: "ee8.html",
    };

    const url = semesterURLs[semesterNumber];

    if (url) {
        window.location.href = url; // Navigate to the selected semester page
    }
}

function navigateToSemestercs(semesterNumber) {
    // Define the URL for the semester page (replace with your actual URLs)
    const semesterURLs = {
        1: "cs1.html",
        2: "cs2.html",
        3: "cs3.html",
        4: "cs4.html",
        5: "cs5.html",
        6: "cs6.html",
        7: "cs7.html",
        8: "cs8.html",
    };

    const url = semesterURLs[semesterNumber];

    if (url) {
        window.location.href = url; // Navigate to the selected semester page
    }
}

function navigateToSemesterse(semesterNumber) {
    // Define the URL for the semester page (replace with your actual URLs)
    const semesterURLs = {
        1: "se1.html",
        2: "es2.html",
        3: "se3.html",
        4: "se4.html",
        5: "se5.html",
        6: "se6.html",
        7: "se7.html",
        8: "se8.html",
    };

    const url = semesterURLs[semesterNumber];

    if (url) {
        window.location.href = url; // Navigate to the selected semester page
    }
}
function navigateToSemesterds(semesterNumber) {
    // Define the URL for the semester page (replace with your actual URLs)
    const semesterURLs = {
        1: "ds1.html",
        2: "ds2.html",
        3: "ds3.html",
        4: "ds4.html",
        5: "ds5.html",
        6: "ds6.html",
        7: "ds7.html",
        8: "ds8.html",
    };

    const url = semesterURLs[semesterNumber];

    if (url) {
        window.location.href = url; // Navigate to the selected semester page
    }
}