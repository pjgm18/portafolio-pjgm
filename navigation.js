contactLink.addEventListener('click', ()=> {
    location.hash = '#contact' 
})
projectsLink.addEventListener('click', ()=> {
    location.hash = '#projects' 
})
aboutLink.addEventListener('click', ()=> {
    location.hash = '#about' 
})
logo.addEventListener('click', ()=> {
    location.hash = '#home' 
})







//la funcion tambien cargara cuando cargue el DOM
window.addEventListener('DOMContentLoaded', navigator, false)
//La funcion que queremos ejecutar cada vez que cambie el hash
window.addEventListener('hashchange', navigator, false);

function navigator(){
    console.log({location})

    if(location.hash.startsWith('#contact')){
        contactPage()
    } else if(location.hash.startsWith('#projects')){
        projectsPage()

    }else if(location.hash.startsWith('#about')){
        aboutPage()
    }else if(location.hash.startsWith('#home')){
        homePage()

    } else{
        homePage()
    }
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}

function homePage(){
    console.log('Estamos en el home')

    projectSection.classList.add('inactive')
    mainSection.classList.remove('inactive')
    genericList.classList.add('inactive')
    contacSection.classList.add('inactive')
    aboutSection.classList.add('inactive')

    
    /* getCategoriesPreview()
    getTrendingMoviesPreview() */

}

function projectsPage(){
    console.log('Estamos en pagina de proyectos')

    genericList.classList.add('inactive')
    mainSection.classList.add('inactive')
    projectSection.classList.remove('inactive')
    aboutSection.classList.add('inactive') 
    contacSection.classList.add('inactive')

}

function contactPage(){
    mainSection.classList.add('inactive')
    projectSection.classList.add('inactive')
    genericList.classList.add('inactive')
    contacSection.classList.remove('inactive')
    aboutSection.classList.add('inactive')
}

function aboutPage(){
    mainSection.classList.add('inactive')
    projectSection.classList.add('inactive')
    genericList.classList.add('inactive')
    contacSection.classList.add('inactive')
    aboutSection.classList.remove('inactive')
}
