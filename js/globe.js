// ============================================
// تنظیمات اولیه
// ============================================
const canvas = document.getElementById('globeCanvas');
const tooltip = document.getElementById('globeTooltip');

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    45,
    canvas.clientWidth / canvas.clientHeight,
    0.1,
    1000
);
camera.position.z = 3.5;

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true
});
renderer.setSize(canvas.clientWidth, canvas.clientHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// ============================================
// نقشه نام انگلیسی به فارسی + کد پرچم
// ============================================
const countryDataMap = {
    'Iran': { fa: 'ایران', code: 'ir' },
    'Germany': { fa: 'آلمان', code: 'de' },
    'Italy': { fa: 'ایتالیا', code: 'it' },
    'France': { fa: 'فرانسه', code: 'fr' },
    'Spain': { fa: 'اسپانیا', code: 'es' },
    'Turkey': { fa: 'ترکیه', code: 'tr' },
    'Egypt': { fa: 'مصر', code: 'eg' },
    'Brazil': { fa: 'برزیل', code: 'br' },
    'Russia': { fa: 'روسیه', code: 'ru' },
    'China': { fa: 'چین', code: 'cn' },
    'Japan': { fa: 'ژاپن', code: 'jp' },
    'India': { fa: 'هند', code: 'in' },
    'Canada': { fa: 'کانادا', code: 'ca' },
    'Australia': { fa: 'استرالیا', code: 'au' },
    'Switzerland': { fa: 'سوئیس', code: 'ch' },
    'Sweden': { fa: 'سوئد', code: 'se' },
    'Norway': { fa: 'نروژ', code: 'no' },
    'Denmark': { fa: 'دانمارک', code: 'dk' },
    'Finland': { fa: 'فنلاند', code: 'fi' },
    'Netherlands': { fa: 'هلند', code: 'nl' },
    'Belgium': { fa: 'بلژیک', code: 'be' },
    'Austria': { fa: 'اتریش', code: 'at' },
    'Greece': { fa: 'یونان', code: 'gr' },
    'Portugal': { fa: 'پرتغال', code: 'pt' },
    'Poland': { fa: 'لهستان', code: 'pl' },
    'Ukraine': { fa: 'اوکراین', code: 'ua' },
    'Pakistan': { fa: 'پاکستان', code: 'pk' },
    'United Arab Emirates': { fa: 'امارات متحده عربی', code: 'ae' },
    'South Africa': { fa: 'آفریقای جنوبی', code: 'za' },
    'Saudi Arabia': { fa: 'عربستان سعودی', code: 'sa' },
    'Tajikistan': { fa: 'تاجیکستان', code: 'tj' },
    'Afghanistan': { fa: 'افغانستان', code: 'af' },
    'Argentina': { fa: 'آرژانتین', code: 'ar' },
    'Mexico': { fa: 'مکزیک', code: 'mx' },
    'Indonesia': { fa: 'اندونزی', code: 'id' },
    'Malaysia': { fa: 'مالزی', code: 'my' },
    'Philippines': { fa: 'فیلیپین', code: 'ph' },
    'Vietnam': { fa: 'ویتنام', code: 'vn' },
    'United Kingdom': { fa: 'بریتانیا', code: 'gb' },
    'United States of America': { fa: 'ایالات متحده آمریکا', code: 'us' },
    'South Korea': { fa: 'کره جنوبی', code: 'kr' },
    'North Korea': { fa: 'کره شمالی', code: 'kp' },
    'Thailand': { fa: 'تایلند', code: 'th' },
    'Iraq': { fa: 'عراق', code: 'iq' },
    'Syria': { fa: 'سوریه', code: 'sy' },
    'Jordan': { fa: 'اردن', code: 'jo' },
    'Lebanon': { fa: 'لبنان', code: 'lb' },
    'Kuwait': { fa: 'کویت', code: 'kw' },
    'Qatar': { fa: 'قطر', code: 'qa' },
    'Bahrain': { fa: 'بحرین', code: 'bh' },
    'Oman': { fa: 'عمان', code: 'om' },
    'Yemen': { fa: 'یمن', code: 'ye' },
    'Azerbaijan': { fa: 'جمهوری آذربایجان', code: 'az' },
    'Armenia': { fa: 'ارمنستان', code: 'am' },
    'Georgia': { fa: 'گرجستان', code: 'ge' },
    'Kazakhstan': { fa: 'قزاقستان', code: 'kz' },
    'Uzbekistan': { fa: 'ازبکستان', code: 'uz' },
    'Turkmenistan': { fa: 'ترکمنستان', code: 'tm' },
    'Kyrgyzstan': { fa: 'قرقیزستان', code: 'kg' },
    'Mongolia': { fa: 'مغولستان', code: 'mn' },
    'Nepal': { fa: 'نپال', code: 'np' },
    'Bhutan': { fa: 'بوتان', code: 'bt' },
    'Bangladesh': { fa: 'بنگلادش', code: 'bd' },
    'Sri Lanka': { fa: 'سریلانکا', code: 'lk' },
    'Myanmar': { fa: 'میانمار', code: 'mm' },
    'Cambodia': { fa: 'کامبوج', code: 'kh' },
    'Laos': { fa: 'لائوس', code: 'la' },
    'Singapore': { fa: 'سنگاپور', code: 'sg' },
    'New Zealand': { fa: 'نیوزیلند', code: 'nz' },
    'Peru': { fa: 'پرو', code: 'pe' },
    'Chile': { fa: 'شیلی', code: 'cl' },
    'Colombia': { fa: 'کلمبیا', code: 'co' },
    'Venezuela': { fa: 'ونزوئلا', code: 've' },
    'Ecuador': { fa: 'اکوادور', code: 'ec' },
    'Bolivia': { fa: 'بولیوی', code: 'bo' },
    'Paraguay': { fa: 'پاراگوئه', code: 'py' },
    'Uruguay': { fa: 'اروگوئه', code: 'uy' },
    'Cuba': { fa: 'کوبا', code: 'cu' },
    'Morocco': { fa: 'مراکش', code: 'ma' },
    'Algeria': { fa: 'الجزایر', code: 'dz' },
    'Tunisia': { fa: 'تونس', code: 'tn' },
    'Libya': { fa: 'لیبی', code: 'ly' },
    'Sudan': { fa: 'سودان', code: 'sd' },
    'Ethiopia': { fa: 'اتیوپی', code: 'et' },
    'Kenya': { fa: 'کنیا', code: 'ke' },
    'Nigeria': { fa: 'نیجریه', code: 'ng' },
    'Ghana': { fa: 'غنا', code: 'gh' },
    'Senegal': { fa: 'سنگال', code: 'sn' },
    'Ivory Coast': { fa: 'ساحل عاج', code: 'ci' },
    'Cameroon': { fa: 'کامرون', code: 'cm' },
    'Angola': { fa: 'آنگولا', code: 'ao' },
    'Mozambique': { fa: 'موزامبیک', code: 'mz' },
    'Madagascar': { fa: 'ماداگاسکار', code: 'mg' },
    'Zimbabwe': { fa: 'زیمبابوه', code: 'zw' },
    'Zambia': { fa: 'زامبیا', code: 'zm' },
    'Botswana': { fa: 'بوتسوانا', code: 'bw' },
    'Namibia': { fa: 'نامیبیا', code: 'na' },
    'Mauritania': { fa: 'موریتانی', code: 'mr' },
    'Mali': { fa: 'مالی', code: 'ml' },
    'Niger': { fa: 'نیجر', code: 'ne' },
    'Chad': { fa: 'چاد', code: 'td' },
    'Central African Republic': { fa: 'جمهوری آفریقای مرکزی', code: 'cf' },
    'Democratic Republic of the Congo': { fa: 'جمهوری دموکراتیک کنگو', code: 'cd' },
    'Republic of the Congo': { fa: 'جمهوری کنگو', code: 'cg' },
    'Gabon': { fa: 'گابن', code: 'ga' },
    'Guinea': { fa: 'گینه', code: 'gn' },
    'Guinea-Bissau': { fa: 'گینه بیسائو', code: 'gw' },
    'Equatorial Guinea': { fa: 'گینه استوایی', code: 'gq' },
    'Liberia': { fa: 'لیبریا', code: 'lr' },
    'Sierra Leone': { fa: 'سیرالئون', code: 'sl' },
    'Togo': { fa: 'توگو', code: 'tg' },
    'Benin': { fa: 'بنین', code: 'bj' },
    'Burkina Faso': { fa: 'بورکینافاسو', code: 'bf' },
    'Eritrea': { fa: 'اریتره', code: 'er' },
    'Djibouti': { fa: 'جیبوتی', code: 'dj' },
    'Somalia': { fa: 'سومالی', code: 'so' },
    'Rwanda': { fa: 'رواندا', code: 'rw' },
    'Burundi': { fa: 'بروندی', code: 'bi' },
    'Tanzania': { fa: 'تانزانیا', code: 'tz' },
    'Uganda': { fa: 'اوگاندا', code: 'ug' },
    'Malawi': { fa: 'مالاوی', code: 'mw' },
    'Cape Verde': { fa: 'کیپ ورد', code: 'cv' },
    'Comoros': { fa: 'کومور', code: 'km' },
    'Seychelles': { fa: 'سیشل', code: 'sc' },
    'Mauritius': { fa: 'موریس', code: 'mu' },
    'Sao Tome and Principe': { fa: 'سائوتومه و پرینسیپ', code: 'st' }
};

// ============================================
// رنگ غالب پرچم (برای کشورهایی که پرچم لود نشه)
// ============================================
const countryColors = {
    'Iran': 0x239f40, 'Germany': 0xdd0000, 'Italy': 0x009246,
    'France': 0x0055a4, 'Spain': 0xaa151b, 'Turkey': 0xe30a17,
    'Egypt': 0x000000, 'Brazil': 0x009c3b, 'Russia': 0x0039a6,
    'China': 0xde2910, 'Japan': 0xbc002d, 'India': 0xff9933,
    'Canada': 0xff0000, 'Australia': 0x00008b, 'Switzerland': 0xff0000,
    'Sweden': 0x006aa7, 'Norway': 0xba0c2f, 'Denmark': 0xc60c30,
    'Finland': 0x003580, 'Netherlands': 0xae1c28, 'Belgium': 0x000000,
    'Austria': 0xed2939, 'Greece': 0x0d5eaf, 'Portugal': 0x006600,
    'Poland': 0xdc143c, 'Ukraine': 0x0057b7, 'Pakistan': 0x01411c,
    'United Arab Emirates': 0x00732f, 'South Africa': 0x007a4d,
    'Saudi Arabia': 0x006c35, 'Tajikistan': 0xcc0000, 'Afghanistan': 0x000000,
    'Argentina': 0x74acdf, 'Mexico': 0x006847, 'Indonesia': 0xff0000,
    'Malaysia': 0xcc0001, 'Philippines': 0x0038a8, 'Vietnam': 0xda251d,
    'United Kingdom': 0x012169, 'United States of America': 0x3c3b6e,
    'South Korea': 0xcd2e3a, 'North Korea': 0x024fa2, 'Thailand': 0xa51931,
    'Iraq': 0xce1126, 'Syria': 0xce1126, 'Jordan': 0x007a3d,
    'Lebanon': 0xed1c24, 'Kuwait': 0x007a3d, 'Qatar': 0x8a1538,
    'Bahrain': 0xce1126, 'Oman': 0xdb161b, 'Yemen': 0xce1126,
    'Azerbaijan': 0x0092bc, 'Armenia': 0xd90012, 'Georgia': 0xff0000,
    'Kazakhstan': 0x00abc2, 'Uzbekistan': 0x0099b5, 'Turkmenistan': 0x00843d,
    'Kyrgyzstan': 0xff0000, 'Mongolia': 0xc4272f, 'Nepal': 0xdc143c,
    'Bhutan': 0xff4e12, 'Bangladesh': 0x006a4e, 'Sri Lanka': 0x8d2029,
    'Myanmar': 0xfecb00, 'Cambodia': 0x032ea1, 'Laos': 0xce1126,
    'Singapore': 0xed2939, 'New Zealand': 0x00247d, 'Peru': 0xd91023,
    'Chile': 0xd52b1e, 'Colombia': 0xfcd116, 'Venezuela': 0xffcc00,
    'Ecuador': 0xffdd00, 'Bolivia': 0x007934, 'Paraguay': 0xd52b1e,
    'Uruguay': 0x0038a8, 'Cuba': 0x002a8f, 'Morocco': 0xc1272d,
    'Algeria': 0x006233, 'Tunisia': 0xe70013, 'Libya': 0x239e46,
    'Sudan': 0xd21034, 'Ethiopia': 0x078930, 'Kenya': 0x000000,
    'Nigeria': 0x008751, 'Ghana': 0x006b3f, 'Senegal': 0x00853f,
    'Ivory Coast': 0xf77f00, 'Cameroon': 0x007a5e, 'Angola': 0xce1126,
    'Mozambique': 0x009739, 'Madagascar': 0xfc3d32, 'Zimbabwe': 0x006400,
    'Zambia': 0x198a00, 'Botswana': 0x6da9d2, 'Namibia': 0x003580,
    'Mauritania': 0x006233, 'Mali': 0x14b53a, 'Niger': 0xe05206,
    'Chad': 0x002664, 'Central African Republic': 0x003082,
    'Democratic Republic of the Congo': 0x007fff, 'Republic of the Congo': 0x009543,
    'Gabon': 0x009e60, 'Guinea': 0xce1126, 'Guinea-Bissau': 0xce1126,
    'Equatorial Guinea': 0x3e9a00, 'Liberia': 0xbf0a30, 'Sierra Leone': 0x1eb53a,
    'Togo': 0x006a4e, 'Benin': 0x008751, 'Burkina Faso': 0xef2b2d,
    'Eritrea': 0x12ad2b, 'Djibouti': 0x6ab2e7, 'Somalia': 0x4189dd,
    'Rwanda': 0x00a1de, 'Burundi': 0xce1126, 'Tanzania': 0x1eb53a,
    'Uganda': 0x000000, 'Malawi': 0x000000, 'Cape Verde': 0x003893,
    'Comoros': 0x3a75c4, 'Seychelles': 0x003f87, 'Mauritius': 0xea2839,
    'Sao Tome and Principe': 0x12ad2b
};

// ============================================
// کش تصاویر پرچم
// ============================================
const flagImageCache = {};

function loadFlagImage(flagCode) {
    return new Promise((resolve) => {
        if (flagImageCache[flagCode]) {
            resolve(flagImageCache[flagCode]);
            return;
        }

        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => {
            // رسم روی canvas برای خوندن پیکسل‌ها
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);

            try {
                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                flagImageCache[flagCode] = imageData;
                resolve(imageData);
            } catch (e) {
                console.warn(`خطا در خوندن پیکسل‌های پرچم ${flagCode}:`, e);
                resolve(null);
            }
        };
        img.onerror = () => {
            console.warn(`خطا در بارگذاری پرچم ${flagCode}`);
            resolve(null);
        };
        img.src = `https://flagcdn.com/w80/${flagCode}.png`;
    });
}

