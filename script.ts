document.getElementById('resumeForm')!.addEventListener('submit', function (event: Event) {
    event.preventDefault();

    // Retrieve input values
    const fullName = (document.getElementById('fullName') as HTMLInputElement).value;
    const profession = (document.getElementById('profession') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const location = (document.getElementById('location') as HTMLInputElement).value;
    const workExperience = (document.getElementById('workExperience') as HTMLTextAreaElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const expertise = (document.getElementById('expertise') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',').map(skill => skill.trim()).join(', ');
    const languages = (document.getElementById('languages') as HTMLInputElement).value.split(',').map(lang => lang.trim()).join(', ');

    // Email validation
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Create resume HTML
    const resumeHTML = `
        <div class="resume-content">
            <h3 contenteditable="true" class="editable"><i class="fa-solid fa-user-tie"></i> ${fullName}</h3>
            <p><strong>Profession:</strong> <span contenteditable="true" class="editable">${profession}</span></p>
            <p><strong>Email:</strong> <span contenteditable="true" class="editable">${email}</span></p>
            <p><strong>Phone:</strong> <span contenteditable="true" class="editable">${phone}</span></p>
            <p><strong>Location:</strong> <span contenteditable="true" class="editable">${location}</span></p>
            <h4><i class="fa-solid fa-briefcase"></i> Work Experience</h4>
            <p contenteditable="true" class="editable">${workExperience}</p>
            <h4><i class="fa-solid fa-graduation-cap"></i> Education</h4>
            <p contenteditable="true" class="editable">${education}</p>
            <h4><i class="fa-solid fa-lightbulb"></i> Expertise</h4>
            <p contenteditable="true" class="editable">${expertise}</p>
            <h4><i class="fa-solid fa-tools"></i> Skills</h4>
            <p contenteditable="true" class="editable">${skills}</p>
            <h4><i class="fa-solid fa-language"></i> Languages</h4>
            <p contenteditable="true" class="editable">${languages}</p>
        </div>
    `;

    // Display resume
    document.getElementById('displayResume')!.innerHTML = resumeHTML;
    document.getElementById('printButton')!.style.display = 'block';
    document.getElementById('downloadButton')!.style.display = 'block';
});

// Print button functionality
document.getElementById('printButton')!.addEventListener('click', function () {
    window.print();
});

// Download button functionality
document.getElementById('downloadButton')!.addEventListener('click', function () {
    const resumeContent = document.getElementById('displayResume')!.innerHTML;
    const blob = new Blob([resumeContent], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'resume.html';
    link.click();
});

// Email validation function
function validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
