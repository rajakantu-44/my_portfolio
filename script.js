    // PAGE LOADING ANIMATION

const loader = document.getElementById("page-loader");
const loaderStart = Date.now();

window.addEventListener("load", function () {

    const remaining = Math.max(0, 2800 - (Date.now() - loaderStart));

    setTimeout(() => {
        loader.classList.add("loader-hidden");

        setTimeout(() => {
            loader.style.display = "none";
        }, 600);

    }, remaining);

});
// FALLING LEAVES CURSOR ANIMATION

let lastLeafTime = 0;

document.addEventListener("mousemove", function(e) {

    // Create a leaf only once every 350ms
    const now = Date.now();

    if (now - lastLeafTime < 100) return;

    lastLeafTime = now;

    const leaf = document.createElement("span");
    leaf.className = "cursor-leaf";

    const leaves = ["🍃", "🍂"];
    leaf.innerHTML = leaves[Math.floor(Math.random() * leaves.length)];

    leaf.style.left = e.clientX + "px";
    leaf.style.top = e.clientY + "px";

    leaf.style.setProperty("--x", (Math.random() * 50 - 25) + "px");
    leaf.style.setProperty("--y", (Math.random() * 50 + 30) + "px");
    leaf.style.setProperty("--rotate", (Math.random() * 180 - 90) + "deg");

    document.body.appendChild(leaf);

    setTimeout(() => {
        leaf.remove();
    }, 2200);

});
// MAIN TYPING FUNCTION
let typingTimer;
let activeElementId = null;

function clearText() {
    clearTimeout(typingTimer);

    document.querySelectorAll(".section-text").forEach(element => {
        element.innerHTML = "";
    });

    activeElementId = null;
}

function typeText(elementId, content, speed = 40) {

    let element = document.getElementById(elementId);

    // SECOND CLICK: DISPLAY ALL CONTENT INSTANTLY
    if (activeElementId === elementId) {

        clearTimeout(typingTimer);
        element.innerHTML = "";

        content.forEach(line => {
            let div = document.createElement("div");
            div.textContent = line;
            element.appendChild(div);
        });

        return;
    }

    // FIRST CLICK: START TYPING ANIMATION
    clearText();
    activeElementId = elementId;

    let line = 0;

    function typeLine() {
        if (line < content.length) {

            let div = document.createElement("div");
            element.appendChild(div);

            let char = 0;

            function typeChar() {
                if (char < content[line].length) {

                    div.textContent += content[line].charAt(char);
                    char++;

                    typingTimer = setTimeout(typeChar, speed);

                } else {
                    line++;
                    typingTimer = setTimeout(typeLine, 300);
                }
            }

            typeChar();
        }
    }

    typeLine();
}


// ABOUT ME
function showAbout(event) {
    event.preventDefault();

    typeText("about-text", [
        "Hello! I am Raja, a passionate developer interested in technology, creativity and innovation."
    ], 50);
}


// EDUCATION
function showEducation(event) {
    event.preventDefault();

    typeText("edu-text", [
        "🎓B.Sc. (Hons) Computer Science and Cognitive Systems | CGPA: 8.45/10 | 2024 - 2027",
        "P.B. Siddhartha College of Arts and Science, Vijayawada",
        "🏛️Intermediate (BiPC) | 93.4% |Andhra Loyola College, Vijayawada| 2022 - 2024",
        "🏫SSC | 87.3% | Abhyasa Vidyalayam, Gundala, Vijayawada| 2021 – 2022 "
    ], 40);
}
function showSkills(event) {
    event.preventDefault();
    clearText();

    let skills = [
        { name: "Python", icon: "fa-brands fa-python" },
        { name: "Java", icon: "fa-brands fa-java" },
        { name: "HTML", icon: "fa-brands fa-html5" },
        { name: "CSS", icon: "fa-brands fa-css3-alt" },
        { name: "JavaScript", icon: "fa-brands fa-js" },
        { name: "GitHub", icon: "fa-brands fa-github" },
        { name: "Flask", icon: "fa-solid fa-flask" },
        { name: "Database", icon: "fa-solid fa-database" }
    ];

    let element = document.getElementById("skill-text");

    skills.forEach(skill => {
        let card = document.createElement("div");
        card.className = "skill-card";

        card.innerHTML = `
            <i class="${skill.icon}"></i>
            <span>${skill.name}</span>
        `;

        element.appendChild(card);
    });
}
function showProjects(event) {
    event.preventDefault();
    clearText();

    let projects = [
    {
        name: "StudywithR",
        link: "https://rajakantu-44.github.io/StudywithR/",
        repo: "https://github.com/rajakantu-44/StudywithR",
        details: "Created and launched a study website where classmates find organized handwritten notes and other resources | Techstack :  HTML, CSS and JavaScript."
    },
    {
        name: "Smart Resume Builder",
        link: "https://github.com/yourusername/project",
        repo: "https://github.com/rajakantu-44/smart_resume_builder",
        details: "Built a web app that helps students and job seekers create resumes, using the Gemini API for content suggestions | Techstack : HTML, CSS, JavaScript, Python Flask, Gemini API.."
    },
    {
        name: "Campus Care",
        link: "https://github.com/yourusername/project",
        repo: "https://github.com/rajakantu-44/Campus-Care-Hackathon-",
        details: "Built during an intra-departmental college hackathon, a complaint management platform where students raise complaints and administrators track them by department | Techstack : HTML, CSS, JavaScript, Python, MongoDB, JWT Authentication, REST API"
    }
];

    let element = document.getElementById("project-text");

    projects.forEach(project => {

        let card = document.createElement("div");
        card.className = "project-card";

        card.innerHTML = `
    <a href="${project.link}" target="_blank" class="project-name">
        ${project.name}
    </a>

    <a href="${project.repo}" target="_blank" class="project-github" title="View Repository">
        <i class="fa-brands fa-github"></i>
    </a>

    <div class="project-info">
        <i class="fa-solid fa-circle-info"></i>
        <div class="project-details">
            ${project.details}
        </div>
    </div>
`;

        element.appendChild(card);
    });
}

