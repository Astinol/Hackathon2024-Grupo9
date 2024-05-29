$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    var typed = new Typed(".typing", {
        strings: [" sempre informado. ",],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
                
            }
        },
        1000:{
            items: 4,
            nav: false
        },
        1000:{
            items: 5,
            nav: false
        },
        1000:{
            items: 6,
            nav: false
            
        },
        1000:{
            items: 7,
            nav: false

        },
        1000:{
            items: 8,
            nav: false

        },
        1000:{
            items: 9,
            nav: false
        }
    });
});

$(document).ready(function(){
    $(".news-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        },
        navText: [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ]
    });
});

var modal = document.getElementById('id01');
var loginButton = document.getElementById('loginButton');
var publishButton = document.getElementById('publishButton');
var isLoggedIn = false;

function openLoginModal() {
    if (!isLoggedIn) {
        modal.style.display = "block";
    }
}

function closeLoginModal() {
    modal.style.display = "none";
}

function login() {
    var username = document.getElementById("uname").value;
    var password = document.getElementById("psw").value;

    document.getElementById("loginLink").innerHTML = '<a href="#" style="color:white;text-decoration: none;">' + username + '</a>';
    
    publishButton.style.display = "inline";

    closeLoginModal();
    isLoggedIn = true;
}

window.addEventListener('click', function(event) {
    if (event.target == modal) {
        closeLoginModal();
    }
});

loginButton.addEventListener('click', function() {
    if (!isLoggedIn) {
        openLoginModal();
    }
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    login();
});

window.addEventListener('click', function(event) {
    if (event.target == publishModal) {
        closePublishModal();
    }
});

publishButton.addEventListener('click', function() {
    openPublishModal();
});

document.getElementById("publishForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var title = document.getElementById("title").value;
    var image = document.getElementById("image").value;
    var description = document.getElementById("description").value;

    document.getElementById("title").value = "";
    document.getElementById("image").value = "";
    document.getElementById("description").value = "";

    closePublishModal();
});

function openPublishModal() {
    if (isLoggedIn) {
        publishModal.style.display = "block";
    }
}

function closePublishModal() {
    publishModal.style.display = "none";
}
