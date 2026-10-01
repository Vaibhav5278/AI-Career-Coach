//// INDEX
//document.addEventListener("DOMContentLoaded", function() {
//  const faqItems = document.querySelectorAll(".faq-item");
//
//  faqItems.forEach(item => {
//    item.querySelector(".faq-question").addEventListener("click", () => {
//      item.classList.toggle("active");
//    });
//  });
//});
//
//// LOGIN
//document.addEventListener('DOMContentLoaded', () => {
//  const form = document.querySelector('.signin-card form');
//  const username = document.querySelector('#username');
//  const password = document.querySelector('#password');
//
//  // Optional: Add a password toggle icon/button if you create one
//  // const toggleBtn = document.querySelector('#togglePassword');
//
//  form.addEventListener('submit', (e) => {
//    // Simple client-side validation
//    if (username.value.trim() === '' || password.value.trim() === '') {
//      e.preventDefault();
//      alert('Please fill in both username and password.');
//      return;
//    }
//
//    // Show a quick visual feedback (you can style this with CSS)
//    form.classList.add('submitting');
//  });
//
//  // Example for a password toggle if you add a small icon/button
//  /*
//  toggleBtn.addEventListener('click', () => {
//    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
//    password.setAttribute('type', type);
//    toggleBtn.classList.toggle('visible');
//  });
//  */
//});
//
////REGISTER
//
//const form = document.getElementById("registerForm");
//
//form.addEventListener("submit", function(e) {
//    const password = document.getElementById("password").value;
//    const confirmPassword = document.getElementById("confirm_password").value;
//
//    if(password !== confirmPassword) {
//        e.preventDefault();
//        alert("Passwords do not match!");
//    }
//});
//
//
//// Dashboard
//
//// ===== Theme Toggle =====
//document.addEventListener('DOMContentLoaded', () => {
//  const toggleBtn = document.getElementById('toggleTheme');
//  toggleBtn.addEventListener('click', () => {
//    document.body.classList.toggle('light');
//    // optional: remember user preference
//    const isLight = document.body.classList.contains('light');
//    localStorage.setItem('theme', isLight ? 'light' : 'dark');
//  });
//
//  // load saved theme
//  if (localStorage.getItem('theme') === 'light') {
//    document.body.classList.add('light');
//  }
//});
//
//// entry resume
//
//// Function to add entries dynamically
//function addEntry(type) {
//  let entryList = document.getElementById(type + "-list");
//  let entry = document.createElement("li");
//
//  if (type === "work") {
//    let title = document.getElementById("work-title").value;
//    let company = document.getElementById("work-company").value;
//    let start = document.getElementById("work-start").value;
//    let end = document.getElementById("work-end").value;
//    let desc = document.getElementById("work-desc").value;
//
//    entry.innerHTML = `<strong>${title}</strong> at ${company} (${start} - ${end})<br>${desc}`;
//  }
//
//  if (type === "edu") {
//    let degree = document.getElementById("edu-title").value;
//    let school = document.getElementById("edu-school").value;
//    let start = document.getElementById("edu-start").value;
//    let end = document.getElementById("edu-end").value;
//    let desc = document.getElementById("edu-desc").value;
//
//    entry.innerHTML = `<strong>${degree}</strong>, ${school} (${start} - ${end})<br>${desc}`;
//  }
//
//  if (type === "proj") {
//    let title = document.getElementById("proj-title").value;
//    let tech = document.getElementById("proj-tech").value;
//    let desc = document.getElementById("proj-desc").value;
//
//    entry.innerHTML = `<strong>${title}</strong> [${tech}]<br>${desc}`;
//  }
//
//  if (type === "cert") {
//    let name = document.getElementById("cert-name").value;
//    let org = document.getElementById("cert-org").value;
//    let date = document.getElementById("cert-date").value;
//    let desc = document.getElementById("cert-desc").value;
//
//    entry.innerHTML = `<strong>${name}</strong> - ${org} (${date})<br>${desc}`;
//  }
//
//  // Append new entry
//  if (entry.innerHTML.trim() !== "") {
//    entryList.appendChild(entry);
//  }
//
//  // Reset form fields after adding
//  resetForm(type);
//}
//
//// Reset form fields
//function resetForm(type) {
//  let form = document.getElementById(type + "-form");
//  if (form) form.reset();
//}
//
//// Save button logic
//document.querySelector(".save-btn").addEventListener("click", function () {
//  alert("Your resume has been saved!");
//});
//
//// Download button logic
//document.querySelector(".download-btn").addEventListener("click", function () {
//  alert("Download PDF functionality will be implemented later!");
//});
//
////resume
//
// // Theme Toggle
//const toggleThemeBtn = document.getElementById("toggleTheme");
//
//if (toggleThemeBtn) {
//  toggleThemeBtn.addEventListener("click", () => {
//    document.body.classList.toggle("dark");
//
//    if (document.body.classList.contains("dark")) {
//      toggleThemeBtn.textContent = "☀️ Light Mode";
//    } else {
//      toggleThemeBtn.textContent = "🌙 Dark Mode";
//    }
//  });
//}
//
//
//// resume_preview
//
//document.addEventListener("DOMContentLoaded", () => {
//  const backBtn = document.querySelector(".back-btn");
//  const editBtn = document.querySelector(".edit-btn");
//  const downloadBtn = document.getElementById("downloadBtn");
//
//  // Confirm before going back
//  backBtn.addEventListener("click", (e) => {
//    if (!confirm("Are you sure you want to go back? Unsaved changes may be lost.")) {
//      e.preventDefault();
//    }
//  });
//
//  // Confirm before editing
//  editBtn.addEventListener("click", (e) => {
//    if (!confirm("Do you want to edit your resume details?")) {
//      e.preventDefault();
//    }
//  });
//
//  // Download Resume PDF
//  downloadBtn.addEventListener("click", async () => {
//    try {
//      const response = await fetch("/download-resume-pdf/", {
//        method: "GET",
//      });
//
//      if (!response.ok) {
//        throw new Error("Failed to generate PDF.");
//      }
//
//      const blob = await response.blob();
//      const url = window.URL.createObjectURL(blob);
//
//      const link = document.createElement("a");
//      link.href = url;
//      link.download = "My_Resume.pdf";
//      document.body.appendChild(link);
//      link.click();
//
//      link.remove();
//      window.URL.revokeObjectURL(url);
//
//    } catch (error) {
//      alert("❌ Error: " + error.message);
//    }
//  });
//});
//
//// CV TEMPLATES
//document.getElementById('previewBtn').addEventListener('click', function() {
//    const form = document.getElementById('coverForm');
//
//    // Collect all form values
//    const data = {
//        title: form.title.value,
//        name: form.name.value,
//        address: form.address.value,
//        email: form.email.value,
//        phone: form.phone.value,
//        linkedin: form.linkedin.value,
//        date: form.date.value,
//        company: form.company.value,
//        company_address: form.company_address.value,
//        position: form.position.value,
//        hiring_manager: form.hiring_manager.value,
//        intro: form.intro.value,
//        body: form.body.value,
//        closing: form.closing.value,
//        signature: form.signature.value,
//        template: form.template.value
//    };
//
//    // Save data in localStorage
//    localStorage.setItem('coverLetterData', JSON.stringify(data));
//
//    // Open the corresponding template page
//    let templatePage = '';
//    switch(data.template){
//        case 'template1': templatePage = 'template1.html'; break;
//        case 'template2': templatePage = 'template2.html'; break;
//        case 'template3': templatePage = 'template3.html'; break;
//        case 'template4': templatePage = 'template4.html'; break;
//        default: templatePage = 'template1.html';
//    }
//    window.open(templatePage, '_blank'); // opens in new tab
//});
//
//// static/js/main.js cover letter
//
//document.addEventListener('DOMContentLoaded', function () {
//    const previewBtn = document.getElementById('previewBtn');
//    const form = document.getElementById('coverForm');
//
//    if (previewBtn && form) {
//        previewBtn.addEventListener('click', function () {
//            const formData = new FormData(form);
//
//            fetch('/cover-letter/', {
//                method: 'POST',
//                body: formData,
//                headers: {
//                    'X-Requested-With': 'XMLHttpRequest'
//                }
//            })
//            .then(response => {
//                if (!response.ok) throw new Error('Network response was not ok');
//                return response.text();
//            })
//            .then(html => {
//                // Open preview in a new browser tab
//                const previewWindow = window.open('', '_blank');
//                previewWindow.document.write(html);
//                previewWindow.document.close();
//            })
//            .catch(error => {
//                console.error('Error generating preview:', error);
//                alert('Preview failed. Check console for errors.');
//            });
//        });
//    }
//});
////
////// Api generation
//
//document.addEventListener("DOMContentLoaded", () => {
//
//  async function generateContent(fieldId, promptText) {
//    const field = document.getElementById(fieldId);
//    const button = document.getElementById(`generate-${fieldId}`);
//
//    if (!field || !button) return;
//
//    const keyword = field.value.trim();
//    if (!keyword) {
//      alert("Please enter a keyword or some text first!");
//      return;
//    }
//
//    button.textContent = "⏳ Generating...";
//    button.disabled = true;
//
//    try {
//      const response = await fetch("/generate_summary/", {
//        method: "POST",
//        headers: { "Content-Type": "application/json" },
//        body: JSON.stringify({ keyword }),
//      });
//
//      const data = await response.json();
//
//      if (data.description) {
//        field.value = data.description;
//      } else {
//        alert(data.error || "Failed to generate content. Try again.");
//      }
//    } catch (err) {
//      console.error(err);
//      alert("Error connecting to AI. Check console for details.");
//    } finally {
//      button.textContent = "✨ Generate";
//      button.disabled = false;
//    }
//  }
//// Map buttons to textareas
//  const fields = ["summary", "edu_desc", "skills", "extra"];
//  fields.forEach(fieldId => {
//    const btn = document.getElementById(`generate-${fieldId}`);
//    if (btn) {
//      btn.addEventListener("click", () => generateContent(fieldId));
//    }
//  });
//
//});
// INDEX
document.addEventListener("DOMContentLoaded", function() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    item.querySelector(".faq-question").addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });
});

