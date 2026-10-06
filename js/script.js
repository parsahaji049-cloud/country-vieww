// ============================================
// دیتا (اطلاعات کامل کشورها)
// ============================================
const countriesData = {
    'ایران': {
        capital: 'تهران',
        population: '۸۵ میلیون نفر',
        language: 'فارسی',
        currency: 'ریال',
        area: '۱,۶۴۸,۱۹۵ کیلومتر مربع',
        phoneCode: '۹۸+',
        timeZone: 'UTC+3:30',
        gdp: '۴۰۰ میلیارد دلار',
        funFact: 'ایران دارای ۲۴ اثر ثبت‌شده در یونسکو است و یکی از کهن‌ترین تمدن‌های جهان را دارد.',
        famous: 'پرسپولیس، میدان نقش‌جهان، کاخ گلستان، برج میلاد، پل خواجو',
        food: 'چلوکباب، قرمه‌سبزی، زرشک‌پلو، فسنجان، آش رشته، باقلوا، سوهان',
        wiki: 'https://fa.wikipedia.org/wiki/ایران'
    },
    'تاجیکستان': {
        capital: 'دوشنبه',
        population: '۹.۵ میلیون نفر',
        language: 'تاجیکی (فارسی)',
        currency: 'سامانی',
        area: '۱۴۳,۱۰۰ کیلومتر مربع',
        phoneCode: '۹۹۲+',
        timeZone: 'UTC+5',
        gdp: '۸ میلیارد دلار',
        funFact: 'تاجیکستان به دلیل کوه‌های پامیر به "بام جهان" معروف است.',
        famous: 'کوه‌های پامیر، دریاچه اسکندرکول، شهر خجند، دژ هفت‌برادر',
        food: 'پلوی تاجیکی، قورمه، منتو، نان تاجیکی، چای سبز',
        wiki: 'https://fa.wikipedia.org/wiki/ایران'
    },
    'مصر': {
        capital: 'قاهره',
        population: '۱۰۴ میلیون نفر',
        language: 'عربی',
        currency: 'پوند مصر',
        area: '۱,۰۰۱,۴۵۰ کیلومتر مربع',
        phoneCode: '۲۰+',
        timeZone: 'UTC+2',
        gdp: '۴۰۰ میلیارد دلار',
        funFact: 'مصر دارای ۷ اثر ثبت‌شده در یونسکو و مهد تمدن فراعنه است.',
        famous: 'اهرام ثلاثه، ابوالهول، معابد لوکسور، دره پادشاهان، رود نیل',
        food: 'کوشاری، فول و طعمیه، کباب مصری، باقلوا، قهوه عربی',
        wiki: 'https://fa.wikipedia.org/wiki/ایران'
    },
    'برزیل': {
        capital: 'برازیلیا',
        population: '۲۱۳ میلیون نفر',
        language: 'پرتغالی',
        currency: 'رئال',
        area: '۸,۵۱۵,۷۶۷ کیلومتر مربع',
        phoneCode: '۵۵+',
        timeZone: 'UTC-2 تا UTC-5',
        gdp: '۱.۶ تریلیون دلار',
        funFact: 'برزیل بزرگ‌ترین کشور آمریکای جنوبی و دارای بزرگترین جنگل بارانی جهان است.',
        famous: 'مجسمه مسیح ریدیمور، کارناوال ریو، سواحل کوپاکابانا، آمازون',
        food: 'فئوژادا، کایپیرینیا، برزیلیان استیک، پاستل، آکای',
        wiki: 'https://fa.wikipedia.org/wiki/ایران'
    },
    'سوییس': {
        capital: 'برن',
        population: '۸.۶ میلیون نفر',
        language: 'آلمانی، فرانسوی، ایتالیایی',
        currency: 'فرانک سوئیس',
        area: '۴۱,۲۸۵ کیلومتر مربع',
        phoneCode: '۴۱+',
        timeZone: 'UTC+1',
        gdp: '۸۰۰ میلیارد دلار',
        funFact: 'سوئیس دارای بالاترین استاندارد زندگی و یکی از بهترین سیستم‌های بانکی جهان است.',
        famous: 'کوه‌های آلپ، دریاچه ژنو، برج ساعت برن، موزه المپیک لوزان',
        food: 'فوندو، راکله، شکلات سوئیسی، رستی، شراب سفید',
                wiki: 'https://fa.wikipedia.org/wiki/ایران'
    },
    'ایتالیا': {
        capital: 'رم',
        population: '۵۹ میلیون نفر',
        language: 'ایتالیایی',
        currency: 'یورو',
        area: '۳۰۱,۳۴۰ کیلومتر مربع',
        phoneCode: '۳۹+',
        timeZone: 'UTC+1',
        gdp: '۲.۱ تریلیون دلار',
        funFact: 'ایتالیا دارای ۵۸ اثر ثبت‌شده در یونسکو است که بیشتر از هر کشور دیگری است.',
        famous: 'کولوسئوم، برج پیزا، کلیسای سنت پیتر، کانال‌های ونیز',
        food: 'پیتزا، پاستا، لازانیا، اسپاگتی، تیرامیسو، ژلاتو، اسپرسو',
                wiki: 'https://fa.wikipedia.org/wiki/ایران'
    },
    'آلمان': {
        capital: 'برلین',
        population: '۸۳ میلیون نفر',
        language: 'آلمانی',
        currency: 'یورو',
        area: '۳۵۷,۰۲۲ کیلومتر مربع',
        phoneCode: '۴۹+',
        timeZone: 'UTC+1',
        gdp: '۴.۲ تریلیون دلار',
        funFact: 'آلمان بزرگترین اقتصاد اروپا و چهارمین اقتصاد بزرگ جهان است.',
        famous: 'دروازه براندنبورگ، کلیسای کلن، قلعه نویشوانشتاین، موزه پرگامون',
        food: 'سوسیس براتوورست، شنیسل، کلم ترش، کیک زاخر، آبجوی آلمانی',
                wiki: 'https://fa.wikipedia.org/wiki/ایران'
    },
    'افغانستان': {
        capital: 'کابل',
        population: '۳۸ میلیون نفر',
        language: 'پشتو، دری',
        currency: 'افغانی',
        area: '۶۵۲,۲۳۰ کیلومتر مربع',
        phoneCode: '۹۳+',
        timeZone: 'UTC+4:30',
        gdp: '۲۰ میلیارد دلار',
        funFact: 'افغانستان به دلیل جاده ابریشم تاریخی و قالی‌های دست‌بافت مشهور است.',
        famous: 'مجسمه‌های بودای بامیان، مزار شریف، هرات، کوه‌های هندوکش',
        food: 'کابلی پلو، منتو، قورمه، نان افغانی، چای سبز',
        wiki: 'https://fa.wikipedia.org/wiki/ایران'
    },
    'آرژانتین': {
        capital: 'بوئنوس آیرس',
        population: '۴۵ میلیون نفر',
        language: 'اسپانیایی',
        currency: 'پزوی آرژانتین',
        area: '۲,۷۸۰,۴۰۰ کیلومتر مربع',
        phoneCode: '۵۴+',
        timeZone: 'UTC-3',
        gdp: '۴۵۰ میلیارد دلار',
        funFact: 'آرژانتین زادگاه تانگو و یکی از بزرگترین تولیدکنندگان گوشت گاو است.',
        famous: 'آبشار ایگواچو، کوه آکونکاگوا، میدان می، لا بومبونرا',
        food: 'آسادو، امپانادا، میلانزا، دلسه د لچه، فاکا',
                wiki: 'https://fa.wikipedia.org/wiki/ایران'
    },
    'استرالیا': {
        capital: 'کانبرا',
        population: '۲۵ میلیون نفر',
        language: 'انگلیسی',
        currency: 'دلار استرالیا',
        area: '۷,۷۴۱,۲۲۰ کیلومتر مربع',
        phoneCode: '۶۱+',
        timeZone: 'UTC+8 تا UTC+10',
        gdp: '۱.۴ تریلیون دلار',
        funFact: 'استرالیا بزرگترین جزیره و کوچکترین قاره جهان است.',
        famous: 'صخره بزرگ مرجانی، اپرا سیدنی، کوه اولورو، پارک ملی کاکادو',
        food: 'وگمیت، پشت استرالیایی، پای گوشت، بیف بارگر، پاولوا',
                wiki: 'https://fa.wikipedia.org/wiki/ایران'
    },
    'کانادا': {
        capital: 'اتاوا',
        population: '۳۸ میلیون نفر',
        language: 'انگلیسی، فرانسوی',
        currency: 'دلار کانادا',
        area: '۹,۹۸۴,۶۷۰ کیلومتر مربع',
        phoneCode: '۱+',
        timeZone: 'UTC-3.5 تا UTC-8',
        gdp: '۱.۹ تریلیون دلار',
        funFact: 'کانادا دومین کشور بزرگ جهان و دارای طولانی‌ترین خط ساحلی است.',
        famous: 'آبشار نیاگارا، پارک ملی بانف، برج سی‌ان، کوه رویال',
        food: 'شربت افرا، پوتین، نان‌های بیکن، پای گوشت',
                wiki: 'https://fa.wikipedia.org/wiki/ایران'
    },
    'چین': {
        capital: 'پکن',
        population: '۱.۴ میلیارد نفر',
        language: 'چینی (ماندارین)',
        currency: 'یوان',
        area: '۹,۵۹۶,۹۶۰ کیلومتر مربع',
        phoneCode: '۸۶+',
        timeZone: 'UTC+8',
        gdp: '۱۷.۷ تریلیون دلار',
        funFact: 'چین پرجمعیت‌ترین کشور جهان و دارای طولانی‌ترین دیوار ساخته‌شده توسط بشر است.',
        famous: 'دیوار بزرگ چین، شهر ممنوعه، ارتش سفالین، معبد بهشت',
        food: 'اردک پکن، دیم‌سام، برنج کبابی، نودلز، فوندو',
                wiki: 'https://fa.wikipedia.org/wiki/ایران'
    },
    'کوبا': {
        capital: 'هاوانا',
        population: '۱۱ میلیون نفر',
        language: 'اسپانیایی',
        currency: 'پزوی کوبا',
        area: '۱۰۹,۸۸۴ کیلومتر مربع',
        phoneCode: '۵۳+',
        timeZone: 'UTC-5',
        gdp: '۱۰۰ میلیارد دلار',
        funFact: 'کوبا به دلیل سیگارهای برگ‌برگ، موسیقی سالسا و انقلاب معروف است.',
        famous: 'هاوانا قدیم، سواحل وارادرو، موزه انقلاب، دره وینالس',
        food: 'پرو، روپا ویخا، موسیقا، خوراک لوبیا، گیاهان دارویی',
                wiki: 'https://fa.wikipedia.org/wiki/ایران'
    },
    'دانمارک': {
        capital: 'کپنهاگ',
        population: '۵.۸ میلیون نفر',
        language: 'دانمارکی',
        currency: 'کرون دانمارک',
        area: '۴۳,۰۹۴ کیلومتر مربع',
        phoneCode: '۴۵+',
        timeZone: 'UTC+1',
        gdp: '۳۵۰ میلیارد دلار',
        funFact: 'دانمارک یکی از شادترین کشورهای جهان و زادگاه لگو است.',
        famous: 'پری دریایی کوچک، تیوولی، کاخ کریستینزبورگ، سواحل اسکاگن',
        food: 'اسموربرود، فریکادل، چیپس و ماهی، شیرینی دانمارکی',
                wiki: 'https://fa.wikipedia.org/wiki/ایران'
    },
    'فنلاند': {
        capital: 'هلسینکی',
        population: '۵.۵ میلیون نفر',
        language: 'فنلاندی، سوئدی',
        currency: 'یورو',
        area: '۳۳۸,۴۲۴ کیلومتر مربع',
        phoneCode: '۳۵۸+',
        timeZone: 'UTC+2',
        gdp: '۲۸۰ میلیارد دلار',
        funFact: 'فنلاند به عنوان شادترین کشور جهان و زادگاه سونا شناخته می‌شود.',
        famous: 'شفق شمالی، هزاران دریاچه، دهکده بابا نوئل، پارک ملی نوسی',
        food: 'سونا، ماهی دودی، کاریلا پای، شیرینی فینیش',
                wiki: 'https://fa.wikipedia.org/wiki/ایران'
    },
    'یونان': {
        capital: 'آتن',
        population: '۱۰.۷ میلیون نفر',
        language: 'یونانی',
        currency: 'یورو',
        area: '۱۳۱,۹۵۷ کیلومتر مربع',
        phoneCode: '۳۰+',
        timeZone: 'UTC+2',
        gdp: '۲۰۰ میلیارد دلار',
        funFact: 'یونان مهد تمدن غرب، فلسفه، دموکراسی و المپیک باستان است.',
        famous: 'آکروپولیس، سانتورینی، میکونوس، دلفی، المپیا',
        food: 'سوولاکی، موسیقا، سالاد یونانی، یازیک، ماست یونانی',
                wiki: 'https://fa.wikipedia.org/wiki/ایران'
    },
    'هند': {
        capital: 'دهلی نو',
        population: '۱.۴ میلیارد نفر',
        language: 'هندی، انگلیسی',
        currency: 'روپیه هند',
        area: '۳,۲۸۷,۲۶۳ کیلومتر مربع',
        phoneCode: '۹۱+',
        timeZone: 'UTC+5:30',
        gdp: '۳.۲ تریلیون دلار',
        funFact: 'هند دومین کشور پرجمعیت جهان و زادگاه چهار دین بزرگ است.',
        famous: 'تاج محل، قلعه سرخ، بنارس، گوات، کرالا',
        food: 'بریانی، نان، کره مرغ، دال، سموسا، چای ماسالا',
                wiki: 'https://fa.wikipedia.org/wiki/ایران'
    },
    'اندونزی': {
        capital: 'جاکارتا',
        population: '۲۷۳ میلیون نفر',
        language: 'اندونزیایی',
        currency: 'روپیه اندونزی',
        area: '۱,۹۰۴,۵۶۹ کیلومتر مربع',
        phoneCode: '۶۲+',
        timeZone: 'UTC+7 تا UTC+9',
        gdp: '۱.۲ تریلیون دلار',
        funFact: 'اندونزی بزرگترین کشور جزیره‌ای جهان با بیش از ۱۷۰۰۰ جزیره است.',
        famous: 'بالی، جاوا، برومو، کومودو، جاکارتا',
        food: 'ناسی گورنگ، ساته، رندانگ، می گورنگ',
                wiki: 'https://fa.wikipedia.org/wiki/ایران'
    },
    'ژاپن': {
        capital: 'توکیو',
        population: '۱۲۵ میلیون نفر',
        language: 'ژاپنی',
        currency: 'ین',
        area: '۳۷۷,۹۷۵ کیلومتر مربع',
        phoneCode: '۸۱+',
        timeZone: 'UTC+9',
        gdp: '۴.۹ تریلیون دلار',
        funFact: 'ژاپن دارای ۲۵ اثر ثبت‌شده در یونسکو و بیش از ۱۰۰٬۰۰۰ معبد است.',
        famous: 'کوه فوجی، معابد کیوتو، قلعه اوساکا، پارک نارا، هیروشیما',
        food: 'سوشی، رامن، تمپورا، ساشیمی، موچی، ماچا'
    },
    'مالزی': {
        capital: 'کوالالامپور',
        population: '۳۲ میلیون نفر',
        language: 'مالایی',
        currency: 'رینگیت',
        area: '۳۲۹,۸۴۷ کیلومتر مربع',
        phoneCode: '۶۰+',
        timeZone: 'UTC+8',
        gdp: '۴۰۰ میلیارد دلار',
        funFact: 'مالزی به دلیل برج‌های دوقلو و تنوع فرهنگی معروف است.',
        famous: 'برج‌های پتروناس، جنگل‌های بارانی، تپه‌های کامرون، لنکاوی',
        food: 'ناسی لماک، ساته، کاری لکشا، روتی کانای'
    },
    'مکزیک': {
        capital: 'مکزیکوسیتی',
        population: '۱۲۸ میلیون نفر',
        language: 'اسپانیایی',
        currency: 'پزوی مکزیک',
        area: '۱,۹۶۴,۳۷۵ کیلومتر مربع',
        phoneCode: '۵۲+',
        timeZone: 'UTC-6 تا UTC-8',
        gdp: '۱.۲ تریلیون دلار',
        funFact: 'مکزیک زادگاه تمدن آزتک و مایا و جشن روز مردگان است.',
        famous: 'چیچن ایتزا، تئوتیهواکان، سواحل کانکون، پالنکه',
        food: 'تاکو، تورتیا، گواکاموله، سالسا، تکلا'
    },
    'هلند': {
        capital: 'آمستردام',
        population: '۱۷ میلیون نفر',
        language: 'هلندی',
        currency: 'یورو',
        area: '۴۱,۵۴۳ کیلومتر مربع',
        phoneCode: '۳۱+',
        timeZone: 'UTC+1',
        gdp: '۱.۱ تریلیون دلار',
        funFact: 'هلند به دلیل آسیاب‌های بادی، لاله و کانال‌های آمستردام معروف است.',
        famous: 'کانال‌های آمستردام، آسیاب‌های بادی کیندردایک، خانه آن فرانک',
        food: 'پنیر، شاه ماهی، استروپ‌وافل، بیتربالن'
    },
    'نیوزیلند': {
        capital: 'ولینگتون',
        population: '۵.۱ میلیون نفر',
        language: 'انگلیسی، مائوری',
        currency: 'دلار نیوزیلند',
        area: '۲۶۸,۰۲۱ کیلومتر مربع',
        phoneCode: '۶۴+',
        timeZone: 'UTC+12',
        gdp: '۲۵۰ میلیارد دلار',
        funFact: 'نیوزیلند به دلیل طبیعت بکر و فیلم‌های ارباب حلقه‌ها معروف است.',
        famous: 'کوه‌های آلپ جنوبی، فیوردلند، دهکده هابیتون، جزیره جنوبی',
        food: 'پای گوشت، کومارا، پای مرغ و قارچ، ماهی و چیپس'
    },
    'نروژ': {
        capital: 'اسلو',
        population: '۵.۴ میلیون نفر',
        language: 'نروژی',
        currency: 'کرون نروژ',
        area: '۳۲۳,۸۰۲ کیلومتر مربع',
        phoneCode: '۴۷+',
        timeZone: 'UTC+1',
        gdp: '۴۸۰ میلیارد دلار',
        funFact: 'نروژ یکی از ثروتمندترین کشورهای جهان و زادگاه وایکینگ‌ها است.',
        famous: 'آبدره‌ها، شفق شمالی، موزه وایکینگ، ساحل آتلانتیک',
        food: 'ماهی سالمون، کروتکاکه، لفسه، شربت توت'
    },
    'پاکستان': {
        capital: 'اسلام‌آباد',
        population: '۲۲۰ میلیون نفر',
        language: 'اردو، انگلیسی',
        currency: 'روپیه پاکستان',
        area: '۷۹۶,۰۹۵ کیلومتر مربع',
        phoneCode: '۹۲+',
        timeZone: 'UTC+5',
        gdp: '۳۵۰ میلیارد دلار',
        funFact: 'پاکستان زادگاه تمدن سند و دارای بلندترین کوه‌های جهان است.',
        famous: 'کوه کی۲، دره هونزا، لاهور، موهنجو دارو، کاراکورام',
        food: 'بریانی، نهاری، کباب، چای، حلوا پوری'
    },
    'پرو': {
        capital: 'لیما',
        population: '۳۲ میلیون نفر',
        language: 'اسپانیایی',
        currency: 'سول',
        area: '۱,۲۸۵,۲۱۶ کیلومتر مربع',
        phoneCode: '۵۱+',
        timeZone: 'UTC-5',
        gdp: '۲۵۰ میلیارد دلار',
        funFact: 'پرو زادگاه تمدن اینکا و ماچو پیچو است.',
        famous: 'ماچو پیچو، دره مقدس، کواسکو، دریاچه تیتیکاکا',
        food: 'سبیچه، پاپا رلنا، لومو سالتادو، کوئی'
    },
    'فیلیپین': {
        capital: 'مانیل',
        population: '۱۰۹ میلیون نفر',
        language: 'فیلیپینی، انگلیسی',
        currency: 'پزوی فیلیپین',
        area: '۳۰۰,۰۰۰ کیلومتر مربع',
        phoneCode: '۶۳+',
        timeZone: 'UTC+8',
        gdp: '۴۰۰ میلیارد دلار',
        funFact: 'فیلیپین دارای بیش از ۷۰۰۰ جزیره و یکی از بزرگترین جوامع خارج از کشور است.',
        famous: 'جزیره بوراکای، چای ریس، موزه ملی، کوردیلرا',
        food: 'آدوبو، سیسیگ، لچون، پانسیت'
    },
    'لهستان': {
        capital: 'ورشو',
        population: '۳۸ میلیون نفر',
        language: 'لهستانی',
        currency: 'زلوتی',
        area: '۳۱۲,۶۸۵ کیلومتر مربع',
        phoneCode: '۴۸+',
        timeZone: 'UTC+1',
        gdp: '۶۵۰ میلیارد دلار',
        funFact: 'لهستان زادگاه فردریک شوپن و دارای تاریخ پرفرازونشیب است.',
        famous: 'قلعه واول، شهر قدیمی کراکوف، اردوگاه آشویتس، گدانسک',
        food: 'پیروگی، بیگوس، ژورک، کوفته، سوسیس'
    },
    'پرتغال': {
        capital: 'لیسبون',
        population: '۱۰.۳ میلیون نفر',
        language: 'پرتغالی',
        currency: 'یورو',
        area: '۹۲,۰۹۰ کیلومتر مربع',
        phoneCode: '۳۵۱+',
        timeZone: 'UTC+0',
        gdp: '۲۵۰ میلیارد دلار',
        funFact: 'پرتغال یکی از قدیمی‌ترین کشورهای اروپا و زادگاه کاشفان بزرگ است.',
        famous: 'برج بلم، صومعه هیرونیموس، سواحل آلگاروه، لیسبون',
        food: 'باکالا، پاستل د ناتا، پورت واین، ساردین'
    },
    'روسیه': {
        capital: 'مسکو',
        population: '۱۴۶ میلیون نفر',
        language: 'روسی',
        currency: 'روبل',
        area: '۱۷,۰۹۸,۲۴۲ کیلومتر مربع',
        phoneCode: '۷+',
        timeZone: 'UTC+2 تا UTC+12',
        gdp: '۱.۸ تریلیون دلار',
        funFact: 'روسیه بزرگ‌ترین کشور جهان با ۱۱ منطقه زمانی است.',
        famous: 'کرملین، میدان سرخ، کلیسای سنت باسیل، ارمیتاژ، بایکال',
        food: 'بورش، پلمنی، بلینی، کاویتار، ودکا'
    },
    'عربستان سعودی': {
        capital: 'ریاض',
        population: '۳۵ میلیون نفر',
        language: 'عربی',
        currency: 'ریال سعودی',
        area: '۲,۱۴۹,۶۹۰ کیلومتر مربع',
        phoneCode: '۹۶۶+',
        timeZone: 'UTC+3',
        gdp: '۱.۱ تریلیون دلار',
        funFact: 'عربستان مهد اسلام و محل قرارگیری دو مسجد مقدس (مکه و مدینه) است.',
        famous: 'مسجد الحرام، مسجد النبی، برج الفیصلیه، صحرای ربع‌الخالی',
        food: 'کبسه، مندی، شاورما، تمر، قهوه عربی، کنافه'
    },
    'آفریقای جنوبی': {
        capital: 'پرتوریا',
        population: '۶۰ میلیون نفر',
        language: 'انگلیسی، آفریکانس، زولو',
        currency: 'راند',
        area: '۱,۲۲۱,۰۳۷ کیلومتر مربع',
        phoneCode: '۲۷+',
        timeZone: 'UTC+2',
        gdp: '۴۲۰ میلیارد دلار',
        funFact: 'آفریقای جنوبی زادگاه نلسون ماندلا و دارای ۱۱ زبان رسمی است.',
        famous: 'کیپ تاون، پارک کروگر، کوه تیبل، جزیره روبن',
        food: 'برای، بیلتونگ، پوتی، چاکالاکا، مالی پو'
    },
    'اسپانیا': {
        capital: 'مادرید',
        population: '۴۷ میلیون نفر',
        language: 'اسپانیایی',
        currency: 'یورو',
        area: '۵۰۵,۹۹۰ کیلومتر مربع',
        phoneCode: '۳۴+',
        timeZone: 'UTC+1',
        gdp: '۱.۴ تریلیون دلار',
        funFact: 'اسپانیا پس از چین دومین کشور جهان از نظر آثار یونسکو است.',
        famous: 'ساگرادا فامیلیا، کاخ الحمرا، پارک گوئل، سواحل کوستا دل سول',
        food: 'پائلا، تاپاس، گازپاچو، چوروس، سانگریا'
    },
    'سوئد': {
        capital: 'استکهلم',
        population: '۱۰.۴ میلیون نفر',
        language: 'سوئدی',
        currency: 'کرون سوئد',
        area: '۴۵۰,۲۹۵ کیلومتر مربع',
        phoneCode: '۴۶+',
        timeZone: 'UTC+1',
        gdp: '۶۰۰ میلیارد دلار',
        funFact: 'سوئد زادگاه ایکیا، گروه آبا و یکی از بهترین سیستم‌های رفاهی جهان است.',
        famous: 'موزه واسا، شهر قدیمی استکهلم، ایکیا، گوتنبرگ',
        food: 'کوفته سوئدی، شاه ماهی ترشی، کیک پرنسس، شیرینی سینامون'
    },
    'ترکیه': {
        capital: 'آنکارا',
        population: '۸۵ میلیون نفر',
        language: 'ترکی',
        currency: 'لیر',
        area: '۷۸۳,۵۶۲ کیلومتر مربع',
        phoneCode: '۹۰+',
        timeZone: 'UTC+3',
        gdp: '۹۰۰ میلیارد دلار',
        funFact: 'استانبول تنها شهری است که در دو قاره (اروپا و آسیا) قرار دارد.',
        famous: 'مسجد ایاصوفیه، کاخ توپکاپی، بالون‌های کاپادوکیه، پاموکاله',
        food: 'کباب، باقلوا، دلمه، قهوه ترکی، لوکوم، پیده'
    },
    'اوکراین': {
        capital: 'کی‌یف',
        population: '۴۱ میلیون نفر',
        language: 'اوکراینی',
        currency: 'هریونیا',
        area: '۶۰۳,۶۲۸ کیلومتر مربع',
        phoneCode: '۳۸۰+',
        timeZone: 'UTC+2',
        gdp: '۲۰۰ میلیارد دلار',
        funFact: 'اوکراین بزرگ‌ترین کشور اروپا و انبار غله قاره است.',
        famous: 'کی‌یف-پچرسک لاورا، کوه‌های کارپات، اودسا، لویو',
        food: 'بورشت، وارنیکی، سالو، کریوشکی'
    },
    'ویتنام': {
        capital: 'هانوی',
        population: '۹۸ میلیون نفر',
        language: 'ویتنامی',
        currency: 'دانگ',
        area: '۳۳۱,۶۹۰ کیلومتر مربع',
        phoneCode: '۸۴+',
        timeZone: 'UTC+7',
        gdp: '۴۰۰ میلیارد دلار',
        funFact: 'ویتنام به دلیل خلیج هالونگ و غذاهای معروف خود مشهور است.',
        famous: 'خلیج هالونگ، هانوی، هوشی‌مین، هوی آن، دلتای مکونگ',
        food: 'فو، نان بهاری، بون چا، کافی ویتنامی'
    },
    'امارات متحده عربی': {
        capital: 'ابوظبی',
        population: '۹.۴ میلیون نفر',
        language: 'عربی',
        currency: 'درهم امارات',
        area: '۸۳,۶۰۰ کیلومتر مربع',
        phoneCode: '۹۷۱+',
        timeZone: 'UTC+4',
        gdp: '۵۰۰ میلیارد دلار',
        funFact: 'امارات میزبان بلندترین ساختمان جهان (برج خلیفه) و جزایر مصنوعی است.',
        famous: 'برج خلیفه، جزایر نخلی، برج العرب، دبی مال، ابوظبی',
        food: 'مندی، ماچبوس، عریسه، شاورما، قهوه عربی، تمور'
    },
    'بریتانیا': {
        capital: 'لندن',
        population: '۶۷ میلیون نفر',
        language: 'انگلیسی',
        currency: 'پوند',
        area: '۲۴۳,۶۱۰ کیلومتر مربع',
        phoneCode: '۴۴+',
        timeZone: 'UTC+0',
        gdp: '۳.۲ تریلیون دلار',
        funFact: 'بریتانیا دارای ۳۲ اثر یونسکو، مهد انقلاب صنعتی و زادگاه شکسپیر است.',
        famous: 'برج لندن، کاخ باکینگهام، بیگ بن، استون‌هنج، آکسفورد',
        food: 'فیش اند چیپس، پای گوشت، چای انگلیسی، پودینگ یورکشایر'
    },
    // ============================================
// اطلاعات کشورهای جدید
// ============================================

'آلبانی': {
    name: 'آلبانی',
    capital: 'تیرانا',
    population: '۲.۸ میلیون نفر',
    language: 'آلبانیایی',
    currency: 'لک آلبانی',
    currencySymbol: 'ALL',
    area: '۲۸,۷۴۸ کیلومتر مربع',
    phoneCode: '۳۵۵+',
    domain: '.al',
    timeZone: 'UTC+1',
    gdp: '۱۸ میلیارد دلار',
    religion: 'اسلام، مسیحیت',
    lifeExpectancy: '۷۸ سال',
    funFact: 'آلبانی یکی از کشورهای کوچک اروپا با سواحل زیبای دریای آدریاتیک و کوه‌های آلپ آلبانی است.',
    famous: 'تیرانا، ساحل دراج، شهر باستانی بوتیرنت، پارک ملی تته، کوه دایتی',
    food: 'بورک، کشک، پاستا، گوشت کبابی، سالاد کشک',
    wiki: 'https://fa.wikipedia.org/wiki/%D8%A2%D9%84%D8%A8%D8%A7%D9%86%DB%8C',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3297485!2d20.0000!3d41.0000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f9b6f6e8f5e5e5f%3A0x5f5e5e5e5e5e5e5e!2sAlbania!5e0!3m2!1sen!2s!'
},
'آنتیگوا و باربودا': {
    name: 'آنتیگوا و باربودا',
    capital: 'سنت جانز',
    population: '۹۷,۰۰۰ نفر',
    language: 'انگلیسی',
    currency: 'دلار کارائیب شرقی',
    currencySymbol: 'XCD',
    area: '۴۴۲ کیلومتر مربع',
    phoneCode: '۱+',
    domain: '.ag',
    timeZone: 'UTC-4',
    gdp: '۲ میلیارد دلار',
    religion: 'مسیحیت',
    lifeExpectancy: '۷۷ سال',
    funFact: 'آنتیگوا و باربودا یک کشور دو جزیره‌ای در دریای کارائیب با ۳۶۵ ساحل است.',
    famous: 'سنت جانز، ساحل دیکنسون، پارک ملی نلسون، جزیره باربودا، قلعه جیمز',
    food: 'ماهی کبابی، فونگی، پاستا، سالاد میوه، دسرهای کارائیبی',
    wiki: 'https://fa.wikipedia.org/wiki/%D8%A2%D9%86%D8%AA%DB%8C%DA%AF%D9%88%D8%A7_%D9%88_%D8%A8%D8%A7%D8%B1%D8%A8%D9%88%D8%AF%D8%A7',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3297485!2d-61.0000!3d17.0000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f9b6f6e8f5e5e5f%3A0x5f5e5e5e5e5e5e5e!2sAntigua%20and%20Barbuda!5e0!3m2!1sen!2s!'
},
'ارمنستان': {
    name: 'ارمنستان',
    capital: 'ایروان',
    population: '۲.۹ میلیون نفر',
    language: 'ارمنی',
    currency: 'درام ارمنستان',
    currencySymbol: 'AMD',
    area: '۲۹,۷۴۳ کیلومتر مربع',
    phoneCode: '۳۷۴+',
    domain: '.am',
    timeZone: 'UTC+4',
    gdp: '۱۵ میلیارد دلار',
    religion: 'مسیحیت (ارتدوکس)',
    lifeExpectancy: '۷۵ سال',
    funFact: 'ارمنستان اولین کشوری بود که مسیحیت را به عنوان دین رسمی پذیرفت (سده چهارم میلادی).',
    famous: 'ایروان، کلیسای اچمیادزین، معبد گارنی، صومعه خور ویراپ، دریاچه سوان',
    food: 'خاش، دولما، خورواتس، پاستا، نان لواش',
    wiki: 'https://fa.wikipedia.org/wiki/%D8%A7%D8%B1%D9%85%D9%86%D8%B3%D8%AA%D8%A7%D9%86',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3297485!2d45.0000!3d40.0000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f9b6f6e8f5e5e5f%3A0x5f5e5e5e5e5e5e5e!2sArmenia!5e0!3m2!1sen!2s!'
},
'باربادوس': {
    name: 'باربادوس',
    capital: 'بریج‌تاون',
    population: '۲۸۷,۰۰۰ نفر',
    language: 'انگلیسی',
    currency: 'دلار باربادوس',
    currencySymbol: 'BBD',
    area: '۴۳۰ کیلومتر مربع',
    phoneCode: '۱+',
    domain: '.bb',
    timeZone: 'UTC-4',
    gdp: '۵ میلیارد دلار',
    religion: 'مسیحیت',
    lifeExpectancy: '۷۹ سال',
    funFact: 'باربادوس یکی از محبوب‌ترین مقاصد گردشگری کارائیب با سواحل سفید است.',
    famous: 'بریج‌تاون، سواحل پلورز، پارک ملی وست کست، خانه اجاره‌ای سنت نیکلاس',
    food: 'ماهی کبابی، کونکی، پودینگ، دسرهای کارائیبی',
    wiki: 'https://fa.wikipedia.org/wiki/%D8%A8%D8%A7%D8%B1%D8%A8%D8%A7%D8%AF%D9%88%D8%B3',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3297485!2d-59.0000!3d13.0000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f9b6f6e8f5e5e5f%3A0x5f5e5e5e5e5e5e5e!2sBarbados!5e0!3m2!1sen!2s!'
},
'بلاروس': {
    name: 'بلاروس',
    capital: 'مینسک',
    population: '۹.۲ میلیون نفر',
    language: 'بلاروسی، روسی',
    currency: 'روبل بلاروس',
    currencySymbol: 'BYN',
    area: '۲۰۷,۶۰۰ کیلومتر مربع',
    phoneCode: '۳۷۵+',
    domain: '.by',
    timeZone: 'UTC+3',
    gdp: '۶۵ میلیارد دلار',
    religion: 'مسیحیت (ارتدوکس)',
    lifeExpectancy: '۷۴ سال',
    funFact: 'بلاروس یکی از کشورهای اروپای شرقی با جنگل‌های انبوه و معماری شوروی است.',
    famous: 'مینسک، قلعه میرس، پارک ملی بی‌لوژسکایا، کلیسای جامع هالی',
    food: 'دودل، ماچانکا، سوپ قارچ، پنکیک سیب‌زمینی',
    wiki: 'https://fa.wikipedia.org/wiki/%D8%A8%D9%84%D8%A7%D8%B1%D9%88%D8%B3',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3297485!2d27.0000!3d53.0000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f9b6f6e8f5e5e5f%3A0x5f5e5e5e5e5e5e5e!2sBelarus!5e0!3m2!1sen!2s!'
},
'بوتان': {
    name: 'بوتان',
    capital: 'تیمفو',
    population: '۷۷۰,۰۰۰ نفر',
    language: 'دزونگخا',
    currency: 'انگولتروم بوتان',
    currencySymbol: 'BTN',
    area: '۳۸,۳۹۴ کیلومتر مربع',
    phoneCode: '۹۷۵+',
    domain: '.bt',
    timeZone: 'UTC+6',
    gdp: '۳ میلیارد دلار',
    religion: 'بودیسم (وجریانه)',
    lifeExpectancy: '۷۲ سال',
    funFact: 'بوتان به جای تولید ناخالص داخلی، شاخص خوشبختی ناخالص ملی (GNH) را اندازه‌گیری می‌کند.',
    famous: 'تیمفو، صومعه تاکستسانگ (آشیانه ببر)، دره پارو، پوناخا، صومعه گانگتی',
    food: 'اری (فلفل با پنیر)، تاگی (گوشت بز)، رایس، پاستا، سوپ',
    wiki: 'https://fa.wikipedia.org/wiki/%D8%A8%D9%88%D8%AA%D8%A7%D9%86',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3297485!2d90.0000!3d27.0000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f9b6f6e8f5e5e5f%3A0x5f5e5e5e5e5e5e5e!2sBhutan!5e0!3m2!1sen!2s!'
},
'بوتسوانا': {
    name: 'بوتسوانا',
    capital: 'گابورون',
    population: '۲.۳ میلیون نفر',
    language: 'انگلیسی، تسوانا',
    currency: 'پولای بوتسوانا',
    currencySymbol: 'BWP',
    area: '۵۸۱,۷۳۰ کیلومتر مربع',
    phoneCode: '۲۶۷+',
    domain: '.bw',
    timeZone: 'UTC+2',
    gdp: '۱۸ میلیارد دلار',
    religion: 'مسیحیت، ادیان سنتی',
    lifeExpectancy: '۶۹ سال',
    funFact: 'بوتسوانا یکی از ثبات‌ترین و پیشرفته‌ترین کشورهای آفریقا با دلتای اوکاوانگو است.',
    famous: 'دلتای اوکاوانگو، پارک ملی چوبه، صحرای کالاهاری، گابورون',
    food: 'سس گوشت، پاپ، سمبوسه، گوشت بز کبابی',
    wiki: 'https://fa.wikipedia.org/wiki/%D8%A8%D9%88%D8%AA%D8%B3%D9%88%D8%A7%D9%86%D8%A7',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3297485!2d24.0000!3d-22.0000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f9b6f6e8f5e5e5f%3A0x5f5e5e5e5e5e5e5e!2sBotswana!5e0!3m2!1sen!2s!'
},
'بوسنی و هرزگوین': {
    name: 'بوسنی و هرزگوین',
    capital: 'سارایوو',
    population: '۳.۲ میلیون نفر',
    language: 'بوسنیایی، کرواتی، صربی',
    currency: 'مارک تبدیل‌پذیر بوسنی',
    currencySymbol: 'BAM',
    area: '۵۱,۱۹۷ کیلومتر مربع',
    phoneCode: '۳۸۷+',
    domain: '.ba',
    timeZone: 'UTC+1',
    gdp: '۲۰ میلیارد دلار',
    religion: 'اسلام، مسیحیت (ارتدوکس، کاتولیک)',
    lifeExpectancy: '۷۷ سال',
    funFact: 'بوسنی یکی از کشورهای بالکان با تاریخ پیچیده و معماری عثمانی و اتریشی است.',
    famous: 'سارایوو، پل قدیمی موستار، پارک ملی سوتلسکا، دریاچه یاگودا',
    food: 'سارما، بورک، پاستا، سوسیس بوسنیایی',
    wiki: 'https://fa.wikipedia.org/wiki/%D8%A8%D9%88%D8%B3%D9%86%DB%8C_%D9%88_%D9%87%D8%B1%D8%B2%DA%AF%D9%88%DB%8C%D9%86',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3297485!2d17.0000!3d44.0000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f9b6f6e8f5e5e5f%3A0x5f5e5e5e5e5e5e5e!2sBosnia%20and%20Herzegovina!5e0!3m2!1sen!2s!'
},
'جمهوری کنگو': {
    name: 'جمهوری کنگو',
    capital: 'برازاویل',
    population: '۵.۵ میلیون نفر',
    language: 'فرانسوی',
    currency: 'فرانک آفریقای مرکزی',
    currencySymbol: 'FCFA',
    area: '۳۴۲,۰۰۰ کیلومتر مربع',
    phoneCode: '۲۴۲+',
    domain: '.cg',
    timeZone: 'UTC+1',
    gdp: '۱۰ میلیارد دلار',
    religion: 'مسیحیت، ادیان سنتی',
    lifeExpectancy: '۶۴ سال',
    funFact: 'جمهوری کنگو دارای جنگل‌های بارانی و سواحل اقیانوس اطلس است.',
    famous: 'برازاویل، پوینت نویر، پارک ملی کونکواتی، رودخانه کنگو',
    food: 'فوفو، موامبه، لوسلا، سمبوسه، گریل ماهی',
    wiki: 'https://fa.wikipedia.org/wiki/%D8%AC%D9%85%D9%87%D9%88%D8%B1%DB%8C_%DA%A9%D9%86%DA%AF%D9%88',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3297485!2d15.0000!3d-1.0000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f9b6f6e8f5e5e5f%3A0x5f5e5e5e5e5e5e5e!2sCongo!5e0!3m2!1sen!2s!'
},
'پاپوآ گینه نو': {
    name: 'پاپوآ گینه نو',
    capital: 'پورت مورسبی',
    population: '۹ میلیون نفر',
    language: 'انگلیسی، توک پیسین، هیری موتو',
    currency: 'کینا پاپوآ گینه نو',
    currencySymbol: 'PGK',
    area: '۴۶۲,۸۴۰ کیلومتر مربع',
    phoneCode: '۶۷۵+',
    domain: '.pg',
    timeZone: 'UTC+10',
    gdp: '۲۵ میلیارد دلار',
    religion: 'مسیحیت، ادیان سنتی',
    lifeExpectancy: '۶۴ سال',
    funFact: 'پاپوآ گینه نو یکی از متنوع‌ترین کشورهای جهان با بیش از ۸۰۰ زبان است.',
    famous: 'پورت مورسبی، کوه ویلهلم، پارک ملی واریاریا، جزیره بوگنویل',
    food: 'ماهی کبابی، سیب‌زمینی شیرین، نان، سوپ',
    wiki: 'https://fa.wikipedia.org/wiki/%D9%BE%D8%A7%D9%BE%D9%88%D8%A2_%DA%AF%DB%8C%D9%86%D9%87_%D9%86%D9%88',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3297485!2d147.0000!3d-6.0000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f9b6f6e8f5e5e5f%3A0x5f5e5e5e5e5e5e5e!2sPapua%20New%20Guinea!5e0!3m2!1sen!2s!'
},
'ترینیداد و توباگو': {
    name: 'ترینیداد و توباگو',
    capital: 'پورت آو اسپین',
    population: '۱.۳ میلیون نفر',
    language: 'انگلیسی',
    currency: 'دلار ترینیداد و توباگو',
    currencySymbol: 'TTD',
    area: '۵,۱۳۱ کیلومتر مربع',
    phoneCode: '۱+',
    domain: '.tt',
    timeZone: 'UTC-4',
    gdp: '۲۲ میلیارد دلار',
    religion: 'مسیحیت، هندو، اسلام',
    lifeExpectancy: '۷۳ سال',
    funFact: 'ترینیداد و توباگو زادگاه کارناوال کارائیب و موسیقی کالیپسو و استیل‌پن است.',
    famous: 'پورت آو اسپین، کارناوال ترینیداد، ساحل ماراکاس، پارک ملی آسا رایت',
    food: 'دوبل، رتی، کاری، پاستا، ماهی کبابی',
    wiki: 'https://fa.wikipedia.org/wiki/%D8%AA%D8%B1%DB%8C%D9%86%DB%8C%D8%AF%D8%A7%D8%AF_%D9%88_%D8%AA%D9%88%D8%A8%D8%A7%DA%AF%D9%88',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3297485!2d-61.0000!3d10.0000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f9b6f6e8f5e5e5f%3A0x5f5e5e5e5e5e5e5e!2sTrinidad%20and%20Tobago!5e0!3m2!1sen!2s!'
},
'ترکمنستان': {
    name: 'ترکمنستان',
    capital: 'عشق‌آباد',
    population: '۶ میلیون نفر',
    language: 'ترکمنی',
    currency: 'منات ترکمنستان',
    currencySymbol: 'TMT',
    area: '۴۸۸,۱۰۰ کیلومتر مربع',
    phoneCode: '۹۹۳+',
    domain: '.tm',
    timeZone: 'UTC+5',
    gdp: '۴۰ میلیارد دلار',
    religion: 'اسلام (سنی)',
    lifeExpectancy: '۶۸ سال',
    funFact: 'ترکمنستان یکی از بسته‌ترین کشورهای جهان با منابع عظیم گاز طبیعی است.',
    famous: 'عشق‌آباد، دروازه جهنم (دهانه گاز)، صحرای قره‌قوم، شهر مرو',
    food: 'پلو ترکمنی، شاشلیک، سمبوسه، نان ترکمنی',
    wiki: 'https://fa.wikipedia.org/wiki/%D8%AA%D8%B1%DA%A9%D9%85%D9%86%D8%B3%D8%AA%D8%A7%D9%86',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3297485!2d59.0000!3d38.0000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f9b6f6e8f5e5e5f%3A0x5f5e5e5e5e5e5e5e!2sTurkmenistan!5e0!3m2!1sen!2s!'
},
'جمهوری آذربایجان': {
    name: 'جمهوری آذربایجان',
    capital: 'باکو',
    population: '۱۰ میلیون نفر',
    language: 'ترکی آذربایجانی',
    currency: 'منات آذربایجان',
    currencySymbol: 'AZN',
    area: '۸۶,۶۰۰ کیلومتر مربع',
    phoneCode: '۹۹۴+',
    domain: '.az',
    timeZone: 'UTC+4',
    gdp: '۷۰ میلیارد دلار',
    religion: 'اسلام (شیعه)',
    lifeExpectancy: '۷۳ سال',
    funFact: 'آذربایجان به "سرزمین آتش" معروف است و دارای آتش‌سوزی‌های طبیعی و نفت است.',
    famous: 'باکو، آتشگاه، کوه یانارداغ، قلعه شروانشاهان، گوبوستان',
    food: 'پلو آذربایجانی، دلمه، کباب، ششلیک، پیتی',
    wiki: 'https://fa.wikipedia.org/wiki/%D8%AC%D9%85%D9%87%D9%88%D8%B1%DB%8C_%D8%A2%D8%B0%D8%B1%D8%A8%D8%A7%DB%8C%D8%AC%D8%A7%D9%86',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3297485!2d49.0000!3d40.0000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f9b6f6e8f5e5e5f%3A0x5f5e5e5e5e5e5e5e!2sAzerbaijan!5e0!3m2!1sen!2s!'
},
'دومینیکا': {
    name: 'دومینیکا',
    capital: 'روسو',
    population: '۷۲,۰۰۰ نفر',
    language: 'انگلیسی',
    currency: 'دلار کارائیب شرقی',
    currencySymbol: 'XCD',
    area: '۷۵۱ کیلومتر مربع',
    phoneCode: '۱+',
    domain: '.dm',
    timeZone: 'UTC-4',
    gdp: '۵۰۰ میلیون دلار',
    religion: 'مسیحیت',
    lifeExpectancy: '۷۷ سال',
    funFact: 'دومینیکا به "جزیره طبیعت" معروف است و دارای چشمه‌های آب گرم و جنگل‌های بارانی است.',
    famous: 'روسو، پارک ملی مروت تروا پیتون، چشمه آب گرم سوفرییر، جزیره اسکاتلند',
    food: 'ماهی کبابی، پاستا، سوپ، دسرهای کارائیبی',
    wiki: 'https://fa.wikipedia.org/wiki/%D8%AF%D9%88%D9%85%DB%8C%D9%86%DB%8C%DA%A9%D8%A7',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3297485!2d-61.0000!3d15.0000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f9b6f6e8f5e5e5f%3A0x5f5e5e5e5e5e5e5e!2sDominica!5e0!3m2!1sen!2s!'
},
'سودان جنوبی': {
    name: 'سودان جنوبی',
    capital: 'جوبا',
    population: '۱۱ میلیون نفر',
    language: 'انگلیسی',
    currency: 'پوند سودان جنوبی',
    currencySymbol: 'SSP',
    area: '۶۱۹,۷۴۵ کیلومتر مربع',
    phoneCode: '۲۱۱+',
    domain: '.ss',
    timeZone: 'UTC+2',
    gdp: '۴ میلیارد دلار',
    religion: 'مسیحیت، ادیان سنتی',
    lifeExpectancy: '۵۷ سال',
    funFact: 'سودان جنوبی جدیدترین کشور جهان است که در سال ۲۰۱۱ استقلال یافت.',
    famous: 'جوبا، پارک ملی بومینگ، رودخانه نیل سفید، دریاچه نو',
    food: 'فوفو، موامبه، گریل ماهی، سمبوسه، پائو',
    wiki: 'https://fa.wikipedia.org/wiki/%D8%B3%D9%88%D8%AF%D8%A7%D9%86_%D8%AC%D9%86%D9%88%D8%A8%DB%8C',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3297485!2d30.0000!3d6.0000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f9b6f6e8f5e5e5f%3A0x5f5e5e5e5e5e5e5e!2sSouth%20Sudan!5e0!3m2!1sen!2s!'
},
'سنگاپور': {
    name: 'سنگاپور',
    capital: 'سنگاپور',
    population: '۵.۶ میلیون نفر',
    language: 'انگلیسی، مالایی، چینی، تامیل',
    currency: 'دلار سنگاپور',
    currencySymbol: 'SGD',
    area: '۷۲۸ کیلومتر مربع',
    phoneCode: '۶۵+',
    domain: '.sg',
    timeZone: 'UTC+8',
    gdp: '۴۲۰ میلیارد دلار',
    religion: 'بودیسم، اسلام، مسیحیت، هندو',
    lifeExpectancy: '۸۳ سال',
    funFact: 'سنگاپور یکی از پیشرفته‌ترین و ثروتمندترین کشورهای جهان با اقتصادی آزاد است.',
    famous: 'خلیج مارینا، باغ‌های خلیج، پارک سانتوسا، خیابان اورچارد، هتل مارینا بی سندز',
    food: 'چیکن رایس، لکسا، کاری، نودلز، دسرهای آسیایی',
    wiki: 'https://fa.wikipedia.org/wiki/%D8%B3%D9%86%DA%AF%D8%A7%D9%BE%D9%88%D8%B1',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3297485!2d103.0000!3d1.0000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f9b6f6e8f5e5e5f%3A0x5f5e5e5e5e5e5e5e!2sSingapore!5e0!3m2!1sen!2s!'
}
};

