/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    // Validate that variables exist
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/

const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*==================== SHOW SCROLL TOP ====================*/

function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 200) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)


/*==================== DARK LIGHT THEME ====================*/

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/*==================== REDUCE THE SIZE AND PRINT ON AN A4 SHEET ====================*/
function scaleCv() {
    document.body.classList.add('scale-cv')
}

/*==================== REMOVE THE SIZE WHEN THE CV IS DOWNLOADED ====================*/
function removeScale() {
    document.body.classList.remove('scale-cv')
}

/*==================== GENERATE PDF ====================*/
// PDF generated area
let areaCv = document.getElementById('area-cv')

let resumeButton = document.getElementById('resume-button')

// Html2pdf options
let opt = {
    margin: 0,
    filename: 'resume-FernandoBolaños.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 4 },
    jsPDF: { format: 'a4', orientation: 'portrait' }
};

// Function to call areaCv and Html2Pdf options 
function generateResume() {
    html2pdf(areaCv, opt)
}

// When the button is clicked, it executes the three functions
resumeButton.addEventListener('click', () => {
    // 1. The class .scale-cv is added to the body, where it reduces the size of the elements
    scaleCv();

    // 2. The PDF is generated
    // generateResume()

    // 3. The .scale-cv class is removed from the body after 5 seconds to return to normal size.

    // setTimeout(areaCv, 5000);
    setTimeout(() => {
        removeScale();
    }, 5000);
})



let isEnglish = true; // Variable para controlar el idioma actual

