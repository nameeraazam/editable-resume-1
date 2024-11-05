document.getElementById('resumeForm').addEventListener('submit', function (event) {
    event.preventDefault();
    // Retrieve input values
    var fullName = document.getElementById('fullName').value;
    var profession = document.getElementById('profession').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var location = document.getElementById('location').value;
    var workExperience = document.getElementById('workExperience').value;
    var education = document.getElementById('education').value;
    var expertise = document.getElementById('expertise').value;
    var skills = document.getElementById('skills').value.split(',').map(function (skill) { return skill.trim(); }).join(', ');
    var languages = document.getElementById('languages').value.split(',').map(function (lang) { return lang.trim(); }).join(', ');
    // Email validation
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    // Create resume HTML
    var resumeHTML = "\n        <div class=\"resume-content\">\n            <h3 contenteditable=\"true\" class=\"editable\"><i class=\"fa-solid fa-user-tie\"></i> ".concat(fullName, "</h3>\n            <p><strong>Profession:</strong> <span contenteditable=\"true\" class=\"editable\">").concat(profession, "</span></p>\n            <p><strong>Email:</strong> <span contenteditable=\"true\" class=\"editable\">").concat(email, "</span></p>\n            <p><strong>Phone:</strong> <span contenteditable=\"true\" class=\"editable\">").concat(phone, "</span></p>\n            <p><strong>Location:</strong> <span contenteditable=\"true\" class=\"editable\">").concat(location, "</span></p>\n            <h4><i class=\"fa-solid fa-briefcase\"></i> Work Experience</h4>\n            <p contenteditable=\"true\" class=\"editable\">").concat(workExperience, "</p>\n            <h4><i class=\"fa-solid fa-graduation-cap\"></i> Education</h4>\n            <p contenteditable=\"true\" class=\"editable\">").concat(education, "</p>\n            <h4><i class=\"fa-solid fa-lightbulb\"></i> Expertise</h4>\n            <p contenteditable=\"true\" class=\"editable\">").concat(expertise, "</p>\n            <h4><i class=\"fa-solid fa-tools\"></i> Skills</h4>\n            <p contenteditable=\"true\" class=\"editable\">").concat(skills, "</p>\n            <h4><i class=\"fa-solid fa-language\"></i> Languages</h4>\n            <p contenteditable=\"true\" class=\"editable\">").concat(languages, "</p>\n        </div>\n    ");
    // Display resume
    document.getElementById('displayResume').innerHTML = resumeHTML;
    document.getElementById('printButton').style.display = 'block';
    document.getElementById('downloadButton').style.display = 'block';
});
// Print button functionality
document.getElementById('printButton').addEventListener('click', function () {
    window.print();
});
// Download button functionality
document.getElementById('downloadButton').addEventListener('click', function () {
    var resumeContent = document.getElementById('displayResume').innerHTML;
    var blob = new Blob([resumeContent], { type: 'text/html' });
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'resume.html';
    link.click();
});
// Email validation function
function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