// ============================================
// ساخت کره زمین
// ============================================
const globeGroup = new THREE.Group();
scene.add(globeGroup);

const globeRadius = 1.5;
const globeGeometry = new THREE.SphereGeometry(globeRadius, 64, 64);
const globeMaterial = new THREE.MeshPhongMaterial({
    color: 0x0a1a3a,
    emissive: 0x061224,
    shininess: 10,
    transparent: true,
    opacity: 0.9
});
const globeMesh = new THREE.Mesh(globeGeometry, globeMaterial);
globeGroup.add(globeMesh);

// ============================================
// نورپردازی
// ============================================
const ambientLight = new THREE.AmbientLight(0x404060, 1);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
directionalLight.position.set(5, 3, 5);
scene.add(directionalLight);

const backLight = new THREE.DirectionalLight(0x4466aa, 0.5);
backLight.position.set(-5, -3, -5);
scene.add(backLight);

// ============================================
// ستاره‌های پس‌زمینه
// ============================================
const starsGeometry = new THREE.BufferGeometry();
const starsCount = 2000;
const starsPositions = new Float32Array(starsCount * 3);

for (let i = 0; i < starsCount * 3; i += 3) {
    starsPositions[i] = (Math.random() - 0.5) * 200;
    starsPositions[i + 1] = (Math.random() - 0.5) * 200;
    starsPositions[i + 2] = (Math.random() - 0.5) * 200;
}

