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
    `<h1>Училищна Занималня</h1>`

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

