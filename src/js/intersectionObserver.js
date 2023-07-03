let elements = document.querySelectorAll('[data-effect="fadeIn"]')

let options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
};


function callback( entries ) {
    entries.forEach((entry) => {
        if(entry.inItersecting) {
            console.log("ESTOY A LA VISTA")
        }
    });
}

const observer = new IntersectionObserver(callback, options)

elements.forEach(element => observer.observe(element))

