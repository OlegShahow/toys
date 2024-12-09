


// ================== переход в корзину  ==================================

document.getElementById('dataForm').addEventListener('submit', function (e) {
	e.preventDefault(); // предотвращаем стандартное поведение формы

	// Получаем выбранную радиокнопку
	const selectedName = document.querySelector('input[name="name"]:checked');
	const selectedSize = document.querySelector('input[name="size"]:checked');
	const selectedCount = document.querySelector('input[name="count"]:checked');
	const selectedServise = document.querySelector('input[name="servise"]:checked');


	if (selectedName && selectedSize && selectedCount && selectedServise) {
		// Сохраняем выбор в localStorage
		localStorage.setItem('selectedName', selectedName.value);
		localStorage.setItem('selectedSize', selectedSize.value);
		localStorage.setItem('selectedCount', selectedCount.value);
		localStorage.setItem('selectedServise', selectedServise.value);


		// Переходим на страницу корзины
		// в этом окне
		// window.location.href = 'order.html';

		// в новом окне
		window.open('order.html', '_blank');
	}
	else {
		alert('Будьласка, выберіть усі категоріі замовлення!');
	}
});



// ========================= натисни для замовлення  ===================================================

const h3 = document.querySelector(".main__order--order h3");
const orderForm = document.querySelector(".order--form");
const abort = document.querySelector(".box--exit");


h3.addEventListener("click", () => {
	h3.style.display = "none";
	orderForm.style.display = "block";
});

abort.addEventListener("click", () => {
	h3.style.display = "block";
	orderForm.style.display = "none";
})

// =============================    ============================================================

abort.addEventListener("click", () => {
	// Находим все радиокнопки с именем "servise"name  .......
	const name = document.querySelectorAll('input[name="name"]');
	const size = document.querySelectorAll('input[name="size"]');
	const count = document.querySelectorAll('input[name="count"]');
	const servise = document.querySelectorAll('input[name="servise"]');

	// Сбрасываем все радиокнопки
	name.forEach(button => {
		button.checked = false;
	});
	size.forEach(button => {
		button.checked = false;
	});
	count.forEach(button => {
		button.checked = false;
	});
	servise.forEach(button => {
		button.checked = false;
	});


});

// function aborted() {
// 	// Находим все радиокнопки с именем "servise"
// 	const radioButtons = document.querySelectorAll('input[name="servise"]');

// 	// Сбрасываем все радиокнопки
// 	radioButtons.forEach(button => {
// 		button.checked = false;
// 	});
// }



// -------------------------- возврат с корзины на стр. заказа  с закрытием корзины  -----------------------------------------------

function goBack() {
	// Проверка, существует ли родительское окно (первая страница)
	if (window.opener) {
		// Перезагружаем родительское окно (страницу заказа)
		window.opener.location.href = "toys.html"; // Указываем путь к странице заказа
	}
	// Закрываем текущее окно (корзины)
	window.close();
}
// -----------------------------------------------------------------------------



// =============================    ============================================================