function changeLanguage() {
    if (isEnglish) {
        // Cambia a Español
        document.getElementById("languages").innerText = "ESPAÑOL 🇲🇽";
        document.getElementById("profile-id").innerText = "PERFIL";
        document.getElementById("home-title").innerText = "Inicio";
        document.getElementById("education-title").innerText = "Educación";
        document.getElementById("skills-title").innerText = "Habilidades";
        document.getElementById("profile-title").innerText = "Perfil";
        document.getElementById("experience-title").innerText = "Experiencia";
        document.getElementById("certificates-title").innerText = "Certificados";
        document.getElementById("languages-title").innerText = "Idiomas";
        document.getElementById("interests-title").innerText = "Intereses";
        document.getElementById("socialmedia-title").innerText = "REDES SOCIALES";
        document.getElementById("education-title-id").innerText = "EDUCACIÓN";
        document.getElementById("bachelor-school").innerText = "INGENIERÍA EN SISTEMAS COMPUTACIONALES";
        document.getElementById("english-school").innerText = "ESCUELA DE INGLES";
        document.getElementById("skill-id").innerText = "HABILIDADES";
        document.getElementById("profile-description").innerText = "Desde mi infancia he sido apasionado por la tecnología, fascinado por cómo funcionan herramientas cotidianas como las páginas web y las aplicaciones móviles, así como por las complejidades de innovaciones avanzadas como la inteligencia artificial o la computación cuántica. A lo largo de los años, he perfeccionado mis habilidades en una amplia variedad de herramientas de desarrollo de software, junto con una capacidad para generar ideas innovadoras dentro de estas plataformas. En el camino, he desarrollado un enfoque estratégico para diseñar y optimizar algoritmos para sistemas y aplicaciones. Lo que más me entusiasma es el desafío de crear soluciones complejas y elegantes utilizando las mejores tecnologías.";
        document.getElementById("experience-id").innerText = "Experiencia";
        document.getElementById("purpura-title").innerText = "En esta empresa, desarrollé soluciones innovadoras para una compañía tequilera, optimizando y mejorando todos sus procesos de producción. Esto implicó el uso de herramientas como React Native, el SDK de Scandit y metodologías ágiles para lograr resultados eficientes y escalables.";
        document.getElementById("experience-company").innerText = "Purpura Analytics | Enero 2021 a Junio 2021";
        document.getElementById("experience-company2").innerText = "Itelisoft | Junio 2019 a Abril 2024";
        document.getElementById("itelisoft-title").innerText = "En esta empresa, desarrollé soluciones innovadoras para diversas compañías, aprovechando tecnologías como Angular para construir aplicaciones web robustas. También diseñé y desarrollé aplicaciones móviles utilizando Ionic y React Native, implementándolas exitosamente en Android e iOS. Además, desarrollé y gestioné APIs con frameworks como Express y Laravel, y diseñé bases de datos tanto SQL (MySQL) como NoSQL (MongoDB). Hice uso de herramientas como Git para el control de versiones y apliqué metodologías ágiles como SCRUM para garantizar un desarrollo eficiente. Asimismo, desplegué servicios en plataformas como AWS y Firebase, y publiqué aplicaciones en la App Store y Google Play, asegurando su óptimo funcionamiento en los entornos de producción.";
        document.getElementById("certificates-id").innerText = "Certificados";
        document.getElementById("experience-id2").innerText = "CERTIFICADO POR TOEFL ITP";
        document.getElementById("english-level").innerText = "NIVEL B1 (INTERMEDIO)";
        document.getElementById("creativity").innerText = "Creatividad";
        document.getElementById("responsability").innerText = "Responsabilidad";
        document.getElementById("analytical-reasoning").innerText = "Razonamiento analítico";
        document.getElementById("teamwork").innerText = "Trabajo en equipo";
        document.getElementById("adaptability").innerText = "Adaptabilidad";
        document.getElementById("perseverance").innerText = "Perseverancia";
        document.getElementById("trust").innerText = "Confianza";
        document.getElementById("comunication").innerText = "Comunicación";
        document.getElementById("positive-attitude").innerText = "Actitud positiva";
        document.getElementById("languages-id").innerText = "Idiomas";
        document.getElementById("spanish").innerText = "Español";
        document.getElementById("english").innerText = "Ingles";
        document.getElementById("interests-id").innerText = "Intereses";
        document.getElementById("music").innerText = "Música";
        document.getElementById("travel").innerText = "Viajes";
        document.getElementById("read").innerText = "Leer";
        document.getElementById("workout").innerText = "Ejercicio";
        document.getElementById("podcast").innerText = "Podcast";
        document.getElementById("ai").innerText = "IA";
        document.getElementById("finance").innerText = "Finanzas";
        document.getElementById("self-taught").innerText = "Autodidacta";
        document.getElementById("download").innerText = "Descargar";



        isEnglish = false; // Cambiar el estado del idioma
    } else {
        // Cambia a Inglés
        document.getElementById("languages").innerText = "ENGLISH 🇺🇸";
        document.getElementById("profile-id").innerText = "PROFILE";
        document.getElementById("home-title").innerText = "Home";
        document.getElementById("education-title").innerText = "Education";
        document.getElementById("skills-title").innerText = "Skills";
        document.getElementById("profile-title").innerText = "Profile";
        document.getElementById("experience-title").innerText = "Experience";
        document.getElementById("certificates-title").innerText = "Certificates";
        document.getElementById("languages-title").innerText = "Languages";
        document.getElementById("interests-title").innerText = "Interests";
        document.getElementById("socialmedia-title").innerText = "SOCIAL MEDIA";
        document.getElementById("education-title-id").innerText = "EDUCATION";
        document.getElementById("bachelor-school").innerText = "COMPUTER SYSTEMS ENGINEERING";
        document.getElementById("english-school").innerText = "ENGLISH SCHOOL";
        document.getElementById("skill-id").innerText = "SKILLS";
        document.getElementById("profile-description").innerText = " I’ve been passionate about technology since childhood, captivated by how everyday tools like web pages and mobile applications function, as well as the intricacies of advanced innovations such as artificial intelligence or quantum computing. Over the years, I’ve honed my skills in a wide array of software development tools, coupled with a knack for generating innovative ideas within these platforms. Along the way, I’ve developed a strategic mindset for designing and optimizing algorithms for systems and applications. What excites me most is the challenge of crafting complex, elegant solutions using the best technologies.";
        document.getElementById("experience-id").innerText = "Experience";
        document.getElementById("purpura-title").innerText = "At this company, I developed innovative solutions for a tequila manufacturer, streamlining and optimizing their entire production process. This involved leveraging tools such as React Native, the Scandit SDK, and agile methodologies to deliver efficient and scalable results.";
        document.getElementById("experience-company").innerText = "Purpura Analytics | January 2021 to June 2021";
        document.getElementById("experience-company2").innerText = "Itelisoft | June 2019 to April 2024";
        document.getElementById("itelisoft-title").innerText = "In this company, I developed innovative solutions for various companies, leveraging technologies such as Angular to build robust web applications. I also designed and developed mobile applications using Ionic and React Native, successfully deploying them on both Android and iOS platforms. Additionally, I developed and managed APIs using frameworks like Express and Laravel, and designed databases both SQL (MySQL) and NoSQL (MongoDB). I utilized tools like Git for version control and applied agile methodologies such as SCRUM to ensure efficient development. Moreover, I deployed services on platforms like AWS and Firebase, and published applications on the App Store and Google Play, ensuring optimal performance in production environments.";
        document.getElementById("certificates-id").innerText = "Certificates";
        document.getElementById("experience-id2").innerText = "CERTIFIED BY TOEFL ITP";
        document.getElementById("english-level").innerText = "B1 LEVEL (INTERMEDIUM)";
        document.getElementById("creativity").innerText = "Creativity";
        document.getElementById("responsability").innerText = "Responsability";
        document.getElementById("analytical-reasoning").innerText = "Analytical reasoning";
        document.getElementById("teamwork").innerText = "Teamwork";
        document.getElementById("adaptability").innerText = "Adaptability";
        document.getElementById("perseverance").innerText = "Perseverance";
        document.getElementById("trust").innerText = "Trust";
        document.getElementById("comunication").innerText = "Comunication";
        document.getElementById("positive-attitude").innerText = "Positive attitude";
        document.getElementById("languages-id").innerText = "Languages";
        document.getElementById("spanish").innerText = "Spanish";
        document.getElementById("english").innerText = "English";
        document.getElementById("interests-id").innerText = "Interests";
        document.getElementById("music").innerText = "Music";
        document.getElementById("travel").innerText = "Travel";
        document.getElementById("read").innerText = "Read";
        document.getElementById("workout").innerText = "Workout";
        document.getElementById("podcast").innerText = "Podcast";
        document.getElementById("ai").innerText = "AI";
        document.getElementById("finance").innerText = "Finance";
        document.getElementById("self-taught").innerText = "Self-taught";
        document.getElementById("download").innerText = "Download";







        isEnglish = true; // Cambiar el estado del idioma
    }
}