// ============================================
// تابع جستجو
// ============================================
// ============================================
// تابع جستجو (اصلاح‌شده)
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const query = e.target.value.trim().toLowerCase();
            const countryCards = document.querySelectorAll('.country-bio');
            
            countryCards.forEach(card => {
                const title = card.querySelector('.product-title');
                if (title) {
                    const countryName = title.textContent.trim().toLowerCase();
                    // استفاده از opacity و visibility به جای display
                    if (countryName.includes(query) || query === '') {
                        card.style.opacity = '1';
                        card.style.visibility = 'visible';
                        card.style.height = 'auto';
                        card.style.marginBottom = '20px';
                        card.style.padding = '20px';
                    } else {
                        card.style.opacity = '0';
                        card.style.visibility = 'hidden';
                        card.style.height = '0';
                        card.style.marginBottom = '0';
                        card.style.padding = '0';
                        card.style.overflow = 'hidden';
                    }
                }
            });
        });
    }
});

// ============================================
// تابع نمایش مودال با کلیک روی کارت
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const countryCards = document.querySelectorAll('.country-bio');
    
    countryCards.forEach(card => {
        card.addEventListener('click', function() {
            const titleElement = this.querySelector('.product-title');
            if (!titleElement) return;
            
            // استخراج نام کشور از عنوان
            const fullTitle = titleElement.textContent.trim();
            const countryName = fullTitle.replace(/[🇮🇷🇹🇯🇪🇬🇧🇷🇨🇭🇮🇹🇩🇪🇦🇫🇦🇷🇦🇺🇨🇦🇨🇳🇨🇺🇩🇰🇫🇮🇬🇷🇮🇳🇮🇩🇯🇵🇲🇾🇲🇽🇳🇱🇳🇿🇳🇴🇵🇰🇵🇪🇵🇭🇵🇱🇵🇹🇷🇺🇸🇦🇿🇦🇪🇸🇪🇸🇾🇹🇯🇹🇳🇹🇷🇹🇭🇺🇦🇺🇸🇻🇪🇻🇳🇾🇪🇵🇸🇬🇧]/g, '').trim();
            
            // پیدا کردن اطلاعات کشور
            let countryData = countriesData[countryName];
            
            if (!countryData) {
                showSimpleModal(countryName);
                return;
            }
            
            // نمایش مودال
            showModal(countryName, countryData);
        });
    });
});

