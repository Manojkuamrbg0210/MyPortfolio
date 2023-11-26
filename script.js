$(document).ready(function () {
    // Get the text elements
    const textElements = $('.animation-text');
    
    // Function to display text with animation
    function displayTextWithAnimation(textElement, text, index) {
        if (index < text.length) {
            textElement.append(text.charAt(index));
            setTimeout(() => {
                displayTextWithAnimation(textElement, text, index + 1);
            }, 100); // You can adjust the time delay (in milliseconds) between letters
        }
    }

    // Start the animation for each text element
    textElements.each(function (index) {
        const text = $(this).text();
        $(this).empty(); // Clear the text content
        setTimeout(() => {
            displayTextWithAnimation($(this), text, 0);
        }, index * 2000); // Delay each animation by 2000 milliseconds (2 seconds)
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const aboutmeHeader = document.getElementById('aboutme-dropdown');
    const aboutmeSection = document.querySelector('.aboutme-container');
    // const aboutmeSection = document.querySelector('.aboutme-container');

    // console.log(aboutmeHeader)
    // console.log(aboutmeSection)

    aboutmeHeader.addEventListener('click', function () {
        if (aboutmeSection.style.display === 'none' || aboutmeSection.style.display === '') {
            aboutmeSection.style.display = 'block';
        } else {
            aboutmeSection.style.display = 'none';
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const aboutMeLink = document.getElementById("aboutme");
    const aboutmeSection = document.querySelector('.aboutme-container');
    // const aboutmeSection = document.querySelector('.aboutme-container');
    const aboutmeSectionhighlight = document.getElementById("aboutme-section");
    const aboutmeSectionscroll = document.getElementById("aboutme-section");


    console.log(aboutmeSectionhighlight)
    // console.log(aboutmeSection)
    

    aboutMeLink.addEventListener('click', function () {
        console.log(aboutMeLink)
        console.log(aboutmeSection)
        if (aboutmeSection.style.display === 'none' || aboutmeSection.style.display === '') {
            aboutmeSection.style.display = 'block';
        } else {
            aboutmeSection.style.display = 'none';
        }

        aboutmeSectionhighlight.classList.add("highlight");
        console.log(aboutmeSectionhighlight)

        // Remove the highlight class after 2 seconds
        setTimeout(function () {
            aboutmeSectionhighlight.classList.remove("highlight");
        }, 2000);
        aboutmeSectionscroll.scrollIntoView({ behavior: "smooth" });

    });
});


document.addEventListener("DOMContentLoaded", function () {
    const experienceLink = document.getElementById("experience");
    const experienceSection = document.getElementById("experience-section");
    const educationSection = document.querySelector('.experience-content');
    

    experienceLink.addEventListener("click", function (e) {

        if (educationSection.style.display === 'none' || educationSection.style.display === '') {
            educationSection.style.display = 'block';
        } else {
            educationSection.style.display = 'none';
        }
        // e.preventDefault();
         // Add a CSS class to highlight the section
         experienceSection.classList.add("highlight");

         // Remove the highlight class after 2 seconds
         setTimeout(function () {
             experienceSection.classList.remove("highlight");
         }, 2000);
        experienceSection.scrollIntoView({ behavior: "smooth" });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const experienceLink = document.getElementById("skills");
    const experienceSection = document.getElementById("skill-section");
    const educationSection = document.querySelector('.skills-container');


    experienceLink.addEventListener("click", function (e) {
        e.preventDefault();
         // Add a CSS class to highlight the section

         if (educationSection.style.display === 'none' || educationSection.style.display === '') {
            educationSection.style.display = "grid"
        } else {
            educationSection.style.display = 'none';
        }
         experienceSection.classList.add("highlight");

         // Remove the highlight class after 2 seconds
         setTimeout(function () {
             experienceSection.classList.remove("highlight");
         }, 2000);
        experienceSection.scrollIntoView({ behavior: "smooth" });
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const seeMoreLinks = document.querySelectorAll(".description p:last-child");

    seeMoreLinks.forEach(function (seeMoreLink) {
        seeMoreLink.addEventListener("click", function () {
            const description = seeMoreLink.parentElement;
            description.classList.toggle("expanded");
            if (description.classList.contains("expanded")) {
                seeMoreLink.textContent = "See Less";
            } else {
                seeMoreLink.textContent = "See More...";
            }
        });
    });
});


// fuction to work  experience dropdownog sections
    document.addEventListener('DOMContentLoaded', function () {
        const educationHeader = document.getElementById('experience-dropdown');
        const educationSection = document.querySelector('.experience-content');

        educationHeader.addEventListener('click', function () {
            if (educationSection.style.display === 'none' || educationSection.style.display === '') {
                educationSection.style.display = 'block';
            } else {
                educationSection.style.display = 'none';
            }
        });
    });


// fuction to work dropdownog sections for skill section
document.addEventListener('DOMContentLoaded', function () {
    // const educationHeader = document.querySelector('.rightdivbox-header-skill');
    const educationHeader = document.getElementById('skill-dropdown');
    const educationSection = document.querySelector('.skills-container');
 

    // console.log(educationHeader)
    // console.log(educationSection)

    educationHeader.addEventListener('click', function () {
        if (educationSection.style.display === 'none' || educationSection.style.display === '') {
            // console.log(educationSection.style.display)
            educationSection.style.display = "grid"
            // console.log(educationSection)
        } else {
            educationSection.style.display = 'none';
        }
    });
});


// fuction to work dropdownog sections for education section
document.addEventListener('DOMContentLoaded', function () {
    // const educationHeader = document.querySelector('.rightdivbox-header-skill');
    const educationHeader = document.getElementById('education-dropdown');
    const educationSection = document.querySelector('.education-container');
 

    // console.log(educationHeader)
    // console.log(educationSection)

    educationHeader.addEventListener('click', function () {
        if (educationSection.style.display === 'none' || educationSection.style.display === '') {
            // console.log(educationSection.style.display)
            educationSection.style.display = "flex"
            // console.log(educationSection)
        } else {
            educationSection.style.display = 'none';
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const educationLink = document.getElementById("education");
    const educationSection = document.querySelector('.education-container');
    const educationid = document.getElementById('education-section');


    educationLink.addEventListener("click", function (e) {
        e.preventDefault();
         // Add a CSS class to highlight the section

         if (educationSection.style.display === 'none' || educationSection.style.display === '') {
            educationSection.style.display = "grid"
        } else {
            educationSection.style.display = 'none';
        }
        educationid.classList.add("highlight");

         // Remove the highlight class after 2 seconds
         setTimeout(function () {
            educationid.classList.remove("highlight");
         }, 2000);
         educationSection.scrollIntoView({ behavior: "smooth" });
    });
});

// fuction to work dropdownog sections
document.addEventListener('DOMContentLoaded', function () {
    const projectHeader = document.getElementById("projects-dropdown");
    const projectSection = document.querySelector('.project-container');

    // console.log(projectHeader)
    // console.log(projectSection)

    projectHeader.addEventListener('click', function () {
        if (projectSection.style.display === 'none' || projectSection.style.display === '') {
            projectSection.style.display = 'block';
        } else {
            projectSection.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const projectHeader = document.getElementById("projects");
    const projectSection = document.querySelector('.project-container');
    const projectsid = document.getElementById('projects-section');


    projectHeader.addEventListener("click", function (e) {
        e.preventDefault();
         // Add a CSS class to highlight the section

         if (projectSection.style.display === 'none' || projectSection.style.display === '') {
            projectSection.style.display = "grid"
        } else {
            projectSection.style.display = 'none';
        }
        projectsid.classList.add("highlight");

         // Remove the highlight class after 2 seconds
         setTimeout(function () {
            projectsid.classList.remove("highlight");
         }, 2000);
         projectSection.scrollIntoView({ behavior: "smooth" });
    });
});


// fuction to work dropdownog sections
document.addEventListener('DOMContentLoaded', function () {
    const projectHeader = document.getElementById("contactme-dropdown");
    const projectSection = document.querySelector('.contactme-container');

    projectHeader.addEventListener('click', function () {
        if (projectSection.style.display === 'none' || projectSection.style.display === '') {
            projectSection.style.display = 'block';
        } else {
            projectSection.style.display = 'none';
        }
    });
});




document.addEventListener('DOMContentLoaded', function () {
    const contactmeHeader = document.getElementById("contactme");
    const contactmeSection = document.querySelector('.contactme-container');
    const contactmeid = document.getElementById("contact-section");

    console.log(contactmeid)


    contactmeHeader.addEventListener("click", function (e) {
        e.preventDefault();
         // Add a CSS class to highlight the section

         if (contactmeSection.style.display === 'none' || contactmeSection.style.display === '') {
            contactmeSection.style.display = "block"
        } else {
            contactmeSection.style.display = 'none';
        }
        contactmeid.classList.add("highlight");
        console.log(contactmeid)
         // Remove the highlight class after 2 seconds
         setTimeout(function () {
            contactmeid.classList.remove("highlight");
         }, 2000);
         contactmeSection.scrollIntoView({ behavior: "smooth" });
    });
});



const scriptURL = 'https://script.google.com/macros/s/AKfycbxUR_uFiemLWg-56bODlbWDVoX8QFweRwynQi-L9PHLsPCw7YsAfYOuTc1-lMpsDU8FDQ/exec';
const form = document.forms['portfolio/contactme']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})
  
