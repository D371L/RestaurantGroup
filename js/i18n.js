(function () {
  'use strict';

  var PLACEHOLDER_IMG = 'https://placehold.co/300x200/f0ebe3/e0d9ce?text=Photo';
  var PLACEHOLDER_LOGO = 'https://placehold.co/80x80/f0ebe3/8b6914?text=Logo';

  var translations = {
    he: {
      meta: { title: 'קבוצה קולינרית' },
      nav: {
        orderDelivery: 'הזמנת משלוח',
        bookTable: 'הזמנת שולחן',
        menu: 'תפריט',
        home: 'בית',
        about: 'אודות',
        group: 'קבוצת המסעדות',
        venueDomo: 'דומו',
        venueHaasiyati: 'האסיאתי',
        venueSmash: 'סמאש בורגר',
        venueArto: 'ארטו',
        menus: 'תפריטים',
        contact: 'יצירת קשר',
        joinSuccess: 'הצטרפו להצלחה',
        customerClub: 'מועדון לקוחות'
      },
      hero: {
        subtitle: 'Culinary Group',
        title: 'קבוצת המסעדות'
      },
      group: {
        intro: {
          title: 'EXIT GROUP - הקבוצה הקולינרית',
          text: 'לפני עשור הגענו כדי להרים את הווליום, ומאז אנחנו פשוט מסרבים להנמיך. זה התחיל עם ה״ארטו״, הלב הפועם שחיבר בין קולינריה גבוהה לאווירה בועטת, והמשיך במסע של תעוזה שבו שברנו את המוסכמות של עצמנו בכל פעם מחדש. מה״סמאש בורגר״ שהביא את השחיתות האמריקאית לשיא בשיא הקורונה, דרך הדיוק והאיפוק המהפנט של ״דומו״ ועד הסטריט-פוד הממזר של ASI ATI.\n\nאנחנו לא רק פותחים מסעדות, אנחנו יוצרים תרבות. אנחנו כאן כדי להתרגש, לחדש ולהוכיח שאפשר להגיש יוקרה עם קריצה, ואיכות ללא פשרות עם המון חוצפה. לא באנו רק כדי להישאר - באנו כדי להגדיר מחדש את הטעם שלכם.'
        }
      },
      join: {
        title: 'הצטרפו להצלחה',
        text: 'הקבוצה שלנו פותחת את הדלת להזדמנות להצטרף להצלחה מוכחת בעולם הקולינריה. לאחר בנייה של מספר מותגים מצליחים עם קהל נאמן ותפעול מדויק, אנו מציעים ליזמים ואנשים שחיים ונושמים את תחום האוכל לקחת חלק בצמיחה - באמצעות מודל זכיינות מבוסס, יציב ורווחי.\n\nהזכיינות מאפשרת להצטרף למותגים שכבר הוכיחו את עצמם בשטח, ליהנות מליווי מקצועי מלא, קונספט מגובש, מערך שיווקי ותפעולי, וידע שנבנה מתוך ניסיון אמיתי.\n\nאנחנו מחפשים שותפים עם תשוקה לאירוח, הבנה עסקית ורצון לגדול יחד איתנו - אנשים שרוצים לקחת חלק במשהו גדול, ולהפוך הצלחה קיימת להצלחה אישית.\n\nזו לא רק הזדמנות עסקית, זו הזדמנות להיות חלק מקבוצה שמובילה, מתפתחת וממשיכה לייצר חוויות אוכל ברמה גבוהה.'
      },
      contact: {
        title: 'יצירת קשר',
        intro: 'בחרו דרך נוחה ליצירת קשר (טסט).',
        phoneLabel: 'טלפון',
        phone: '+972-50-123-4567',
        emailLabel: 'אימייל',
        email: 'info@test-exitgroup.co.il',
        instagramLabel: 'אינסטגרם',
        instagram: '@exitgroup.test',
        addressLabel: 'כתובת משרד',
        address: 'חיפה, ישראל',
        hours: 'שעות מענה (טסט): א׳-ה׳ 09:00-18:00'
      },
      venues: [
        {
          name: 'דומו',
          address: 'אחי אילת 69, חיפה',
          addresses: ['אחי אילת 69, חיפה'],
          description: 'ברוכים הבאים ל-DOMO, המקום שבו הדיוק היפני פוגש את החוצפה הישראלית בלוקיישן הכי מפתיע על המפה. לא באנו לעשות "עוד סושי" - באנו להקים מקדש קולינרי שבו כל חיתוך של להב הוא הצהרה, וכל מנה היא יצירת אמנות חסרת פשרות.\n\nאנחנו לוקחים את ה\'אומוטנאשי\' (Omotenashi) - אמנות האירוח היפנית - ומזקקים אותה לחוויה סקסית, אפלולית וממכרת שגורמת לכם לשכוח כל מה שחשבתם על המזרח הרחוק. חומרי הגלם הכי נדירים, טכניקות מסורתיות ופרזנטציה שפשוט אי אפשר להישאר אדישים אליה. ב-DOMO אנחנו לא מחפשים אישורים, אנחנו קובעים את הסטנדרט.',
          hours: 'שעות פעילות:\nא-ה 12:00 - 00:00\nו-ש 12:00 - 23:30',
          logo: 'Domo/domo_logo.png',
          phoneLink: 'tel:+972',
          locationLink: '#',
          websiteLink: 'https://www.instagram.com/domo_japanese_bar/',
          photos: ['Domo/domo_1.jpg', 'Domo/domo_2.jpg', 'Domo/domo_3.jpg']
        },
        {
          name: 'האסיאתי',
          address: 'אחי אילת 69, חיפה | קדושי יאסי 2, חיפה',
          addresses: ['אחי אילת 69, חיפה', 'קדושי יאסי 2, חיפה'],
          description: 'האסיאתי היא לא עוד מסעדה אסייתית. זה המקום שבו סושי פוגש סטריט-פוד, בוריטו פוגש רול יפני, ופוקה בול נבנה בדיוק כמו שצריך.\n\nרטבים ממכרים שמוכנים כל יום, ונבנו במיוחד בשביל שילוב מושלם עם המנות. מנות טריות, צבעוניות ומלאות בטעם, שמגיעות מהר, אבל מרגישות כמו חוויה.\n\nאז… אם אתם אוהבים אוכל, אתם הולכים להתאהב.',
          hours: 'שעות פעילות:\nא-ה 12:00 - 00:00\nו-ש 12:00 - 23:30',
          logo: 'ASI ATI/asiati_logo.png',
          phoneLink: 'tel:+972',
          locationLink: '#',
          websiteLink: 'https://www.instagram.com/asi___ati/',
          photos: ['img/venues/asiati-1.jpeg', 'img/venues/asiati-2.jpeg', 'img/venues/asiati-3.jpeg']
        },
        {
          name: 'סמאש בורגר',
          address: 'נתנזון 9, חיפה | קדושי יאסי 2, חיפה | אחי אילת 69, חיפה',
          addresses: ['נתנזון 9, חיפה', 'קדושי יאסי 2, חיפה', 'אחי אילת 69, חיפה'],
          description: 'סמאש בורגר היא המבורגרייה צעירה ושובבה שמביאה את תרבות ה־Smash Burger האמריקאית לחיפה ולקריות. אנחנו מתמחים בקציצות טריות שנמעכות על הפלנצ\'ה הלוהטת לקבלת קריספיות מושלמת וטעם עמוק, עם גבינה נמסה, לחמניות רכות וחומרי גלם איכותיים.\n\nבתפריט תמצאו המבורגרים מושחתים, צ\'יפס קריספי, רטבים מיוחדים ואווירה שמחה וקלילה. אם באתם לאכול המבורגר טוב באמת – הגעתם למקום הנכון.',
          hours: 'שעות פעילות:\nא-ה 12:00 - 00:00\nו-ש 12:00 - 23:30',
          logo: 'Smash Burger/smashburger_logo.jpg',
          phoneLink: 'tel:+972',
          locationLink: '#',
          websiteLink: 'https://www.instagram.com/smashburgerhaifa/',
          photos: ['img/venues/smash-1.jpeg', 'img/venues/smash-2.jpeg', 'img/venues/smash-3.jpeg']
        },
        {
          name: 'ארטו',
          address: 'קדושי יאסי 2, חיפה',
          addresses: ['קדושי יאסי 2, חיפה'],
          description: 'מסעדה ומתחם אירועים, דאנס בר יוקרתי לאירועים\nבחיפה. המקום הכי עכשווי, בועט וייחודי שתפגשו.\n\nהמקום משלב בין מטבח יוקרתי, פיוז\'ן לבין מועדון עם קוקטיילים וברמנים, מסיבה ודיג\'יים הכי טובים שיש.\n\nהמקום הוא השילוב המושלם לאירוע\nגם אוכל, גם אלכוהול וגם מסיבה מושלמת.\n\nהמקום מושלם לימי הולדת, מסיבות ברית, מסיבות בר מצווה, חינה יוקרתית, בת מצווה, אירוע משפחתי, אירועי חברה למינהם כגון מסיבות פורים, אירועי קונספט משובחים ואירועים עם אווירה אחרת.\n\nהמקום נועד לאירועים מ40 איש ועד 100 איש\n\nהמקום ידאג לתת לכם את המעטפת המושלמת, עסקת חבילה מלאה, לא תצטרכו להביא כלום מהבית וכל הדרך ידאגו אנשי ההפקה לכל הצרכים שלכם.',
          hours: 'שעות פעילות:\nא-ה 12:00 - 00:00\nו-ש 12:00 - 23:30',
          logo: 'Arto/arto_logo.png',
          phoneLink: 'tel:+972',
          locationLink: '#',
          websiteLink: 'https://www.instagram.com/arto_taste_above_everything/',
          photos: ['img/venues/arto-1.webp', 'img/venues/arto-2.webp', 'img/venues/arto-3.webp']
        }
      ],
      readMore: 'קרא עוד',
      readLess: 'קרא פחות',
      footer: {
        developedBy: 'פותח ע״י '
      }
    },
    ru: {
      meta: { title: 'Кулинарная группа' },
      nav: {
        orderDelivery: 'Заказ доставки',
        bookTable: 'Бронь стола',
        menu: 'Меню',
        home: 'Дом',
        about: 'О нас',
        group: 'Группа',
        venueDomo: 'Домо',
        venueHaasiyati: 'ASI ATI',
        venueSmash: 'Смаш Бургер',
        venueArto: 'Арто',
        menus: 'Меню',
        contact: 'Контакт',
        joinSuccess: 'Присоединяйтесь к успеху',
        customerClub: 'Клуб клиентов'
      },
      hero: {
        subtitle: 'Culinary Group',
        title: 'Кулинарная группа'
      },
      group: {
        intro: {
          title: 'О EXIT GROUP',
          text: 'Десять лет назад мы пришли, чтобы поднять громкость, и с тех пор просто отказываемся убавлять звук. Всё началось с «Арто» - пульсирующего сердца, которое соединило высокую гастрономию с дерзкой клубной атмосферой, и продолжилось путешествием смелых решений, где мы каждый раз ломали собственные рамки. От Smash Burger, который в разгар ковида довёл американский фастфуд до уровня культа, через гипнотическую точность и сдержанность DOMO, и до хитрого стрит-фуда ASI ATI.\n\nМы не просто открываем рестораны - мы создаём культуру. Мы здесь, чтобы волновать, удивлять и снова изобретать, как может выглядеть премиум с улыбкой и дерзостью. Безупречное качество, никакого компромисса и много характера. Мы пришли не просто задержаться - мы здесь, чтобы заново определить ваш вкус.'
        }
      },
      join: {
        title: 'Присоединяйтесь к успеху',
        text: 'Наша группа открывает дверь к возможности присоединиться к подтвержденному успеху в мире гастрономии. После создания нескольких сильных брендов с лояльной аудиторией и точной операционной системой, мы предлагаем предпринимателям и людям, которые живут и дышат сферой еды, стать частью роста - через выстроенную, стабильную и прибыльную франчайзинговую модель.\n\nФраншиза дает возможность присоединиться к брендам, которые уже доказали себя на практике, получить полное профессиональное сопровождение, цельную концепцию, маркетинговую и операционную систему, а также знания, выстроенные на реальном опыте.\n\nМы ищем партнеров с настоящей страстью к гостеприимству, деловым мышлением и желанием расти вместе с нами - людей, которые хотят стать частью чего-то большого и превратить существующий успех в личный.\n\nЭто не просто бизнес-возможность, это шанс стать частью группы, которая лидирует, развивается и продолжает создавать гастрономические впечатления высокого уровня.'
      },
      contact: {
        title: 'Контакты',
        intro: 'Выберите удобный способ связи (тест).',
        phoneLabel: 'Телефон',
        phone: '+972-50-123-4567',
        emailLabel: 'Email',
        email: 'info@test-exitgroup.co.il',
        instagramLabel: 'Instagram',
        instagram: '@exitgroup.test',
        addressLabel: 'Адрес офиса',
        address: 'Хайфа, Израиль',
        hours: 'Часы ответа (тест): Вс-Чт 09:00-18:00'
      },
      venues: [
        {
          name: 'Домо',
          address: 'אחי אילת 69, חיפה',
          addresses: ['אחי אילת 69, חיפה'],
          description: 'Добро пожаловать в DOMO - место, где японская точность встречается с израильской дерзостью в самом неожиданном уголке карты. Мы здесь не для того, чтобы делать «ещё немного суши» - мы создаём кулинарный храм, где каждый взмах ножа - это манифест, а каждое блюдо - бескомпромиссное произведение искусства.\n\nМы берём японскую философию гостеприимства «омотэнаси» (Omotenashi) и превращаем её в тёмный, притягательный и немного опасный опыт, после которого вы забудете всё, что знали о Дальнем Востоке. Редкие продукты, традиционные техники и подача, мимо которой невозможно пройти равнодушно. В DOMO мы не ищем одобрения - мы задаём стандарт.',
          hours: 'Часы работы:\nВс-Чт 12:00 - 00:00\nПт-Сб 12:00 - 23:30',
          logo: 'Domo/domo_logo.png',
          phoneLink: 'tel:+972',
          locationLink: '#',
          websiteLink: 'https://www.instagram.com/domo_japanese_bar/',
          photos: ['Domo/domo_1.jpg', 'Domo/domo_2.jpg', 'Domo/domo_3.jpg']
        },
        {
          name: 'ASI ATI',
          address: 'אחי אילת 69, חיפה | קדושי יאסי 2, חיפה',
          addresses: ['אחי אילת 69, חיפה', 'קדושי יאסי 2, חיפה'],
          description: 'ASI ATI - это не просто азиатский ресторан. Здесь суши встречается со стрит-фудом, буррито - с японским роллом, а поке-боул собран как надо. Соусы готовят каждый день специально под блюда. Свежие, яркие, насыщенные вкусом порции приходят быстро, но ощущаются как полноценный опыт. Любите еду - здесь вы влюбитесь.',
          hours: 'Часы работы:\nВс-Чт 12:00 - 00:00\nПт-Сб 12:00 - 23:30',
          logo: 'ASI ATI/asiati_logo.png',
          phoneLink: 'tel:+972',
          locationLink: '#',
          websiteLink: 'https://www.instagram.com/asi___ati/',
          photos: ['img/venues/asiati-1.jpeg', 'img/venues/asiati-2.jpeg', 'img/venues/asiati-3.jpeg']
        },
        {
          name: 'Смаш Бургер',
          address: 'נתנזון 9, חיפה | קדושי יאסי 2, חיפה | אחי אילת 69, חיפה',
          addresses: ['נתנזון 9, חיפה', 'קדושי יאסי 2, חיפה', 'אחי אילת 69, חיפה'],
          description: 'Смаш Бургер - молодой и дерзкий бургерный, привёзший американскую культуру smash burger в Хайфу и Крайот. Свежие котлеты обжаривают на раскалённой плитке для хруста и глубокого вкуса, с расплавленным сыром, мягкими булками и качественными продуктами. В меню - сытные бургеры, хрустящий картофель, фирменные соусы и лёгкая весёлая атмосфера. Хотите по-настоящему хороший бургер - вы по адресу.',
          hours: 'Часы работы:\nВс-Чт 12:00 - 00:00\nПт-Сб 12:00 - 23:30',
          logo: 'Smash Burger/smashburger_logo.jpg',
          phoneLink: 'tel:+972',
          locationLink: '#',
          websiteLink: 'https://www.instagram.com/smashburgerhaifa/',
          photos: ['img/venues/smash-1.jpeg', 'img/venues/smash-2.jpeg', 'img/venues/smash-3.jpeg']
        },
        {
          name: 'Арто',
          address: 'קדושי יאסי 2, חיפה',
          addresses: ['קדושי יאסי 2, חיפה'],
          description: 'Ресторан и площадка для мероприятий, премиальный данс-бар в Хайфе. Самое современное, дерзкое и особенное место. Сочетание высокой кухни фьюжн с клубом: коктейли, бармены, вечеринки и топовые диджеи. Идеальный формат мероприятия: кухня, бар и отличная вечеринка. Подходит для дней рождения, бар-мицвы, хупы, бат-мицвы, семейных и корпоративных праздников, тематических вечеринок. Вместимость 40–100 гостей. Полный пакет услуг - ничего не нужно приносить, продюсерская команда берёт всё на себя.',
          hours: 'Часы работы:\nВс-Чт 12:00 - 00:00\nПт-Сб 12:00 - 23:30',
          logo: 'Arto/arto_logo.png',
          phoneLink: 'tel:+972',
          locationLink: '#',
          websiteLink: 'https://www.instagram.com/arto_taste_above_everything/',
          photos: ['img/venues/arto-1.webp', 'img/venues/arto-2.webp', 'img/venues/arto-3.webp']
        }
      ],
      readMore: 'Читать далее',
      readLess: 'Свернуть',
      footer: {
        developedBy: 'Разработано '
      }
    },
    en: {
      meta: { title: 'Culinary Group' },
      nav: {
        orderDelivery: 'Order delivery',
        bookTable: 'Book a table',
        menu: 'Menu',
        home: 'Home',
        about: 'About',
        group: 'Group',
        venueDomo: 'Domo',
        venueHaasiyati: 'ASI ATI',
        venueSmash: 'Smash Burger',
        venueArto: 'Arto',
        menus: 'Menus',
        contact: 'Contact',
        joinSuccess: 'Join the success',
        customerClub: 'Customer club'
      },
      hero: {
        subtitle: 'Culinary Group',
        title: 'Restaurant Group'
      },
      group: {
        intro: {
          title: 'About EXIT GROUP',
          text: 'A decade ago we came in to turn the volume up - and we still refuse to turn it down. It started with Arto, the beating heart that fused high-end cuisine with a kicking nightlife vibe, and grew into a journey of bold moves where we kept breaking our own rules. From Smash Burger, which pushed American indulgence to the max right in the middle of COVID, through the hypnotic precision and restraint of Domo, all the way to the street-smart attitude of ASI ATI.\n\nWe don’t just open restaurants - we build culture. We’re here to get excited, to reinvent, and to prove that you can serve luxury with a wink and uncompromising quality with plenty of attitude. We didn’t come just to stay - we came to redefine your taste.'
        }
      },
      join: {
        title: 'Join the success',
        text: 'Our group opens the door to an opportunity to join proven success in the culinary world. After building several successful brands with a loyal audience and precise operations, we offer entrepreneurs and people who live and breathe food the chance to be part of this growth - through a structured, stable, and profitable franchise model.\n\nThe franchise allows you to join brands that have already proven themselves in the field, benefit from full professional guidance, a well-defined concept, marketing and operational systems, and know-how built on real experience.\n\nWe are looking for partners with a true passion for hospitality, business understanding, and the desire to grow with us - people who want to be part of something big and turn existing success into personal success.\n\nThis is not only a business opportunity, it is an opportunity to be part of a group that leads, evolves, and continues to create high-level food experiences.'
      },
      contact: {
        title: 'Contact',
        intro: 'Choose a convenient way to contact us (test).',
        phoneLabel: 'Phone',
        phone: '+972-50-123-4567',
        emailLabel: 'Email',
        email: 'info@test-exitgroup.co.il',
        instagramLabel: 'Instagram',
        instagram: '@exitgroup.test',
        addressLabel: 'Office address',
        address: 'Haifa, Israel',
        hours: 'Response hours (test): Sun-Thu 09:00-18:00'
      },
      venues: [
        {
          name: 'Domo',
          address: 'Ahhei Eilat 69, Haifa',
          addresses: ['Ahhei Eilat 69, Haifa'],
          description: 'Welcome to DOMO - where Japanese precision collides with Israeli boldness in one of the most unexpected spots on the map. We didn\'t come here to do “just another sushi place” - we came to build a culinary temple where every slice of the blade is a statement, and every dish is a piece of uncompromising art.\n\nWe take the Japanese art of hospitality, Omotenashi, and distill it into a dark, sensual, addictive experience that makes you forget everything you thought you knew about the Far East. The rarest ingredients, traditional techniques, and plating you simply can\'t ignore. At DOMO we\'re not looking for approval - we set the standard.',
          hours: 'Opening hours:\nSun-Thu 12:00 - 00:00\nFri-Sat 12:00 - 23:30',
          logo: 'Domo/domo_logo.png',
          phoneLink: 'tel:+972',
          locationLink: '#',
          websiteLink: 'https://www.instagram.com/domo_japanese_bar/',
          photos: ['Domo/domo_1.jpg', 'Domo/domo_2.jpg', 'Domo/domo_3.jpg']
        },
        {
          name: 'ASI ATI',
          address: 'Ahhei Eilat 69, Haifa | Kedoshei Yasi 2, Haifa',
          addresses: ['Ahhei Eilat 69, Haifa', 'Kedoshei Yasi 2, Haifa'],
          description: 'ASI ATI is not just another Asian restaurant. It\'s where sushi meets street food, burrito meets Japanese roll, and poke bowls are done right. Addictive sauces made daily, built for the perfect match with each dish. Fresh, colorful, full of flavor — served fast but it feels like an experience. If you love food, you\'re going to love it here.',
          hours: 'Opening hours:\nSun-Thu 12:00 - 00:00\nFri-Sat 12:00 - 23:30',
          logo: 'ASI ATI/asiati_logo.png',
          phoneLink: 'tel:+972',
          locationLink: '#',
          websiteLink: 'https://www.instagram.com/asi___ati/',
          photos: ['img/venues/asiati-1.jpeg', 'img/venues/asiati-2.jpeg', 'img/venues/asiati-3.jpeg']
        },
        {
          name: 'Smash Burger',
          address: 'Netivson 9, Haifa | Kedoshei Yasi 2, Haifa | Ahhei Eilat 69, Haifa',
          addresses: ['Netivson 9, Haifa', 'Kedoshei Yasi 2, Haifa', 'Ahhei Eilat 69, Haifa'],
          description: 'Smash Burger is the young, playful burger joint that brought American Smash Burger culture to Haifa and the Krayot. We specialize in fresh patties smashed on the hot griddle for perfect crisp and deep flavor - melted cheese, soft buns, quality ingredients. On the menu: indulgent burgers, crispy fries, special sauces, and a happy, laid-back vibe. If you came for a really good burger, you\'re in the right place.',
          hours: 'Opening hours:\nSun-Thu 12:00 - 00:00\nFri-Sat 12:00 - 23:30',
          logo: 'Smash Burger/smashburger_logo.jpg',
          phoneLink: 'tel:+972',
          locationLink: '#',
          websiteLink: 'https://www.instagram.com/smashburgerhaifa/',
          photos: ['img/venues/smash-1.jpeg', 'img/venues/smash-2.jpeg', 'img/venues/smash-3.jpeg']
        },
        {
          name: 'Arto',
          address: 'Kedoshei Yasi 2, Haifa',
          addresses: ['Kedoshei Yasi 2, Haifa'],
          description: 'Restaurant and event venue - a premium dance bar for events in Haifa. The most contemporary, bold and unique place you\'ll find. It combines upscale fusion cuisine with a club: cocktails, bartenders, parties and top DJs. The perfect mix for your event: great food, drinks and a great party. Ideal for birthdays, bar mitzvahs, henna celebrations, bat mitzvahs, family and corporate events, theme parties. For events from 40 to 100 guests. Full package - you don\'t need to bring a thing; the production team takes care of everything.',
          hours: 'Opening hours:\nSun-Thu 12:00 - 00:00\nFri-Sat 12:00 - 23:30',
          logo: 'Arto/arto_logo.png',
          phoneLink: 'tel:+972',
          locationLink: '#',
          websiteLink: 'https://www.instagram.com/arto_taste_above_everything/',
          photos: ['img/venues/arto-1.webp', 'img/venues/arto-2.webp', 'img/venues/arto-3.webp']
        }
      ],
      readMore: 'Read more',
      readLess: 'Read less',
      footer: {
        developedBy: 'Developed by '
      }
    },
    ar: {
      meta: { title: 'مجموعة الطهي' },
      nav: {
        orderDelivery: 'طلب توصيل',
        bookTable: 'حجز طاولة',
        menu: 'قائمة الطعام',
        home: 'الرئيسية',
        about: 'من نحن',
        group: 'المجموعة',
        venueDomo: 'دومو',
        venueHaasiyati: 'الآسيوي',
        venueSmash: 'سماش برجر',
        venueArto: 'آرتو',
        menus: 'قوائم الطعام',
        contact: 'تواصل معنا',
        joinSuccess: 'انضموا إلى النجاح',
        customerClub: 'نادي العملاء'
      },
      hero: {
        subtitle: 'Culinary Group',
        title: 'مجموعة المطاعم'
      },
      group: {
        intro: {
          title: 'حول EXIT GROUP',
          text: 'منذ عقد جئنا لنرفع مستوى الصوت، ومنذ ذلك الحين نرفض أن نُخفّضه. بدأت الرحلة مع \"آرتو\"، القلب النابض الذي جمع بين المطبخ الراقي والأجواء الجريئة، واستمرت بمسار من الجرأة كسرنا فيه قواعدنا في كل مرة من جديد. من Smash Burger الذي جلب أقصى درجات الانغماس الأمريكي في ذروة الكورونا، مروراً بالدقة والهدوء الآسر في DOMO، وصولاً إلى ستريت فود مشاغب يحمل توقيع ASI ATI.\n\nنحن لا نفتح مطاعم فحسب، بل نصنع ثقافة. نحن هنا لنُشعل الحماس، نبتكر من جديد، ونُثبت أنه يمكن تقديم الفخامة بروح مرحة، وجودة بلا أي تنازل مع الكثير من الجرأة. لم نأتِ فقط لنكون جزءاً من المشهد - جئنا لنُعيد تعريف ذائقتكم.'
        }
      },
      join: {
        title: 'انضموا إلى النجاح',
        text: 'تفتح مجموعتنا الباب أمام فرصة الانضمام إلى نجاح مثبت في عالم الطهي. بعد بناء عدة علامات ناجحة تمتلك جمهورا وفيا وتشغيلا دقيقا، نقدم لرواد الأعمال ولمن يعيشون ويتنفسون مجال الطعام فرصة المشاركة في النمو - من خلال نموذج امتياز قائم، مستقر ومربح.\n\nيمنحك الامتياز فرصة الانضمام إلى علامات أثبتت نفسها بالفعل على أرض الواقع، والاستفادة من مرافقة مهنية كاملة، ومفهوم متكامل، ومنظومة تسويقية وتشغيلية، ومعرفة مبنية على خبرة حقيقية.\n\nنحن نبحث عن شركاء لديهم شغف حقيقي بالضيافة، وفهم تجاري، ورغبة في النمو معنا - أشخاص يريدون أن يكونوا جزءا من شيء كبير، وأن يحولوا النجاح القائم إلى نجاح شخصي.\n\nهذه ليست مجرد فرصة تجارية، بل فرصة لتكون جزءا من مجموعة تقود وتتطور وتواصل صناعة تجارب طعام بمستوى عال.'
      },
      contact: {
        title: 'تواصل معنا',
        intro: 'اختر طريقة التواصل المناسبة لك (تجريبي).',
        phoneLabel: 'الهاتف',
        phone: '+972-50-123-4567',
        emailLabel: 'البريد الإلكتروني',
        email: 'info@test-exitgroup.co.il',
        instagramLabel: 'إنستغرام',
        instagram: '@exitgroup.test',
        addressLabel: 'عنوان المكتب',
        address: 'حيفا، إسرائيل',
        hours: 'ساعات الرد (تجريبية): الأحد-الخميس 09:00-18:00'
      },
      venues: [
        {
          name: 'دومو',
          address: 'אחי אילת 69, חיפה',
          addresses: ['אחי אילת 69, חיפה'],
          description: 'مرحباً بكم في DOMO، حيث يلتقي الانضباط الياباني بالجرأة الإسرائيلية في أكثر موقع مفاجئ على الخريطة. لم نأتِ لنقدّم "سوشي عادي" - جئنا لنقيم معبداً طهويّاً يكون فيه كل قَطْع للسكين تصريحاً، وكل طبق عملاً فنياً بلا تنازلات.\n\nنأخذ فلسفة الضيافة اليابانية "أوموتيناشي" (Omotenashi) ونقطّرها إلى تجربة داكنة، حسية، ومغرية تجعلك تنسى كل ما اعتقدت أنك تعرفه عن الشرق الأقصى. مكوّنات نادرة، تقنيات تقليدية وتقديم لا يمكن تجاهله. في DOMO نحن لا نبحث عن موافقة أحد - نحن من يحدد المعيار.',
          hours: 'ساعات العمل:\nالأحد-الخميس 12:00 - 00:00\nالجمعة-السبت 12:00 - 23:30',
          logo: 'Domo/domo_logo.png',
          phoneLink: 'tel:+972',
          locationLink: '#',
          websiteLink: 'https://www.instagram.com/domo_japanese_bar/',
          photos: ['Domo/domo_1.jpg', 'Domo/domo_2.jpg', 'Domo/domo_3.jpg']
        },
        {
          name: 'الآسيوي',
          address: 'אחי אילת 69, חיפה | קדושי יאסי 2, חיפה',
          description: 'الآسيوي ليس مجرد مطعم آسيوي. هنا يلتقي السوشي بطعام الشارع، والبوريتو بالرول الياباني، ويتم تحضير البوكي بول كما يجب. صلصات مدمنة تُصنع يومياً خصيصاً لتناسب كل طبق. وجبات طازجة، ملونة ومليئة بالنكهة، تقدم بسرعة ولكنها تمنحك تجربة كاملة. إذا كنت تحب الطعام، فسوف تقع في حبه هنا.',
          hours: 'ساعات العمل:\nالأحد-الخميس 12:00 - 00:00\nالجمعة-السبت 12:00 - 23:30',
          logo: 'https://picsum.photos/seed/asiatilogo/80/80',
          phoneLink: 'tel:+972',
          locationLink: '#',
          websiteLink: 'https://www.instagram.com/asi___ati/',
          photos: ['img/venues/asiati-1.jpeg', 'img/venues/asiati-2.jpeg', 'img/venues/asiati-3.jpeg']
        },
        {
          name: 'سماش برجر',
          address: 'נתנזון 9, חיפה | קדושי יאסי 2, חיפה | אחי אילת 69, חיפה',
          description: 'سماش برجر هو مطعم برجر شاب وجريء جلب ثقافة "سماش برجر" الأمريكية إلى حيفا والكرايوت. نحن متخصصون في الفطائر الطازجة المهروسة على الصاج الساخن للحصول على قرمشة مثالية ونكهة عميقة، مع الجبن الذائب، خبز طري ومكونات عالية الجودة. في القائمة: برجر غني، بطاطا مقرمشة، صلصات مميزة وأجواء مرحة. إذا أردت برجر حقيقي، فقد وصلت إلى المكان الصحيح.',
          hours: 'ساعات العمل:\nالأحد-الخميس 12:00 - 00:00\nالجمعة-السبت 12:00 - 23:30',
          logo: 'Smash Burger/smashburger_logo.jpg',
          phoneLink: 'tel:+972',
          locationLink: '#',
          websiteLink: 'https://www.instagram.com/smashburgerhaifa/',
          photos: ['img/venues/smash-1.jpeg', 'img/venues/smash-2.jpeg', 'img/venues/smash-3.jpeg']
        },
        {
          name: 'آرتو',
          address: 'קדושי יאסי 2, חיפה',
          description: 'مطعم ومساحة للفعاليات، دانس بار راقٍ في حيفا. المكان الأكثر عصرية وجرأة. يجمع بين المأكولات الفاخرة والنادي: كوكتيلات، سُقاة، حفلات وأفضل منسقي الموسيقى. تجربة مثالية لحدثك: طعام رائع، مشروبات وأجواء مميزة. مناسب لأعياد الميلاد، حفلات البار/بات متسفا، فعاليات الشركات، الحفلات العائلية واحتفالات الحناء. سعة تتراوح بين 40 إلى 100 ضيف. حزمة شاملة - فريق الإنتاج يتولى كل شيء.',
          hours: 'ساعات العمل:\nالأحد-الخميس 12:00 - 00:00\nالجمعة-السبت 12:00 - 23:30',
          logo: 'Arto/arto_logo.png',
          phoneLink: 'tel:+972',
          locationLink: '#',
          websiteLink: 'https://www.instagram.com/arto_taste_above_everything/',
          photos: ['img/venues/arto-1.webp', 'img/venues/arto-2.webp', 'img/venues/arto-3.webp']
        }
      ],
      readMore: 'اقرأ المزيد',
      readLess: 'إخفاء',
      footer: {
        developedBy: 'تم التطوير بواسطة '
      }
    }
  };

  var STORAGE_KEY = 'site-lang';
  
  function getDefaultLanguage() {
    var saved = localStorage.getItem(STORAGE_KEY);
    var supportedLangs = ['ru', 'he', 'en', 'ar'];
    
    if (saved && supportedLangs.indexOf(saved) !== -1) {
      return saved;
    }
    
    var browserLang = (navigator.language || navigator.userLanguage).slice(0, 2).toLowerCase();
    if (supportedLangs.indexOf(browserLang) !== -1) {
      return browserLang;
    }
    
    return 'en'; // default fallback for unsupported languages
  }

  var currentLang = getDefaultLanguage();

  function getByPath(obj, path) {
    var parts = path.split('.');
    var key;
    for (var i = 0; i < parts.length; i++) {
      key = parts[i];
      if (obj == null) return undefined;
      obj = obj[key];
    }
    return obj;
  }

  function applyTranslations() {
    var t = translations[currentLang];
    if (!t) return;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var value = getByPath(t, key);
      if (value != null && typeof value === 'string') {
        if (el.classList.contains('venue-description')) {
          el.innerHTML = value.split(/\n\s*\n/).map(function(p) {
            return '<span class="desc-p">' + p.replace(/\n/g, '<br>') + '</span>';
          }).join('');
        } else {
          el.textContent = value;
        }
      }
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      var spec = el.getAttribute('data-i18n-attr');
      if (!spec) return;
      spec.split(';').forEach(function (pair) {
        var p = pair.split(':');
        var attr = p[0].trim();
        var key = p[1] && p[1].trim();
        if (!attr || !key) return;
        var value = getByPath(t, key);
        if (value != null) {
          if (attr === 'href' && value === '#') {
            el.setAttribute(attr, value);
          } else {
            el.setAttribute(attr, value);
          }
        }
      });
    });

    var titleEl = document.querySelector('title[data-i18n="meta.title"]');
    if (titleEl && t.meta && t.meta.title) {
      document.title = t.meta.title;
    }

    document.documentElement.lang = currentLang;
    document.documentElement.dir = (currentLang === 'he' || currentLang === 'ar') ? 'rtl' : 'ltr';

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.setAttribute('aria-pressed', btn.getAttribute('data-lang') === currentLang ? 'true' : 'false');
    });

    if (window.setupVenueReadMore) window.setupVenueReadMore();
    if (window.setupVenueAddresses) window.setupVenueAddresses();
  }

  function setLang(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
    applyTranslations();
  }

  function init() {
    var saved = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch (e) {}
    if (saved && translations[saved]) {
      currentLang = saved;
    }
    applyTranslations();

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLang(btn.getAttribute('data-lang'));
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function getTranslation(key) {
    return getByPath(translations[currentLang], key);
  }

  function getVenueAddresses(index) {
    var t = translations[currentLang];
    if (!t || !t.venues || !t.venues[index]) return [];
    var venue = t.venues[index];
    if (Array.isArray(venue.addresses) && venue.addresses.length) {
      return venue.addresses;
    }
    return venue.address ? [venue.address] : [];
  }

  window.i18n = {
    setLang: setLang,
    getLang: function () { return currentLang; },
    getTranslation: getTranslation,
    getVenueAddresses: getVenueAddresses
  };
})();