// ============================================
// تابع نمایش مودال اصلی
// ============================================
function showModal(countryName, data) {
    // حذف مودال قبلی اگر وجود داشت
    const oldModal = document.querySelector('.country-modal');
    if (oldModal) oldModal.remove();
    
    // ساخت مودال
    const modal = document.createElement('div');
    modal.className = 'country-modal';
    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <button class="modal-close">✕</button>
            <div class="modal-header">
                <span class="modal-flag">${getFlagEmoji(countryName)}</span>
                <h2 class="modal-title">${countryName}</h2>
            </div>
            <div class="modal-body">
                <div class="modal-grid">
                    <div class="modal-item"><span class="modal-label">🏛️ پایتخت:</span> ${data.capital}</div>
                    <div class="modal-item"><span class="modal-label">👨‍👩‍👧‍👦 جمعیت:</span> ${data.population}</div>
                    <div class="modal-item"><span class="modal-label">🗣️ زبان رسمی:</span> ${data.language}</div>
                    <div class="modal-item"><span class="modal-label">💰 واحد پول:</span> ${data.currency}</div>
                    <div class="modal-item"><span class="modal-label">📐 مساحت:</span> ${data.area}</div>
                    <div class="modal-item"><span class="modal-label">📞 کد تلفن:</span> ${data.phoneCode}</div>
                    <div class="modal-item"><span class="modal-label">🕐 منطقه زمانی:</span> ${data.timeZone}</div>
                    <div class="modal-item"><span class="modal-label">📊 تولید ناخالص:</span> ${data.gdp || 'نامشخص'}</div>
                </div>
                ${data.funFact ? `
                    <div class="modal-funfact">
                        <span class="modal-label">💡 جالب است بدانید:</span>
                        <span>${data.funFact}</span>
                    </div>
                ` : ''}
                ${data.famous ? `
                    <div class="modal-famous">
                        <span class="modal-label">🌟 جاهای دیدنی:</span>
                        <span>${data.famous}</span>
                    </div>
                ` : ''}
                ${data.food ? `
                    <div class="modal-food">
                        <span class="modal-label">🍽️ غذاهای معروف:</span>
                        <span>${data.food}</span>
                    </div>
                ` : ''}
                ${data.wiki ? `
                    <div style="margin-top: 12px; padding: 12px 15px; background: #f8f9fa; border-radius: 10px; border-top: 2px solid #0080ff; display: flex; align-items: center; gap: 10px; justify-content: center;">
                         <img src="https://www.wikipedia.org/static/apple-touch/wikipedia.png" 
                         alt="ویکی‌پدیا" 
                            style="width: 24px; height: 24px; border-radius: 4px;">
        <a href="${data.wiki}" 
           target="_blank" 
           rel="noopener noreferrer" 
           style="color: #1a237e; text-decoration: none; font-weight: 500; font-size: 0.95rem; transition: color 0.3s;"
           onmouseover="this.style.color='#0645ad'" 
           onmouseout="this.style.color='#1a237e'">
            مطالعه بیشتر در ویکی‌پدیا
        </a>
    </div>
                ` : ''}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // انیمیشن ورود
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
    
    // بستن مودال
    const closeBtn = modal.querySelector('.modal-close');
    const overlay = modal.querySelector('.modal-overlay');
    
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeModal();
    });
    
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}