starsGeometry.setAttribute('position', new THREE.BufferAttribute(starsPositions, 3));
const starsMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.15,
    transparent: true,
    opacity: 0.8
});
const stars = new THREE.Points(starsGeometry, starsMaterial);
scene.add(stars);

// ============================================
// بارگذاری دیتای کشورها
// ============================================
let countryPoints = [];
let hoveredCountry = null;

async function loadCountries() {
    try {
        const response = await fetch(
            'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'
        );
        const worldData = await response.json();

        const countries = topojson.feature(worldData, worldData.objects.countries);

        // برای هر کشور، پرچم رو لود کن و نقاط رو بساز
        for (const feature of countries.features) {
            const countryNameEn = feature.properties.name || 'Unknown';
            const countryInfo = countryDataMap[countryNameEn];
            const countryNameFa = countryInfo ? countryInfo.fa : countryNameEn;
            const flagCode = countryInfo ? countryInfo.code : null;

            let flagImageData = null;
            if (flagCode) {
                flagImageData = await loadFlagImage(flagCode);
            }

            const points = createCountryPoints(
                feature,
                countryNameEn,
                countryNameFa,
                flagCode,
                flagImageData
            );

            if (points) {
                globeGroup.add(points);
                countryPoints.push({
                    nameEn: countryNameEn,
                    nameFa: countryNameFa,
                    points: points
                });
            }

            // رسم مرزها
            const borders = new THREE.Group();
            if (feature.geometry.type === 'Polygon') {
                feature.geometry.coordinates.forEach(ring => {
                    drawCountryBorder(ring, countryNameEn, countryNameFa, borders);
                });
            } else if (feature.geometry.type === 'MultiPolygon') {
                feature.geometry.coordinates.forEach(polygon => {
                    polygon.forEach(ring => {
                        drawCountryBorder(ring, countryNameEn, countryNameFa, borders);
                    });
                });
            }
            globeGroup.add(borders);
        }

    } catch (error) {
        console.error('خطا در بارگذاری دیتای کشورها:', error);
    }
}

