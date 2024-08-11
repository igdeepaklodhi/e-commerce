(function ($) {
    "use strict";
// made-by-deeepak-lodhi


    // banner slider

    $('.banner-slider-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        pauseOnHover: false,

    });
    // testimonial slider

    $('.testimonial-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        arrows: false,
        autoplaySpeed: 3000,
        infinite: true,
        pauseOnHover: false,

    });


    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 3000,
        infinite: true,
        arrows: false,
        fade: true,
        pauseOnHover: false,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        focusOnSelect: true,
        arrows: false,
        vertical: true,
        verticalSwiping: true,
    });




 
    $(document).ready(function () {
        $('.center-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            arrows: true,
            dots: false,
            speed: 300,
            centerPadding: '0px',
            infinite: true,
            autoplaySpeed: 3000,
            autoplay: true,
            pauseOnHover: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        centerMode: false,
                        centerPadding: '0px',
                        arrows: false,
                        autoplaySpeed: 3000,
                        autoplay: true,
                        pauseOnHover: false,

                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        centerMode: false,
                        autoplaySpeed: 3000,
                        autoplay: true,
                        pauseOnHover: false,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        centerMode: false,
                        autoplaySpeed: 3000,
                        autoplay: true,
                        pauseOnHover: false,
                    }
                }

            ]
        });
    });




    $(document).ready(function () {
        $(".hamburger").click(function () {
            $("body").addClass("header-contact");

        });
        $(".cross-btn").click(function () {
            $("body").removeClass("header-contact");

        });
    });




    window.addEventListener('DOMContentLoaded', function () {
        window.addEventListener('scroll', function () {
            var aboutSection = document.getElementById('about-us');
            var aboutLeft1 = document.querySelector('.about-left-1 img');
            var aboutLeft2 = document.querySelector('.about-left-2 img');

            if (aboutSection) {
                var scrollPosition = window.scrollY;
                var windowHeight = window.innerHeight;

                var aboutSectionTop = aboutSection.offsetTop;
                var aboutSectionHeight = aboutSection.offsetHeight;

                var distanceFromTop = aboutSectionTop - scrollPosition;
                var distanceFromBottom = (aboutSectionTop + aboutSectionHeight) - (scrollPosition + windowHeight);

                var maxMove = 35; // Adjust maximum movement distance

                var moveAmount1 = (distanceFromTop / windowHeight) * maxMove;
                aboutLeft1.style.top = moveAmount1 + 'px';

                var moveAmount2 = (distanceFromBottom / windowHeight) * maxMove;
                aboutLeft2.style.bottom = moveAmount2 + 'px';
            }
        });
    });








    document.addEventListener('DOMContentLoaded', function () {
        var lastScrollPosition = 0;
        var image = document.querySelector('.thumbnail');

        if (image) {
            window.addEventListener('scroll', function () {
                var scrollPosition = window.scrollY;
                var windowHeight = window.innerHeight;
                var imagePosition = image.getBoundingClientRect().top;
                var imageHeight = image.offsetHeight;

                var visibility = Math.max(0, Math.min(1, (windowHeight - imagePosition) / imageHeight));
                var scale = 1 + visibility * 0.3;

                if (scrollPosition < lastScrollPosition) {
                    scale = 1;
                }

                image.style.transform = 'scale(' + scale + ')';

                lastScrollPosition = scrollPosition;
            });
        }
    });





    document.addEventListener('DOMContentLoaded', function () {
        const cursor = document.querySelector('.cursor');
        const textTags = ['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'SPAN', 'A', 'BUTTON', 'I']; // Add other text-related tags as needed

        console.log('Cursor:', cursor);

        document.addEventListener('mousemove', function (e) {
            const x = e.clientX;
            const y = e.clientY;

            if (cursor) {
                cursor.style.left = x + 'px';
                cursor.style.top = y + 'px';
            }
        });

        textTags.forEach(function (tag) {
            const textElements = document.querySelectorAll(tag);
            textElements.forEach(function (element) {
                element.addEventListener('mouseenter', function () {
                    if (cursor) {
                        cursor.classList.add('hovered');
                    }
                });

                element.addEventListener('mouseleave', function () {
                    if (cursor) {
                        cursor.classList.remove('hovered');
                    }
                });
            });
        });
    });











    document.addEventListener("DOMContentLoaded", function() {
        const imageContainers = document.querySelectorAll('.image-container-1');

        imageContainers.forEach(imageContainer => {
            const zoomImage = imageContainer.querySelector('.zoomImage');

            imageContainer.addEventListener('mouseenter', () => {
                zoomImage.classList.add('zoomed');
            });

            imageContainer.addEventListener('mouseleave', () => {
                zoomImage.classList.remove('zoomed');
            });

            imageContainer.addEventListener('mousemove', (e) => {
                const { offsetX, offsetY, target } = e;
                const { offsetWidth: width, offsetHeight: height } = target;

                const x = (offsetX / width) * 100;
                const y = (offsetY / height) * 100;

                zoomImage.style.transformOrigin = `${x}% ${y}%`;
            });
        });
    });









      const accordions = document.querySelectorAll('.accordion__item');
      accordions.forEach(accordion => {
          const title = accordion.querySelector('.accordion__title');
          const content = accordion.querySelector('.accordion__content');
          title.addEventListener('click', () => {
              if (accordion.classList.contains('tab-open')) {
                  accordion.classList.remove('tab-open');
                  content.style.maxHeight = '0';
              } else {
                  accordions.forEach(item => {
                      item.classList.remove('tab-open');
                      item.querySelector('.accordion__content').style.maxHeight = '0';
                  });
                  accordion.classList.add('tab-open');
                  content.style.maxHeight = content.scrollHeight + 'px';
              }
          });
      });



    
  
  

     



    // sticky btn

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('body').addClass("sticky");
        }
        else {
            $('body').removeClass("sticky");
        }
    });

    // isotope

    $(window).on('load', function () {
        var $grid = $('.grid').isotope({
            itemSelector: 'article'
        });

        // Function to update layout
        function updateLayout() {
            $grid.isotope('layout');
        }

        // filter buttons
        $('.filters-button-group').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
            // Update layout after a button is clicked
            updateLayout();
        });

        $('.button-group').each(function (i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', 'button', function () {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $(this).addClass('is-checked');
            });
        });

        // Update layout after all resources including images have loaded
        updateLayout();
    });

    // made-by-deepak-lodhi



    // toogl for contact details

    $(document).ready(function () {
        $(".info-socail-media").click(function () {
            $("body").toggleClass("whats-app");
        });

    });

    window.addEventListener('load', function() {
        const loader = document.querySelector('.loader');
        loader.style.display = 'none';
      });






    // When the user scrolls the page, execute myFunction 
    window.onscroll = function () { myFunction() };

    function myFunction() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.height = scrolled + "%";
    }










})(jQuery);

