
function srcsetAttribute(imgPath, dim) {
  let format = imgPath.split('.').pop();
  let imgPathNoExt = imgPath.replaceAll(`.${format}`, '');
  return `${imgPathNoExt}@600${dim}.${format} 600w, ${imgPathNoExt}@1000${dim}.${format} 1000w, ${imgPathNoExt}@2000${dim}.${format} 2000w, ${imgPathNoExt}@3000${dim}.${format} 3000w`}

function imageEl(image, dir='', portrait=false, classes='') {
  let orientation= 'horizontal';
  let dim = 'w';
  if (portrait) {
    orientation = 'portrait';
    dim = 'h';
  };
  let imgPath = `${dir}${image['src']}`;
  return `<img class="${classes} ${orientation}" src="${imgPath}" 
  srcset="${srcsetAttribute(imgPath, dim)}" alt="${image['alt']}" 
  title="${image['title']}"
>`
}

function slideshow(images, dir='/', portrait=false) {
  let addClass = 'horizontal'
  if (portrait) {
    addClass = 'portrait'
  };
  let result = `<div class="w3-content w3-display-container slideshow-container"><div class="imageContainer">`
  images.forEach(image => {
    result += imageEl(image, dir, portrait, classes='mySlides fade')
  });
  result += 
  `<div class="btnContainer ${addClass}">
      <button aria-label="Покажи предишна снимка" class="w3-button prev">&#10094;</button>
      <div class="imageOverlay"></div>
      <button aria-label="Покажи следваща снимка" class="w3-button next">&#10095;</button>
    </div>
  </div>
  <br>
  <div class="dotContainer">`
  images.forEach(image => {
    result += `<span class="dot"></span>`
  });
  result += `</div></div>`
  return result
};



function additionalContent(content, about='') {
  return `
  <input type="checkbox" class="hiddenToggle"><button aria-label="Покажи повече информация за ${about}" class="chevronContainer" tabindex="0" focusable="true">${chevronDown}</button>
    <div class="hiddenContent">
      ${content}
    </div>`
};


const homeImages = [
  {src: "igralnica_inside.webp", alt: "Нина и децата в занималнята.", title: "В занималнята"},
  {src: "twister.webp", alt: "Деца играят на Туистър в занималнята.", title: "Туистър"},
  {src: "rope.webp", alt: "Деца се състезават да дърпат въже.", title: "Дърпане на въже"},
  {src: "archer.webp", alt: "Дете стреля с лък навън.", title: "Стрелба с лък"},
  {src: "pool.webp", alt: "Деца плуват щастливо в басейн.", title: "На басейн"},
  {src: "forest_smile.webp", alt: "Децата играят на рицари насред горичка.", title: "Рицари в гората"}
]

const summerIgralnicaImages = [
  {src: "knighthood.webp", alt: "Дете бива посвещавано в рицарство с меч.", title: "Рицарство"},
  {src: "neptune.webp", alt: "Деца на плажа играят морски игри, едно от тях облечено като Нептун с тризъбец в ръка.", title: "Нептун"},
  {src: "ferry.webp", alt: "Група деца насъбрали се пред прозорец, гледайки през него.", title: "Ферибот"},
  {src: "ostrich.webp", alt: "Деца се радват на щраус зад ограда.", title: "Щраус"},
  {src: "uno.webp", alt: "Група деца играят на Уно на кръгла маса в сянката на горичка.", title: "Уно"},
  {src: "zen.webp", alt: "Дете на люлееща се платформа в горичка заело медитативна позиция.", title: "Медитация в гората"}
]


const schoolZanimalnyaImages = [
  {src: "snowman.webp", alt: "Нина и няколко деца пред занималнята заедно със снежен човек.", title: "Снежен човек"},
  {src: "tea.webp", alt: "Нина сипва чай на децата в занималнята.", title: "Чай"},
  {src: "crafts.webp", alt: "Деца си играят с изработени от тях кукли в занималнята.", title: "Кукловоди"},
  {src: "halloween.webp", alt: "Деца облечени в костюми за Хелоуин в занималнята.", title: "Хелоуин"},
  {src: "cooking.webp", alt: "Децата приготвят вкусотии в занималнята.", title: "Готвачи"},
  {src: "bracelet.webp", alt: "Деца изработват гривнички в занималнята.", title: "Гривнички"}
]

