let projects = document.getElementsByClassName("img__wrap");
for (let i = 0; i < projects.length; i++) {
    projects[i].addEventListener("mouseenter", (event) => {
       projects[i].querySelector("p").style.visibility = 'visible';
       projects[i].querySelector("p").style.opacity = '0.5';
    });
}