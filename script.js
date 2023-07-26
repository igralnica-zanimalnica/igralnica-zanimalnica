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
    `<h1>Услуги</h1>`

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
    // End of HTML

    const routes = {
        '/': homeHTML,
        '/about': aboutHTML,
        '/services': servicesHTML,
        '/contacts': contactsHTML,
        '/school-zanimalnica': schoolZanimalnicaHTML,
        '/summer-igralnica': summerIgralnicaHTML,
        '/summer-zanimalnica': summerZanimalnicaHTML,
        };
    

    const navLinks = document.querySelectorAll('nav a');
    const content = document.querySelector('main');

    function navigateTo(url) {
        let urlObject = new URL(url);
        let path = urlObject.pathname;
        content.innerHTML = routes[path];
        window.history.pushState({}, '', path);
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
    const footerHTML = `<p>&copy; ${new Date().getFullYear()} Игралница-Занималница. Всички права запазени.</p>`;
    const footer = document.getElementsByTagName('footer')[0];
    footer.innerHTML = footerHTML;
});