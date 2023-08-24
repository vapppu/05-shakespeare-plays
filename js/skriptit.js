
button = document.querySelector("#style-button");

const addIcons = function(link) {

     // Add text styles to links
     link.setAttribute("class", "dotted");

     const href = link.getAttribute("href");

     // Add pdf logo
     if (href.endsWith(".pdf"))
     {
         const icon = document.createElement("i");
         icon.setAttribute("class","fa-solid fa-file-pdf");
         icon.classList.add("after-text");
         icon.style.color="red";
         link.append(icon);
     }

     // Add e-mail icon
     else if (href.startsWith("mailto:"))
     {
         const icon = document.createElement("i");
         icon.setAttribute("class", "fa-solid fa-envelope");
         icon.style.color="darkorange";
         icon.classList.add("before-text");
         link.prepend(icon);
     }

     
     // Add external link icon: https://www.designcise.com/web/tutorial/how-to-check-if-a-string-url-refers-to-an-external-link-using-javascript

     const tmp = document.createElement('a');
     tmp.href = href;

     const icon = document.createElement("i");
     icon.setAttribute("class", "fa-solid fa-arrow-up-right-from-square");
     icon.style.color="green";
     icon.classList.add("before-text");

     if (tmp.host !== window.location.host)
     {
         link.prepend(icon);
     }
}


const addStyles = () => {

    const section1 = document.getElementById("eka");
    const vierekkain = section1.querySelector("ul");
    vierekkain.setAttribute("class", "vierekkain");

    const otherSections = [document.querySelector("#toka"), document.querySelector("#kolmas")];

    otherSections.map((section) => {
        section.querySelector("table").setAttribute("class", "allekkain");
    })

    const links = document.querySelectorAll("a");

    links.forEach((link) => {
        addIcons(link);
    })
}

const removeStyles = () => {
    const elements = document.querySelectorAll("i, .vierekkain, .dotted, .allekkain");
    Array.from(elements).map((element) => element.setAttribute("class", ""));
}

let styled = false;

button.onclick = () => {
    if (!styled)
    {
        addStyles()
    }
    else {
        removeStyles();
    }
    styled = !styled;
};


