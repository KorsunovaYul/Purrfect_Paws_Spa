// Хранит текущую дату
var currentDate = new Date();

// Функция для отрисовки календаря
function renderCalendar() {
    var month = currentDate.getMonth(); 
    var year = currentDate.getFullYear(); 

    // Вычисляем параметры текущего и соседних месяцев
    var firstDayOfMonth = new Date(year, month, 1).getDay(); 
    var lastDateOfMonth = new Date(year, month + 1, 0).getDate(); 
    var lastDayOfPrevMonth = new Date(year, month, 0).getDate(); 

    // Получаем ссылки на элементы DOM для отображения календаря
    var daysContainer = document.querySelector(".days"); 
    var header2 = document.querySelector(".header2 span"); 

    // Очищаем содержимое календаря
    daysContainer.innerHTML = "";

    // Устанавливаем заголовок календаря с названием месяца и года
    header2.textContent = currentDate.toLocaleString("ru-RU", {
        month: "long", // Название месяца
        year: "numeric", // Год
    });

    // Вычисляем, сколько дней из предыдущего месяца нужно показать
    var daysToShowFromPrevMonth = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

    // Добавляем дни предыдущего месяца
    for (var prevDayIndex = daysToShowFromPrevMonth; prevDayIndex > 0; prevDayIndex--) {
        var prevDayDiv = document.createElement("div"); // Создаем div для каждого дня
        prevDayDiv.textContent = lastDayOfPrevMonth - prevDayIndex + 1; // Устанавливаем номер дня
        prevDayDiv.classList.add("other-month"); // Добавляем класс для стилизации
        daysContainer.appendChild(prevDayDiv); // Добавляем элемент в контейнер
    }

    // Добавляем дни текущего месяца
    for (var dayIndex = 1; dayIndex <= lastDateOfMonth; dayIndex++) {
        var currentDayDiv = document.createElement("div"); // Создаем div для каждого дня
        currentDayDiv.textContent = dayIndex; // Устанавливаем номер дня

        // Добавляем обработчик клика для выделения выбранного дня
        currentDayDiv.addEventListener("click", function () {
            // Убираем класс "selected" у всех дней
            document.querySelectorAll(".days div").forEach(function (el) {
                el.classList.remove("selected");
            });
            // Добавляем класс "selected" только к выбранному дню
            this.classList.add("selected");
        });

        daysContainer.appendChild(currentDayDiv); // Добавляем элемент в контейнер
    }

    // Добавляем дни следующего месяца, чтобы заполнить 6 недель
    var remainingDays = 42 - daysContainer.children.length; // Оставшиеся дни для заполнения
    for (var nextDayIndex = 1; nextDayIndex <= remainingDays; nextDayIndex++) {
        var nextDayDiv = document.createElement("div"); // Создаем div для каждого дня
        nextDayDiv.textContent = nextDayIndex; // Устанавливаем номер дня
        nextDayDiv.classList.add("other-month"); // Добавляем класс для стилизации
        daysContainer.appendChild(nextDayDiv); // Добавляем элемент в контейнер
    }
}

// Обработчик для кнопки "предыдущий месяц"
document.querySelector(".prev").addEventListener("click", function () {
    currentDate.setMonth(currentDate.getMonth() - 1); // Переходим к предыдущему месяцу
    renderCalendar(); // Перерисовываем календарь
});

// Обработчик для кнопки "следующий месяц"
document.querySelector(".next").addEventListener("click", function () {
    currentDate.setMonth(currentDate.getMonth() + 1); // Переходим к следующему месяцу
    renderCalendar(); // Перерисовываем календарь
});

// Первоначальная отрисовка календаря
renderCalendar();
