// gets the current page URL
const currentPage = window.location.pathname.split("/").pop();
const currentHash = window.location.hash;
const links = document.querySelectorAll(".navbar a");

links.forEach(link => {
    const href = link.getAttribute("href");

    if (href === currentPath || href === currentHash ||
        (href.includes("#") && currentHash && href === currenthash))
        {
        link.classList.add("active-page");
    }
});