// ============================================
// ساخت Points با رنگ پرچم
// ============================================
function createCountryPoints(feature, countryNameEn, countryNameFa, flagCode, flagImageData) {
    try {
        const positions = [];
        const colors = [];

        // استخراج مرزها
        const rings = [];
        if (feature.geometry.type === 'Polygon') {
            feature.geometry.coordinates.forEach(ring => rings.push(ring));
        } else if (feature.geometry.type === 'MultiPolygon') {
            feature.geometry.coordinates.forEach(polygon => {
                polygon.forEach(ring => rings.push(ring));
            });
        }

        // محاسبه bounding box کل کشور
        let minLon = Infinity, maxLon = -Infinity;
        let minLat = Infinity, maxLat = -Infinity;

        rings.forEach(ring => {
            ring.forEach(coord => {
                const [lon, lat] = coord;
                if (lon < minLon) minLon = lon;
                if (lon > maxLon) maxLon = lon;
                if (lat < minLat) minLat = lat;
                if (lat > maxLat) maxLat = lat;
            });
        });

        const areaLon = maxLon - minLon;
        const areaLat = maxLat - minLat;

        // تعداد نقاط بر اساس مساحت
        const density = 0.8;
        const stepsLon = Math.max(3, Math.floor(areaLon * density));
        const stepsLat = Math.max(3, Math.floor(areaLat * density));

        // رنگ پیش‌فرض
        const defaultColor = new THREE.Color(countryColors[countryNameEn] || 0x1a237e);

        // پر کردن با نقاط
        for (let i = 0; i <= stepsLon; i++) {
            for (let j = 0; j <= stepsLat; j++) {
                const lon = minLon + (areaLon * i / stepsLon);
                const lat = minLat + (areaLat * j / stepsLat);

                // چک کن نقطه داخل مرز باشه
                if (!isPointInAnyRing(lon, lat, rings)) continue;

                // تبدیل به مختصات سه‌بعدی
                const phi = (90 - lat) * (Math.PI / 180);
                const theta = (lon + 180) * (Math.PI / 180);
                const r = globeRadius + 0.008;

                const x = -r * Math.sin(phi) * Math.cos(theta);
                const y = r * Math.cos(phi);
                const z = r * Math.sin(phi) * Math.sin(theta);

                positions.push(x, y, z);

                // رنگ از پرچم
                let color = defaultColor;

                if (flagImageData) {
                    // نرمال‌سازی مختصات به بازه 0-1
                    const u = (lon - minLon) / areaLon;
                    const v = 1 - (lat - minLat) / areaLat;

                    // گرفتن پیکسل از تصویر پرچم
                    const px = Math.floor(u * (flagImageData.width - 1));
                    const py = Math.floor(v * (flagImageData.height - 1));
                    const index = (py * flagImageData.width + px) * 4;

                    const data = flagImageData.data;
                    const rr = data[index] / 255;
                    const gg = data[index + 1] / 255;
                    const bb = data[index + 2] / 255;

                    color = new THREE.Color(rr, gg, bb);
                }

                colors.push(color.r, color.g, color.b);
            }
        }

        if (positions.length === 0) return null;

        // ساخت BufferGeometry
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

        // متریال
        const material = new THREE.PointsMaterial({
            size: 0.02,
            vertexColors: true,
            transparent: true,
            opacity: 0.95,
            sizeAttenuation: true
        });

        const points = new THREE.Points(geometry, material);
        points.userData = { countryNameEn, countryNameFa, flagCode };

        return points;

    } catch (error) {
        console.warn(`خطا در ساخت Points برای ${countryNameEn}:`, error);
        return null;
    }
}

