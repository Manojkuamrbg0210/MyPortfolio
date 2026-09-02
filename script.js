const APP_CONFIG = {
    dataFiles: {
        about: "data/about.json",
        experience: "data/experience.json",
        skills: "data/skills.json",
        education: "data/education.json",
        projects: "data/projects.json",
        certifications: "data/certifications.json"
    },
    images: {
        profileFront: "img/manoj-profile-img.png",
        profileBack: "img/ai_avatar_svg.png"
    }
};

const DATA_VERSION = Date.now();

function getFreshDataPath(path) {
    const separator = path.includes("?") ? "&" : "?";
    return `${path}${separator}v=${DATA_VERSION}`;
}

function displayTextWithAnimation(textElement, text, index) {
    if (index < text.length) {
        textElement.append(text.charAt(index));
        setTimeout(() => {
            displayTextWithAnimation(textElement, text, index + 1);
        }, 100);
    }
}

function runAnimatedText() {
    const textElements = $(".animation-text");

    textElements.each(function (index) {
        const text = $(this).text();
        $(this).empty();
        setTimeout(() => {
            displayTextWithAnimation($(this), text, 0);
        }, index * 2000);
    });
}

$(document).ready(function () {
    runAnimatedText();
});

function createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) {
        element.className = className;
    }
    return element;
}

function renderAbout(about) {
    const aboutContent = document.getElementById("aboutme-content");
    aboutContent.innerHTML = "";
    if (Array.isArray(about.lines)) {
        about.lines.forEach((line) => {
            const paragraph = document.createElement("p");
            paragraph.textContent = line;
            aboutContent.appendChild(paragraph);
        });
        return;
    }

    if (typeof about.text === "string") {
        const parts = about.text.split("\n").filter((part) => part.trim() !== "");
        if (parts.length > 1) {
            parts.forEach((part) => {
                const paragraph = document.createElement("p");
                paragraph.textContent = part;
                aboutContent.appendChild(paragraph);
            });
            return;
        }

        const paragraph = document.createElement("p");
        paragraph.textContent = about.text;
        aboutContent.appendChild(paragraph);
    }
}

function renderExperience(experiences) {
    const container = document.getElementById("experience-content");
    container.innerHTML = "";

    experiences.forEach((experience) => {
        const section = createElement("div", "experience-section");
        section.style.padding = "0";

        const logoWrapper = createElement("div", "company-logo");
        const logoImg = document.createElement("img");
        logoImg.src = experience.logo;
        logoImg.alt = experience.logoAlt || "Company logo";
        logoWrapper.appendChild(logoImg);

        const details = createElement("div", "experience-details");
        const role = document.createElement("h2");
        role.textContent = experience.role;

        const company = document.createElement("p");
        company.textContent = experience.company;

        const dates = document.createElement("p");
        dates.textContent = experience.dates;

        const location = document.createElement("p");
        location.textContent = experience.location;

        const description = createElement("div", "description");
        if (experience.description && experience.description.length) {
            const label = document.createElement("p");
            label.innerHTML = "<b>Description:</b>";
            description.appendChild(label);

            experience.description.forEach((item) => {
                const paragraph = document.createElement("p");
                paragraph.textContent = item;
                description.appendChild(paragraph);
            });
        }

        const seeMore = document.createElement("p");
        seeMore.textContent = "See More...";
        description.appendChild(seeMore);

        const skills = document.createElement("p");
        skills.className = "skills";
        skills.textContent = experience.skills;

        details.appendChild(role);
        details.appendChild(company);
        details.appendChild(dates);
        details.appendChild(location);
        details.appendChild(description);
        details.appendChild(skills);

        section.appendChild(logoWrapper);
        section.appendChild(details);
        container.appendChild(section);
    });
}

function renderSkills(skills) {
    const container = document.getElementById("skills-container");
    container.innerHTML = "";

    skills.forEach((skill) => {
        const skillItem = createElement("div", "skill");
        const img = document.createElement("img");
        img.src = skill.icon;
        img.alt = skill.label || "Skill";
        img.title = skill.label || "Skill";
        skillItem.appendChild(img);
        container.appendChild(skillItem);
    });
}

