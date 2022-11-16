var waypoint = new Waypoint({
    element: document.getElementById('carouselExampleFade'),
    handler: function(direction) {
        if (direction === "down") {
            document.querySelector(".navbar").classList.add("navbar-control")
            document.querySelector(".navbar").classList.add("animate__fadeInDown")
            document.querySelector(".navbar").classList.add("shadow-lg")
        } else {
            document.querySelector(".navbar").classList.remove("navbar-control")
            document.querySelector(".navbar").classList.remove("animate__fadeInDown")
            document.querySelector(".navbar").classList.remove("shadow-lg")

        }
    },
    offset: '10%'
})



// Theme

let card = document.querySelectorAll('.card');

const changeThemeToDark = () => {
    document.documentElement.setAttribute('data-theme','dark');
    document.querySelector('.navbar').classList.remove('shadow-lg');
    localStorage.setItem('data-theme','dark');
    document.getElementById('theme').setAttribute('content','#18181b')

    for(let x = 0; x < card.length; x++ ) {
        card[x].classList.remove('shadow');
        card[x].classList.remove('border-0');
        card[x].classList.add('border-1');
    }
}

const changeThemeToLight = () => {
    document.documentElement.setAttribute('data-theme','light');
    document.querySelector('.navbar').classList.add('shadow');
    localStorage.setItem('data-theme','light')
    document.getElementById('theme').setAttribute('content','#fff')
}



let changeTheme = document.getElementById('changeTheme');

changeTheme.addEventListener('change',  () => {
    let theme = localStorage.getItem('data-theme');
    if (theme === 'dark') {
        changeThemeToLight();
    } else {
        changeThemeToDark()
    }
})

let theme = localStorage.getItem('data-theme');
if (theme === 'dark') {
    changeThemeToDark()
    changeTheme.setAttribute('checked','checked')
} else {
    changeThemeToLight()
}



// menu icon
let menuIcon = document.querySelector('.menu-icon');
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('show');
})