// LOGIN
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.signin-card form');
  const username = document.querySelector('#username');
  const password = document.querySelector('#password');

  // Optional: Add a password toggle icon/button if you create one
  // const toggleBtn = document.querySelector('#togglePassword');

  form.addEventListener('submit', (e) => {
    // Simple client-side validation
    if (username.value.trim() === '' || password.value.trim() === '') {
      e.preventDefault();
      alert('Please fill in both username and password.');
      return;
    }

    // Show a quick visual feedback (you can style this with CSS)
    form.classList.add('submitting');
  });

  // Example for a password toggle if you add a small icon/button
  /*
  toggleBtn.addEventListener('click', () => {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    toggleBtn.classList.toggle('visible');
  });
  */
});

//REGISTER

const form = document.getElementById("registerForm");

form.addEventListener("submit", function(e) {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm_password").value;

    if(password !== confirmPassword) {
        e.preventDefault();
        alert("Passwords do not match!");
    }
});


// Dashboard

// ===== Theme Toggle =====
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('toggleTheme');
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    // optional: remember user preference
    const isLight = document.body.classList.contains('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });

  // load saved theme
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light');
  }
});

// entry resume

// Function to add entries dynamically
function addEntry(type) {
  let entryList = document.getElementById(type + "-list");
  let entry = document.createElement("li");

  if (type === "work") {
    let title = document.getElementById("work-title").value;
    let company = document.getElementById("work-company").value;
    let start = document.getElementById("work-start").value;
    let end = document.getElementById("work-end").value;
    let desc = document.getElementById("work-desc").value;

    entry.innerHTML = `<strong>${title}</strong> at ${company} (${start} - ${end})<br>${desc}`;
  }

  if (type === "edu") {
    let degree = document.getElementById("edu-title").value;
    let school = document.getElementById("edu-school").value;
    let start = document.getElementById("edu-start").value;
    let end = document.getElementById("edu-end").value;
    let desc = document.getElementById("edu-desc").value;

    entry.innerHTML = `<strong>${degree}</strong>, ${school} (${start} - ${end})<br>${desc}`;
  }

  if (type === "proj") {
    let title = document.getElementById("proj-title").value;
    let tech = document.getElementById("proj-tech").value;
    let desc = document.getElementById("proj-desc").value;

    entry.innerHTML = `<strong>${title}</strong> [${tech}]<br>${desc}`;
  }

  if (type === "cert") {
    let name = document.getElementById("cert-name").value;
    let org = document.getElementById("cert-org").value;
    let date = document.getElementById("cert-date").value;
    let desc = document.getElementById("cert-desc").value;

    entry.innerHTML = `<strong>${name}</strong> - ${org} (${date})<br>${desc}`;
  }

  // Append new entry
  if (entry.innerHTML.trim() !== "") {
    entryList.appendChild(entry);
  }

  // Reset form fields after adding
  resetForm(type);
}