// ============================================
// تابع نمایش مودال ساده (برای کشورهای بدون داده)
// ============================================
function showSimpleModal(countryName) {
    const oldModal = document.querySelector('.country-modal');
    if (oldModal) oldModal.remove();
    
    const modal = document.createElement('div');
    modal.className = 'country-modal';
    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <button class="modal-close">✕</button>
            <div class="modal-header">
                <span class="modal-flag">${getFlagEmoji(countryName)}</span>
                <h2 class="modal-title">${countryName}</h2>
            </div>
            <div class="modal-body">
                <div style="text-align: center; padding: 30px 0; color: #666; font-size: 16px;">
                    <span style="font-size: 40px; display: block; margin-bottom: 15px;">🔍</span>
                    اطلاعات تکمیلی برای کشور <strong>${countryName}</strong> موجود نیست.
                    <br><span style="font-size: 14px; color: #999;">به زودی اضافه خواهد شد.</span>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
    
    const closeBtn = modal.querySelector('.modal-close');
    const overlay = modal.querySelector('.modal-overlay');
    
    closeBtn.addEventListener('click', function() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => modal.remove(), 300);
    });
    overlay.addEventListener('click', function() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => modal.remove(), 300);
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            modal.classList.remove('active');
            document.body.style.overflow = '';
            setTimeout(() => modal.remove(), 300);
        }
    });
}