// ============================================
// چک کردن نقطه داخل هر حلقه
// ============================================
function isPointInAnyRing(lon, lat, rings) {
    // اول چک کن داخل حلقه اول باشه
    if (!isPointInPolygon(lon, lat, rings[0])) return false;

    // بعد چک کن داخل حفره‌ها نباشه
    for (let i = 1; i < rings.length; i++) {
        if (isPointInPolygon(lon, lat, rings[i])) return false;
    }

    return true;
}

// ============================================
// چک کردن نقطه داخل چندضلعی
// ============================================
function isPointInPolygon(lon, lat, polygon) {
    let inside = false;
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        const xi = polygon[i][0], yi = polygon[i][1];
        const xj = polygon[j][0], yj = polygon[j][1];

        const intersect = ((yi > lat) !== (yj > lat)) &&
            (lon < (xj - xi) * (lat - yi) / (yj - yi) + xi);

        if (intersect) inside = !inside;
    }
    return inside;
}

// ============================================
// رسم مرز کشور
// ============================================
function drawCountryBorder(coordinates, countryNameEn, countryNameFa, parentGroup) {
    const points = coordinates.map(coord => {
        const [lon, lat] = coord;
        return latLonToVector3(lat, lon, globeRadius + 0.015);
    });

    if (points.length < 2) return;

    const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
    const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x64b5f6,
        transparent: true,
        opacity: 0.3
    });
    const line = new THREE.Line(lineGeometry, lineMaterial);
    line.userData = { countryNameEn, countryNameFa };
    parentGroup.add(line);
}