function showContact(event) {
    event.preventDefault();
    clearText();

    const contact = document.getElementById("contact-text");

    contact.innerHTML = `
        <div class="contact-container">

            <!-- CONTACT DETAILS -->
            <div class="contact-details">

                <div class="contact-item">
                    <i class="fa-solid fa-envelope"></i>
                    <div>
                        <h3>Email</h3>
                        <a href="mailto:rajakantu44@gmail.com">
                            rajakantu44@gmail.com
                        </a>
                    </div>
                </div>

                <div class="contact-item">
                    <i class="fa-solid fa-phone"></i>
                    <div>
                        <h3>Phone</h3>
                        <a href="tel:+919014819874">
                            +91 9014819874
                        </a>
                    </div>
                </div>

                <div class="contact-item">
                    <i class="fa-brands fa-linkedin"></i>
                    <div>
                        <h3>LinkedIn</h3>
                        <a href="https://www.linkedin.com/in/raja-kantu44/" target="_blank">
                            https://www.linkedin.com/in/raja-kantu44/
                        </a>
                    </div>
                </div>

                <div class="contact-item">
                    <i class="fa-solid fa-location-dot"></i>
                    <div>
                        <h3>Location</h3>
                        <p>Vijayawada, Andhra Pradesh, India</p>
                    </div>
                </div>

            </div>

            <!-- CONTACT FORM -->
            <form class="contact-form" id="contact-form">

    <!-- ROW 1 -->
    <input type="text" name="name" placeholder="Your Name" required>

    <input type="email" name="email" placeholder=" Your Email" required>

    <!-- ROW 2 -->
    <input type="text" name="subject" placeholder="Subject" required>

    <textarea name="message" placeholder="Message" required></textarea>

    <button type="submit" id="send-btn">
        Send Message
        <i class="fa-solid fa-paper-plane"></i>
    </button>

    <p id="form-status"></p>

</form>
        </div>
    `;
}
// INITIALIZE EMAILJS
(function () {
    emailjs.init({
        publicKey: "18mkro1F-9x0E8SaP",
    });
})();
// CONTACT FORM SUBMISSION

document.addEventListener("submit", function (e) {

    if (e.target.id !== "contact-form") return;

    e.preventDefault();

    const form = e.target;
    const button = form.querySelector("#send-btn");
    const status = form.querySelector("#form-status");

    button.disabled = true;
    button.innerHTML = "Sending...";

    emailjs.sendForm(
        "service_04lgwmo",
        "template_p7c5ilu",
        form
    )
    .then(() => {

        status.textContent = "Message sent successfully!";
        status.style.color = "#90ee90";

        form.reset();

    })
    .catch((error) => {

        console.error("EmailJS Error:", error);

        status.textContent = "Failed to send message. Try again.";
        status.style.color = "#ff7777";

    })
    .finally(() => {

        button.disabled = false;

        button.innerHTML = `
            Send Message
            <i class="fa-solid fa-paper-plane"></i>
        `;

    });

});
// RESET PORTFOLIO

document.getElementById("reset-btn").addEventListener("click", function () {

    // Clear all section content
    clearText();

    // Reset active section buttons (if applicable)
    document.querySelectorAll(".glass-btn").forEach(btn => {
        btn.classList.remove("active");
    });

});
// ADD NEW FUNCTIONS BELOW