const artStudioImages = [
  {src: "snowman.webp", alt: "Нина и няколко деца пред занималнята заедно със снежен човек.", title: "Снежен човек"},
  {src: "tea.webp", alt: "Нина сипва чай на децата в занималнята.", title: "Чай"},
  {src: "crafts.webp", alt: "Деца си играят с изработени от тях кукли в занималнята.", title: "Кукловоди"},
  {src: "halloween.webp", alt: "Деца облечени в костюми за Хелоуин в занималнята.", title: "Хелоуин"},
  {src: "cooking.webp", alt: "Децата приготвят вкусотии в занималнята.", title: "Готвачи"},
  {src: "bracelet.webp", alt: "Деца изработват гривнички в занималнята.", title: "Гривнички"}
]


const summerZanimalnicaImages = [
  {src: "igralnica_entrance_baloons.webp", alt: "Деца пред входа на занималнята се радват с балони в ръка.", title: "Добре дошли в Игралниза Занималница"},
  {src: "sea_garden_games.webp", alt: "Деца играят на камък ножица хартия в морската градина и се веселят.", title: "Игри в морската"},
  {src: "wizard_stories.webp", alt: "Нина прави фокуси на децата в занималнята.", title: "Фокусник"},
  {src: "rain_shelter.webp", alt: "Децата се крият под заслон докато вали в морската градина.", title: "Заслон"},
  {src: "drawing.webp", alt: "Момиче в занималнята си показва рисунката.", title: "Рисунки"},
  {src: "sea_garden_running.webp", alt: "Деца Се приготвят за бягане на стартовата линия в морската градина.", title: "Бягане в морската"}
]


const backpackText = `
<ol>
  <li>Вода - едно 500 мл шише е достатъчно, защото почти винаги има къде да налеем вода. Предупреждаваме, когато сме на място без вода</li>
  <li>Сандвичи или нещо любимо за гризкане</li>
  <li>Влажни и сухи кърпички</li>
  <li>Торбичка за отпадъци</li>
  <li>Резервна тениска</li>
  <li>Дълъг клин или панталон в дните, когато сме на езда&nbsp</li>
  <li>Дъждобран</li>
  <li>Препарат против ухапване от комари</li>
  <li>Крем или лосион против слънчево изгаряне</li>
  <li>Добро настроение</li>
  ...и шапка на главата :)
</ol>
`
const foodText = `
<p>Хубаво е сандвичите да са с дълготраен колбас, кашкавал, сирене, топено сирене, зеленчуци. Моля избягвайте комбинациите с лютеница, майонеза и кетчуп, защото предизвикват лееееки затруднения в изяждането, гарнирани с чудесни петна. Запечените, затворени сандвичи са много вкусни и по обяд. Често децата носят и харесват различни комбинации от месца, печени на скара. Кюфтета и кебапчета не издържат на жегата. </p>
<p>Всякакви вкусотийки като бисквитки, солети, соленки, малки банички, кроасанчета са много подходящи за  хапване по време на почивките. Колкото и да са обичани от децата, шоколадовите вафли, сухи пасти с шоколадова глазура и всички техни производни, не са особено подходящи, защото в топлите дни има опасност да се окажем с шоколад почти на всеки квадратен сантиметър от нас.</p>
<p>Плодове и зеленчуци - аз често си слагам обелена и нарязана краставица и никога не е била от нещата, които са се връщали в края на деня. Морков, ябълка, твърди плодове или пък кайсии, праскови, но в подходяща кутийка. Миналото лято хит сред децата бяха малките кутийки с царевица на Бондюел, които отваряха и хапваха, без опасност от разваляне.</p>
<p>В Jumbo открих и редовно си купувам компактни кутии с много отделения, в които събирам и сандвич и всички гарнитури без да се смесват.</p>
<p>Събирам оригинални идеи за хапване, подходящо за пикник, които да публикуваме тук за облекчение на всички, участващи в организацията на приключенците :)</p>
`
const clothingText = `
<p>В началото на седмицата всеки ще се запознае с програмата. Хубаво е в дните с екскурзии туристите ни да са с дълги панталони или клинове (или да имат такива в раниците ) и да предпочетат маратонките и гуменките пред сандалите.</p>
`

