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

    function homeImages(show=true) {
      if (!show) {
        return ``
      };
      if (onMobile()) {
        return `<div class="w3-content w3-display-container slideshow-container">
                  <div class="imageBtnContainer">
                    <img class="mySlides fade" src="images/home/igralnica_inside.jpg">
                    <img class="mySlides fade" src="images/home/twister.jpg">
                    <img class="mySlides fade" src="images/home/rope.jpg">
                    <img class="mySlides fade" src="images/home/archer.jpg">
                    <img class="mySlides fade" src="images/home/pool.jpg">
                    <img class="mySlides fade" src="images/home/forest_smile.jpg">
                    <button class="w3-button w3-black prev">&#10094;</button>
                    <button class="w3-button w3-black next">&#10095;</button>
                  </div>
                  <br>
                  <div style="text-align:center"> 
                  <span class="dot"></span>
                  <span class="dot"></span> 
                  <span class="dot"></span> 
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                </div>`
      } else {
        return `<div class="row">
                  <div class="column">
                    <img src="images/home/igralnica_inside.jpg">
                    <img src="images/home/horo.jpg">
                    <img src="images/home/cooking.jpg">
                    <img src="images/home/forest_smile.jpg">
                  </div>
                  <div class="column">
                    <img src="images/home/igralnica_entrance_baloons.jpg">
                    <img src="images/home/forest.jpg">
                    <img src="images/home/halloween.jpg">
                    <img src="images/home/archer.jpg">
                  </div>
                  <div class="column">
                    <img src="images/home/twister.jpg">
                    <img src="images/home/pool.jpg">
                    <img src="images/home/crafts.jpg">
                    <img src="images/home/rope.jpg">
                  </div>
                  <div class="column">
                    <img src="images/home/tea.jpg">
                    <img src="images/home/medved.jpg">
                    <img src="images/home/worker.jpg">
                    <img src="images/home/neptune.jpg">
                  </div>
                </div>`
      };
    };

    const hamburger = 
    `
    <svg xmlns="http://www.w3.org/2000/svg" alt="Hamburger menu button" id="hamburgerIcon" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>`
    
    const chevronDown = 
    `<svg xmlns="http://www.w3.org/2000/svg"  alt="Chevron expand button" id="chevronDownIcon" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`
    
    const forSignUpAndInformation = `<p>Записване и информация - 0889656789, 0887779783 или на място - ж.к.Чайка, бл. 189, от понеделник до петък, от 8:00 до 18:00.</p>`

    
    // Start of HTML
    const homeHTML = 
    `
    <div class="contentContainer">
        <p>Детски център "Игралница Занималница", предлага училищна занималня за ученици от 1 до 5 клас, както и за деца от подготвителните групи към училищата.</p> 
        ${homeImages(!onMobile())}
        <p>Преподавателите ни са специалисти с дългогодишен опит в областта на хуманитарните и точните науки, изкуствата и музиката.</p>
        <p>Вярваме, че мечтите създават бъдеще. Насърчаваме децата да бъдат радостни без официален повод и ги подкрепяме в стремежа им винаги да са заети с нещо.</p>
        
        ${homeImages(onMobile())}
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
          <li>Арт студио “Игралница Занималница”- рисуване и приложни изкуства в събота с Теди Скорчева</li>
          <li>Уроци и курсове по български и английски език</li>
          <li>Уроци и курсове по математика</li>
          <li>Логопедична консултация и помощ</li>
        </ul></p>

        <p><q>Работата е вдъхновение. Да сме навън е приключение. Книгата е удоволствие. Детето е човече с голяма мечта и личен талант, който уважаваме. Обичаме да четем. Правим го заедно и знаем, че буквите разкриват тайни. Призванието ни е да бъдем Учители.</q>
          - Илиана Йорданова, основател на "Игралница Занималница"</p>
      
    </div>


    `
    const aboutHTML = 
    `<div style="display: flex;align-items: center;flex-direction: column;">
        <h3 style="font-size: 100%; white-space: nowrap; margin: 0vw 3vw; margin-top: 2vw;">Здравейте, ние сме Нина и Роси!</h3>
        <div style="margin: 2vw 0vw; display: flex;align-items: center;flex-wrap: wrap;justify-content: center;">
          <img src="images/about/nina.jpg" title="Нина" class="profileImage framed" alt="Снимка на Нина" style="display: inline;">
          <img src="images/about/rosi.jpg" title="Роси" class="profileImage framed" alt="Снимка на Роси" style="display: inline;">
        </div>
        <div>
          <p>За нас е удоволствие да  работим и помагаме за решаването на безбройните въпроси при обучението и възпитанието на детето.</p>
          <p>Ние сме  учители, утешители, възпитатели, придружители, приятели, вдъхновители и какво ли още не. Очакваме ви с нетърпение  да  се учим, развиваме и забавляваме заедно.</p> 
          <p>Вярваме в децата и техните  мечти и правим всичко по силите си за да се чувстват подкрепени и окрилени.</p>
          <p>Насърчаваме четенето и обичаме  интелектуалните игри, провокиращи въображението и мисленето.</p>
          <p>Държим на точността, справедливостта, доброто възпитание и позитивното общуване.</p>
          <p>Не забравяме празниците и рождените  дни и обичаме ваканциите и приключенията.</p>
          <p>Важно за нас е родителите да ни имат доверие, да се чувстват спокойни, улеснени и сигурни, че детето им ще е щастливо, подготвено и устремено.</p>
        </div>
      </div>`

    const contactsHTML = 
    `<p>Николина Богданова - управител, учител, утешител, укротител и разрешител на всякакви проблеми <br>
    0877 504508</p>

    <p>Росица Георгиева - управител, учител, умиротворител, търсач на изгубени домашни и др. <br>
    0887 779783</p>

    <p>Теодора Скорчева-Хараланова - художник и ръководител на Арт студиото <br>
    0888 769508</p>

    <p>Служебен телефон  0889 656789</p>

    <p>Е-mail - igralnica1@gmail.com</p>

    <p>Facebook - <a href="https://www.facebook.com/IgralnicaZanimalnica">Игралница Занималница</a></p>
    <p>кв. Чайка бл. 189 / до бл. 23 /</p>
    <iframe class="googleMap framed" src="https://www.google.com/maps/embed?pb=!4v1694336757849!6m8!1m7!1ssvKDniCXQ2BeTGZgkuGLZQ!2m2!1d43.21386349649769!2d27.93854024952334!3f3.1267098522612784!4f-0.9822007946029316!5f1.9587109090973311" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <iframe class="googleMap framed" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7990.307874775659!2d27.93378972147678!3d43.214117923401915!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a454401d8909c1%3A0xe407984e20a12751!2z0JjQs9GA0LDQu9C90LjRhtCwINCX0LDQvdC40LzQsNC70L3QuNGG0LA!5e0!3m2!1sbg!2sbg!4v1694365208587!5m2!1sbg!2sbg" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    const schoolZanimalnicaHTML = 
    `<h1>Училищна Занималня</h1><p>От 15-ти Септември до 31-ви Май предламе училищна занималня за ученици от 1 до 5  клас, както и за деца от подготвителните групи към училищата.</p>

    <p>Близо до нас са: ОУ „Захари Стоянов“, ОУ “Георги Сава Раковски, VII СУ “Найден Геров”, ОУ “Васил Друмев”</p>
    
    <p>Организираме взимане и водене на децата от и до училище, подготовка на уроци и домашни, както и допълнителни занимания и упражнения по учебния материал. Предлагаме топъл обяд. Всеки ден  осигуряваме на децата време за отдих и игри в морската градина.</p>
    
    <p>Обичаме  приложните изкуства и художествените проекти. </p>
    
    <p>Отбелязваме подобаващо рождените и празнични дни.</p>
    
    <p>Работим от 8:00 до 18:00, в зависимост от училищната заетост на децата, в малки групи с до 8 деца на един учител.</p> 
    
    <p>Преподавателите ни са специалисти с дългогодишен опит в областта на хуманитарните и точните науки, изкуствата и музиката.</p>
    
    <p>Разполагаме с просторни и светли учебни стаи, зала за игра, богата детска библиотека и огромен избор от учебни помагала.</p>
    
    <p>Вярваме, че мечтите създават бъдеще. Насърчаваме децата да бъдат радостни без официален повод и ги подкрепяме в стремежа им винаги да са заети с нещо.</p>
    <p>
    Полудневно посещение<br>
    <ul>
      <li>Месечна такса - 360 лв./20 работни дни / Не се възстановява при отсъствие на детето</li>
      <li>Седмична такса - 100лв.</li>
      <li>Дневна такса - 25 лв.</li>
      <li>Удължено работно време - 10 лв./час за всеки започнат час.</li>
      <li>Почасово - 8 лв./час</li>
      <li>Топъл обяд - 6 лв. на ден /заплаща се в началото на всяка седмица/</li>
    </ul>
    Целодневно посещение: 25лв./ден<br>
    Топъл обяд: 6лв.</p>
    <p>Допълнителни занимания:
    <ul>    
      <li>
        Арт студио "Игралница Занималница", рисуване и приложни изкуства - 20лв./2 часа, с включени материали
        <input type="checkbox" id="hiddenToggle"><label for="hiddenToggle" class="chevronContainer">${chevronDown}</label>
        <div class="hiddenContent">
          <p>Рисувайки малките деца стават по-наблюдателни, чувствителни и възпитават у себе си усет към красивото и любов към природата.</p>

          <p>При нас няма възрастови ограничения. Всеки е добре дошъл да се присъедини към групата, която се събира всяка събота от 10:00 до 12:00 часа е ръководена от художничката Теодора Скорчева.</p>                                        
          
          <p>Децата в студиото работят с различни материали и техники за да усетят широките възможности, които им дава изобразителното изкуство. Възможността да изразят себе си, своето усещане за света, своите чувства, мисли и мечти.</p>
          
          <p>С много старание рисуват с водни и темперни бои, сухи пастели и цветни моливи, рисуват върху стъкло и текстил, правят апликации с природни и други материали.</p>
          
          <p>Тези, на които им се отдава скулптурата, правят релефи от пластилин, които отливат от гипс, а бъдещите графици рисуват с туш и перо и правят линогравюра.</p>
          
          <p>Желаещите да кандидатстват след 4 и 7 клас в специализирано училище по изобразителни изкуства работят по изпитните задачи: натюрморт-етюд и фигурална композиция.</p>
          
          <p>Рисува се върху картон с размер 35/50 см.,за да може рисунките да участват в различни конкурси.</p>
          
          <p>В края на учебната година се провежда изложба, където всеки може да се полюбува на таланта и постиженията на малките художници.</p>
          
          <p>Част от изложбата  и участия в конкурси и награди можете да разгледате тук.</p>
        </div>
      </li>
      <li>Индивидуални уроци по български език и математика - 20лв./час</li>
      <li>Индивидуални уроци по английски език - 25лв./час</li>
    </ul> 
    </p>
    <p>
    *Месечната такса се заплаща от 1-5 число на текущия месец, включва полудневна занималня, взимане и водене на детето от и до училище, не се възстановява при отсъствие<br>
    
    *Седмичната такса се заплаща в началото на всяка седмица, включва полудневна занималня, взимане и водене на детето от и до училище.
    </p>`

    

    const summerIgralnicaHTML = 
    `<h1>Лятна Игралница</h1>

    <p>От 1-ви Юни до 14-ти Септември предлагаме целодневна приключенска програма за всички, които обичат забавленията, пътешествията и игрите на открито.</p>

    <p>Опознаваме света отблизо, защото опитът винаги е най-добрият учител.<br> 
    Правим екскурзии,посещаваме интересни места, изложби, музеи,забележителности.<br> 
    Гостуваме на библиотеката, творим красотички в различни работилнички.<br> 
    Правим походи в гората, катерим се, учим се да се ориентираме, плуваме и събираме слънце на плажа.
    </p>
    
    <p>Програмата е седмична и почти целия ден прекарваме навън. Децата си носят вода и храна за обяд и следобедна закуска.</p>

    <p>
      Сутрин се събираме в занималнята от 8:00 до 9:30, /ж.к. Чайка,vбл.189, на един подлез разстояние от морската градина/<br>

      10:00 тръгваме по програмата за деня и се връщаме в занималнята около 16:00<br>

      Изпращаме децата до 18:00<br>

      Подробна програма публикуваме всяка седмица в профила и страницата ни във Фейсбук, предвид метеороличната прогноза. При неподходящо време е възможна промяна в програмата за седмицата.
    </p>
    <p>
      Примерна програма за седмица:
      <ul style="list-style-type:none;">
        <li>/Понеделник / - Хайде да играем /игри и забавления в морската градина/</li>
        <li>/Вторник/ - Като Рицарите / парк - музей Владислав Варненчик/</li>
        <li>/Сряда/ - По следите на животните /Зоопарк Варна/</li>
        <li>/Четвъртък/ - Сладки приказки в библиотеката /Детски отдел на РБ”П.Славейков”/</li>
        <li>/Петък/ - Фотосафари /Побити камъни/</li>
      </ul>
    </p>
    
    <p>
    Цени:
      <ul style="list-style-type:none;">
        <li>Седмична такса - 100лв.</li>
        <li>Дневна такса: 25лв.</li>
        <li>Входни такси и транспорт се заплащат допълнително /25- 30 лв. за седмица/</li>
      </ul>
    </p>
    <p>
    Отстъпки:
      <ul style="list-style-type:none;">
        <li>10% от таксата за второ и трето дете от семейството</li>
        <li>10% при заплащане на месецна такса</li>
      </ul>
    </p>
    <p>
    При отсъствие на детето по болест или неотложни причини, може да се ползва деня /без допълнителните такси/, в следващите до 30 дни.
    Групи - до 20 деца.<br>
    Tранспорт с лицензиран автобус.
    </p>
    

    <p>Актуалната програма  за всяка седмица ще бъде публикувана <a href="https://www.facebook.com/IgralnicaZanimalnica">тук</a></p>

    <p>
    Местата, на които приключенстваме:
    <ul>
      <li>Природен парк "Златни пясъци"</li>
      <li>Маршрут "Домът на сойката"</li>
      <li>Вълшебната гора</li>
      <li>Морска гара и Южен плаж</li>
      <li>местност Боровец</li>
      <li>местност Царска чешма</li>
      <li>Виница / гората над Конна база /</li>
      <li>Конна база с. Доброглед</li>
      <li>местност Елен дере</li>
      <li>Маршрут "Яйла чешма"</li>
      <li>Музей на стъклото гр. Белослав / пътуване с влак и ферибот /</li>
      <li>Вълшебните извори</li>
      <li>Музей на мозайките гр.Девня</li>
      <li>Побити камъни</li>
      <li>с.Орешак</li>
      <li>местност Батова</li>
      <li>Екопарк "Св. Константин и Елена"</li>
      <li>Парк Аспарухово</li>
      <li>Парк-музей "Владислав Варненчик"</li>
      <li>Археологически музей</li>
      <li>Ферма с.Зорница</li>
    </ul>
    и още знайни и незнайни горички и полянки, на които геройски сме играли, щуряли и приключенствали.
    </p>
    ${forSignUpAndInformation}
    `

    const summerZanimalnicaHTML = 
    `<h1>Лятна Занималница</h1><p>От 1-ви Юни до 14-ти Септември предлагаме целодневна или полудневна занималня за всички, които искат да попълнят пропуски в учебния материал и да се подготвят добре за следващата учебна година.</p>

 

    <p>Тук се забавляваме, учим и играем. В спокойна и приятна среда на нашата база, на метри от Морската градина на град Варна. 
    Сутрешни занимания по четене, писане, математика и следобедни игри в Морската градина.</p>
    
    <p>Работното ни време е от понеделник до петък, от 8:00 до 18:00.</p>
    
     
    
     
    
    <p>Един примерен ден в Лятната занималница:<br>
    
    Сутрин в занималнята :
    <ol style="list-style-type:none;">
      <li>8:00 -10:00 - Посрещане на децата, свободни занимания, приложни дейности</li>
      <li>10:00 -12:00 - Занимания по математика, български език, английски език, четене / заниманията са по график за деня/</li>
      <li>12:00- 13:00 - Обяд /готвено меню, не е включен в общата такса/</li>
    </ol>
    
    Следобедна занималня:
    <ol style="list-style-type:none;">
      <li>13:00-16:00 - време за разходка, игри в Морската градина</li>
      <li>16:00-17:00 - занимания по интереси,четене на книжки, приложни дейности</li>
      <li>17:00-18-00 - изпращане на децата</li>
    </ol>
    
     
    <p>Целодневно посещение:
      <ul style="list-style-type:none;">
        <li>Седмична такса /пет дни/ - 100лв.</li>
        <li>Еднократно посещение - 25лв.</li>
      </ul>
    </p>
    
    <p>Полудневно посещение:
      <ul style="list-style-type:none;">
        <li>Седмична такса - 16лв.</li>
        <li>Еднократно посещение - 20лв</li>
      </ul>
    </p>

    <p>
      Обяд/Двустепенно меню/- 6лв.
    </p>
    ${forSignUpAndInformation}`
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
        '/училищна-занималня': schoolZanimalnicaHTML,
        '/лятна-игралница': summerIgralnicaHTML,
        '/лятна-занималница': summerZanimalnicaHTML,
        '/за-нас': aboutHTML,
        '/контакти': contactsHTML,
        '/admin': adminHTML,
        };
    
    const metaDescriptions = {
      '/': 'Добре дошли в Игралница Занималница! Детски център и място за игра на вашето дете. Разгледайте нашите услуги.',
      '/за-нас': 'Информация за служителите на занималнята. Каква квалификация имаме, с какво можем да помогнем на вашето дете и какво ни мотивира.',
      '/контакти': 'Телефон за връзка. Служебен, както и за всеки индивидуален учител. Имейл за връзка.',
      '/училищна-занималня': 'Какво представлява училищната занималня. В какви дейности ще участва вашето дете и с какво ще се занимава през деня.',
      '/лятна-игралница': 'Какво представлява лятната игралница. Какво сме ви приготвили за това лято и каква е настоящата програма.',
      '/лятна-занималница': 'Какво представлява лятната занималня. В какви дейности ще участва вашето дете и с какво ще се занимава през деня.',
      '/admin': 'Администраторски панел за служители на занималнята. Не е публично достъпно.',
      };
    
    const navbarHTML = 
      `
      <nav class="navbar" id="desktopNavbar">
        <a href="/" class="navlink">Начало</a>
        <a href="/училищна-занималня" class="navlink">Училищна Занималня</a>
        <a href="/лятна-игралница" class="navlink">Лятна Игралница</a>
        <a href="/лятна-занималница" class="navlink">Лятна Занималница</a>
        <a href="/за-нас" class="navlink">За Нас</a>
        <a href="/контакти" class="navlink">Контакти</a>
      </nav>`

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
        // HOME --START--
        if ((path=='/') & (onMobile())) {
          var slideIndex = 0;
          var slideShowTimeoutMiliseconds = 7000;
          showSlides();
          var slides,dots,slideShowTimeout;
          
          function showSlides() {
              var i;
              slides = document.getElementsByClassName("mySlides");
              dots = document.getElementsByClassName("dot");
              for (i = 0; i < slides.length; i++) {
                 slides[i].style.display = "none";  
              }
              slideIndex++;
              if (slideIndex> slides.length) {slideIndex = 1}    
              for (i = 0; i < dots.length; i++) {
                  dots[i].className = dots[i].className.replace(" active", "");
              }
              slides[slideIndex-1].style.display = "block";  
              dots[slideIndex-1].className += " active";
              slideShowTimeout = setTimeout(showSlides, slideShowTimeoutMiliseconds); // Change image every 7 seconds
          };
          
          function plusSlides(position) {
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
          };
          
          function currentSlide(index) {
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
          };
          document.getElementsByClassName('prev')[0].addEventListener('click', event => {
            plusSlides(-1);
            clearTimeout( slideShowTimeout );
            slideShowTimeout = setTimeout(showSlides, slideShowTimeoutMiliseconds);
          });
          document.getElementsByClassName('next')[0].addEventListener('click', event => {
            plusSlides(1);
            clearTimeout( slideShowTimeout );
            slideShowTimeout = setTimeout(showSlides, slideShowTimeoutMiliseconds);
          });

          document.querySelectorAll('.dot').forEach(el => {
            el.addEventListener('click', event => {
              currentSlide(index);
            });
          });
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

