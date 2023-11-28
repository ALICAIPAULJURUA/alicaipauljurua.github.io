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

    // Save data to localStorage
    var profileData = {
        username: username,
        email: email,
        contact: contact,
        education: education,
        work: work,
        skills: skills,
        hobbies: hobbies,
        languages: languages,
        profilePicture: profilePicture
    };

    localStorage.setItem('profileData', JSON.stringify(profileData));

    // Redirect to the profile page
    window.location.href = 'profile.html';
}

// Function to display captured data on the profile page
function displayProfile() {
    var profileData = JSON.parse(localStorage.getItem('profileData'));

    var profileContainer = document.getElementById('profileData');

    profileContainer.innerHTML = `
        <img src="${profileData.profilePicture}" alt="Profile Picture">
        <p><strong>Username:</strong> ${profileData.username}</p>
        <p><strong>Email:</strong> ${profileData.email}</p>
        <p><strong>Contact Information:</strong> ${profileData.contact}</p>
        <p><strong>Educational Background:</strong> ${profileData.education}</p>
        <p><strong>Work Experiences:</strong> ${profileData.work}</p>
        <p><strong>Skills:</strong> ${profileData.skills}</p>
        <p><strong>Hobbies:</strong> ${profileData.hobbies}</p>
        <p><strong>Languages Known:</strong> ${profileData.languages}</p>
    `;
}

// Function to print the profile
function printProfile() {
    var profileContainer = document.getElementById('profileData');
    var printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>User Profile</title></head><body>');
    printWindow.document.write(profileContainer.innerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}
