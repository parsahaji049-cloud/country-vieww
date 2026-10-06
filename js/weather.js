// ============================================
// تنظیمات API
// ============================================
const API_KEY = '32e35d615294632d12a3e42a12c138ed';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// ============================================
// تابع دریافت اطلاعات آب و هوا
// ============================================
async function getWeather(city) {
    const resultDiv = document.getElementById('weatherResult');
    
    try {
        // نمایش لودینگ
        resultDiv.innerHTML = `
            <div class="weather-loading">
                <div class="spinner"></div>
                <p>در حال دریافت اطلاعات...</p>
            </div>
        `;

        // درخواست به API
        const response = await fetch(
            `${BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric&lang=fa`
        );

        // بررسی خطاها
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('شهر مورد نظر پیدا نشد!');
            }
            if (response.status === 401) {
                throw new Error('کلید API نامعتبر است!');
            }
            throw new Error('خطا در دریافت اطلاعات!');
        }

        const data = await response.json();
        displayWeather(data);

    } catch (error) {
        resultDiv.innerHTML = `
            <div class="weather-error">
                <span>😕</span>
                <p>${error.message}</p>
            </div>
        `;
    }
}

// ============================================
// تابع نمایش اطلاعات آب و هوا
// ============================================
function displayWeather(data) {
    const resultDiv = document.getElementById('weatherResult');
    
    // آیکون آب و هوا
    const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
    
    // پرچم کشور
    const countryCode = data.sys.country.toLowerCase();
    const flagUrl = `https://flagcdn.com/w80/${countryCode}.png`;
    
    // زمان طلوع و غروب
    const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString('fa-IR', {
        hour: '2-digit',
        minute: '2-digit'
    });
    const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString('fa-IR', {
        hour: '2-digit',
        minute: '2-digit'
    });

    resultDiv.innerHTML = `
        <div class="weather-card">
            <!-- هدر: نام شهر + پرچم + آیکون -->
            <div class="weather-header">
                <h3>
                    <img src="${flagUrl}" alt="پرچم ${data.sys.country}" class="weather-flag">
                    ${data.name}, ${data.sys.country}
                </h3>
                <img src="${iconUrl}" alt="${data.weather[0].description}" class="weather-icon">
            </div>
            
            <!-- دما -->
            <div class="weather-temp">
                <span class="temp-value">${Math.round(data.main.temp)}°C</span>
                <span class="temp-desc">${data.weather[0].description}</span>
            </div>

            <!-- جزئیات -->
            <div class="weather-details">
                <div class="detail-item">
                    <i class="ri-temp-hot-line"></i>
                    <span>دمای احساسی</span>
                    <strong>${Math.round(data.main.feels_like)}°C</strong>
                </div>
                <div class="detail-item">
                    <i class="ri-drop-line"></i>
                    <span>رطوبت</span>
                    <strong>${data.main.humidity}%</strong>
                </div>
                <div class="detail-item">
                    <i class="ri-windy-line"></i>
                    <span>سرعت باد</span>
                    <strong>${data.wind.speed} m/s</strong>
                </div>
                <div class="detail-item">
                    <i class="ri-speed-up-line"></i>
                    <span>فشار هوا</span>
                    <strong>${data.main.pressure} hPa</strong>
                </div>
                <div class="detail-item">
                    <i class="ri-eye-line"></i>
                    <span>دید</span>
                    <strong>${(data.visibility / 1000).toFixed(1)} km</strong>
                </div>
                <div class="detail-item">
                    <i class="ri-sun-line"></i>
                    <span>طلوع</span>
                    <strong>${sunrise}</strong>
                </div>
                <div class="detail-item">
                    <i class="ri-moon-line"></i>
                    <span>غروب</span>
                    <strong>${sunset}</strong>
                </div>
            </div>
        </div>
    `;
}

// ============================================
// راه‌اندازی اولیه
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const cityInput = document.getElementById('cityInput');
    const searchBtn = document.getElementById('searchWeatherBtn');

    // جستجو با کلیک روی دکمه
    searchBtn.addEventListener('click', function() {
        const city = cityInput.value.trim();
        if (city) {
            getWeather(city);
        } else {
            alert('لطفاً نام شهر را وارد کنید!');
        }
    });

    // جستجو با کلید Enter
    cityInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const city = cityInput.value.trim();
            if (city) {
                getWeather(city);
            }
        }
    });

    // نمایش پیش‌فرض (تهران)
    getWeather('Tehran');
});