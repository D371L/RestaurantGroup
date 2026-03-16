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
        contact: 'צור קשר'
      },
      hero: {
        subtitle: 'Culinary Group',
        title: 'קבוצת המסעדות'
      },
      venues: [
        {
          name: 'דומו',
          address: 'כתובת, עיר',
          description: 'ברוכים הבאים לDOMO – מסעדת יוקרה יפנית שמביאה לכם את אומנות האירוח היפני, \'אומוטנאשי\' (おもてなし). אצלנו, כל פרט מחושב בקפידה – מחומרי הגלם המשובחים ועד השירות המושלם.\n\nתנו לנו לקחת אתכם בהובלת הסושי-שף מתן בל למסע קולינרי מלא הכרת תודה, דיוק והרמוניה.',
          hours: 'שעות פעילות: א׳-ה׳ 12:00–23:30 | ו׳-ש׳ 12:00–00:00',
          hoursNote: '* משלוחים וטייק אווי פועלים לאורך כל שעות הפעילות',
          logo: 'https://picsum.photos/seed/domologo/80/80',
          phoneLink: 'tel:+972',
          locationLink: '#',
          websiteLink: '#',
          photos: ['https://picsum.photos/seed/domo1/300/200', 'https://picsum.photos/seed/domo2/300/200', 'https://picsum.photos/seed/domo3/300/200']
        },
        {
          name: 'האסיאתי',
          address: 'כתובת, עיר',
          description: 'האסיאתי היא לא עוד מסעדה אסייתית. זה המקום שבו סושי פוגש סטריט-פוד, בוריטו פוגש רול יפני, ופוקה בול נבנה בדיוק כמו שצריך.\n\nרטבים ממכרים שמוכנים כל יום, ונבנו במיוחד בשביל שילוב מושלם עם המנות. מנות טריות, צבעוניות ומלאות בטעם, שמגיעות מהר, אבל מרגישות כמו חוויה.\n\nאז… אם אתם אוהבים אוכל, אתם הולכים להתאהב.',
          hours: 'שעות פעילות: א׳-ה׳ 12:00–23:30 | ו׳-ש׳ 12:00–00:00',
          hoursNote: '* משלוחים וטייק אווי פועלים לאורך כל שעות הפעילות',
          logo: 'https://picsum.photos/seed/asiatilogo/80/80',
          phoneLink: 'tel:+972',
          locationLink: '#',
          websiteLink: '#',
          photos: ['img/venues/asiati-1.jpeg', 'img/venues/asiati-2.jpeg', 'img/venues/asiati-3.jpeg']
        },
        {
          name: 'סמאש בורגר',
          address: 'כתובת, עיר',
          description: 'סמאש בורגר היא המבורגרייה צעירה ושובבה שמביאה את תרבות ה־Smash Burger האמריקאית לחיפה ולקריות. אנחנו מתמחים בקציצות טריות שנמעכות על הפלנצ\'ה הלוהטת לקבלת קריספיות מושלמת וטעם עמוק, עם גבינה נמסה, לחמניות רכות וחומרי גלם איכותיים.\n\nבתפריט תמצאו המבורגרים מושחתים, צ\'יפס קריספי, רטבים מיוחדים ואווירה שמחה וקלילה. אם באתם לאכול המבורגר טוב באמת – הגעתם למקום הנכון.',
          hours: 'שעות פעילות: א׳-ה׳ 12:00–23:30 | ו׳-ש׳ 12:00–00:00',
          hoursNote: '* משלוחים וטייק אווי פועלים לאורך כל שעות הפעילות',
          logo: 'https://picsum.photos/seed/smashlogo/80/80',
          phoneLink: 'tel:+972',
          locationLink: '#',
          websiteLink: '#',
          photos: ['img/venues/smash-1.jpeg', 'img/venues/smash-2.jpeg', 'img/venues/smash-3.jpeg']
        },
        {
          name: 'ארטו',
          address: 'כתובת, עיר',
          description: 'מסעדה ומתחם אירועים, דאנס בר יוקרתי לאירועים\nבחיפה. המקום הכי עכשווי, בועט וייחודי שתפגשו.\n\nהמקום משלב בין מטבח יוקרתי, פיוז\'ן לבין מועדון עם קוקטיילים וברמנים, מסיבה ודיג\'יים הכי טובים שיש.\n\nהמקום הוא השילוב המושלם לאירוע\nגם אוכל, גם אלכוהול וגם מסיבה מושלמת.\n\nהמקום מושלם לימי הולדת, מסיבות ברית, מסיבות בר מצווה, חינה יוקרתית, בת מצווה, אירוע משפחתי, אירועי חברה למינהם כגון מסיבות פורים, אירועי קונספט משובחים ואירועים עם אווירה אחרת.\n\nהמקום נועד לאירועים מ40 איש ועד 100 איש\n\nהמקום ידאג לתת לכם את המעטפת המושלמת, עסקת חבילה מלאה, לא תצטרכו להביא כלום מהבית וכל הדרך ידאגו אנשי ההפקה לכל הצרכים שלכם.',
          hours: 'שעות פעילות: א׳-ה׳ 12:00–23:30 | ו׳-ש׳ 12:00–00:00',
          hoursNote: '* משלוחים וטייק אווי פועלים לאורך כל שעות הפעילות',
          logo: 'https://picsum.photos/seed/artologo/80/80',
          phoneLink: 'tel:+972',
          locationLink: '#',
          websiteLink: '#',
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
        contact: 'Контакт'
      },
      hero: {
        subtitle: 'Culinary Group',
        title: 'Кулинарная группа'
      },
      venues: [
        {
          name: 'Домо',
          address: 'Адрес, город',
          description: 'Добро пожаловать в DOMO — японский ресторан премиум-класса, где царит искусство японского гостеприимства «омотэнаси». Каждая деталь продумана: от отборных продуктов до безупречного сервиса. Сусхи-шеф Матан Бел проведёт вас в кулинарное путешествие, полное благодарности, точности и гармонии.',
          hours: 'Часы работы: Вс–Чт 12:00–23:30 | Пт–Сб 12:00–00:00',
          hoursNote: '* Доставка и самовывоз в часы работы',
          logo: 'https://picsum.photos/seed/domologo/80/80',
          phoneLink: 'tel:+972',
          locationLink: '#',
          websiteLink: '#',
          photos: ['https://picsum.photos/seed/domo1/300/200', 'https://picsum.photos/seed/domo2/300/200', 'https://picsum.photos/seed/domo3/300/200']
        },
        {
          name: 'ASI ATI',
          address: 'Адрес, город',
          description: 'ASI ATI — это не просто азиатский ресторан. Здесь суши встречается со стрит-фудом, буррито — с японским роллом, а поке-боул собран как надо. Соусы готовят каждый день специально под блюда. Свежие, яркие, насыщенные вкусом порции приходят быстро, но ощущаются как полноценный опыт. Любите еду — здесь вы влюбитесь.',
          hours: 'Часы работы: Вс–Чт 12:00–23:30 | Пт–Сб 12:00–00:00',
          hoursNote: '* Доставка и самовывоз в часы работы',
          logo: 'https://picsum.photos/seed/asiatilogo/80/80',
          phoneLink: 'tel:+972',
          locationLink: '#',
          websiteLink: '#',
          photos: ['img/venues/asiati-1.jpeg', 'img/venues/asiati-2.jpeg', 'img/venues/asiati-3.jpeg']
        },
        {
          name: 'Смаш Бургер',
          address: 'Адрес, город',
          description: 'Смаш Бургер — молодой и дерзкий бургерный, привёзший американскую культуру smash burger в Хайфу и Крайот. Свежие котлеты обжаривают на раскалённой плитке для хруста и глубокого вкуса, с расплавленным сыром, мягкими булками и качественными продуктами. В меню — сытные бургеры, хрустящий картофель, фирменные соусы и лёгкая весёлая атмосфера. Хотите по-настоящему хороший бургер — вы по адресу.',
          hours: 'Часы работы: Вс–Чт 12:00–23:30 | Пт–Сб 12:00–00:00',
          hoursNote: '* Доставка и самовывоз в часы работы',
          logo: 'https://picsum.photos/seed/smashlogo/80/80',
          phoneLink: 'tel:+972',
          locationLink: '#',
          websiteLink: '#',
          photos: ['img/venues/smash-1.jpeg', 'img/venues/smash-2.jpeg', 'img/venues/smash-3.jpeg']
        },
        {
          name: 'Арто',
          address: 'Адрес, город',
          description: 'Ресторан и площадка для мероприятий, премиальный данс-бар в Хайфе. Самое современное, дерзкое и особенное место. Сочетание высокой кухни фьюжн с клубом: коктейли, бармены, вечеринки и топовые диджеи. Идеальный формат мероприятия: кухня, бар и отличная вечеринка. Подходит для дней рождения, бар-мицвы, хупы, бат-мицвы, семейных и корпоративных праздников, тематических вечеринок. Вместимость 40–100 гостей. Полный пакет услуг — ничего не нужно приносить, продюсерская команда берёт всё на себя.',
          hours: 'Часы работы: Вс–Чт 12:00–23:30 | Пт–Сб 12:00–00:00',
          hoursNote: '* Доставка и самовывоз в часы работы',
          logo: 'https://picsum.photos/seed/artologo/80/80',
          phoneLink: 'tel:+972',
          locationLink: '#',
          websiteLink: '#',
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
        contact: 'Contact'
      },
      hero: {
        subtitle: 'Culinary Group',
        title: 'Restaurant Group'
      },
      venues: [
        {
          name: 'Domo',
          address: 'Address, City',
          description: 'Welcome to DOMO — a premium Japanese restaurant bringing you the art of Japanese hospitality, Omotenashi. Every detail is considered, from the finest ingredients to flawless service. Let sushi-chef Matan Bel take you on a culinary journey of gratitude, precision and harmony.',
          hours: 'Hours: Sun–Thu 12:00–23:30 | Fri–Sat 12:00–00:00',
          hoursNote: '* Delivery and takeaway during opening hours',
          logo: 'https://picsum.photos/seed/domologo/80/80',
          phoneLink: 'tel:+972',
          locationLink: '#',
          websiteLink: '#',
          photos: ['https://picsum.photos/seed/domo1/300/200', 'https://picsum.photos/seed/domo2/300/200', 'https://picsum.photos/seed/domo3/300/200']
        },
        {
          name: 'ASI ATI',
          address: 'Address, City',
          description: 'ASI ATI is not just another Asian restaurant. It\'s where sushi meets street food, burrito meets Japanese roll, and poke bowls are done right. Addictive sauces made daily, built for the perfect match with each dish. Fresh, colorful, full of flavor — served fast but it feels like an experience. If you love food, you\'re going to love it here.',
          hours: 'Hours: Sun–Thu 12:00–23:30 | Fri–Sat 12:00–00:00',
          hoursNote: '* Delivery and takeaway during opening hours',
          logo: 'https://picsum.photos/seed/asiatilogo/80/80',
          phoneLink: 'tel:+972',
          locationLink: '#',
          websiteLink: '#',
          photos: ['img/venues/asiati-1.jpeg', 'img/venues/asiati-2.jpeg', 'img/venues/asiati-3.jpeg']
        },
        {
          name: 'Smash Burger',
          address: 'Address, City',
          description: 'Smash Burger is the young, playful burger joint that brought American Smash Burger culture to Haifa and the Krayot. We specialize in fresh patties smashed on the hot griddle for perfect crisp and deep flavor — melted cheese, soft buns, quality ingredients. On the menu: indulgent burgers, crispy fries, special sauces, and a happy, laid-back vibe. If you came for a really good burger, you\'re in the right place.',
          hours: 'Hours: Sun–Thu 12:00–23:30 | Fri–Sat 12:00–00:00',
          hoursNote: '* Delivery and takeaway during opening hours',
          logo: 'https://picsum.photos/seed/smashlogo/80/80',
          phoneLink: 'tel:+972',
          locationLink: '#',
          websiteLink: '#',
          photos: ['img/venues/smash-1.jpeg', 'img/venues/smash-2.jpeg', 'img/venues/smash-3.jpeg']
        },
        {
          name: 'Arto',
          address: 'Address, City',
          description: 'Restaurant and event venue — a premium dance bar for events in Haifa. The most contemporary, bold and unique place you\'ll find. It combines upscale fusion cuisine with a club: cocktails, bartenders, parties and top DJs. The perfect mix for your event: great food, drinks and a great party. Ideal for birthdays, bar mitzvahs, henna celebrations, bat mitzvahs, family and corporate events, theme parties. For events from 40 to 100 guests. Full package — you don\'t need to bring a thing; the production team takes care of everything.',
          hours: 'Hours: Sun–Thu 12:00–23:30 | Fri–Sat 12:00–00:00',
          hoursNote: '* Delivery and takeaway during opening hours',
          logo: 'https://picsum.photos/seed/artologo/80/80',
          phoneLink: 'tel:+972',
          locationLink: '#',
          websiteLink: '#',
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
        contact: 'تواصل معنا'
      },
      hero: {
        subtitle: 'Culinary Group',
        title: 'مجموعة المطاعم'
      },
      venues: [
        {
          name: 'دومو',
          address: 'العنوان، المدينة',
          description: 'مرحباً بكم في دومو – مطعم ياباني فاخر يقدم لكم فن الضيافة اليابانية "أوموتيناشي". تم تصميم كل التفاصيل بعناية: من أفضل المكونات إلى الخدمة المثالية. دع الشيف ماتان بيل يأخذك في رحلة طهي مليئة بالامتنان والدقة والانسجام.',
          hours: 'ساعات العمل: الأحد–الخميس 12:00–23:30 | الجمعة–السبت 12:00–00:00',
          hoursNote: '* التوصيل والاستلام متاح خلال ساعات العمل',
          logo: 'https://picsum.photos/seed/domologo/80/80',
          phoneLink: 'tel:+972',
          locationLink: '#',
          websiteLink: '#',
          photos: ['https://picsum.photos/seed/domo1/300/200', 'https://picsum.photos/seed/domo2/300/200', 'https://picsum.photos/seed/domo3/300/200']
        },
        {
          name: 'الآسيوي',
          address: 'العنوان، المدينة',
          description: 'الآسيوي ليس مجرد مطعم آسيوي. هنا يلتقي السوشي بطعام الشارع، والبوريتو بالرول الياباني، ويتم تحضير البوكي بول كما يجب. صلصات مدمنة تُصنع يومياً خصيصاً لتناسب كل طبق. وجبات طازجة، ملونة ومليئة بالنكهة، تقدم بسرعة ولكنها تمنحك تجربة كاملة. إذا كنت تحب الطعام، فسوف تقع في حبه هنا.',
          hours: 'ساعات العمل: الأحد–الخميس 12:00–23:30 | الجمعة–السبت 12:00–00:00',
          hoursNote: '* التوصيل والاستلام متاح خلال ساعات العمل',
          logo: 'https://picsum.photos/seed/asiatilogo/80/80',
          phoneLink: 'tel:+972',
          locationLink: '#',
          websiteLink: '#',
          photos: ['img/venues/asiati-1.jpeg', 'img/venues/asiati-2.jpeg', 'img/venues/asiati-3.jpeg']
        },
        {
          name: 'سماش برجر',
          address: 'العنوان، المدينة',
          description: 'سماش برجر هو مطعم برجر شاب وجريء جلب ثقافة "سماش برجر" الأمريكية إلى حيفا والكرايوت. نحن متخصصون في الفطائر الطازجة المهروسة على الصاج الساخن للحصول على قرمشة مثالية ونكهة عميقة، مع الجبن الذائب، خبز طري ومكونات عالية الجودة. في القائمة: برجر غني، بطاطا مقرمشة، صلصات مميزة وأجواء مرحة. إذا أردت برجر حقيقي، فقد وصلت إلى المكان الصحيح.',
          hours: 'ساعات العمل: الأحد–الخميس 12:00–23:30 | الجمعة–السبت 12:00–00:00',
          hoursNote: '* التوصيل والاستلام متاح خلال ساعات العمل',
          logo: 'https://picsum.photos/seed/smashlogo/80/80',
          phoneLink: 'tel:+972',
          locationLink: '#',
          websiteLink: '#',
          photos: ['img/venues/smash-1.jpeg', 'img/venues/smash-2.jpeg', 'img/venues/smash-3.jpeg']
        },
        {
          name: 'آرتو',
          address: 'العنوان، المدينة',
          description: 'مطعم ومساحة للفعاليات، دانس بار راقٍ في حيفا. المكان الأكثر عصرية وجرأة. يجمع بين المأكولات الفاخرة والنادي: كوكتيلات، سُقاة، حفلات وأفضل منسقي الموسيقى. تجربة مثالية لحدثك: طعام رائع، مشروبات وأجواء مميزة. مناسب لأعياد الميلاد، حفلات البار/بات متسفا، فعاليات الشركات، الحفلات العائلية واحتفالات الحناء. سعة تتراوح بين 40 إلى 100 ضيف. حزمة شاملة - فريق الإنتاج يتولى كل شيء.',
          hours: 'ساعات العمل: الأحد–الخميس 12:00–23:30 | الجمعة–السبت 12:00–00:00',
          hoursNote: '* التوصيل والاستلام متاح خلال ساعات العمل',
          logo: 'https://picsum.photos/seed/artologo/80/80',
          phoneLink: 'tel:+972',
          locationLink: '#',
          websiteLink: '#',
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

  window.i18n = { setLang: setLang, getLang: function () { return currentLang; }, getTranslation: getTranslation };
})();