const artStudioText = `<br>
  <div class="row">
    <div class="column">
    ${imageEl({
      src: "child_with_award.webp",
      alt: "Нина и няколко деца пред занималнята заедно със снежен човек.",
      title: "Снежен човек"
      },
    dir='images/school-zanimalnya/art-studio/',
    portrait=true)
    }

    ${imageEl({
      src: "drawings_1.webp",
      alt: "Нина сипва чай на децата в занималнята.",
      title: "Чай"
      },
    dir='images/school-zanimalnya/art-studio/',
    portrait=false)
    }
    
    </div>
    <div class="column">
    ${imageEl({
      src: "pilot_drawing.webp",
      alt: "Деца си играят с изработени от тях кукли в занималнята.",
      title: "Кукловоди"
      },
    dir='images/school-zanimalnya/art-studio/',
    portrait=false)
    }

    ${imageEl({
      src: "child_pointing.webp",
      alt: "Деца си играят с изработени от тях кукли в занималнята.",
      title: "Кукловоди"
      },
    dir='images/school-zanimalnya/art-studio/',
    portrait=true)
    }
    
    </div>
    <div class="column">
    ${imageEl({
      src: "child_with_award_and_drawings.webp",
      alt: "Деца си играят с изработени от тях кукли в занималнята.",
      title: "Кукловоди"
      },
    dir='images/school-zanimalnya/art-studio/',
    portrait=true)
    }

    ${imageEl({
      src: "drawings_2.webp",
      alt: "Деца си играят с изработени от тях кукли в занималнята.",
      title: "Кукловоди"
      },
    dir='images/school-zanimalnya/art-studio/',
    portrait=false)
    }
    
    </div>
  </div>
  <p>Рисувайки малките деца стават по-наблюдателни, чувствителни и възпитават у себе си усет към красивото и любов към природата.</p>
  <p>При нас няма възрастови ограничения. Всеки е добре дошъл да се присъедини към групата, която се събира всяка събота от 10:00 до 12:00 часа е ръководена от художничката Теодора Скорчева.</p>                                        
  
  <p>Децата в студиото работят с различни материали и техники за да усетят широките възможности, които им дава изобразителното изкуство. Възможността да изразят себе си, своето усещане за света, своите чувства, мисли и мечти.</p>
  
  <p>С много старание рисуват с водни и темперни бои, сухи пастели и цветни моливи, рисуват върху стъкло и текстил, правят апликации с природни и други материали.</p>
  
  <p>Тези, на които им се отдава скулптурата, правят релефи от пластилин, които отливат от гипс, а бъдещите графици рисуват с туш и перо и правят линогравюра.</p>
  
  <p>Желаещите да кандидатстват след 4 и 7 клас в специализирано училище по изобразителни изкуства работят по изпитните задачи: натюрморт-етюд и фигурална композиция.</p>
  
  <p>Рисува се върху картон с размер 35/50 см.,за да може рисунките да участват в различни конкурси.</p>
  
  <p>В края на учебната година се провежда изложба, където всеки може да се полюбува на таланта и постиженията на малките художници.</p>

`
const headerEl = 
`<div class="logo-container" role="banner"> 
<svg id="kite" class="kite-logo" data-name="kite" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 342.19 160.3" visibility="hidden">
    <path class="kite-inner-border" d="M101,360a646.42,646.42,0,0,1,19,81c-24.49-8.72-50.16-17.12-77-25q-16.18-4.75-32-9a348.3,348.3,0,0,0,2-41c-.12-12.25-.88-23.63-2-34q9.84-1.11,20-2c20.48-1.79,40.17-2.73,59-3Q95.73,342.77,101,360Zm5,65a508.45,508.45,0,0,0-13-55c-3.45-11.68-7.17-22.69-11-33-8.92.08-18.26.39-28,1-11.24.7-21.92,1.74-32,3q.7,8.69,1,18a360.49,360.49,0,0,1-1,40q9.41,2.36,19,5C64,410.36,85.67,417.46,106,425Z" transform="translate(-9 -325)"/>
    <path class="kite-lower-half" d="M93,370a508.45,508.45,0,0,1,13,55c-20.33-7.54-42-14.64-65-21q-9.6-2.65-19-5l60-62C85.83,347.31,89.55,358.32,93,370Z" transform="translate(-9 -325)"/>
    <path class="kite-upper-half" d="M82,337,22,399a360.49,360.49,0,0,0,1-40q-.29-9.31-1-18c10.08-1.26,20.76-2.3,32-3C63.74,337.39,73.08,337.08,82,337Z" transform="translate(-9 -325)"/>
    <path class="kite-outer-border" d="M11,332q9.84-1.11,20-2c20.48-1.79,40.17-2.73,59-3q5.73,15.76,11,33a646.42,646.42,0,0,1,19,81c-24.49-8.72-50.16-17.12-77-25q-16.18-4.75-32-9a348.3,348.3,0,0,0,2-41C12.88,353.75,12.12,342.37,11,332Z" transform="translate(-9 -325)"/>
    <path class="kite-tail" d="M351.08,452.18c-31.65,15.15-76.66,34.45-111.92,33.05-4.9-.35-10.12-1.28-14.15-4.35-2.74-2-4.27-5.15-5.94-8-5.42-9.89-14.27-17.38-25.23-20.24a43.81,43.81,0,0,0-27.65.87c-6.21,2.18-12,5.58-18.72,6.68-10.7,1.86-21.17-5-26.44-14a16.46,16.46,0,0,1-2-5c-1.18-4.8-2.07-9.62-2.92-14.46-1.72-9.62-3.07-19.26-5.38-28.75-.76-3.15-1.59-6.3-2.45-9.44a.2.2,0,0,1,.38-.12c1.2,3,2.3,6.11,3.31,9.21s2,6.24,2.78,9.41c2.75,10.76,5,22.49,7.87,33.18,1.92,6.84,9,13,15.51,15.07,5.93,2.06,11.81.29,17.52-2,6.08-2.45,12.42-5.07,19.08-5.85,13.44-1.4,27.56,2.85,37.06,12.55,4.76,4.64,7.72,10.76,10.91,16.39,2.81,4.92,8.75,6.83,14.11,7.35,13.73,1.14,27.28-2.92,40.37-6.64,12.42-3.67,24.74-7.73,37-12.05s24.44-8.86,36.72-13.24a.2.2,0,0,1,.16.36Z" transform="translate(-9 -325)"/>
    <circle class="kite-eyes" cx="45" cy="30" r="5"/>
    <circle class="kite-eyes" cx="29" cy="46" r="5"/>
    <path class="kite-mouth" d="M60.53,394.41c9.88,1.31,18.68-6,17.87-16.14a20.13,20.13,0,0,0-.59-4c4.9,11.65-5,23.29-17.28,20.13Z" transform="translate(-9 -325)"/>
</svg>
<a href="/">
  <img hidden
  srcset="images/logo@0.5x.png 620w, images/logo@0.75x.png 930w, images/logo@1.5x.png 1860w, images/logo@2x.png 2481w, images/logo@3x.png 3721w, images/logo@4x.png 4961w"
  src="images/logo.png"
  alt="Лого на Игралница Занималница"
  class="logo-img"
  width="1241px"
  height="180px"
  />
</a>
</div>`