function renderEducation(educationItems) {
    const container = document.getElementById("education-container");
    container.innerHTML = "";

    educationItems.forEach((education) => {
        const section = createElement("div", "education-section");
        section.style.padding = "0";

        const logoWrapper = createElement("div", "company-logo");
        const logoImg = document.createElement("img");
        logoImg.src = education.logo;
        logoImg.alt = education.logoAlt || "Education logo";
        logoWrapper.appendChild(logoImg);

        const details = createElement("div", "experience-details");
        const school = document.createElement("h2");
        school.textContent = education.school;

        const degree = document.createElement("p");
        degree.textContent = education.degree;
        degree.style.marginTop = "0";
        degree.style.marginBottom = "0";

        const field = document.createElement("p");
        field.textContent = education.field;
        field.style.marginTop = "0";
        field.style.marginBottom = "0";

        const grade = document.createElement("p");
        grade.textContent = education.grade;
        grade.style.marginTop = "0";
        grade.style.marginBottom = "0";

        details.appendChild(school);
        details.appendChild(degree);
        details.appendChild(field);
        details.appendChild(grade);

        section.appendChild(logoWrapper);
        section.appendChild(details);
        container.appendChild(section);
    });
}

function renderProjects(projects) {
    const container = document.getElementById("project-container");
    container.innerHTML = "";

    projects.forEach((project) => {
        const section = createElement("div", "project-section");
        section.style.padding = "0";

        const details = createElement("div", "experience-details");
        const title = document.createElement("h2");
        title.textContent = project.title + " ";

        if (project.link) {
            const link = document.createElement("a");
            link.href = project.link;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            link.textContent = "🔗";
            title.appendChild(link);
        }

        const description = createElement("div", "description");
        const label = document.createElement("p");
        label.innerHTML = "<b>Description:</b>";
        description.appendChild(label);

        project.description.forEach((item) => {
            const paragraph = document.createElement("p");
            paragraph.textContent = item;
            description.appendChild(paragraph);
        });

        const seeMore = document.createElement("p");
        seeMore.textContent = "See More...";
        description.appendChild(seeMore);

        details.appendChild(title);
        details.appendChild(description);
        section.appendChild(details);
        container.appendChild(section);
    });
}

function renderCertifications(certifications) {
    const container = document.getElementById("certifications-container");
    container.innerHTML = "";

    certifications.forEach((cert) => {
        const section = createElement("div", "certification-section");
        section.style.padding = "0";

        const badge = createElement("div", "certification-badge");
        if (cert.badgeImage) {
            const badgeImage = document.createElement("img");
            badgeImage.src = cert.badgeImage;
            badgeImage.alt = cert.title ? `${cert.title} badge` : "Certification badge";
            badge.appendChild(badgeImage);
        } else {
            badge.textContent = cert.badgeText || "Certified";
        }

        const details = createElement("div", "certification-details");
        const title = document.createElement("h2");
        title.textContent = cert.title;

        const issuer = document.createElement("p");
        issuer.textContent = cert.issuer;

        const date = document.createElement("p");
        date.textContent = cert.date;

        details.appendChild(title);
        details.appendChild(issuer);
        details.appendChild(date);

        if (cert.link) {
            const link = document.createElement("a");
            link.href = cert.link;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            link.textContent = "View Credential";
            details.appendChild(link);
        }

        if (cert.credentialId) {
            const credentialId = document.createElement("p");
            credentialId.textContent = `Credential ID: ${cert.credentialId}`;
            details.appendChild(credentialId);
        }

        section.appendChild(badge);
        section.appendChild(details);
        container.appendChild(section);
    });
}

function fetchJson(path) {
    return fetch(getFreshDataPath(path), { cache: "no-store" }).then((response) => {
        if (!response.ok) {
            throw new Error(`Failed to load ${path}`);
        }
        return response.json();
    });
}

function attachSeeMoreHandlers() {
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
}