// Reset form fields
function resetForm(type) {
  let form = document.getElementById(type + "-form");
  if (form) form.reset();
}

// Save button logic
document.querySelector(".save-btn").addEventListener("click", function () {
  alert("Your resume has been saved!");
});

// Download button logic
document.querySelector(".download-btn").addEventListener("click", function () {
  alert("Download PDF functionality will be implemented later!");
});

//resume

 // Theme Toggle
const toggleThemeBtn = document.getElementById("toggleTheme");

if (toggleThemeBtn) {
  toggleThemeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      toggleThemeBtn.textContent = "☀️ Light Mode";
    } else {
      toggleThemeBtn.textContent = "🌙 Dark Mode";
    }
  });
}


// resume_preview

document.addEventListener("DOMContentLoaded", () => {
  const backBtn = document.querySelector(".back-btn");
  const editBtn = document.querySelector(".edit-btn");
  const downloadBtn = document.getElementById("downloadBtn");

  // Confirm before going back
  backBtn.addEventListener("click", (e) => {
    if (!confirm("Are you sure you want to go back? Unsaved changes may be lost.")) {
      e.preventDefault();
    }
  });

  // Confirm before editing
  editBtn.addEventListener("click", (e) => {
    if (!confirm("Do you want to edit your resume details?")) {
      e.preventDefault();
    }
  });

  // Download Resume PDF
  downloadBtn.addEventListener("click", async () => {
    try {
      const response = await fetch("/download-resume-pdf/", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to generate PDF.");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "My_Resume.pdf";
      document.body.appendChild(link);
      link.click();

      link.remove();
      window.URL.revokeObjectURL(url);

    } catch (error) {
      alert("❌ Error: " + error.message);
    }
  });
});

// CV TEMPLATES
document.getElementById('previewBtn').addEventListener('click', function() {
    const form = document.getElementById('coverForm');

    // Collect all form values
    const data = {
        title: form.title.value,
        name: form.name.value,
        address: form.address.value,
        email: form.email.value,
        phone: form.phone.value,
        linkedin: form.linkedin.value,
        date: form.date.value,
        company: form.company.value,
        company_address: form.company_address.value,
        position: form.position.value,
        hiring_manager: form.hiring_manager.value,
        intro: form.intro.value,
        body: form.body.value,
        closing: form.closing.value,
        signature: form.signature.value,
        template: form.template.value
    };

    // Save data in localStorage
    localStorage.setItem('coverLetterData', JSON.stringify(data));

    // Open the corresponding template page
    let templatePage = '';
    switch(data.template){
        case 'template1': templatePage = 'template1.html'; break;
        case 'template2': templatePage = 'template2.html'; break;
        case 'template3': templatePage = 'template3.html'; break;
        case 'template4': templatePage = 'template4.html'; break;
        default: templatePage = 'template1.html';
    }
    window.open(templatePage, '_blank'); // opens in new tab
});

// static/js/main.js cover letter

document.addEventListener('DOMContentLoaded', function () {
    const previewBtn = document.getElementById('previewBtn');
    const form = document.getElementById('coverForm');

    if (previewBtn && form) {
        previewBtn.addEventListener('click', function () {
            const formData = new FormData(form);

            fetch('/cover-letter/', {
                method: 'POST',
                body: formData,
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            })
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.text();
            })
            .then(html => {
                // Open preview in a new browser tab
                const previewWindow = window.open('', '_blank');
                previewWindow.document.write(html);
                previewWindow.document.close();
            })
            .catch(error => {
                console.error('Error generating preview:', error);
                alert('Preview failed. Check console for errors.');
            });
        });
    }
});
//
//// Api generation