// ============================================
// تبدیل مختصات جغرافیایی به بردار سه‌بعدی
// ============================================
function latLonToVector3(lat, lon, radius) {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);

    const x = -radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.cos(phi);
    const z = radius * Math.sin(phi) * Math.sin(theta);

    return new THREE.Vector3(x, y, z);
}

// ============================================
// هایلایت کردن کشور
// ============================================
function highlightCountry(countryNameEn) {
    clearHighlight();

    const country = countryPoints.find(c => c.nameEn === countryNameEn);
    if (!country) return;

    hoveredCountry = countryNameEn;

    if (country.points) {
        country.points.material.size = 0.028;
        country.points.material.opacity = 1;
    }
}

// ============================================
// پاک کردن هایلایت
// ============================================
function clearHighlight() {
    if (hoveredCountry) {
        const country = countryPoints.find(c => c.nameEn === hoveredCountry);
        if (country && country.points) {
            country.points.material.size = 0.02;
            country.points.material.opacity = 0.95;
        }
    }
    hoveredCountry = null;
}

// ============================================
// تعاملات
// ============================================
let isDragging = false;
let isAutoRotating = true;
let autoRotateTimeout = null;
let previousMousePosition = { x: 0, y: 0 };

canvas.addEventListener('mousedown', (e) => {
    isDragging = true;
    isAutoRotating = false;
    if (autoRotateTimeout) clearTimeout(autoRotateTimeout);
    previousMousePosition = { x: e.clientX, y: e.clientY };
});