const hamburger = 
`
<svg xmlns="http://www.w3.org/2000/svg" alt="Hamburger menu button" id="hamburgerIcon" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
<path class="hamburgerLines" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>`

const chevronDown = 
`<svg xmlns="http://www.w3.org/2000/svg" alt="Бутон за показване на скрито съдържание" id="chevronDownIcon" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`

const forSignUpAndInformation = `<p style="clear: both;"><i>Записване и информация - 0889656789, 0887779783 или на място - гр. Варна ж.к. Чайка, бл. 189, от понеделник до петък, от 8:00 до 18:00.</i></p>`


// Start of HTML
const homeHTML = 
`<link rel="preload" fetchpriority="high" as="image" href="images/home/${homeImages[0]}" imagesrcset="${srcsetAttribute('images/home/' + homeImages[0]['src'], 'w')}" type="image/webp">
<div class="contentContainer">
    <p class="centered">Детски център "Игралница Занималница", предлага училищна занималня за ученици от 1 до 5 клас, както и за деца от подготвителните групи към училищата.</p> 
    <p class="centered">Преподавателите ни са специалисти с дългогодишен опит в областта на хуманитарните и точните науки, изкуствата и музиката.</p>
    <p class="centered">Вярваме, че мечтите създават бъдеще. Насърчаваме децата да бъдат радостни без официален повод и ги подкрепяме в стремежа им винаги да са заети с нещо.</p>

    ${slideshow(homeImages, dir='images/home/', portrait=false)}


    <h4>В основната ни програма:</h4>
    <p>
    <ul>
      <li>Помагаме за решаване на задачите, поставени в училище</li>
      <li>Развиваме в децата уменията за самоподготовка и заедно проверяваме готови ли сме за утрешния ден</li>
      <li>Обогатяваме знанията с допълнителни занятия и учебни игри</li>
      <li>Помагаме в подготовката по английски, немски и руски език;</li>
      <li>Работим в малки групи с до 8 деца на един учител</li>
      <li>С индивидуални програми за работа развиваме потенциала на всяко дете</li>
      <li>Насърчаваме уменията за общуване и създаване на приятелства</li>
      <li>Осигуряваме транспорт от и до училище с график, удобен за всяко дете</li>
      <li>Предлагаме топъл обяд</li>
      <li>Обичаме рождените дни и не пропускаме важните празнични дати</li>
      <li>В училищната ваканция предлагаме целодневна приключенска програма, без това да натоварва допълнително семейния бюджет</li>
    </ul></p>
    <br>
    <h4>Допълнителна програма:</h4>
    <p>
    <ul>
      <li>Арт студио “Игралница Занималница”- рисуване и приложни изкуства в събота с Теди Скорчева</li>
      <li>Уроци и курсове по български и английски език</li>
      <li>Уроци и курсове по математика</li>
      <li>Логопедична консултация и помощ</li>
    </ul></p>

    <p class="centered" style="clear: both;"><q><i>Работата е вдъхновение. Да сме навън е приключение. Книгата е удоволствие. Детето е човече с голяма мечта и личен талант, който уважаваме. Обичаме да четем. Правим го заедно и знаем, че буквите разкриват тайни. Призванието ни е да бъдем Учители.</i></q>
      - Илиана Йорданова, основател на "Игралница Занималница"</p>
  
</div>`