document.addEventListener("DOMContentLoaded", function () {

  // ================= LOGIN =================
  const loginForm = document.querySelector(".signin-card form");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      const username = document.getElementById("username");
      const password = document.getElementById("password");

      if (!username?.value.trim() || !password?.value.trim()) {
        e.preventDefault();
        alert("Please fill in both fields.");
      }
    });
  }

  // ================= REGISTER =================
  const registerForm = document.getElementById("registerForm");

  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      const password = document.getElementById("password");
      const confirmPassword = document.getElementById("confirm_password");

      if (password && confirmPassword && password.value !== confirmPassword.value) {
        e.preventDefault();
        alert("Passwords do not match!");
      }
    });
  }

  /* ================= GENERATE SUMMARY ================= */
const generateBtn = document.getElementById("generate-summary");

if (generateBtn) {
    generateBtn.addEventListener("click", async function () {
        const summaryBox = document.getElementById("summary");
        const currentText = summaryBox.value.trim();

        if (!currentText) {
            alert("Please type a few words in the summary box first.");
            return;
        }

        try {
            // UI Feedback
            generateBtn.textContent = "⌛ Generating...";
            generateBtn.disabled = true;

            // Log for frontend debugging
            console.log("Sending summary text:", currentText);

            const response = await fetch("/generate-summary/", {
                method: "POST",
                headers: {
                    // Using JSON is more reliable for modern APIs
                    "Content-Type": "application/json",
                    "X-CSRFToken": getCookie("csrftoken")
                },
                body: JSON.stringify({
                    "summary": currentText
                })
            });

            // Log the status to see if it's 200, 400, or 500
            console.log("Response Status:", response.status);

            const data = await response.json();

            if (response.ok) {
                // ✅ Success: Update the box
                summaryBox.value = data.summary;
            } else {
                // ❌ Show the specific error from Python
                alert("Error: " + (data.error || "Server failed"));
            }

        } catch (error) {
            console.error("Fetch Error:", error);
            alert("Network error. Check if your Django server is running.");
        } finally {
            generateBtn.textContent = "✨ Generate";
            generateBtn.disabled = false;
        }
    });
}

