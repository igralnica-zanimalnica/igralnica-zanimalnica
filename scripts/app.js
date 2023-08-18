document.addEventListener("adminAccess", updateUI);
document.addEventListener('DOMContentLoaded', function() {
    // Start of HTML
    const homeHTML = 
    `<h1>Начална страница</h1><p>Добре дошли в сайта на Игралница-Занималница!</p>`

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
        navbarInnerHTML  = navbarInnerHTML.replaceAll('navlink', 'burger');
        let header = document.getElementsByTagName('header')[0];
        header.id = 'mobileHeader';
        header.innerHTML = header.innerHTML + hamburger;
        header.innerHTML = '<div id="hamburgerContainer">' + header.innerHTML + '</div>'
      };
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
});