const aboutHTML = 
`<div style="display: flex;align-items: center;flex-direction: column;">
    <h3 style="font-size: 100%; white-space: nowrap; margin: 0vw 3vw; margin-top: 2vw;">Здравейте, ние сме Нина и Роси!</h3>
    <div style="margin: 2vw 0vw; display: flex;align-items: center;flex-wrap: wrap;justify-content: center;">
      <img src="images/about/nina.webp" title="Нина" class="profileImage framed framedLeft" alt="Снимка на Нина" style="display: inline;">
      <img src="images/about/rosi.webp" title="Роси" class="profileImage framed framedRight" alt="Снимка на Роси" style="display: inline;">
    </div>
    <div style="text-align: center;">
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
`<p><b>Николина Богданова</b> - управител, учител, утешител, укротител и разрешител на всякакви проблеми <br>
0877 504508</p>

<p><b>Росица Георгиева</b> - управител, учител, умиротворител, търсач на изгубени домашни и др. <br>
0887 779783</p>

<p><b>Теодора Скорчева-Хараланова</b> - художник и ръководител на Арт студиото <br>
0888 769508</p>

<p>Служебен телефон  0889 656789</p>

<p>Е-mail - igralnica1@gmail.com</p>

<p>Facebook - <a href="https://www.facebook.com/IgralnicaZanimalnica">Игралница Занималница</a></p>
<p>Гр. Варна кв. Чайка бл. 189 / до бл. 23 /</p>
<iframe title="Занималнята от Google Street view" class="googleMap framed framedLeft" src="https://www.google.com/maps/embed?pb=!4v1694336757849!6m8!1m7!1ssvKDniCXQ2BeTGZgkuGLZQ!2m2!1d43.21386349649769!2d27.93854024952334!3f3.1267098522612784!4f-0.9822007946029316!5f1.9587109090973311" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>
<iframe title="Занималнята В Google Maps" class="googleMap framed framedRight" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7990.307874775659!2d27.93378972147678!3d43.214117923401915!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a454401d8909c1%3A0xe407984e20a12751!2z0JjQs9GA0LDQu9C90LjRhtCwINCX0LDQvdC40LzQsNC70L3QuNGG0LA!5e0!3m2!1sbg!2sbg!4v1694365208587!5m2!1sbg!2sbg" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>`