// Ensure your getCookie function is present below this script!

/* ================= EDUCATION AI ================= */

const generateEducationBtn = document.getElementById("generate-education");

if (generateEducationBtn) {
    generateEducationBtn.addEventListener("click", async function () {

        const eduBox = document.getElementById("edu_desc");
        const currentText = eduBox.value.trim();
console.log(currentText);
        if (!currentText) {
            alert("Please type something in education description first.");
            return;
        }

        try {

            generateEducationBtn.textContent = "⌛ Generating...";
            generateEducationBtn.disabled = true;

            const response = await fetch("/generate-education/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRFToken": getCookie("csrftoken")
                },
                body: JSON.stringify({
                    section: "education",
                    content: currentText
                })
            });

            const data = await response.json();

            if (response.ok) {
                eduBox.value = data.result;
            } else {
                alert("Error: " + (data.error || "Server Error"));
            }

        } catch (error) {
            console.error("Fetch Error:", error);
            alert("Network error.");
        } finally {
            generateEducationBtn.textContent = "✨ Generate";
            generateEducationBtn.disabled = false;
        }
    });
}


/* ================= SKILLS AI ================= */

const generateSkillsBtn = document.getElementById("generate-skills");

if (generateSkillsBtn) {
    generateSkillsBtn.addEventListener("click", async function () {

        const skillsBox = document.getElementById("skills");
        const currentText = skillsBox.value.trim();

        if (!currentText) {
            alert("Enter some skills first.");
            return;
        }

        try {

            generateSkillsBtn.textContent = "⌛ Generating...";
            generateSkillsBtn.disabled = true;

            const response = await fetch("/generate-skills/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRFToken": getCookie("csrftoken")
                },
                body: JSON.stringify({
                    section: "skills",
                    content: currentText
                })
            });

            const data = await response.json();

            if (response.ok) {
                skillsBox.value = data.result;
            } else {
                alert("Error: " + (data.error || "Server Error"));
            }

        } catch (error) {
            console.error("Fetch Error:", error);
            alert("Network error.");
        } finally {
            generateSkillsBtn.textContent = "✨ Generate";
            generateSkillsBtn.disabled = false;
        }
    });
}



/* ================= PROJECT AI ================= */

document.addEventListener("click", async function (e) {

    if (e.target && e.target.id === "generate-project") {

        const button = e.target;
        const projectBox = button
            .closest(".project-entry")
            .querySelector("textarea");

        const currentText = projectBox.value.trim();

        if (!currentText) {
            alert("Type something in project description first.");
            return;
        }

        try {

            button.textContent = "⌛ Generating...";
            button.disabled = true;

            const response = await fetch("/generate-project/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRFToken": getCookie("csrftoken")
                },
                body: JSON.stringify({
                    section: "project",
                    content: currentText
                })
            });

            const data = await response.json();

            if (response.ok) {
                projectBox.value = data.result;
            } else {
                alert("Error: " + (data.error || "Server Error"));
            }

        } catch (error) {
            console.error(error);
            alert("Network error.");
        } finally {
            button.textContent = "✨ Generate";
            button.disabled = false;
        }
    }
});


/* ================= EXPERIENCE AI ================= */

const generateWorkBtn = document.getElementById("generate-work");

if (generateWorkBtn) {
    generateWorkBtn.addEventListener("click", async function () {

        const workBox = this.closest(".work-entry")
            .querySelector("textarea");

        const currentText = workBox.value.trim();

        if (!currentText) {
            alert("Enter experience details first.");
            return;
        }

        try {

            generateWorkBtn.textContent = "⌛ Generating...";
            generateWorkBtn.disabled = true;

            const response = await fetch("/generate-work/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRFToken": getCookie("csrftoken")
                },
                body: JSON.stringify({
                    section: "experience",
                    content: currentText
                })
            });

            const data = await response.json();

            if (response.ok) {
                workBox.value = data.result;
            } else {
                alert("Error: " + (data.error || "Server Error"));
            }

        } catch (error) {
            console.error(error);
            alert("Network error.");
        } finally {
            generateWorkBtn.textContent = "✨ Generate";
            generateWorkBtn.disabled = false;
        }
    });
}