canvas.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;

        globeGroup.rotation.y += deltaX * 0.005;
        globeGroup.rotation.x += deltaY * 0.005;

        globeGroup.rotation.x = Math.max(
            -Math.PI / 2,
            Math.min(Math.PI / 2, globeGroup.rotation.x)
        );

        previousMousePosition = { x: e.clientX, y: e.clientY };
    }
});

canvas.addEventListener('mouseup', () => {
    isDragging = false;
    resumeAutoRotate();
});

canvas.addEventListener('mouseleave', () => {
    isDragging = false;
    resumeAutoRotate();
    clearHighlight();
    tooltip.classList.remove('active');
});

function resumeAutoRotate() {
    if (autoRotateTimeout) clearTimeout(autoRotateTimeout);
    autoRotateTimeout = setTimeout(() => {
        isAutoRotating = true;
    }, 3000);
}

canvas.addEventListener('wheel', (e) => {
    e.preventDefault();
    camera.position.z += e.deltaY * 0.002;
    camera.position.z = Math.max(2, Math.min(8, camera.position.z));
}, { passive: false });

// ============================================
// هاور روی کشور
// ============================================
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
raycaster.params.Points.threshold = 0.04;
let hoverTimeout = null;

canvas.addEventListener('mousemove', (e) => {
    if (isDragging) return;

    if (hoverTimeout) return;
    hoverTimeout = setTimeout(() => {
        hoverTimeout = null;
    }, 50);

    const rect = canvas.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    const points = countryPoints
        .filter(c => c.points)
        .map(c => c.points);

    const intersects = raycaster.intersectObjects(points);

    if (intersects.length > 0) {
        const hoveredPointsObj = intersects[0].object;
        const countryNameEn = hoveredPointsObj.userData.countryNameEn;
        const countryNameFa = hoveredPointsObj.userData.countryNameFa;

        if (hoveredCountry !== countryNameEn) {
            highlightCountry(countryNameEn);

            const countryInfo = countryDataMap[countryNameEn];
            const flagCode = countryInfo ? countryInfo.code : null;
            const flagUrl = flagCode
                ? `https://flagcdn.com/w80/${flagCode}.png`
                : null;

            tooltip.innerHTML = flagUrl
                ? `<img src="${flagUrl}" style="width:26px;height:auto;margin-left:8px;vertical-align:middle;border-radius:3px;"> ${countryNameFa}`
                : countryNameFa;

            tooltip.style.left = e.clientX - rect.left + 'px';
            tooltip.style.top = e.clientY - rect.top - 50 + 'px';
            tooltip.classList.add('active');
        }
    } else {
        if (hoveredCountry) {
            clearHighlight();
            tooltip.classList.remove('active');
        }
    }
});