// ============================================
// تابع دریافت ایموجی پرچم
// ============================================
function getFlagEmoji(countryName) {
    const flagMap = {
        'ایران': '🇮🇷',
        'تاجیکستان': '🇹🇯',
        'مصر': '🇪🇬',
        'برزیل': '🇧🇷',
        'سوییس': '🇨🇭',
        'ایتالیا': '🇮🇹',
        'آلمان': '🇩🇪',
        'افغانستان': '🇦🇫',
        'آرژانتین': '🇦🇷',
        'استرالیا': '🇦🇺',
        'کانادا': '🇨🇦',
        'چین': '🇨🇳',
        'کوبا': '🇨🇺',
        'دانمارک': '🇩🇰',
        'فنلاند': '🇫🇮',
        'یونان': '🇬🇷',
        'هند': '🇮🇳',
        'اندونزی': '🇮🇩',
        'ژاپن': '🇯🇵',
        'مالزی': '🇲🇾',
        'مکزیک': '🇲🇽',
        'هلند': '🇳🇱',
        'نیوزیلند': '🇳🇿',
        'نروژ': '🇳🇴',
        'پاکستان': '🇵🇰',
        'پرو': '🇵🇪',
        'فیلیپین': '🇵🇭',
        'لهستان': '🇵🇱',
        'پرتغال': '🇵🇹',
        'روسیه': '🇷🇺',
        'عربستان سعودی': '🇸🇦',
        'آفریقای جنوبی': '🇿🇦',
        'اسپانیا': '🇪🇸',
        'سوئد': '🇸🇪',
        'ترکیه': '🇹🇷',
        'اوکراین': '🇺🇦',
        'ویتنام': '🇻🇳',
        'امارات متحده عربی': '🇦🇪',
        'بریتانیا': '🇬🇧',
        'آلبانی': 'al',
        'آنتیگوا و باربودا': 'ag',
        'ارمنستان': 'am',
        'باربادوس': 'bb',
        'بلاروس': 'by',
        'بوتان': 'bt',
        'بوتسوانا': 'bw',
        'بوسنی و هرزگوین': 'ba',
        'جمهوری کنگو': 'cg',
        'پاپوآ گینه نو': 'pg',
        'ترینیداد و توباگو': 'tt',
        'ترکمنستان': 'tm',
        'جمهوری آذربایجان': 'az',
            'دومینیکا': 'dm',
        'سودان جنوبی': 'ss',
        'سنگاپور': 'sg'
    };
    return flagMap[countryName] || '🏳️';
}
// ============================================
// اطلاعات قاره‌های کشورها
// ============================================
const continentData = {
    'all': ['همه کشورها'],
    'asia': ['ایران', 'افغانستان', 'پاکستان', 'هند', 'چین', 'ژاپن', 'اندونزی', 'مالزی', 'فیلیپین', 'ویتنام', 'تاجیکستان', 'ازبکستان', 'ترکمنستان', 'قرقیزستان', 'قزاقستان', 'کره جنوبی', 'کره شمالی', 'سنگاپور', 'تایلند', 'کامبوج', 'لائوس', 'میانمار', 'بنگلادش', 'نپال', 'بوتان', 'مغولستان', 'تایوان'],
    'europe': ['آلمان', 'ایتالیا', 'سوییس', 'بریتانیا', 'اسپانیا', 'فرانسه', 'هلند', 'بلژیک', 'اتریش', 'یونان', 'پرتغال', 'سوئد', 'نروژ', 'دانمارک', 'فنلاند', 'لهستان', 'اوکراین', 'روسیه', 'جمهوری چک', 'مجارستان', 'اسلواکی', 'اسلوونی', 'کرواسی', 'صربستان', 'رومانی', 'بلغارستان', 'آلبانی', 'بوسنی و هرزگوین', 'مونته‌نگرو', 'مقدونیه شمالی', 'لتونی', 'لیتوانی', 'استونی', 'ایسلند', 'ایرلند', 'مالت', 'قبرس', 'لوکزامبورگ', 'لیختن‌اشتاین', 'آندورا', 'موناکو'],
    'africa': ['مصر', 'آفریقای جنوبی', 'الجزایر', 'مراکش', 'تونس', 'لیبی', 'سودان', 'نیجریه', 'کنیا', 'غنا', 'سنگال', 'ساحل عاج', 'کامرون', 'آنگولا', 'موزامبیک', 'ماداگاسکار', 'زیمبابوه', 'زامبیا', 'بوتسوانا', 'نامیبیا', 'موریتانی', 'مالی', 'نیجر', 'چاد', 'جمهوری آفریقای مرکزی', 'جمهوری دموکراتیک کنگو', 'کنگو', 'گابن', 'گینه', 'گینه بیسائو', 'گینه استوایی', 'لیبریا', 'سیرالئون', 'توگو', 'بنین', 'بورکینافاسو', 'اریتره', 'اتیوپی', 'جیبوتی', 'سومالی', 'رواندا', 'بروندی', 'تانزانیا', 'اوگاندا', 'مالاوی', 'کیپ ورد', 'کومور', 'سیشل', 'موریس', 'سائوتومه و پرینسیپ'],
    'north-america': ['کانادا', 'مکزیک', 'کوبا', 'ایالات متحده آمریکا', 'گواتمالا', 'هندوراس', 'السالوادور', 'نیکاراگوئه', 'کاستاریکا', 'پاناما', 'بلیز', 'بهاما', 'هائیتی', 'جمهوری دومینیکن', 'جامائیکا', 'ترینیداد و توباگو', 'باربادوس', 'سنت کیتس و نویس', 'آنتیگوا و باربودا', 'دومینیکا', 'سنت لوسیا', 'سنت وینسنت و گرنادین‌ها', 'گرینادا'],
    'south-america': ['برزیل', 'آرژانتین', 'پرو', 'کلمبیا', 'ونزوئلا', 'شیلی', 'اکوادور', 'بولیوی', 'پاراگوئه', 'اروگوئه', 'گویان', 'سورینام'],
    'oceania': ['استرالیا', 'نیوزیلند', 'پاپوآ گینه نو', 'فیجی', 'جزایر سلیمان', 'وانواتو', 'ساموآ', 'تونگا', 'کیریباتی', 'میکرونزی', 'پالائو', 'نائورو', 'مارشال', 'تووالو'],
};

