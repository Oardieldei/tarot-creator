const calendarDates = document.querySelector('.calendar__dates')
const choosenDate = document.querySelector('.chose-date__wrapper')
const choosenMonthInput = choosenDate.children[0].children[1]
const choosenYearInput = choosenDate.children[1].children[1]
const choosenDateBtn = choosenDate.children[2]

const isDateReal = (y, m) => {
	if (m != +m || y != +y) return false
	if (+m < 1 || +m > 12) return false
	if (+y < 1990) return false
	return true
}

const getNumberOfFisrtDay = (y, m) => {
	const chosenDate = new Date(y, m - 1)
	const firstDay = chosenDate.getDay()
	return firstDay === 0 ? 7 : firstDay
}

const getLastDay = (y, m) => {
	let lastDay = new Date(y, m, 0)
	return lastDay.getDate()
}

const getNumberOfLastDay = (y, m) => {
	const chosenDate = new Date(y, m, 0)
	const lastDay = chosenDate.getDay()
	return lastDay === 0 ? 7 : lastDay
}

const createEmptyCellForDay = () => {
	const newCell = document.createElement('div')
	newCell.classList.add('calendar__dates_cell')
	newCell.classList.add('calendar__dates_cell_empty')
	calendarDates.append(newCell)
}

const createCellForDay = (dateNum) => {
	const newCell = document.createElement('div')
	newCell.classList.add('calendar__dates_cell')
	newCell.id = `day${dateNum}`
	calendarDates.append(newCell)

	const newCellInfo = document.createElement('div')
	newCellInfo.classList.add('calendar__dates_cell__info')
	newCell.append(newCellInfo)
	newCellInfo.innerText = dateNum

	const newCellCard = document.createElement('div')
	newCellCard.classList.add('calendar__dates_cell__card')
	newCell.append(newCellCard)
}

const createEmptyCellsBefore = (y, m) => {
	for (let i = 0; i < getNumberOfFisrtDay(y, m) - 1; i++) {
		createEmptyCellForDay()
	}
}

const createCells = (y, m) => {
	for (let i = 0; i < getLastDay(y, m); i++) {
		createCellForDay(i + 1)
	}
}

const createEmptyCellsAfter = (y, m) => {
	for (let i = 0; i < 7 - getNumberOfLastDay(y, m); i++) {
		createEmptyCellForDay()
	}
}

const createCalendar = (y, m) => {
	createEmptyCellsBefore(y, m)
	createCells(y, m)
	createEmptyCellsAfter(y, m)
}

choosenDateBtn.addEventListener('click', () => {
	if (isDateReal(choosenYearInput.value, choosenMonthInput.value)) {
		createCalendar(choosenYearInput.value, choosenMonthInput.value)
	} else {
		choosenMonthInput.value = ''
		choosenYearInput.value = ''
	}
})

/* врем */

const dayItem = document.querySelector('.day1-input')
const daySelect = dayItem.children[0].children[1]
const daySelect2 = dayItem.children[0].children[2]

daySelect.addEventListener('change', (e) => {
	const currValue = e.target.value

	daySelect2.innerHTML = ''

	const saValues = currValue === 'sa' ? [
		{ text: "Шут (Дурак)", value: "00-Shut" },
		{ text: "Маг", value: "01-Mag" },
		{ text: "Жрица", value: "02-Zhrica" },
		{ text: "Императрица", value: "03-Imperatrica" },
		{ text: "Император", value: "04-Imperator" },
		{ text: "Жрец", value: "05-Zhrec" },
		{ text: "Влюбленные", value: "06-Vljublennye" },
		{ text: "Колесница", value: "07-Kolesnica" },
		{ text: "Справедливость", value: "08-Spravedlivost" },
		{ text: "Отшельник", value: "09-Otshelnik" },
		{ text: "Колесо фортуны", value: "10-Koleso-Fortuny" },
		{ text: "Сила", value: "11-Sila" },
		{ text: "Повешенный", value: "12-Poveshennyj" },
		{ text: "Смерть", value: "13-Smert" },
		{ text: "Умеренность", value: "14-Umerennost" },
		{ text: "Дьявол", value: "15-Diavol" },
		{ text: "Башня", value: "16-Bashnja" },
		{ text: "Звезда", value: "17-Zvezda" },
		{ text: "Луна", value: "18-Luna" },
		{ text: "Солнце", value: "19-Solnce" },
		{ text: "Суд", value: "20-Sud" },
		{ text: "Мир", value: "21-Mir" }
	] : [
		{ text: "Туз", value: "01" },
		{ text: "2", value: "02" },
		{ text: "3", value: "03" },
		{ text: "4", value: "04" },
		{ text: "5", value: "05" },
		{ text: "6", value: "06" },
		{ text: "7", value: "07" },
		{ text: "8", value: "08" },
		{ text: "9", value: "09" },
		{ text: "10", value: "10" },
		{ text: "Король", value: "korol" },
		{ text: "Королева", value: "koroleva" },
		{ text: "Паж", value: "pazh" },
		{ text: "Рыцарь", value: "rycar" }
	]

	saValues.forEach((optionData) => {
		let newOption = new Option(optionData.text, optionData.value)
		daySelect2.add(newOption, undefined)
	})
})