// ============================================
// کلیک روی کشور
// ============================================
canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    const points = countryPoints
        .filter(c => c.points)
        .map(c => c.points);

    const intersects = raycaster.intersectObjects(points);

    if (intersects.length > 0) {
        const clickedPoints = intersects[0].object;
        const countryNameFa = clickedPoints.userData.countryNameFa;

        const confirmGo = confirm(`آیا می‌خواهید به صفحه اطلاعات «${countryNameFa}» بروید؟`);
        if (confirmGo) {
            window.location.href = `country.html?name=${encodeURIComponent(countryNameFa)}`;
        }
    }
});

// ============================================
// انیمیشن
// ============================================
function animate() {
    requestAnimationFrame(animate);

    if (isAutoRotating && !isDragging) {
        globeGroup.rotation.y += 0.001;
    }

    stars.rotation.y += 0.0001;

    renderer.render(scene, camera);
}

// ============================================
// ریسپانسیو
// ============================================
window.addEventListener('resize', () => {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
});
// ============================================
// پشتیبانی از لمس (Touch) برای موبایل
// ============================================

// شروع لمس
canvas.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
        isDragging = true;
        isAutoRotating = false;
        if (autoRotateTimeout) clearTimeout(autoRotateTimeout);

        const touch = e.touches[0];
        previousMousePosition = { x: touch.clientX, y: touch.clientY };
    }
}, { passive: true });

// حرکت لمس
canvas.addEventListener('touchmove', (e) => {
    if (isDragging && e.touches.length === 1) {
        const touch = e.touches[0];
        const deltaX = touch.clientX - previousMousePosition.x;
        const deltaY = touch.clientY - previousMousePosition.y;

        globeGroup.rotation.y += deltaX * 0.005;
        globeGroup.rotation.x += deltaY * 0.005;

        globeGroup.rotation.x = Math.max(
            -Math.PI / 2,
            Math.min(Math.PI / 2, globeGroup.rotation.x)
        );

        previousMousePosition = { x: touch.clientX, y: touch.clientY };
    }
}, { passive: true });

// پایان لمس
canvas.addEventListener('touchend', () => {
    isDragging = false;
    resumeAutoRotate();
}, { passive: true });

// زوم با دو انگشت (Pinch)
let lastTouchDistance = 0;

canvas.addEventListener('touchstart', (e) => {
    if (e.touches.length === 2) {
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        lastTouchDistance = Math.sqrt(dx * dx + dy * dy);
    }
}, { passive: true });

canvas.addEventListener('touchmove', (e) => {
    if (e.touches.length === 2) {
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (lastTouchDistance > 0) {
            const delta = lastTouchDistance - distance;
            camera.position.z += delta * 0.01;
            camera.position.z = Math.max(2, Math.min(8, camera.position.z));
        }

        lastTouchDistance = distance;
    }
}, { passive: true });

canvas.addEventListener('touchend', () => {
    lastTouchDistance = 0;
}, { passive: true });
// ============================================
// شروع
// ============================================
loadCountries();
animate();