// ============================================
// نگاشت کشور به قاره
// ============================================
const countryToContinent = {};
for (const [continent, countries] of Object.entries(continentData)) {
    for (const country of countries) {
        if (!countryToContinent[country]) {
            countryToContinent[country] = continent;
        }
    }
}

// ============================================
// تابع فیلتر کردن کشورها (با display: none)
// ============================================
function filterByContinent(continent) {
    const cards = document.querySelectorAll('.country-bio');
    const container = document.querySelector('.countrys');
    const existingMsg = document.querySelector('.no-results');
    let visibleCount = 0;

    if (existingMsg) existingMsg.remove();

    cards.forEach(card => {
        const title = card.querySelector('.product-title');
        if (!title) return;

        let countryName = title.textContent.trim();
        countryName = countryName.replace(/[🇮🇷🇹🇯🇪🇬🇧🇷🇨🇭🇮🇹🇩🇪🇦🇫🇦🇷🇦🇺🇨🇦🇨🇳🇨🇺🇩🇰🇫🇮🇬🇷🇮🇳🇮🇩🇯🇵🇲🇾🇲🇽🇳🇱🇳🇿🇳🇴🇵🇰🇵🇪🇵🇭🇵🇱🇵🇹🇷🇺🇸🇦🇿🇦🇪🇸🇪🇸🇾🇹🇯🇹🇳🇹🇷🇹🇭🇺🇦🇺🇸🇻🇪🇻🇳🇾🇪🇵🇸🇬🇧]/g, '').trim();
        countryName = countryName.trim();

        // اضافه کردن کلاس hidden به جای تغییر مستقیم استایل
        if (continent === 'all' || countryToContinent[countryName] === continent) {
            card.classList.remove('hidden');
            card.classList.add('visible');
            visibleCount++;
        } else {
            card.classList.remove('visible');
            card.classList.add('hidden');
        }
    });

    // نمایش پیام "هیچ کشوری یافت نشد"
    if (visibleCount === 0 && continent !== 'all') {
        if (!existingMsg) {
            const msg = document.createElement('div');
            msg.className = 'no-results';
            const continentNames = {
                'asia': 'آسیا',
                'europe': 'اروپا',
                'africa': 'آفریقا',
                'north-america': 'آمریکای شمالی',
                'south-america': 'آمریکای جنوبی',
                'oceania': 'اقیانوسیه',
                'middle-east': 'خاورمیانه'
            };
            const persianName = continentNames[continent] || continent;
            msg.innerHTML = `
                <span style="font-size: 50px; display: block; margin-bottom: 15px;">🌍</span>
                هیچ کشوری در قاره <strong style="color: #1a237e;">"${persianName}"</strong> یافت نشد!
                <br><span style="font-size: 14px; color: #999;">لطفاً قاره دیگری را انتخاب کنید.</span>
            `;
            container.appendChild(msg);
        }
    }
}

