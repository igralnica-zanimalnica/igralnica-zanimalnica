document.addEventListener("adminAccess", updateUI);
document.addEventListener('DOMContentLoaded', function() {
    const companyName = "Игралница Занималница";
    const red = '#e63030';
    const blue = '#0c69ab'
    const green = '#8ab93a'
    const yellow = '#f8cf0c'
    const lightblue = '#08a2db'
    const orange = '#ef9530'
    const purple = '#84387b'
    const darkgreen = '#84387b'
    var slides,dots,slideShowTimeout,slideShowTimeout;


    function hexToRgb(hex) {
      // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
      var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
      });
    
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    }
    function RGB(rgbColor, brightness=0) {
      return'rgb(' + (rgbColor['r'] + brightness) + ',' + (rgbColor['g'] + brightness) + ',' + (rgbColor['b'] + brightness) + ')'
    };

    



    function onMobile() {
      let check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      return check;
    };
    
    function pencilSVG(color, x=0, y=0) {
      return `<svg class="pencil" xmlns="http://www.w3.org/2000/svg" viewBox="${x} ${y} 1818 210"><defs><style>.cls-1{fill:${color};}.cls-2{fill:#979797;}.cls-3{fill:#c7b199;}</style></defs><g id="g5334"><path id="path4720" class="cls-1" d="M1818,210h-31V0h31Z" transform="translate(0 0)"/><path id="path4722" class="cls-2" d="M1787,210h-14V0h14Z" transform="translate(0 0)"/><path id="path4726" class="cls-3" d="M257.77,0C270,6.94,282.93,12.65,295.33,19.33c-12.51,8.19-26.18,14.43-39.1,22-.07,1.22-.16,2.44-.27,3.65,13.1,5.84,26.43,11.18,39.38,17.33-12.88,6-25.87,11.86-39.14,17-.05,1.22-.11,2.43-.19,3.65,12.85,7.74,26.77,13.56,39.3,21.82-12.86,5.91-26,11.17-39.16,16.46,0,1.24-.11,2.49-.19,3.73,13.17,6.9,26.49,13.52,39.47,20.74-12.84,6.08-26.26,10.85-39.29,16.52,0,1.24-.09,2.49-.16,3.74,13.16,7.54,26.84,14.26,39.43,22.73-12.37,8.07-29.48,11-39.7,21.25C194.92,185.72,134.54,159.79,74,135c0-20.14.38-40.29-.32-60.42C128.28,52,193.79,25.53,257.77,0Z" transform="translate(0 0)"/><path id="path4728" class="cls-1" d="M74,135q-37-15-74-30.14v-.82c24.71-9.43,49-19.9,73.65-29.46C74.35,94.75,73.92,114.9,74,135Z" transform="translate(0 0)"/><path id="path4724" class="cls-1" d="M1773,210H255.75l0-.83c10.22-10.28,27.33-12.45,39.7-20.52-12.59-8.47-26.27-15.19-39.43-22.73.07-1.25.13-2.5.16-3.74,13-5.67,26.45-10.44,39.29-16.52-13-7.22-26.3-13.84-39.47-20.74.08-1.24.14-2.49.19-3.73,13.13-5.29,26.3-10.55,39.16-16.46-12.53-8.26-26.45-14.08-39.3-21.82.08-1.22.14-2.43.19-3.65,13.27-5.14,26.26-11,39.14-17C282.39,56.11,269.06,50.77,256,44.93c.11-1.21.2-2.43.27-3.65,12.92-7.52,26.59-13.76,39.1-22C282.93,12.65,270,6.94,257.77,0H1773Z" transform="translate(0 0)"/></g></svg>`
    }

    function cloudSVG(color, borderColor, strokeWidth, opacity) {
      return `<svg class="cloud" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 767.77 420.93"><defs><style>.cls-1{fill:${color};opacity:${opacity}}.cls-2{fill:none;stroke:${borderColor};stroke-linecap:round;stroke-linejoin:round;stroke-width:${strokeWidth};}</style></defs><g id="layer1"><path id="filling" class="cls-1" d="M455.53,5C401,5.37,347.29,30.14,328.62,75.09,237.37-46.09,36.67,67.64,94.91,188.91-43.2,163.27-11.48,386.48,117.38,364.72c55.32,57.59,140.17,67,232,26.28h.06c111,40.42,207.56,10.29,251.09-20.56,261.28,68.17,167.31-349.25-4.15-240.35C595,43.37,524.69,4.53,455.53,5Z" transform="translate(0 0)"/><path id="outline" class="cls-2" d="M328.62,75.09c44.24-106.55,285.63-99.7,266.72,76.69m1-21.69C767.84,21.18,861.82,438.6,600.53,370.42M617.07,356c-31.76,36.11-153.17,87.93-292.21,25m24.5,10c-91.82,40.73-176.65,31.33-232-26.26m23.89-6.55C-7.13,413.79-51.4,161.74,94.89,188.9m12.57,20.79C7.82,73.76,259.23-69,344.42,100.74" transform="translate(0 0)"/></g></svg>`
    }

    function setNavlinkBackground() {
      var navLinks = document.querySelectorAll(".navlink");
      for (let i = 0; i < navLinks.length; i++) {
        var currentColor = 'black'
        var currentX = 0
        if (i===0) {
          currentColor = red
          currentX = -800
        } else if (i===1) {
          currentColor = blue
          currentX = -300
        } else if (i===2) {
          currentColor = green
          currentX = -500
        } else if (i===3) {
          currentColor = yellow
          currentX = -200
        } else if (i===4) {
          currentColor = lightblue
          currentX = -100
          if (onMobile()) {
            currentX = -400
          };
        } else if (i===5) {
          currentColor = orange
          currentX = -500
          if (onMobile()) {
            currentX = -50
          };
        } else if (i===6) {
          currentColor = purple
          currentX = -500 
        } else if (i===7) {
          currentColor = darkgreen
        };
        // Pencil menu on mobile
        if (onMobile()) {
          var encodedSVG = window.btoa(pencilSVG(currentColor, currentX));
          navLinks[i].style.backgroundImage = "url(data:image/svg+xml;base64," + encodedSVG + ")";
        // Cloud menu on desktop
        } else {
          // New line to fit text inside cloud
          if (navLinks[i].text.length > 6) {
            navLinks[i].innerHTML = navLinks[i].innerHTML.replaceAll(' ', '<br>')
          }
          let rgbColor = hexToRgb(currentColor)
          var encodedSVG = window.btoa(cloudSVG('white', 'black', '2vw','95%'));
          // Color of inside text
          navLinks[i].style.backgroundImage = "url(data:image/svg+xml;base64," + encodedSVG + ")";
          let darkenedTextColor = -10
          if (currentColor == yellow) {
            darkenedTextColor = -20;
          };
          navLinks[i].style.color = RGB(rgbColor, darkenedTextColor);
          
          // When mouse out of cloud
          navLinks[i].addEventListener('mouseout', event => {
            navLinks[i].style.animationPlayState = 'running';
            navLinks[i].style.color = RGB(rgbColor, darkenedTextColor);
            navLinks[i].style.filter = `none`;
          });
          // When mouse inside of cloud
          navLinks[i].addEventListener('mouseover', event => {
            navLinks[i].style.animationPlayState = 'paused';
            navLinks[i].style.color = RGB(rgbColor, darkenedTextColor+15);
            navLinks[i].style.width = parseFloat(navLinks[i].style.width.replaceAll('vw', '')) + 0.8 + 'vw';
            navLinks[i].style.filter = `drop-shadow(-0.1vw -0.1vw 0.35vw ${RGB(rgbColor, -20)}) drop-shadow(0.1vw 0.1vw 0.35vw ${RGB(rgbColor)}) drop-shadow(-0.1vw -0.1vw 0.35vw white) drop-shadow(0.1vw 0.1vw 0.35vw white)`
          });
          // Positioning
          let startingPosition = 6 + currentX/100;
          navLinks[i].style.top = startingPosition + 'vw';
          navLinks[i].style.padding =  5 - currentX/-250 + 'vw';
          document.getElementsByClassName('logo-container')[0].style.marginBottom = '-5.5vw';
          document.getElementsByTagName('main')[0].style.marginTop = '-3vw';
          function vwToPx(vw) {
            return (vw * window.innerWidth) / 100;
          }
          // Animate clouds
          if (i % 2  == 0) { // up
            navLinks[i].style.setProperty('--translationStart', '0.45vw');
            navLinks[i].style.setProperty('--translationEnd', '-0.45vw');
            navLinks[i].style.animation = 'MoveUpDown 2.5s linear infinite alternate';
          } else { // down
            navLinks[i].style.setProperty('--translationStart', '-0.45vw');
            navLinks[i].style.setProperty('--translationEnd', '0.45vw');
            navLinks[i].style.animation = 'MoveUpDown 2.5s linear infinite alternate';
          }
        }
}
    }

    function toggleHamburger() {
      let mobileNavbar = document.getElementById("mobileNavbar");
      if (mobileNavbar.style.display === "block") {
        mobileNavbar.style.display = "none";
      } else {
        mobileNavbar.style.display = "block";
      };
    };

    function updateNavbar() {
      // Set unique id for navbar element on mobile|desktop
      let navbarInnerHTML = navbarHTML;
      let header = document.getElementsByTagName("header")[0]
      if (onMobile()) {
        navbarInnerHTML  = navbarInnerHTML.replaceAll('desktopNavbar', 'mobileNavbar');
        navbarInnerHTML  = navbarInnerHTML.replaceAll('navlink', 'navlink pencil');
        header.id = 'mobileHeader';
        header.innerHTML = '<div id="hamburgerContainer">' + header.innerHTML + hamburger + '</div>'
      } else {
        header.id = 'desktopHeader';
      };
      // hidden due to layout shift
      let kiteimg = document.getElementsByClassName("kite-logo")[0]
      kiteimg.style.visibility = "visible";
      let logoimg = document.getElementsByClassName("logo-img")[0]
      logoimg.hidden = false;
      header.innerHTML = header.innerHTML + navbarInnerHTML;
      if (onMobile()) {
        let hamburgerIcon = document.getElementById('hamburgerIcon');
        hamburgerIcon.style.display = "block";
        hamburgerIcon.addEventListener('click', event => {
          toggleHamburger();
        });
    };
    };


    updateNavbar();
    setNavlinkBackground();
    const content = document.querySelector('main');
    const body = document.querySelector('body');
    if (onMobile()) {
      body.classList.add("mobileBody");
    } else {
      body.classList.add("desktopBody");
    };
    

    function updateTitle(pathname) {
        // home section is just company name
        document.title = (pathname === '/') ? companyName: pathname.replace(/[/-]/g, ' ')
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ') + " | " + companyName;
    };

    function updateDescription(pathname) {
      document.getElementsByTagName('meta')["description"].content = metaDescriptions[pathname];
    };

    function navigateTo(url) {
        let urlObject = new URL(url);
        let path = decodeURIComponent(urlObject.pathname);
        // Change the HTML of the main content
        content.innerHTML = mainContent[path];
        updateTitle(path);
        updateDescription(path);
        // Modify browser's history and change the URL without triggering a full page reload
        if (!shouldParseResult) {
        window.history.pushState({}, '', path);
        };
        // ADMIN --START--
        if (path=='/admin') {
            const event = new Event("adminAccess");
            document.dispatchEvent(event);
          }
        // ADMIN --END--
        document.querySelectorAll('a.navlink').forEach(link => {
          // For each nav button click, change content
          if (!link.classList.contains('click-ready')) {
            addNavLinkEventListener(link);
          };
          link.classList.add('click-ready');
        });
        // HOME / SUMMER-IGR --START--
        if ((path=='/') | (path=='/лятна-игралница')) {
          var slideIndex = 0;
          var slideShowTimeoutMiliseconds = 7000;
          function initSlideshow() {
            slides = document.getElementsByClassName("mySlides");
            dots = document.getElementsByClassName("dot");
            clearTimeout(slideShowTimeout);
            showSlides();
            document.getElementsByClassName('prev')[0].addEventListener('click', function () {
                plusSlides(-1);
            });
            document.getElementsByClassName('next')[0].addEventListener('click', function () {
                plusSlides(1);
            });
            document.querySelectorAll('.dot').forEach(function (el, index) {
                el.addEventListener('click', function () {
                    currentSlide(index + 1);
                });
            });
        }
          
          function showSlides() {
              var i;
              slides = document.getElementsByClassName("mySlides");
              dots = document.getElementsByClassName("dot");
              for (i = 0; i < slides.length; i++) {
                 slides[i].style.display = "none";  
              }
              slideIndex++;
              if (slideIndex> slides.length) {
                slideIndex = 1
              };
              for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
              };
              try {
                slides[slideIndex-1].style.display = "block";
                dots[slideIndex-1].className += " active";
                clearTimeout(slideShowTimeout);
                slideShowTimeout = setTimeout(showSlides, slideShowTimeoutMiliseconds); // Change image every 7 seconds
              } catch(error) {
                // Timeout still active but we are on a different page
              };
          };
          
          function plusSlides(position) {
              clearTimeout(slideShowTimeout);
              slideIndex +=position;
              if (slideIndex> slides.length) {slideIndex = 1}
              else if(slideIndex<1){slideIndex = slides.length}
              for (i = 0; i < slides.length; i++) {
                 slides[i].style.display = "none";  
              }
              for (i = 0; i < dots.length; i++) {
                  dots[i].className = dots[i].className.replace(" active", "");
              }
              slides[slideIndex-1].style.display = "block";  
              dots[slideIndex-1].className += " active";
              slideShowTimeout = setTimeout(showSlides, slideShowTimeoutMiliseconds);
          };
          
          function currentSlide(index) {
              clearTimeout(slideShowTimeout);
              if (index> slides.length) {
                index = 1
              } else if (index<1) {
                index = slides.length
              }
              for (i = 0; i < slides.length; i++) {
                 slides[i].style.display = "none";  
              }
              for (i = 0; i < dots.length; i++) {
                  dots[i].className = dots[i].className.replace(" active", "");
              }
              slides[index-1].style.display = "block";  
              dots[index-1].className += " active";
              slideShowTimeout = setTimeout(showSlides, slideShowTimeoutMiliseconds);
          };
          while (slideShowTimeout--) {
            clearTimeout(slideShowTimeout);
          }
          initSlideshow();
        };
        // HOME --END--

    }


    function addNavLinkEventListener(element) {
        element.addEventListener('click', event => {
        event.preventDefault();
        if (onMobile()) {
          toggleHamburger()
        };
        navigateTo(element.href);
      });
    };


    // Update the page content based on the URL
    navigateTo(window.location);
    
    // Update the current year in the footer
    const footerHTML = `<p>&copy; ${new Date().getFullYear()} Игралница Занималница</p>`;
    const footer = document.getElementsByTagName('footer')[0];
    footer.innerHTML = footerHTML;
    footer.hidden = false;
});

