import { staticItems } from "./const.js";

document.addEventListener("DOMContentLoaded", function () {
	const items = [
		'Яблочный сок',
		'Хлеб',
		'Манго',
		'Творог',
		'Сметана'
	];
	const searchInput = document.getElementById("search-input");

	function render(items) {
		const listContainer = document.getElementById('list');
		listContainer.innerHTML = '';

		items.forEach(item => {
			const listItem = document.createElement('li');
			listItem.textContent = item;
			listContainer.appendChild(listItem);
		});
	}

	const list = document.getElementById("list").getElementsByTagName("li");

	searchInput.addEventListener("input", function () {
		const searchTerm = searchInput.value.toLowerCase();

		for (let i = 0; i < list.length; i++) {
			const item = list[i];
			const itemName = item.textContent.toLowerCase();

			if (itemName.includes(searchTerm)) {
				item.style.display = "block";
			} else {
				item.style.display = "none";
			}
		}
	});

	render(items)
});