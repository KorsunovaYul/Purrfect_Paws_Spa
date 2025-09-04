 var servicePrices = {
	1: 10000,  // маникюр
	2: 15000,  // укладка шерсти
	3: 20000,  // прокат одежды
	4: 20000   // организация вечеринки
};

// Функция для обновления итоговой цены
function updateTotalPrice() {
	var totalPrice = 0;

	// Получаем все выбранные значения из select
	var selectedServices = [
		document.getElementById("service1").value,
		document.getElementById("service2").value,
		document.getElementById("service3").value,
		document.getElementById("service4").value
	];

	// Суммируем цены для выбранных услуг
	for (var i = 0; i < selectedServices.length; i++) {
		var service = selectedServices[i];
		if (service !== "услуга" && servicePrices[service]) {
			totalPrice += servicePrices[service];
		}
	}

	// Обновляем отображаемую цену
	document.getElementById("totalPrice").textContent = totalPrice;
}

// Добавляем обработчики событий на изменения в select
document.getElementById("service1").addEventListener("change", updateTotalPrice);
document.getElementById("service2").addEventListener("change", updateTotalPrice);
document.getElementById("service3").addEventListener("change", updateTotalPrice);
document.getElementById("service4").addEventListener("change", updateTotalPrice);

// Вызываем функцию при загрузке страницы для начальной установки
updateTotalPrice();