const schoolZanimalnicaHTML = 
`<link rel="preload" fetchpriority="high" as="image" href="images/home/${schoolZanimalnyaImages[0]}" imagesrcset="${srcsetAttribute('images/school-zanimalnya/' + schoolZanimalnyaImages[0]['src'], 'h')}" type="image/webp">
<p class="centered">От 15-ти Септември до 31-ви Май предламе училищна занималня за ученици от 1 до 5  клас, както и за деца от подготвителните групи към училищата.</p>

<p class="centered">Близо до нас са: ОУ „Захари Стоянов“, ОУ “Георги Сава Раковски”, VII СУ “Найден Геров”, ОУ “Васил Друмев”</p>

<p class="centered">Организираме взимане и водене на децата от и до училище, подготовка на уроци и домашни, както и допълнителни занимания и упражнения по учебния материал. Предлагаме топъл обяд. Всеки ден  осигуряваме на децата време за отдих и игри в морската градина.</p>

${slideshow(schoolZanimalnyaImages, dir='images/school-zanimalnya/', portrait=true)}

<p class="centered">Обичаме  приложните изкуства и художествените проекти. </p>

<p class="centered">Отбелязваме подобаващо рождените и празнични дни.</p>

<p class="centered">Работим от 8:00 до 18:00, в зависимост от училищната заетост на децата, в малки групи с до 8 деца на един учител.</p> 

<p class="centered">Преподавателите ни са специалисти с дългогодишен опит в областта на хуманитарните и точните науки, изкуствата и музиката.</p>

<p class="centered">Разполагаме с просторни и светли учебни стаи, зала за игра, богата детска библиотека и огромен избор от учебни помагала.</p>

<h4>Полудневно посещение:</h4>
<p>
<ul>
  <li>Месечна такса - 360 лв./20 работни дни / Не се възстановява при отсъствие на детето</li>
  <li>Седмична такса - 100лв.</li>
  <li>Дневна такса - 25 лв.</li>
  <li>Удължено работно време - 10 лв./час за всеки започнат час.</li>
  <li>Почасово - 8 лв./час</li>
  <li>Топъл обяд - 6 лв. на ден /заплаща се в началото на всяка седмица/</li>
</ul>
Целодневно посещение: 25лв./ден
</p>
<div></dv>
<h4>Допълнителни занимания:</h4>
<p>
<ul>    
  <li>
    Арт студио "Игралница Занималница", рисуване и приложни изкуства - 20лв./2 часа, с включени материали
    ${additionalContent(artStudioText, "арт студио Игралница Занималница")}
  </li>
  <li>Индивидуални уроци по български език и математика - 20лв./час</li>
  <li>Индивидуални уроци по английски език - 25лв./час</li>
</ul> 
</p>
<p style="clear: both;"><i>
*Месечната такса се заплаща от 1-5 число на текущия месец, включва полудневна занималня, взимане и водене на детето от и до училище, не се възстановява при отсъствие<br>

*Седмичната такса се заплаща в началото на всяка седмица, включва полудневна занималня, взимане и водене на детето от и до училище.
</i></p>`