// ============================================
// تابع تغییر دکمه فعال
// ============================================
function setActiveFilter(activeBtn) {
    const allBtns = document.querySelectorAll('.filter-btn');
    allBtns.forEach(btn => {
        btn.classList.remove('active');
    });
    activeBtn.classList.add('active');
}

// ============================================
// تابع ترکیبی جستجو + فیلتر
// ============================================
function filterCountries(searchQuery, continent) {
    const cards = document.querySelectorAll('.country-bio');
    const container = document.querySelector('.countrys');
    const existingMsg = document.querySelector('.no-results');
    let visibleCount = 0;

    if (existingMsg) existingMsg.remove();

    cards.forEach(card => {
        const title = card.querySelector('.product-title');
        if (!title) return;

        let countryName = title.textContent.trim();
        countryName = countryName.replace(/[🇮🇷🇹🇯🇪🇬🇧🇷🇨🇭🇮🇹🇩🇪🇦🇫🇦🇷🇦🇺🇨🇦🇨🇳🇨🇺🇩🇰🇫🇮🇬🇷🇮🇳🇮🇩🇯🇵🇲🇾🇲🇽🇳🇱🇳🇿🇳🇴🇵🇰🇵🇪🇵🇭🇵🇱🇵🇹🇷🇺🇸🇦🇿🇦🇪🇸🇪🇸🇾🇹🇯🇹🇳🇹🇷🇹🇭🇺🇦🇺🇸🇻🇪🇻🇳🇾🇪🇵🇸🇬🇧]/g, '').trim();
        countryName = countryName.trim();

        const matchesSearch = countryName.includes(searchQuery) || searchQuery === '';
        const matchesContinent = continent === 'all' || countryToContinent[countryName] === continent;

        if (matchesSearch && matchesContinent) {
            card.classList.remove('hidden');
            card.classList.add('visible');
            visibleCount++;
        } else {
            card.classList.remove('visible');
            card.classList.add('hidden');
        }
    });

    if (visibleCount === 0 && (searchQuery !== '' || continent !== 'all')) {
        if (!existingMsg) {
            const msg = document.createElement('div');
            msg.className = 'no-results';
            const continentNames = {
                'asia': 'آسیا',
                'europe': 'اروپا',
                'africa': 'آفریقا',
                'north-america': 'آمریکای شمالی',
                'south-america': 'آمریکای جنوبی',
                'oceania': 'اقیانوسیه',
                'middle-east': 'خاورمیانه'
            };
            const persianName = continentNames[continent] || continent;
            msg.innerHTML = `
                <span style="font-size: 50px; display: block; margin-bottom: 15px;">🔍</span>
                هیچ نتیجه‌ای یافت نشد!
                ${searchQuery ? `<br>جستجو: <strong style="color: #1a237e;">"${searchQuery}"</strong>` : ''}
                ${continent !== 'all' ? `<br>قاره: <strong style="color: #1a237e;">"${persianName}"</strong>` : ''}
                <br><span style="font-size: 14px; color: #999;">لطفاً جستجو یا فیلتر خود را تغییر دهید.</span>
            `;
            container.appendChild(msg);
        }
    }
}