document.addEventListener("DOMContentLoaded", function () {
    fetchPortfolioData()
        .then(({ about, experience, skills, education, projects, certifications }) => {
            renderAbout(about);
            renderExperience(experience);
            renderSkills(skills);
            renderEducation(education);
            renderProjects(projects);
            renderCertifications(certifications);
            attachSeeMoreHandlers();
        })
        .catch((error) => console.error("Failed to load portfolio data", error));
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
    const certificationsLink = document.getElementById("certifications");
    const certificationsSection = document.getElementById("certifications-section");
    const certificationsContainer = document.querySelector('.certifications-container');

    certificationsLink.addEventListener("click", function (e) {
        e.preventDefault();

        if (certificationsContainer.style.display === 'none' || certificationsContainer.style.display === '') {
            certificationsContainer.style.display = 'block';
        } else {
            certificationsContainer.style.display = 'none';
        }

        certificationsSection.classList.add("highlight");

        setTimeout(function () {
            certificationsSection.classList.remove("highlight");
        }, 2000);

        certificationsSection.scrollIntoView({ behavior: "smooth" });
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

// function to work dropdown sections for certifications
document.addEventListener('DOMContentLoaded', function () {
    const certificationsHeader = document.getElementById('certifications-dropdown');
    const certificationsSection = document.querySelector('.certifications-container');

    certificationsHeader.addEventListener('click', function () {
        if (certificationsSection.style.display === 'none' || certificationsSection.style.display === '') {
            certificationsSection.style.display = 'block';
        } else {
            certificationsSection.style.display = 'none';
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

if (form && msg) {
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
}

// AI Chatbot Functionality - Load from Portfolio Data
let portfolioData = {
    about: null,
    skills: null,
    experience: null,
    projects: null,
    education: null,
    certifications: null
};

let chatbotContext = {
    pendingTopic: null
};

async function fetchPortfolioData() {
    const [about, experience, skills, education, projects, certifications] = await Promise.all([
        fetchJson(APP_CONFIG.dataFiles.about),
        fetchJson(APP_CONFIG.dataFiles.experience),
        fetchJson(APP_CONFIG.dataFiles.skills),
        fetchJson(APP_CONFIG.dataFiles.education),
        fetchJson(APP_CONFIG.dataFiles.projects),
        fetchJson(APP_CONFIG.dataFiles.certifications)
    ]);

    return { about, experience, skills, education, projects, certifications };
}

// Load all portfolio data
async function loadPortfolioData() {
    try {
        portfolioData = await fetchPortfolioData();
    } catch (error) {
        console.log('Error loading portfolio data:', error);
    }
}

function initChatbot() {
    const optionBtns = document.querySelectorAll('.agent-option-btn');
    const agentResponse = document.getElementById('agentResponse');

    if (!optionBtns.length) {
        console.error('No agent option buttons found');
        return;
    }

    if (!agentResponse) {
        console.error('Agent response element not found');
        return;
    }

    const topicToToggle = {
        about: 'about-toggle',
        skills: 'skills-toggle',
        experience: 'experience-toggle',
        projects: 'project-toggle',
        education: 'education-toggle',
        certifications: 'certifications-toggle'
    };

    const topicToContainer = {
        about: { selector: '.aboutme-container', display: 'block', sectionId: 'aboutme-section' },
        skills: { selector: '.skills-container', display: 'grid', sectionId: 'skill-section' },
        experience: { selector: '.experience-content', display: 'block', sectionId: 'experience-section' },
        projects: { selector: '.project-container', display: 'block', sectionId: 'projects-section' },
        education: { selector: '.education-container', display: 'block', sectionId: 'education-section' },
        certifications: { selector: '.certifications-container', display: 'block', sectionId: 'certifications-section' }
    };

    const closeAllTopicSections = () => {
        Object.values(topicToContainer).forEach((config) => {
            const sectionContainer = document.querySelector(config.selector);
            if (sectionContainer) {
                sectionContainer.style.display = 'none';
            }
        });

        Object.values(topicToToggle).forEach((toggleId) => {
            const toggle = document.getElementById(toggleId);
            if (toggle) {
                toggle.checked = false;
            }
        });
    };

    const setActiveTopicButton = (topic) => {
        optionBtns.forEach((button) => {
            const buttonTopic = button.getAttribute('data-topic');
            if (buttonTopic === topic) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    };

    // Handle option button clicks
    optionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const topic = btn.getAttribute('data-topic');
            console.log('Topic clicked:', topic);
            handleOptionClick(topic);
        });
    });

    function handleOptionClick(topic) {
        if (!topic) return;

        // Add visual feedback
        const btn = document.querySelector(`[data-topic="${topic}"]`);
        if (btn) {
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => btn.style.transform = 'scale(1)', 100);
        }

        // Get bot response based on selected topic
        const botResponse = getBotResponse(topic);
        console.log('Bot response:', botResponse);
        
        // Update agent response with scrollable text
        agentResponse.innerHTML = `<p>${escapeHtml(botResponse)}</p>`;
        agentResponse.scrollTop = 0;

        const toggleId = topicToToggle[topic];
        const containerConfig = topicToContainer[topic];
        if (containerConfig) {
            const container = document.querySelector(containerConfig.selector);
            const isOpen = container && container.style.display === containerConfig.display;

            closeAllTopicSections();

            if (isOpen) {
                setActiveTopicButton(null);
                return;
            }

            setActiveTopicButton(topic);

            if (toggleId) {
                const toggle = document.getElementById(toggleId);
                if (toggle) {
                    toggle.checked = true;
                }
            }

            if (container) {
                container.style.display = containerConfig.display;
            }

            const section = document.getElementById(containerConfig.sectionId);
            if (section) {
                section.classList.add('highlight');
                setTimeout(() => section.classList.remove('highlight'), 1200);
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }
}

function getBotResponse(topic) {
    const summarizeTopic = (topic) => {
        switch (topic) {
            case 'about':
                return portfolioData.about?.text || "I'm a Data Engineer and Data Enthusiast focused on solving complex data challenges using modern tools and cloud platforms.";
            case 'skills': {
                if (portfolioData.skills?.length) {
                    const skillList = portfolioData.skills.map(s => s.label).join(', ');
                    return `Key skills: ${skillList}.`;
                }
                return "Key skills include Data Engineering, SQL, Python, PySpark, GCP, AWS, and ETL.";
            }
            case 'experience': {
                if (portfolioData.experience?.length) {
                    const current = portfolioData.experience[0];
                    const highlight = current.description ? current.description[0] : '';
                    return `Currently ${current.role} at ${current.company} (${current.dates}). ${highlight}`.trim();
                }
                return "Currently an Associate Analyst at Tyson Foods India, focusing on data management and validation.";
            }
            case 'projects': {
                if (portfolioData.projects?.length) {
                    const projects = portfolioData.projects.map(p => p.title).join(', ');
                    return `Projects include: ${projects}.`;
                }
                return "Projects include data validation tools, BI dashboards, and machine learning applications.";
            }
            case 'education': {
                if (portfolioData.education?.length) {
                    const edu = portfolioData.education[0];
                    return `${edu.degree} in ${edu.field} from ${edu.school}.`;
                }
                return "Computer Science and Engineering with a specialization in Data Engineering.";
            }
            case 'certifications': {
                if (portfolioData.certifications?.length) {
                    const certList = portfolioData.certifications
                        .map(c => `${c.title} — ${c.issuer}${c.date ? ` (${c.date})` : ''}`)
                        .join('; ');
                    return `Certifications: ${certList}.`;
                }
                return "Certified Google Cloud Professional Data Engineer.";
            }
            default:
                return "I can summarize skills, experience, projects, education, or background.";
        }
    };

    return summarizeTopic(topic);
}

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// Load portfolio data and initialize chatbot when page loads
document.addEventListener('DOMContentLoaded', async () => {
    await loadPortfolioData();
    initChatbot();
    initProfileAvatarRotation();
});

function initProfileAvatarRotation() {
    const profileCard = document.querySelector('.profile-card');
    if (!profileCard) return;

    profileCard.style.backgroundImage = `url('${APP_CONFIG.images.profileFront}')`;

    const images = [
        { src: APP_CONFIG.images.profileFront, showHi: false },
        { src: APP_CONFIG.images.profileBack, showHi: true }
    ];
    let index = 0;

    // Function to perform the flip
    const performFlip = () => {
        if (profileCard.classList.contains('avatar-flip')) return; // Prevent multiple flips
        
        index = (index + 1) % images.length;
        profileCard.classList.add('avatar-flip');
        
        // Change the image halfway through the flip (when it's at 90 degrees)
        setTimeout(() => {
            profileCard.style.backgroundImage = `url('${images[index].src}')`;
            profileCard.classList.toggle('show-hi', images[index].showHi);
        }, 300);
        
        // Remove the animation class after it completes
        setTimeout(() => profileCard.classList.remove('avatar-flip'), 600);
    };

    // Wait 3 seconds before first flip
    setTimeout(() => {
        performFlip();
    }, 3000);

    // Flip on hover
    profileCard.addEventListener('mouseenter', performFlip);
}

  
