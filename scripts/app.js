document.addEventListener("adminAccess", updateUI);
document.addEventListener('DOMContentLoaded', function() {
    const red = '#e63030';
    const blue = '#0c69ab'
    const green = '#8ab93a'
    const yellow = '#f8cf0c'
    const lightblue = '#08a2db'
    const orange = '#ef9530'
    const purple = '#84387b'
    const darkgreen = '#84387b'


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

    // Start of HTML
    const homeHTML = 
    `<p>Детски център "Игралница занималница", предлага училищна занималня за ученици от 1 до 5 клас, както и за деца от подготвителните групи към училищата.</p>

    <p>Преподавателите ни са специалисти с дългогодишен опит в областта на хуманитарните и точните науки, изкуствата и музиката.</p>
    
    <p>Вярваме, че мечтите създават бъдеще. Насърчаваме децата да бъдат радостни без официален повод и ги подкрепяме в стремежа им винаги да са заети с нещо.</p>
    
    
    <p><q>Работата е вдъхновение. Да сме навън е приключение. Книгата е удоволствие. Детето е човече с голяма мечта и личен талант, който уважаваме. Обичаме да четем. Правим го заедно и знаем, че буквите разкриват тайни. Призванието ни е да бъдем Учители.</q>
     - Илиана Йорданова, основател на "Игралница занималница"</p>
    <br>
    <p>В основната ни програма:
    <ul>
      <li>помагаме за решаване на задачите, поставени в училище;</li>
      <li>развиваме в децата уменията за самоподготовка и заедно проверяваме готови ли сме за утрешния ден;</li>
      <li>обогатяваме знанията с допълнителни занятия и учебни игри;</li>
      <li>помагаме в подготовката по английски, немски и руски език;</li>
      <li>работим в малки групи с до 8 деца на един учител,</li> <!-- Should it be a comma? -->
      <li>с индивидуални програми за работа развиваме потенциала на всяко дете;</li>
      <li>насърчаваме уменията за общуване и създаване на приятелства;</li>
      <li>осигуряваме транспорт от и до училище с график, удобен за всяко дете;</li>
      <li>предлагаме топъл обяд;</li>
      <li>обичаме рождените дни и не пропускаме важните празнични дати;</li>
      <li>в училищната ваканция предлагаме целодневна приключенска програма, без това да натоварва допълнително семейния бюджет</li>
    </ul></p>
    <br>
    <p>Допълнителна програма:
    <ul>
      <li>Арт студио “Игралница занималница”- рисуване и приложни изкуства в събота с Теди Скорчева</li>
      <li>Уроци и курсове по български и английски език</li>
      <li>Уроци и курсове по математика</li>
      <li>Логопедична консултация и помощ</li>
    </ul></p>
    `
    const aboutHTML = 
    `<h1>За Нас</h1><p>Здравейте, ние сме Нина и Роси!<br>
    Добре дошли в "Игралница занималница".<br>
    За нас е удоволствие да  работим и помагаме за решаването на безбройните въпроси при обучението и възпитанието на детето. <br>
    Ние сме  учители, утешители, възпитатели, придружители, приятели, вдъхновители и какво ли още не. Очакваме ви с нетърпение  да  се учим, развиваме и забавляваме заедно.<br>  
    Вярваме в децата и техните  мечти и правим всичко по силите си за да се чувстват подкрепени и окрилени. <br>
    Насърчаваме четенето и обичаме  интелектуалните игри, провокиращи въображението и мисленето. <br>
    Държим на точността, справедливостта, доброто възпитание и позитивното общуване. <br>
    Не забравяме празниците и рождените  дни и обичаме ваканциите и приключенията.<br>
    Важно за нас е родителите да ни имат доверие, да се чувстват спокойни, улеснени и сигурни, че детето им ще е щастливо, подготвено и устремено.</p>`

    const servicesHTML = 
    `<h1>Услуги</h1><p>
    <p>
    Полудневно посещение<br>
    <ul>
      <li>Месечна такса – 300 лв./20 работни дни / Не се възстановява при отсъствие на детето</li>
      <li>Седмична такса – 80лв./16лв.на ден</li>
      <li>Дневна такса – 20 лв.</li>
      <li>Удължено работно време – 5 лв./час за всеки започнат час.</li>
      <li>Почасово – 6 лв./час</li>
      <li>Топъл обяд - 6 лв. на ден /заплаща се в началото на всяка седмица/</li>
    </ul>

    Целодневно посещение: 20лв./ден<br>
    Топъл обяд: 6лв.<br>
    Допълнителни занимания:<br>

    <ul>
      <li>Арт студио "Игралница занималница", рисуване и приложни изкуства - 16лв. / 2 часа, всяка събота от 10:00-12:00 или 12:00-14:00/</li>
      <li>Индивидуални уроци по български език и математика - 20лв./час</li>
      <li>Индивидуални уроци по английски език-25лв./час</li>
    </ul>
    
    <br><br>
    *Месечната такса се заплаща от 1-5 число на текущия месец, включва полудневна занималня, взимане и водене на детето от и до училище, не се възстановява при отсъствие<br>
    
    *Седмичната такса се заплаща в началото на всяка седмица, включва полудневна занималня, взимане и водене на детето от и до училище.</p>`

    const contactsHTML = 
    `<h1>Контакти</h1><p>Служебен телефон  0889 656789 <br><br>

    кв. Чайка бл. 189 / до бл. 23 / <br><br>

    Е-mail - igralnica1@gmail.com <br><br>

    Facebook - <a href="https://www.facebook.com/IgralnicaZanimalnica">Игралница-занималница</a><br><br>

    Николина Богданова - управител, учител, утешител, укротител и разрешител на всякакви проблеми <br>
    0877504508 <br><br>

    Росица Георгиева - управител, учител, умиротворител,търсач на изгубени домашни и др. <br>
    0887 779783<br><br>

    Теодора Скорчева-Хараланова - художник и ръководител на Арт студиото <br>
    0888 769508</p>`

    const schoolZanimalnicaHTML = 
    `<p>Детски център ”Игралница занималница”, предлага училищна занималня за ученици от 1 до 5  клас, както и за деца от подготвителните групи към училищата.</p>

    <p>Близо до нас са: ОУ „Захари Стоянов“, ОУ “Георги Сава Раковски, VII СУ “Найден Геров”;ОУ"Васил Друмев"</p>
    
    <p>Организираме взимане и водене на децата от и до училище, подготовка на уроци и домашни, както и допълнителни занимания и упражнения по учебния материал. Предлагаме топъл обяд. Всеки ден  осигуряваме на децата време за отдих и игри в морската градина.</p>
    
    <p>Обичаме  приложните изкуства и художествените проекти. </p>
    
    <p>Отбелязваме подобаващо рождените и празнични дни.</p>
    
    <p>Работим от 8 до 18ч., в зависимост от училищната заетост на децата, в малки групи с до 8 деца на един учител.</p> 
    
    <p>Преподавателите ни са специалисти с дългогодишен опит в областта на хуманитарните и точните науки, изкуствата и музиката.</p>
    
    <p>Разполагаме с просторни и светли учебни стаи, зала за игра, богата детска библиотека и огромен избор от учебни помагала.</p>
    
    <p>Вярваме, че мечтите създават бъдеще. Насърчаваме децата да бъдат радостни без официален повод и ги подкрепяме в стремежа им винаги да са заети с нещо.</p>`

    const summerIgralnicaHTML = 
    `<h1>Лятна Игралница</h1>`

    const summerZanimalnicaHTML = 
    `<h1>Лятна Занималница</h1>`
    // End of HTML - Do not delete this line, generate_sitemap.py uses it.

    const adminHTML =
    `    <button id="btn-login" disabled="true">Log in</button>
    <button id="btn-logout" disabled="true">Log out</button>
    <div class="hidden" id="gated-content">
    <p>
      You're seeing this content because you're currently
      <strong>logged in</strong>.
    </p>
    <label>
      Access token:
      <pre id="ipt-access-token"></pre>
    </label>
    <label>
      User profile:
      <pre id="ipt-user-profile"></pre>
    </label>
  </div>`

    const mainContent = {
        '/': homeHTML,
        '/about': aboutHTML,
        '/services': servicesHTML,
        '/contacts': contactsHTML,
        '/school-zanimalnica': schoolZanimalnicaHTML,
        '/summer-igralnica': summerIgralnicaHTML,
        '/summer-zanimalnica': summerZanimalnicaHTML,
        '/admin': adminHTML,
        };
    
    const metaDescriptions = {
      '/': 'Добре дошли в Игралница-Занималница! Детски център и място за игра на вашето дете. Разгледайте нашите услуги.',
      '/about': 'Информация за служителите на занималнята. Каква квалификация имаме, с какво можем да помогнем на вашето дете и какво ни мотивира.',
      '/services': 'Информация за услугите които предлагаме. Какво е игралница, какво е занималница. Разликата между лятно и учебно време.',
      '/contacts': 'Телефон за връзка. Служебен, както и за всеки индивидуален учител. Имейл за връзка.',
      '/school-zanimalnica': 'Какво представлява училищната занималня. В какви дейности ще участва вашето дете и с какво ще се занимава през деня.',
      '/summer-igralnica': 'Какво представлява лятната игралница. Какво сме ви приготвили за това лято и каква е настоящата програма.',
      '/summer-zanimalnica': 'Какво представлява лятната занималня. В какви дейности ще участва вашето дете и с какво ще се занимава през деня.',
      '/admin': 'Администраторски панел за служители на занималнята. Не е публично достъпно.',
      };
    
    const navbarHTML = 
      `
      <nav class="navbar" id="desktopNavbar">
        <a href="/" class="navlink">Начало</a>
        <a href="/about" class="navlink">За Нас</a>
        <a href="/services" class="navlink">Услуги</a>
        <a href="/contacts" class="navlink">Контакти</a>
        <a href="/school-zanimalnica" class="navlink">Училищна Занималня</a>
        <a href="/summer-igralnica" class="navlink">Лятна Игралница</a>
        <a href="/summer-zanimalnica" class="navlink">Лятна Занималница</a>
      </nav>`

    const hamburger = 
    `
    <svg xmlns="http://www.w3.org/2000/svg" alt="Hamburger menu button" id="hamburgerIcon" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>`
    
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
      const navLinks = document.querySelectorAll(".navlink");
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
        } else if (i===5) {
          currentColor = orange
          currentX = -500
        } else if (i===6) {
          currentColor = purple
          currentX = -400 // just looks better
          if (onMobile()) {
            currentX = -50
          };
          
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
          var encodedSVG = window.btoa(cloudSVG('white', 'white', '4vw','60%'));
          // Color of inside text
          navLinks[i].style.backgroundImage = "url(data:image/svg+xml;base64," + encodedSVG + ")";
          navLinks[i].style.color = RGB(rgbColor, -10);
          // When mouse out of cloud
          navLinks[i].addEventListener('mouseout', event => {
            navLinks[i].style.animationPlayState = 'running';
            navLinks[i].style.color = RGB(rgbColor, -10);
            navLinks[i].style.filter = `drop-shadow(0vw -0.4vw 0.35vw rgb(255, 255, 255)) drop-shadow(-0.2vw 0.2vw 0.3vw lightgray) drop-shadow(0vw 0.4vw 0.35vw rgb(255, 255, 255))`;
          });
          // When mouse inside of cloud
          navLinks[i].addEventListener('mouseover', event => {
            navLinks[i].style.animationPlayState = 'paused';
            navLinks[i].style.color = RGB(rgbColor, -70);
            navLinks[i].style.width = parseFloat(navLinks[i].style.width.replaceAll('vw', '')) + 0.8 + 'vw';
            navLinks[i].style.filter = `drop-shadow(-0.2vw -0.2vw 0.35vw ${RGB(rgbColor, -20)}) drop-shadow(0.2vw 0.2vw 0.35vw ${RGB(rgbColor)}) drop-shadow(-0.3vw -0.3vw 0.35vw white) drop-shadow(0.3vw 0.3vw 0.35vw white)`
          });
          // Positioning
          let startingPosition = 6 + currentX/100;
          navLinks[i].style.top = startingPosition + 'vw';
          navLinks[i].style.padding =  5 - currentX/-250 + 'vw';
          document.getElementsByClassName('logo-container')[0].style.marginBottom = '-4.5vw';
          document.getElementsByTagName('main')[0].style.marginTop = '-3vw';
          function vwToPx(vw) {
            return (vw * window.innerWidth) / 100;
          }
          // Animate clouds
          if (i % 2  == 0) { // up
            navLinks[i].style.setProperty('--translationStart', '0.25vw');
            navLinks[i].style.setProperty('--translationEnd', '-0.25vw');
            navLinks[i].style.animation = 'MoveUpDown 3s linear infinite alternate';
          } else { // down
            navLinks[i].style.setProperty('--translationStart', '-0.25vw');
            navLinks[i].style.setProperty('--translationEnd', '0.25vw');
            navLinks[i].style.animation = 'MoveUpDown 3s linear infinite alternate';
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
      if (onMobile()) {
        navbarInnerHTML  = navbarInnerHTML.replaceAll('desktopNavbar', 'mobileNavbar');
        navbarInnerHTML  = navbarInnerHTML.replaceAll('navlink', 'navlink pencil');
        let header = document.getElementsByTagName('header')[0];
        header.id = 'mobileHeader';
        header.innerHTML = '<div id="hamburgerContainer">' + header.innerHTML + hamburger + '</div>'
      };
      // hidden due to layout shift
      let kiteimg = document.getElementsByClassName("kite-logo")[0]
      kiteimg.style.visibility = "visible";
      let logoimg = document.getElementsByClassName("logo-img")[0]
      logoimg.hidden = false;

      let header = document.getElementsByTagName("header")[0]
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
    const navLinks = document.querySelectorAll('nav a');
    const content = document.querySelector('main');

    function updateTitle(pathname) {
        // Document title is the navbar text + company name
        let navbarContent = document.querySelector(`a[href="${pathname}"]`).textContent;
        document.title = navbarContent + " | Игралница-Занималница"
    }

    function updateDescription(pathname) {
      document.getElementsByTagName('meta')["description"].content = metaDescriptions[pathname];
    }

    function navigateTo(url) {
        let urlObject = new URL(url);
        let path = urlObject.pathname;
        // Change the HTML of the main content
        content.innerHTML = mainContent[path];
        updateTitle(path);
        updateDescription(path);
        // Modify browser's history and change the URL without triggering a full page reload
        if (!shouldParseResult) {
            window.history.pushState({}, '', path);
        }
        if (path=='/admin') {
            const event = new Event("adminAccess");
            document.dispatchEvent(event);
          }
        

    }
    
    // For each nav button click, change content
    navLinks.forEach(link => {
        link.addEventListener('click', event => {
        event.preventDefault();
        if (onMobile()) {
          toggleHamburger()
        };
        navigateTo(link.href);
        });
    });

    

    // Update the page content based on the URL
    navigateTo(window.location);

    // Update the current year in the footer
    const footerHTML = `<p>&copy; ${new Date().getFullYear()} Игралница-Занималница</p>`;
    const footer = document.getElementsByTagName('footer')[0];
    footer.innerHTML = footerHTML;
    footer.hidden = false;
});

