// ============================================
// virtual-tour.js - نسخه نهایی با دیباگ
// ============================================

// ============================================
// دیتای سفر مجازی
// ============================================
const tourData = {
    'ایران': {
        flagCode: 'ir',
        capital: 'تهران',
        population: '۸۵ میلیون نفر',
        language: 'فارسی',
        currency: 'ریال',
        area: '۱,۶۴۸,۱۹۵ کیلومتر مربع',
        gallery: [
            { img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Persepolis_-_Iran.jpg?width=640', caption: 'تخت جمشید - فارس' },
            { img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Naghsh-e_Jahan_Square.jpg?width=640', caption: 'میدان نقش جهان - اصفهان' },
            { img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Golestan_Palace.jpg?width=640', caption: 'کاخ گلستان - تهران' },
            { img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Milad_Tower.jpg?width=640', caption: 'برج میلاد - تهران' },
            { img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Khaju_Bridge.jpg?width=640', caption: 'پل خواجو - اصفهان' },
            { img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Shiraz_-_Hafez_Tomb.jpg?width=640', caption: 'آرامگاه حافظ - شیراز' }
        ],
        attractions: [
            { icon: '🏛️', name: 'تخت جمشید', desc: 'پایتخت باستانی هخامنشیان در نزدیکی شیراز' },
            { icon: '🕌', name: 'میدان نقش جهان', desc: 'میدان تاریخی اصفهان با مسجد امام و شیخ لطف‌الله' },
            { icon: '🏰', name: 'کاخ گلستان', desc: 'کاخ قاجاری در قلب تهران' },
            { icon: '🗼', name: 'برج میلاد', desc: 'بلندترین برج ایران در تهران' },
            { icon: '🌉', name: 'پل خواجو', desc: 'پل تاریخی دوره صفویه در اصفهان' },
            { icon: '🏞️', name: 'دریاچه ارومیه', desc: 'بزرگترین دریاچه داخلی ایران' }
        ],
        food: [
            { icon: '🍢', name: 'چلوکباب', desc: 'غذای ملی ایران با برنج و کباب' },
            { icon: '🍲', name: 'قرمه‌سبزی', desc: 'خورش سنتی با سبزی و لوبیا' },
            { icon: '🍚', name: 'زرشک‌پلو', desc: 'برنج با زرشک و مرغ' },
            { icon: '🥘', name: 'فسنجان', desc: 'خورش گردو و مرغ' },
            { icon: '🍜', name: 'آش رشته', desc: 'آش سنتی با رشته و حبوبات' },
            { icon: '🍰', name: 'باقلوا', desc: 'شیرینی سنتی با پسته و بادام' }
        ],
        culture: [
            { title: '🎭 جشن‌ها', text: 'نوروز، یلدا، سیزده‌بدر و چهارشنبه‌سوری از مهم‌ترین جشن‌های ایرانی هستند.' },
            { title: '📜 ادبیات', text: 'فردوسی، حافظ، سعدی، مولانا و خیام از بزرگ‌ترین شاعران ایران هستند.' },
            { title: '🎨 هنر', text: 'فرش‌بافی، مینیاتور، خاتم‌کاری و سفالگری از هنرهای سنتی ایران هستند.' },
            { title: '🍵 مهمان‌نوازی', text: 'ایرانیان به مهمان‌نوازی معروف هستند و چای و شیرینی از ملزومات پذیرایی است.' }
        ],
        funFacts: [
            { icon: '🏛️', text: 'ایران دارای ۲۴ اثر ثبت‌شده در یونسکو است.' },
            { icon: '🌍', text: 'ایران یکی از کهن‌ترین تمدن‌های جهان با بیش از ۷۰۰۰ سال تاریخ است.' },
            { icon: '💎', text: 'ایران دارای بزرگترین ذخایر گاز طبیعی و چهارمین ذخایر نفت جهان است.' },
            { icon: '🍵', text: 'چای محبوب‌ترین نوشیدنی ایرانیان است و به‌صورت قند پهلو مصرف می‌شود.' },
            { icon: '🏔️', text: 'قله دماوند بلندترین قله ایران و خاورمیانه با ارتفاع ۵۶۱۰ متر است.' }
        ],
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3297485!2d51.3890!3d32.4279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f9b6f6e8f5e5e5f%3A0x5f5e5e5e5e5e5e5e!2sIran!5e0!3m2!1sen!2s!'
    },
    'آلمان': {
        flagCode: 'de',
        capital: 'برلین',
        population: '۸۳ میلیون نفر',
        language: 'آلمانی',
        currency: 'یورو',
        area: '۳۵۷,۰۲۲ کیلومتر مربع',
        gallery: [
            { img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Brandenburger_Tor.jpg?width=640', caption: 'دروازه براندنبورگ - برلین' },
            { img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Cologne_Cathedral.jpg?width=640', caption: 'کلیسای کلن' },
            { img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Neuschwanstein_Castle.jpg?width=640', caption: 'قلعه نویشوانشتاین' },
            { img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Reichstag_Building.jpg?width=640', caption: 'ساختمان رایشستاگ - برلین' },
            { img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Marienplatz_Munich.jpg?width=640', caption: 'میدان ماریان - مونیخ' },
            { img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Black_Forest.jpg?width=640', caption: 'جنگل سیاه' }
        ],
        attractions: [
            { icon: '🚪', name: 'دروازه براندنبورگ', desc: 'نماد اصلی شهر برلین' },
            { icon: '⛪', name: 'کلیسای کلن', desc: 'کلیسای جامع گوتیک در شهر کلن' },
            { icon: '🏰', name: 'قلعه نویشوانشتاین', desc: 'قلعه افسانه‌ای باواریا' },
            { icon: '🏛️', name: 'رایشستاگ', desc: 'ساختمان پارلمان آلمان' },
            { icon: '🍺', name: 'جشنواره اکتبرفست', desc: 'بزرگترین جشنواره آبجو جهان' },
            { icon: '🌲', name: 'جنگل سیاه', desc: 'جنگل معروف در جنوب غربی آلمان' }
        ],
        food: [
            { icon: '🌭', name: 'براتوورست', desc: 'سوسیس کبابی آلمانی' },
            { icon: '🍖', name: 'شنیسل', desc: 'گوشت سرخ‌شده با پوشش نان' },
            { icon: '🥬', name: 'کلم ترش', desc: 'کلم تخمیری سنتی' },
            { icon: '🍰', name: 'کیک زاخر', desc: 'کیک شکلاتی معروف' },
            { icon: '🍺', name: 'آبجو', desc: 'انواع آبجوی آلمانی' },
            { icon: '🥨', name: 'پرِتزل', desc: 'نان نمکی سنتی' }
        ],
        culture: [
            { title: '🎵 موسیقی', text: 'باخ، بتهوون، واگنر و برامس از آهنگسازان بزرگ آلمانی هستند.' },
            { title: '📚 ادبیات', text: 'گوته، شیلر و کافکا از نویسندگان مشهور آلمانی‌زبان هستند.' },
            { title: '🚗 خودروسازی', text: 'مرسدس بنز، بی‌ام‌و، فولکس‌واگن و پورشه از آلمان هستند.' },
            { title: '⚽ فوتبال', text: 'آلمان یکی از موفق‌ترین تیم‌های فوتبال جهان است.' }
        ],
        funFacts: [
            { icon: '🍺', text: 'آلمان بیش از ۱۵۰۰ نوع آبجو تولید می‌کند.' },
            { icon: '🏰', text: 'آلمان بیش از ۲۰۰۰۰ قلعه و کاخ دارد.' },
            { icon: '🚗', text: 'اولین خودروی جهان توسط کارل بنز در آلمان ساخته شد.' },
            { icon: '📚', text: 'آلمان بزرگترین بازار کتاب جهان پس از آمریکا است.' },
            { icon: '🌲', text: 'یک‌سوم خاک آلمان پوشیده از جنگل است.' },
            { icon: '🎄', text: 'درخت کریسمس از آلمان به جهان معرفی شد.' }
        ],
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3297485!2d10.4515!3d51.1657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8f5e5e5e5e5e5%3A0x5f5e5e5e5e5e5e5e!2sGermany!5e0!3m2!1sen!2s!'
    },
    'فرانسه': {
        flagCode: 'fr',
        capital: 'پاریس',
        population: '۶۷ میلیون نفر',
        language: 'فرانسوی',
        currency: 'یورو',
        area: '۶۴۳,۸۰۱ کیلومتر مربع',
        gallery: [
            { img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Tour_Eiffel_Wikimedia_Commons.jpg?width=640', caption: 'برج ایفل - پاریس' },
            { img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Louvre_Museum.jpg?width=640', caption: 'موزه لوور - پاریس' },
            { img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Notre-Dame_de_Paris.jpg?width=640', caption: 'کلیسای نوتردام - پاریس' },
            { img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Versailles_Palace.jpg?width=640', caption: 'کاخ ورسای' },
            { img: 'https://commons.wikimedia.org/wiki/Special:FilePath/French_Riviera.jpg?width=640', caption: 'سواحل آزور' },
            { img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mont_Saint-Michel.jpg?width=640', caption: 'مون سن میشل' }
        ],
        attractions: [
            { icon: '🗼', name: 'برج ایفل', desc: 'نماد اصلی پاریس و فرانسه' },
            { icon: '🖼️', name: 'موزه لوور', desc: 'بزرگترین موزه هنری جهان' },
            { icon: '⛪', name: 'کلیسای نوتردام', desc: 'کلیسای گوتیک معروف پاریس' },
            { icon: '🏰', name: 'کاخ ورسای', desc: 'کاخ سلطنتی باشکوه' },
            { icon: '🌊', name: 'سواحل آزور', desc: 'سواحل زیبای مدیترانه' },
            { icon: '🏝️', name: 'مون سن میشل', desc: 'صومعه روی جزیره سنگی' }
        ],
        food: [
            { icon: '🥐', name: 'کروسان', desc: 'نان شیرینی فرانسوی' },
            { icon: '🧀', name: 'پنیر فرانسوی', desc: 'انواع پنیرهای معروف' },
            { icon: '🍷', name: 'شراب', desc: 'شراب‌های معروف بورگوندی و بوردو' },
            { icon: '🐌', name: 'خوراک حلزون', desc: 'غذای سنتی فرانسوی' },
            { icon: '🥖', name: 'باگت', desc: 'نان سنتی فرانسوی' },
            { icon: '🍰', name: 'کروکمبوش', desc: 'دسر سنتی فرانسوی' }
        ],
        culture: [
            { title: '🎨 هنر', text: 'مونه، رنوآر، سزان و پیکاسو از هنرمندان مشهور فرانسوی هستند.' },
            { title: '📚 ادبیات', text: 'ویکتور هوگو، بالزاک، کامو و سارتر از نویسندگان مشهور فرانسوی هستند.' },
            { title: '👗 مد', text: 'پاریس پایتخت مد جهان و خانه برندهایی مثل شنل و دیور است.' },
            { title: '🍷 غذا', text: 'غذای فرانسوی در فهرست میراث فرهنگی یونسکو ثبت شده است.' }
        ],
        funFacts: [
            { icon: '🗼', text: 'برج ایفل در ابتدا قرار بود موقتی باشد و قرار بود ۲۰ سال بعد تخریب شود.' },
            { icon: '🖼️', text: 'موزه لوور بزرگترین موزه هنری جهان با بیش از ۳۵۰۰۰ اثر است.' },
            { icon: '🧀', text: 'فرانسه بیش از ۱۰۰۰ نوع پنیر تولید می‌کند.' },
            { icon: '🚄', text: 'قطار TGV فرانسه یکی از سریع‌ترین قطارهای جهان است.' },
            { icon: '🥖', text: 'نان باگت نماد فرهنگی فرانسه و در یونسکو ثبت شده است.' },
            { icon: '🎨', text: 'فرانسه پربازدیدترین کشور جهان با بیش از ۹۰ میلیون گردشگر در سال است.' }
        ],
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3297485!2d2.2137!3d46.6034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8f5e5e5e5e5e5%3A0x5f5e5e5e5e5e5e5e!2sFrance!5e0!3m2!1sen!2s!'
    },
    'ژاپن': {
        flagCode: 'jp',
        capital: 'توکیو',
        population: '۱۲۵ میلیون نفر',
        language: 'ژاپنی',
        currency: 'ین',
        area: '۳۷۷,۹۷۵ کیلومتر مربع',
        gallery: [
            { img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mount_Fuji.jpg?width=640', caption: 'کوه فوجی' },
            { img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kinkaku-ji.jpg?width=640', caption: 'معبد طلایی - کیوتو' },
            { img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Osaka_Castle.jpg?width=640', caption: 'قلعه اوساکا' },
            { img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Shibuya_Crossing.jpg?width=640', caption: 'تقاطع شیبویا - توکیو' },
            { img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Nara_Deer.jpg?width=640', caption: 'گوزن‌های نارا' },
            { img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Hiroshima_Peace_Memorial.jpg?width=640', caption: 'یادبود صلح هیروشیما' }
        ],
        attractions: [
            { icon: '🗻', name: 'کوه فوجی', desc: 'بلندترین کوه ژاپن و نماد کشور' },
            { icon: '⛩️', name: 'معبد طلایی', desc: 'معبد بودایی پوشیده از طلا در کیوتو' },
            { icon: '🏯', name: 'قلعه اوساکا', desc: 'قلعه تاریخی و زیبای ژاپن' },
            { icon: '🚦', name: 'تقاطع شیبویا', desc: 'شلوغ‌ترین تقاطع جهان در توکیو' },
            { icon: '🦌', name: 'پارک نارا', desc: 'پارک با گوزن‌های آزاد' },
            { icon: '🕊️', name: 'یادبود هیروشیما', desc: 'یادبود قربانیان بمباران اتمی' }
        ],
        food: [
            { icon: '🍣', name: 'سوشی', desc: 'غذای ملی ژاپن با برنج و ماهی' },
            { icon: '🍜', name: 'رامن', desc: 'نودل رشته‌ای با سوپ' },
            { icon: '🍤', name: 'تمپورا', desc: 'غذای سرخ‌شده با پوشش خمیر' },
            { icon: '🍱', name: 'بنتو', desc: 'جعبه غذای سنتی ژاپنی' },
            { icon: '🍵', name: 'ماچا', desc: 'چای سبز پودری' },
            { icon: '🍡', name: 'موچی', desc: 'شیرینی برنجی سنتی' }
        ],
        culture: [
            { title: '🌸 ساکورا', text: 'شکوفه‌های گیلاس نماد زیبایی و ناپایداری زندگی در ژاپن هستند.' },
            { title: '🎎 آیین‌ها', text: 'مراسم چای، گل‌آرایی، کیمونو و سومو از آیین‌های سنتی ژاپن هستند.' },
            { title: '🤖 فناوری', text: 'ژاپن پیشرو در رباتیک، الکترونیک و خودروسازی است.' },
            { title: '🎮 انیمه و مانگا', text: 'انیمه و مانگا بخش بزرگی از فرهنگ ژاپن و جهان را تشکیل می‌دهند.' }
        ],
        funFacts: [
            { icon: '🚄', text: 'قطار گلوله‌ای ژاپن با سرعت ۳۲۰ کیلومتر بر ساعت حرکت می‌کند.' },
            { icon: '🍣', text: 'ژاپن بیش از ۵۰۰۰ جزیره دارد.' },
            { icon: '🤖', text: 'ژاپن بیشترین ربات صنعتی را در جهان دارد.' },
            { icon: '🌸', text: 'فصل شکوفه‌های گیلاس (ساکورا) در ژاپن جشن ملی است.' },
            { icon: '🍵', text: 'مراسم چای ژاپنی بیش از ۱۰۰۰ سال قدمت دارد.' },
            { icon: '🎮', text: 'بازی‌های ویدیویی مانند ماریو و پوکمون از ژاپن آمده‌اند.' }
        ],
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3297485!2d138.0000!3d36.0000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f9b6f6e8f5e5e5f%3A0x5f5e5e5e5e5e5e5e!2sJapan!5e0!3m2!1sen!2s!'
    },
    'ایتالیا': {
        flagCode: 'it',
        capital: 'رم',
        population: '۵۹ میلیون نفر',
        language: 'ایتالیایی',
        currency: 'یورو',
        area: '۳۰۱,۳۴۰ کیلومتر مربع',
        gallery: [
            { img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Colosseum.jpg?width=640', caption: 'کولوسئوم - رم' },
            { img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Leaning_Tower_of_Pisa.jpg?width=640', caption: 'برج پیزا' },
            { img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Venice_Canals.jpg?width=640', caption: 'کانال‌های ونیز' },
            { img: 'https://commons.wikimedia.org/wiki/Special:FilePath/St_Peters_Basilica.jpg?width=640', caption: 'کلیسای سنت پیتر - واتیکان' },
            { img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Amalfi_Coast.jpg?width=640', caption: 'ساحل آمالفی' },
            { img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Florence_Duomo.jpg?width=640', caption: 'کلیسای جامع فلورانس' }
        ],
        attractions: [
            { icon: '🏛️', name: 'کولوسئوم', desc: 'آمفی‌تئاتر باستانی رم' },
            { icon: '🗼', name: 'برج پیزا', desc: 'برج کج معروف ایتالیا' },
            { icon: '🚤', name: 'کانال‌های ونیز', desc: 'شهر روی آب با گوندولا' },
            { icon: '⛪', name: 'کلیسای سنت پیتر', desc: 'بزرگترین کلیسای جهان در واتیکان' },
            { icon: '🌊', name: 'ساحل آمالفی', desc: 'ساحل زیبای مدیترانه' },
            { icon: '🎨', name: 'فلورانس', desc: 'زادگاه رنسانس و هنر' }
        ],
        food: [
            { icon: '🍕', name: 'پیتزا', desc: 'غذای ملی ایتالیا' },
            { icon: '🍝', name: 'پاستا', desc: 'انواع پاستا با سس‌های مختلف' },
            { icon: '🍝', name: 'لازانیا', desc: 'لایه‌های پاستا با گوشت و پنیر' },
            { icon: '🍨', name: 'ژلاتو', desc: 'بستنی سنتی ایتالیایی' },
            { icon: '☕', name: 'اسپرسو', desc: 'قهوه غلیظ ایتالیایی' },
            { icon: '🍰', name: 'تیرامیسو', desc: 'دسر معروف ایتالیایی' }
        ],
        culture: [
            { title: '🎨 هنر', text: 'لئوناردو داوینچی، میکل‌آنژ، رافائل و بوتیچلی از هنرمندان بزرگ ایتالیایی هستند.' },
            { title: '🎵 موسیقی', text: 'اپرا، ویوالدی، پاگانینی و وردی از موسیقی‌دانان بزرگ ایتالیا هستند.' },
            { title: '🏛️ تاریخ', text: 'رم باستان، رنسانس و امپراتوری روم از دوره‌های مهم تاریخی ایتالیا هستند.' },
            { title: '👗 مد', text: 'میلان پایتخت مد جهان و خانه برندهایی مثل گوچی، پرادا و ورساچه است.' }
        ],
        funFacts: [
            { icon: '🏛️', text: 'ایتالیا بیشترین تعداد آثار یونسکو را در جهان دارد (۵۸ اثر).' },
            { icon: '🍕', text: 'پیتزا در ناپل ایتالیا ابداع شد.' },
            { icon: '🚗', text: 'فراری، لامبورگینی و مازراتی از ایتالیا هستند.' },
            { icon: '🎨', text: 'بیش از ۶۰٪ آثار هنری جهان در ایتالیا قرار دارند.' },
            { icon: '☕', text: 'ایتالیایی‌ها روزانه بیش از ۳۰ میلیون فنجان اسپرسو می‌نوشند.' },
            { icon: '🏰', text: 'ایتالیا بیش از ۱۰۰۰۰۰ قلعه و بنای تاریخی دارد.' }
        ],
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3297485!2d12.4964!3d41.9028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8f5e5e5e5e5e5%3A0x5f5e5e5e5e5e5e5e!2sItaly!5e0!3m2!1sen!2s!'
    },
    'برزیل': {
        flagCode: 'br',
        capital: 'برازیلیا',
        population: '۲۱۳ میلیون نفر',
        language: 'پرتغالی',
        currency: 'رئال',
        area: '۸,۵۱۵,۷۶۷ کیلومتر مربع',
        gallery: [
            { img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Christ_the_Redeemer.jpg?width=640', caption: 'مجسمه مسیح - ریو' },
            { img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Copacabana_Beach.jpg?width=640', caption: 'ساحل کوپاکابانا - ریو' },
            { img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Amazon_Rainforest.jpg?width=640', caption: 'جنگل آمازون' },
            { img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Iguazu_Falls.jpg?width=640', caption: 'آبشار ایگواچو' },
            { img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Rio_Carnival.jpg?width=640', caption: 'کارناوال ریو' },
            { img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Salvador_Brazil.jpg?width=640', caption: 'سالوادور - باهیا' }
        ],
        attractions: [
            { icon: '⛪', name: 'مجسمه مسیح', desc: 'مجسمه معروف روی کوه کورکووادو' },
            { icon: '🏖️', name: 'ساحل کوپاکابانا', desc: 'ساحل معروف ریو دو ژانیرو' },
            { icon: '🌳', name: 'جنگل آمازون', desc: 'بزرگترین جنگل بارانی جهان' },
            { icon: '💦', name: 'آبشار ایگواچو', desc: 'یکی از بزرگترین آبشارهای جهان' },
            { icon: '🎉', name: 'کارناوال ریو', desc: 'بزرگترین جشنواره جهان' },
            { icon: '🏛️', name: 'سالوادور', desc: 'شهر تاریخی با معماری استعماری' }
        ],
        food: [
            { icon: '🥘', name: 'فئوژادا', desc: 'خورش لوبیا و گوشت' },
            { icon: '🍹', name: 'کایپیرینیا', desc: 'نوشیدنی سنتی برزیلی' },
            { icon: '🥩', name: 'شوراسکو', desc: 'گوشت کبابی برزیلی' },
            { icon: '🍲', name: 'موککا', desc: 'خورش ماهی و نارگیل' },
            { icon: '🍰', name: 'بریگادیرو', desc: 'شیرینی شکلاتی برزیلی' },
            { icon: '☕', name: 'قهوه برزیلی', desc: 'قهوه معروف و باکیفیت' }
        ],
        culture: [
            { title: '⚽ فوتبال', text: 'برزیل پرافتخارترین تیم فوتبال جهان با ۵ جام جهانی است.' },
            { title: '🎵 موسیقی', text: 'سامبا، بوسانووا و فورو از سبک‌های موسیقی برزیلی هستند.' },
            { title: '💃 رقص', text: 'سامبا و کاپوئرا از رقص‌های سنتی برزیل هستند.' },
            { title: '🎭 کارناوال', text: 'کارناوال ریو بزرگترین جشنواره جهان است.' }
        ],
        funFacts: [
            { icon: '🌳', text: 'جنگل آمازون به تنهایی ۲۰٪ اکسیژن جهان را تولید می‌کند.' },
            { icon: '⚽', text: 'برزیل تنها کشوری است که در همه جام‌های جهانی حضور داشته.' },
            { icon: '🏖️', text: 'برزیل بیش از ۷۰۰۰ کیلومتر ساحل دارد.' },
            { icon: '☕', text: 'برزیل بزرگترین تولیدکننده قهوه جهان است.' },
            { icon: '💃', text: 'کارناوال ریو سالانه بیش از ۲ میلیون بازدیدکننده دارد.' },
            { icon: '🐆', text: 'پلنگ خالدار آمریکایی (جگوار) در برزیل زندگی می‌کند.' }
        ],
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3297485!2d-52.0000!3d-14.0000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8f5e5e5e5e5e5%3A0x5f5e5e5e5e5e5e5e!2sBrazil!5e0!3m2!1sen!2s!'
    },
    'ترکیه': {
        flagCode: 'tr',
        capital: 'آنکارا',
        population: '۸۵ میلیون نفر',
        language: 'ترکی',
        currency: 'لیر',
        area: '۷۸۳,۵۶۲ کیلومتر مربع',
        gallery: [
            { img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Hagia_Sophia.jpg?width=640', caption: 'ایاصوفیه - استانبول' },
            { img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Cappadocia_Balloons.jpg?width=640', caption: 'بالون‌های کاپادوکیه' },
            { img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pamukkale.jpg?width=640', caption: 'پاموکاله' },
            { img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Topkapi_Palace.jpg?width=640', caption: 'کاخ توپکاپی - استانبول' },
            { img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Blue_Mosque.jpg?width=640', caption: 'مسجد آبی - استانبول' },
            { img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ephesus.jpg?width=640', caption: 'افسوس - ازمیر' }
        ],
        attractions: [
            { icon: '🕌', name: 'ایاصوفیه', desc: 'مسجد و موزه تاریخی استانبول' },
            { icon: '🎈', name: 'کاپادوکیه', desc: 'منطقه بالون‌سواری معروف' },
            { icon: '💦', name: 'پاموکاله', desc: 'استخرهای طبیعی آب گرم' },
            { icon: '🏰', name: 'کاخ توپکاپی', desc: 'کاخ سلاطین عثمانی' },
            { icon: '🕌', name: 'مسجد آبی', desc: 'مسجد معروف استانبول' },
            { icon: '🏛️', name: 'افسوس', desc: 'شهر باستانی یونانی-رومی' }
        ],
        food: [
            { icon: '🥙', name: 'کباب', desc: 'انواع کباب ترکی' },
            { icon: '🍰', name: 'باقلوا', desc: 'شیرینی سنتی با پسته' },
            { icon: '🥟', name: 'منتی', desc: 'کوفته کوچک ترکی' },
            { icon: '☕', name: 'قهوه ترکی', desc: 'قهوه سنتی دم‌کرده' },
            { icon: '🍬', name: 'لوکوم', desc: 'شیرینی لاستیکی ترکی' },
            { icon: '🥖', name: 'سیمیت', desc: 'نان کنجدی ترکی' }
        ],
        culture: [
            { title: '🏛️ تاریخ', text: 'ترکیه وارث امپراتوری‌های بیزانس و عثمانی است.' },
            { title: '🕌 مذهب', text: 'اسلام دین اصلی ترکیه است و مساجد تاریخی زیادی دارد.' },
            { title: '🛁 حمام', text: 'حمام ترکی بخشی از فرهنگ و سنت ترکیه است.' },
            { title: '🎭 هنر', text: 'خطاطی، مینیاتور و فرش‌بافی از هنرهای سنتی ترکیه هستند.' }
        ],
        funFacts: [
            { icon: '🕌', text: 'استانبول تنها شهری است که در دو قاره (اروپا و آسیا) قرار دارد.' },
            { icon: '🎈', text: 'کاپادوکیه یکی از بهترین مکان‌های بالون‌سواری در جهان است.' },
            { icon: '🍰', text: 'باقلوا در ترکیه به عنوان دسر ملی شناخته می‌شود.' },
            { icon: '🛁', text: 'حمام‌های ترکی بیش از ۱۰۰۰ سال قدمت دارند.' },
            { icon: '☕', text: 'قهوه ترکی در فهرست میراث فرهنگی یونسکو ثبت شده است.' },
            { icon: '🏛️', text: 'ترکیه دارای ۱۸ اثر ثبت‌شده در یونسکو است.' }
        ],
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3297485!2d32.8597!3d39.9334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b0155c5f5f5f5f%3A0x5f5e5e5e5e5e5e5e!2sTurkey!5e0!3m2!1sen!2s!'
    }
};

// ============================================
// توابع کمکی
// ============================================
function createImageWithFallback(src, alt, caption) {
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.loading = 'lazy';
    img.onerror = function() {
        this.style.display = 'none';
        const parent = this.parentElement;
        if (parent) {
            parent.style.background = 'linear-gradient(135deg, #e8edf9, #c5cae9)';
            parent.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:40px;">🖼️</div><div class="caption">${caption}</div>`;
        }
    };
    return img;
}

// ============================================
// راه‌اندازی
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ virtual-tour.js لود شد');

    const countrySearch = document.getElementById('countrySearch');
    const countryGrid = document.getElementById('countryGrid');
    const countrySelector = document.getElementById('countrySelector');
    const tourView = document.getElementById('tourView');
    const backToList = document.getElementById('backToList');

    // ===== بررسی وجود عناصر =====
    if (!countryGrid) {
        console.error('❌ countryGrid پیدا نشد!');
        return;
    }
    if (!countrySelector) {
        console.error('❌ countrySelector پیدا نشد!');
        return;
    }
    if (!tourView) {
        console.error('❌ tourView پیدا نشد!');
        return;
    }

    console.log('✅ همه عناصر پیدا شدند');

    // ===== نمایش لیست کشورها =====
    function renderCountryList(filter = '') {
        console.log('🔄 رندر لیست کشورها...');
        countryGrid.innerHTML = '';

        const countries = Object.keys(tourData).filter(name => 
            name.includes(filter)
        );

        console.log(`📋 تعداد کشورها: ${countries.length}`);

        if (countries.length === 0) {
            countryGrid.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #999;">
                    <span style="font-size: 50px; display: block; margin-bottom: 15px;">🔍</span>
                    کشوری با این نام پیدا نشد!
                </div>
            `;
            return;
        }

        countries.forEach(name => {
            const data = tourData[name];
            const card = document.createElement('div');
            card.className = 'country-card';
            card.innerHTML = `
                <img src="https://flagcdn.com/w160/${data.flagCode}.png" alt="${name}" class="flag-img" loading="lazy">
                <h3 class="country-name">${name}</h3>
                <p class="country-capital">${data.capital}</p>
            `;

            // ✅ رویداد کلیک
            card.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('🖱️ کلیک روی:', name);
                showTour(name);
            });

            countryGrid.appendChild(card);
        });

        console.log('✅ لیست کشورها رندر شد');
    }

    // ===== نمایش صفحه سفر =====
    function showTour(countryName) {
        console.log('🎬 نمایش سفر برای:', countryName);
        
        const data = tourData[countryName];
        if (!data) {
            console.error('❌ دیتای کشور پیدا نشد:', countryName);
            return;
        }

        countrySelector.style.display = 'none';
        tourView.style.display = 'block';

        document.getElementById('tourCountryHeader').innerHTML = `
            <img src="https://flagcdn.com/w160/${data.flagCode}.png" alt="${countryName}" class="flag">
            <div class="info">
                <h2>${countryName}</h2>
                <p>🏛️ ${data.capital} · 👥 ${data.population} · 🗣️ ${data.language}</p>
            </div>
        `;

        // ===== تب پیش‌فرض =====
        document.querySelectorAll('.tour-tab').forEach(t => t.classList.remove('active'));
        const firstTab = document.querySelector('.tour-tab[data-tab="gallery"]');
        if (firstTab) firstTab.classList.add('active');

        renderTab('gallery', data);
        console.log('✅ سفر نمایش داده شد');
    }

    // ===== رندر تب =====
    function renderTab(tabName, data) {
        const content = document.getElementById('tourContent');
        if (!content) {
            console.error('❌ tourContent پیدا نشد!');
            return;
        }

        console.log('📑 رندر تب:', tabName);

        switch (tabName) {
            case 'gallery':
                content.innerHTML = '';
                const galleryGrid = document.createElement('div');
                galleryGrid.className = 'gallery-grid';
                
                data.gallery.forEach(item => {
                    const galleryItem = document.createElement('div');
                    galleryItem.className = 'gallery-item';
                    
                    const img = createImageWithFallback(item.img, item.caption, item.caption);
                    const caption = document.createElement('div');
                    caption.className = 'caption';
                    caption.textContent = item.caption;
                    
                    galleryItem.appendChild(img);
                    galleryItem.appendChild(caption);
                    galleryGrid.appendChild(galleryItem);
                });
                
                content.appendChild(galleryGrid);
                break;

            case 'attractions':
                content.innerHTML = `
                    <div class="attractions-list">
                        ${data.attractions.map(item => `
                            <div class="attraction-item">
                                <div class="icon">${item.icon}</div>
                                <div class="info">
                                    <h4>${item.name}</h4>
                                    <p>${item.desc}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                `;
                break;

            case 'food':
                content.innerHTML = `
                    <div class="food-grid">
                        ${data.food.map(item => `
                            <div class="food-card">
                                <div class="food-icon">${item.icon}</div>
                                <h4>${item.name}</h4>
                                <p>${item.desc}</p>
                            </div>
                        `).join('')}
                    </div>
                `;
                break;

            case 'culture':
                content.innerHTML = `
                    <div class="culture-content">
                        ${data.culture.map(item => `
                            <div class="culture-section">
                                <h4>${item.title}</h4>
                                <p>${item.text}</p>
                            </div>
                        `).join('')}
                    </div>
                `;
                break;

            case 'funfacts':
                content.innerHTML = `
                    <div class="funfacts-grid">
                        ${data.funFacts.map(item => `
                            <div class="funfact-card">
                                <div class="funfact-icon">${item.icon}</div>
                                <p>${item.text}</p>
                            </div>
                        `).join('')}
                    </div>
                `;
                break;

            case 'map':
                content.innerHTML = `
                    <div class="map-wrapper">
                        <iframe src="${data.map}" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                `;
                break;
        }
    }

    // ===== جستجو =====
    if (countrySearch) {
        countrySearch.addEventListener('input', function() {
            renderCountryList(this.value.trim());
        });
    }

    // ===== بازگشت =====
    if (backToList) {
        backToList.addEventListener('click', function() {
            console.log('🔙 بازگشت به لیست');
            tourView.style.display = 'none';
            countrySelector.style.display = 'block';
            if (countrySearch) countrySearch.value = '';
            renderCountryList();
        });
    }

    // ===== تب‌ها =====
    document.querySelectorAll('.tour-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.tour-tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            const tabName = this.dataset.tab;
            const countryName = document.querySelector('#tourCountryHeader h2');
            if (countryName) {
                renderTab(tabName, tourData[countryName.textContent]);
            }
        });
    });

    // ===== شروع =====
    renderCountryList();
    console.log('✅ راه‌اندازی کامل شد');
});