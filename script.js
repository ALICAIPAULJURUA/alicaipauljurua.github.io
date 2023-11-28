function createProfile() {
    // Get form values
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var education = document.getElementById('education').value;
    var work = document.getElementById('work').value;
    var skills = document.getElementById('skills').value;
    var hobbies = document.getElementById('hobbies').value;
    var languages = document.getElementById('languages').value;
    var profilePicture = document.getElementById('profilePicture').value;

    // Create a new page to display the user profile
    var profilePage = window.open('', '_blank');
    profilePage.document.write(`
        <html>
        <head>
            <title>${username}'s Profile</title>
            <link rel="stylesheet" href="styles.css">
        </head>
        <body>
            <div class="container">
                <h1>${username}'s Profile</h1>
                <img src="${profilePicture}" alt="Profile Picture">
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Contact Information:</strong> ${contact}</p>
                <p><strong>Educational Background:</strong> ${education}</p>
                <p><strong>Work Experiences:</strong> ${work}</p>
                <p><strong>Skills:</strong> ${skills}</p>
                <p><strong>Hobbies:</strong> ${hobbies}</p>
                <p><strong>Languages Known:</strong> ${languages}</p>
            </div>
        </body>
        </html>
    `);
}
// progress bar
document.addEventListener("DOMContentLoaded", function () {
    updateProgress("html-progress", 60);
    updateProgress("css-progress", 70);
    updateProgress("ps-progress", 70);
    updateProgress("ai-progress", 88);
    updateProgress("js-progress", 50);
    updateProgress("corel-progress", 30);
});

function updateProgress(progressBarId, percentage) {
    const progressBar = document.getElementById(progressBarId);
    progressBar.style.width = percentage + "%";
}
//peech to text
document.addEventListener("DOMContentLoaded", function () {
    const startBtn = document.getElementById("startBtn");
    const output = document.getElementById("output");

    let recognition = new webkitSpeechRecognition() || new SpeechRecognition();

    recognition.lang = 'en-US';

    recognition.onstart = function() {
        startBtn.textContent = 'Listening...';
    };

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        output.textContent = transcript;
    };

    recognition.onerror = function(event) {
        console.error('Speech recognition error:', event.error);
    };

    recognition.onend = function() {
        startBtn.textContent = 'Start Listening';
    };

    startBtn.addEventListener("click", function () {
        recognition.start();
    });
});