const summerIgralnicaHTML = 
`<link rel="preload" fetchpriority="high" as="image" href="images/home/${summerIgralnicaImages[0]}" imagesrcset="${srcsetAttribute('images/summer-igralnica/' + summerIgralnicaImages[0]['src'], 'h')}" type="image/webp">
<p class="centered">От 1-ви Юни до 14-ти Септември предлагаме целодневна приключенска програма за всички, които обичат забавленията, пътешествията и игрите на открито.</p>
${slideshow(summerIgralnicaImages, dir='images/summer-igralnica/', portrait=true)}
<p>Опознаваме света отблизо, защото опитът винаги е най-добрият учител.<br> 
Правим екскурзии,посещаваме интересни места, изложби, музеи,забележителности.<br> 
Гостуваме на библиотеката, творим красотички в различни работилнички.<br> 
Правим походи в гората, катерим се, учим се да се ориентираме, плуваме и събираме слънце на плажа.
</p>

<p>Програмата е седмична и почти целия ден прекарваме навън. Децата си носят вода и храна за обяд и следобедна закуска.</p>

<p>
  Сутрин се събираме в занималнята от 8:00 до 9:30, /ж.к. Чайка, бл.189, на един подлез разстояние от морската градина/<br>

  10:00 тръгваме по програмата за деня и се връщаме в занималнята около 16:00<br>

  Изпращаме децата до 18:00<br>

  Подробна програма публикуваме всяка седмица в профила и страницата ни във Фейсбук, предвид метеороличната прогноза. При неподходящо време е възможна промяна в програмата за седмицата.
</p>

<h4>Примерна програма за седмица:</h4>
<p>
  <ul style="list-style-type:none;">
    <li>/Понеделник/ - Хайде да играем /игри и забавления в морската градина/</li>
    <li>/Вторник/ - Като Рицарите /парк - музей Владислав Варненчик/</li>
    <li>/Сряда/ - По следите на животните /Зоопарк Варна/</li>
    <li>/Четвъртък/ - Сладки приказки в библиотеката /Детски отдел на РБ”П.Славейков”/</li>
    <li>/Петък/ - Фотосафари /Побити камъни/</li>
  </ul>
</p>

<h4>Цени:</h4>
<p>
  <ul style="list-style-type:none;">
    <li>Седмична такса - 100лв.</li>
    <li>Дневна такса: 25лв.</li>
    <li>Входни такси и транспорт се заплащат допълнително /25- 30 лв. за седмица/</li>
  </ul>
</p>
<h4>Отстъпки:</h4>
<p>
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


<p>Актуалната програма  за всяка седмица ще бъде публикувана <a style="text-decoration:underline" aria-label="Линк към актулната програма за седмицата" href="https://www.facebook.com/IgralnicaZanimalnica">тук</a></p>

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
  <li>с. Орешак</li>
  <li>местност Батова</li>
  <li>Екопарк "Св. Константин и Елена"</li>
  <li>Парк Аспарухово</li>
  <li>Парк-музей "Владислав Варненчик"</li>
  <li>Археологически музей</li>
  <li>Ферма с. Зорница</li>
</ul>
и още знайни и незнайни горички и полянки, на които геройски сме играли, щуряли и приключенствали.
</p>

<h3>Често задавани въпроси</h3>
<p>
<ul>    
  <li>
    Какво трябва да сложим в раничката?
    ${additionalContent(backpackText, "нещата за носене в раничка")}
  </li>
  <li>
    Какво да изберем за хапване?
    ${additionalContent(foodText, "храната")}
  </li>
  <li>
    Облеклото?
    ${additionalContent(clothingText, "облеклото")}
  </li>
</ul>
</p>
${forSignUpAndInformation}
`

