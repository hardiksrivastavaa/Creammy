
// Animation for Image 

gsap.to(".middle_container img",
    {
        x: 10,
        y: 10,
        duration: 3,
        repeat: -1,
        yoyo: true
    }
)


// Animation of Navbar 


gsap.from(".logo, .nav_links h1", {
    y: -35,
    opacity: 0.1,
    duration: 0.7,
    stagger: 0.3
})

// Animation for Cursor 

const main = document.querySelector(".main");

main.addEventListener("mousemove", (params) => {
    gsap.to(".cursor", {
        x: params.x,
        y: params.y,
        duration: 0.38
    })

})