// gets the current page URL
const sections = document.querySelectorAll("section");
const navlinks = document.querySelectorAll(".navbar a");

function activateSection(){
    let scrollPos = window.scrollY + 120;
    let activeId = null;

    sections.forEach(section => {
        const id = section.getAttribute("id");
        if (!id) return;

        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPos >= top && scrollPos < top + height) {
            const matchingLink = document.querySelector(`.navbar a[href="#${id}"]`);
            if (matchingLink) activeId = id;
        }
    });

    navlinks.forEach(link => link.classList.remove("active-page"));
    if (activeId) {
        const activeLink = document.querySelector(`.navbar a[href="#${activeId}"]`);
        if (activeLink) activeLink.classList.add("active-page");
    }
}

window.addEventListener("scroll", activateSection);
window.addEventListener("load", activateSection);

// ---------------------------Page Loading Smoothness------------------------
const faders = document.querySelectorAll(".fade-in");

function revealElements(){
    faders.forEach(el =>{
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100){
            el.classList.add("Show");
        }
    })
}

window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);

window.addEventListener("load", () =>{
    document.body.classList.add("loaded");
});