function moveImage(container, event) {
    const image = container.querySelector('.moving-images');
    const containerRect = container.getBoundingClientRect();
    const containerCenterX = containerRect.left + container.offsetWidth / 2;
    const containerCenterY = containerRect.top + container.offsetHeight / 2;
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const distanceX = mouseX - containerCenterX;
    const distanceY = mouseY - containerCenterY;

    const maxMoveHorizontal = 1200; 
    const maxMoveVertical = 500;  

    const moveX = (distanceX / container.offsetWidth) * maxMoveHorizontal;
    const moveY = (distanceY / container.offsetHeight) * maxMoveVertical;

    image.style.transform = `translate(-50%, -50%) translate(${moveX}px, ${moveY}px)`;
}

// for-tabs-script


// function openCity(evt, cityName) {
//     var i, tabcontent, tablinks;

//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].classList.remove("active-tabs");
//     }

//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].classList.remove("active-tabs");
//     }
   
//     document.getElementById(cityName).classList.add("active-tabs");
//     evt.currentTarget.classList.add("active-tabs");
// }
// made-by-deepak-lodhi


function openCity(evt, cityName, tabId) {
    var i, tabcontent, tablinks;

    tabcontent = document.querySelectorAll(".tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active-tabs");
        tabcontent[i].classList.remove("active-2");
    }

    tablinks = document.querySelectorAll(".tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-tabs");
    }

    var cityElements = document.querySelectorAll("." + cityName);
    for (i = 0; i < cityElements.length; i++) {
        cityElements[i].classList.add("active-tabs");
    }

    evt.currentTarget.classList.add("active-tabs");

    var tabContent = document.querySelector("." + tabId);
    if (tabContent) {
        tabContent.classList.add("active-2");
    }
}