const summerZanimalnicaHTML = 
`<link rel="preload" fetchpriority="high" as="image" href="images/home/${summerZanimalnicaImages[0]}" imagesrcset="${srcsetAttribute('images/summer-zanimalnica/' + summerZanimalnicaImages[0]['src'], 'h')}" type="image/webp">
<p class="centered">От 1-ви Юни до 14-ти Септември предлагаме целодневна занималня за всички, които искат да попълнят пропуски в учебния материал и да се подготвят добре за следващата учебна година.</p>
${slideshow(summerZanimalnicaImages, dir='images/summer-zanimalnica/', portrait=true)}


<p class="centered">Тук се забавляваме, учим и играем. В спокойна и приятна среда на нашата база, на метри от Морската градина на град Варна. 
Сутрешни занимания по четене, писане, математика и следобедни игри в Морската градина.</p>

<p class="centered">Работното ни време е от понеделник до петък, от 8:00 до 18:00.</p>

  

  
<br>
<h4>Един примерен ден в Лятната занималница:</h4>
<p>
  Сутрин в занималнята:
  <ol style="list-style-type:none;padding-left:20px;">
    <li>8:00 -10:00 - Посрещане на децата, свободни занимания, приложни дейности</li>
    <li>10:00 -12:00 - Занимания по математика, български език, английски език, четене /заниманията са по график за деня/</li>
    <li>12:00- 13:00 - Обяд /готвено меню, не е включен в общата такса/</li>
  </ol>

  Следобедна занималня:
  <ol style="list-style-type:none;padding-left:20px;">
    <li>13:00-16:00 - време за разходка, игри в Морската градина</li>
    <li>16:00-17:00 - занимания по интереси, четене на книжки, приложни дейности</li>
    <li>17:00-18-00 - изпращане на децата</li>
  </ol>
</p>

<br>
<h4>Целодневно посещение:</h4>
<p>
  <ul style="list-style-type:none;padding-left:20px;">
    <li>Седмична такса /пет дни/ - 100лв.</li>
    <li>Еднократно посещение - 25лв.</li>
  </ul>
</p>
<p>
  Обяд /Двустепенно меню/- 6лв.
</p>
${forSignUpAndInformation}`
// End of HTML - Do not delete this line, generate_sitemap.py uses it.


const adminHTML =
`<button id="btn-login" disabled="true">Log in</button>
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
  '/': 'Добре дошли в Игралница Занималница! Детски център и място за игра на вашето дете. Предламе училищна занималня за ученици от 1 до 5 клас, както и за деца от подготвителните групи към училищата.',
  '/училищна-занималня': 'Какво представлява училищната занималня? Какво включва цената и как минава един ден в занималнята.',
  '/лятна-игралница': 'Какво представлява лятната игралница? Какво включва приключенската програма, как минава един ден в лятната игралница, цена и често задавани въпроси.',
  '/лятна-занималница': 'Какво представлява лятната занималня? Какво включва цената и как минава един ден в занималнята.',
  '/за-нас': 'Информация за служителите на занималнята. Каква е нашата квалификация, с какво можем да помогнем на вашето дете и какво ни мотивира.',
  '/контакти': 'Телефон за връзка на всеки учител, както и служебен телефон на занималнята. Имейл и адрес на занималнята.',
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

