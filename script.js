const testimonials = [
    {
        name: "",
        photoUrl: "",
        content: ""
    },
    {

    },
    {

    }
]

const imgElem = document.getElementById("img");
const textElem = document.querySelector(".text");
const nameElem = document.querySelector(".name")

let idx = 0;

updateTestimonial();


function updateTestimonial() {
    const {name, photoUrl, text} = testimonials[idx];
    imgElem.src = photoUrl;
    textElem.innertText = text;
    usernameElem.innertText = name;
    idx++;

    if(idx === testimonials.length){
        idx = 0;
    }

    setTimeout(() => {
        updateTestimonial();
    }, 10000);
}