// ============================================
// راه‌اندازی
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    let currentContinent = 'all';

    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            currentContinent = this.dataset.continent;
            setActiveFilter(this);

            const searchInput = document.getElementById('searchInput');
            const searchValue = searchInput ? searchInput.value.trim() : '';

            filterCountries(searchValue, currentContinent);
        });
    });

    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchValue = this.value.trim();
            filterCountries(searchValue, currentContinent);
        });
    }

    filterCountries('', 'all');
});
// ============================================
// کلیک روی کارت کشورها (باز شدن صفحه جزئیات)
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const countryCards = document.querySelectorAll('.country-bio');
    
    countryCards.forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', function() {
            const titleEl = this.querySelector('.product-title');
            if (!titleEl) return;
            
            let countryName = titleEl.textContent.trim();
            countryName = countryName.replace(/[🇮🇷🇹🇯🇪🇬🇧🇷🇨🇭🇮🇹🇩🇪🇦🇫🇦🇷🇦🇺🇨🇦🇨🇳🇨🇺🇩🇰🇫🇮🇬🇷🇮🇳🇮🇩🇯🇵🇲🇾🇲🇽🇳🇱🇳🇿🇳🇴🇵🇰🇵🇪🇵🇭🇵🇱🇵🇹🇷🇺🇸🇦🇿🇦🇪🇸🇪🇸🇾🇹🇯🇹🇳🇹🇷🇹🇭🇺🇦🇺🇸🇻🇪🇻🇳🇾🇪🇵🇸🇬🇧]/g, '').trim();
            
            // رفتن به صفحه جزئیات
            window.location.href = `../pages/country.html?name=${encodeURIComponent(countryName)}`;
        });
    });
});
      const menuLinks = document.querySelectorAll(".menu-link");

      menuLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
          menuLinks.forEach((link) => link.classList.remove("active"));
          link.classList.add("active");
        });
      });
        const canvas = document.getElementById('gridCanvas');
        const ctx = canvas.getContext('2d');

        let width, height;
        let frame = 0;

        // تنظیمات شبکه
        const GRID_SIZE = 60;        // فاصله بین خطوط
        const LINE_WIDTH = 1.5;      // ضخامت خطوط
        const LINE_OPACITY = 0.15;   // شفافیت خطوط
        const MOVE_SPEED = 0.1;      // سرعت حرکت به پایین

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }

        function draw() {
            frame++;
            ctx.clearRect(0, 0, width, height);

            // ============================================================
            //  پس‌زمینه با گرادینت
            // ============================================================
            const gradient = ctx.createRadialGradient(
                width * 0.5, height * 0.3, 0,
                width * 0.5, height * 0.3, width * 0.8
            );
            gradient.addColorStop(0, '#1a2a6c');
            gradient.addColorStop(0.5, '#0f1a3a');
            gradient.addColorStop(1, '#0a0a1a');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);

            // ============================================================
            //  محاسبه تعداد خطوط
            // ============================================================
            const cols = Math.ceil(width / GRID_SIZE) + 2;
            const rows = Math.ceil(height / GRID_SIZE) + 2;

            // ============================================================
            //  حرکت عمودی به پایین (افست Y)
            // ============================================================
            const offsetY = (frame * MOVE_SPEED) % GRID_SIZE;

            // ============================================================
            //  رسم خطوط عمودی (ثابت - بدون حرکت افقی)
            // ============================================================
            ctx.beginPath();
            for (let i = 0; i < cols; i++) {
                const x = i * GRID_SIZE;
                if (x > -GRID_SIZE && x < width + GRID_SIZE) {
                    ctx.moveTo(x, 0);
                    ctx.lineTo(x, height);
                }
            }
            ctx.strokeStyle = `rgba(79, 172, 254, ${LINE_OPACITY})`;
            ctx.lineWidth = LINE_WIDTH;
            ctx.stroke();

            // ============================================================
            //  رسم خطوط افقی با حرکت به پایین
            // ============================================================
            ctx.beginPath();
            for (let i = 0; i < rows; i++) {
                const y = i * GRID_SIZE - offsetY;
                if (y > -GRID_SIZE && y < height + GRID_SIZE) {
                    ctx.moveTo(0, y);
                    ctx.lineTo(width, y);
                }
            }
            ctx.strokeStyle = `rgba(79, 172, 254, ${LINE_OPACITY * 0.9})`;
            ctx.lineWidth = LINE_WIDTH * 0.9;
            ctx.stroke();

            // ============================================================
            //  نقاط در تقاطع خطوط (برای تاکید روی توهم مربع‌ها)
            // ============================================================
            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    const x = c * GRID_SIZE;
                    const y = r * GRID_SIZE - offsetY;
                    if (x > 0 && x < width && y > 0 && y < height) {
                        ctx.beginPath();
                        ctx.arc(x, y, 2.5, 0, Math.PI * 2);
                        ctx.fillStyle = `rgba(79, 172, 254, ${LINE_OPACITY * 0.6})`;
                        ctx.fill();

                        // هاله نرم دور نقطه
                        ctx.beginPath();
                        ctx.arc(x, y, 6, 0, Math.PI * 2);
                        ctx.fillStyle = `rgba(79, 172, 254, ${LINE_OPACITY * 0.15})`;
                        ctx.fill();
                    }
                }
            }

            // ============================================================
            //  افکت محو شدگی در لبه‌ها (برای زیبایی بیشتر)
            // ============================================================
            const vignette = ctx.createRadialGradient(
                width / 2, height / 2, height * 0.2,
                width / 2, height / 2, height * 0.9
            );
            vignette.addColorStop(0, 'rgba(0,0,0,0)');
            vignette.addColorStop(0.5, 'rgba(0,0,0,0.1)');
            vignette.addColorStop(1, 'rgba(0,0,0,0.5)');
            ctx.fillStyle = vignette;
            ctx.fillRect(0, 0, width, height);

            requestAnimationFrame(draw);
        }

        window.addEventListener('resize', () => {
            resize();
        });

        resize();
        draw();
        // ============================================
// دکمه بازگشت به بالا
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const backToTop = document.getElementById('backToTop');
    
    if (!backToTop) return;

    // نمایش/مخفی کردن دکمه بر اساس اسکرول
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }, { passive: true });

    // اسکرول نرم به بالا با کلیک
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
