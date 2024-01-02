/*====================================== toggle icon navbar ====================================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
   

menuIcon.onclick = () =>
{
    
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
/*===================================== scroll section active links ===========================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => 
{
    sections.forEach(sec => 
        {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if(top >= offset && top < offset + height)
            {
                navLinks.forEach(links => 
                    {
                        links.classList.remove('active');
                        document.querySelector('header nav a[href*='+ id +']').classList.add('active');
                    });
            };

        });        
        /*================================= sticky navbar =======================================*/

            let header = document.querySelector('header');

            header.classList.toggle('sticky', window.scrollY > 100);

        
        /*========== remove toggle icon and navbar when click navbar link (scroll) ===============*/


            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');



};


/*===================================== scroll reveal ==============================*/

ScrollReveal(
    {  
        distance: '80px',
        duration: 900,
        delay: 100
    }
 );

 ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
 ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
 ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });



 /*===================================== typed js =================================*/

 const typed = new Typed('#multiple-text',{
    strings: ['Game Designer','2D/3D Artist','Front-End Developer,','Quality Assurance (QA)'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true

 });

/*===================================== read more =================================*/

function leiaMais()
{
    var pontos = document.getElementById("pontos");
    var maisTexto = document.getElementById("mais"); 
    var btnLeiaMais = document.getElementById("btnLeiaMais"); 

    if(pontos.style.display === "none")
    {
        pontos.style.display  = "inline";
        maisTexto.style.display = "none";
        btnLeiaMais.innerHTML = "Saiba mais!";
    }
    else
    {
        pontos.style.display  = "none";
        maisTexto.style.display = "inline";
        btnLeiaMais.innerHTML = "Leia Menos.";
    }
}

/*===================================== read more webdes =================================*/


function leiaMaiswd()
{
    var pontoswd = document.getElementById("pontoswd");
    var maisTextowd = document.getElementById("maiswd"); 
    var btnLeiaMaiswd = document.getElementById("btnLeiaMaiswd"); 

    if(pontoswd.style.display === "none")
    {
        pontoswd.style.display  = "inline";
        maisTextowd.style.display = "none";
        btnLeiaMaiswd.innerHTML = "Saiba mais!";
    }
    else
    {
        pontoswd.style.display  = "none";
        maisTextowd.style.display = "inline";
        btnLeiaMaiswd.innerHTML = "Leia Menos.";
    }
}



/*===================================== read more game design =================================*/


function leiaMaisgm()
{
    var pontosgm = document.getElementById("pontosgm");
    var maisTextogm = document.getElementById("maisgm"); 
    var btnLeiaMaisgm = document.getElementById("btnLeiaMaisgm"); 

    if(pontosgm.style.display === "none")
    {
        pontosgm.style.display  = "inline";
        maisTextogm.style.display = "none";
        btnLeiaMaisgm.innerHTML = "Saiba mais!";
    }
    else
    {
        pontosgm.style.display  = "none";
        maisTextogm.style.display = "inline";
        btnLeiaMaisgm.innerHTML = "Leia Menos.";
    }
}

/*===================================== read more md =================================*/


function leiaMaismd()
{
    var pontosmd = document.getElementById("pontosmd");
    var maisTextomd = document.getElementById("maismd"); 
    var btnLeiaMaismd = document.getElementById("btnLeiaMaismd"); 

    if(pontosmd.style.display === "none")
    {
        pontosmd.style.display  = "inline";
        maisTextomd.style.display = "none";
        btnLeiaMaismd.innerHTML = "Saiba mais!";
    }
    else
    {
        pontosmd.style.display  = "none";
        maisTextomd.style.display = "inline";
        btnLeiaMaismd.innerHTML = "Leia Menos.";
    }
}



