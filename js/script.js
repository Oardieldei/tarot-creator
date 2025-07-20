const calendarDates = document.querySelector('.calendar__dates')
const choosenDate = document.querySelector('.chose-date__wrapper')
const choosenMonthInput = choosenDate.children[0].children[1]
const choosenYearInput = choosenDate.children[1].children[1]
const choosenDateBtn = choosenDate.children[2]
const dayFormContainer = document.querySelector('.days-input')

const formSelectFirstValues = [
	{ text: "Старший аркан", value: "sa" },
	{ text: "Кубков", value: "kubkov" },
	{ text: "Мечей", value: "mechei" },
	{ text: "Пентаклей", value: "pentaklei" },
	{ text: "Жезлов", value: "zhezlov" },
]

const formSelectColorValues = [
	{ text: "Красный", value: "a10000" },
	{ text: "Желтый", value: "ffe922" },
	{ text: "Зеленый", value: "139202" },
	{ text: "Синий", value: "1c18e6" },
	{ text: "Оранжевый", value: "b84c04" },
	{ text: "Черный", value: "000000" },
	{ text: "Серый", value: "zhezlov" },
]

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

const createFormForDay = (index) => {
	const newFullForm = document.createElement('div')
	newFullForm.classList.add('day-input')
	newFullForm.classList.add(`day${index}-input`)

	const chooseCard = document.createElement('div')
	chooseCard.classList.add('day-input__choose-card')
	newFullForm.append(chooseCard)

	const chooseCardText = document.createElement('p')
	chooseCardText.classList.add('day-input__choose-card_p')
	chooseCardText.innerText = 'Карта:'
	chooseCard.append(chooseCardText)

	const chooseCardSelectFirst = document.createElement('select')
	chooseCardSelectFirst.classList.add(`day${index}-card-select`)
	chooseCard.append(chooseCardSelectFirst)

	const chooseCardSelectFirstHiddenOption = document.createElement('option')
	chooseCardSelectFirstHiddenOption.selected = true
	chooseCardSelectFirstHiddenOption.disabled = true
	chooseCardSelectFirstHiddenOption.hidden = true
	chooseCardSelectFirst.append(chooseCardSelectFirstHiddenOption)

	formSelectFirstValues.forEach((optionData) => {
		let newOption = new Option(optionData.text, optionData.value)
		chooseCardSelectFirst.add(newOption, undefined)
	})

	const chooseCardSelectSecond = document.createElement('select')
	chooseCardSelectSecond.classList.add(`day${index}-card-select-2`)
	chooseCard.append(chooseCardSelectSecond)

	const chooseCardSelectSecondHiddenOption = document.createElement('option')
	chooseCardSelectSecondHiddenOption.selected = true
	chooseCardSelectSecondHiddenOption.disabled = true
	chooseCardSelectSecondHiddenOption.hidden = true
	chooseCardSelectSecond.append(chooseCardSelectSecondHiddenOption)

	chooseCardSelectFirst.addEventListener('change', (e) => {
		const currValue = e.target.value

		chooseCardSelectSecond.innerHTML = ''

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
			chooseCardSelectSecond.add(newOption, undefined)
		})
	})

	const chooseColor = document.createElement('div')
	chooseColor.classList.add('day-input__choose-color')
	newFullForm.append(chooseColor)

	const chooseColorText = document.createElement('p')
	chooseColorText.classList.add('day-input__choose-Color_p')
	chooseColorText.innerText = 'Цвет: '
	chooseColor.append(chooseColorText)

	const chooseColorSelect = document.createElement('select')
	chooseColorSelect.classList.add(`day${index}-card-select`)
	chooseColor.append(chooseColorSelect)

	const chooseColorSelectHiddenOption = document.createElement('option')
	chooseColorSelectHiddenOption.selected = true
	chooseColorSelectHiddenOption.disabled = true
	chooseColorSelectHiddenOption.hidden = true
	chooseColorSelect.append(chooseColorSelectHiddenOption)

	formSelectColorValues.forEach((optionData) => {
		let newOption = new Option(optionData.text, optionData.value)
		chooseColorSelect.add(newOption, undefined)
	})

	const chooseColorDescription = document.createElement('input')
	chooseColorDescription.setAttribute('type', 'text')
	chooseColorDescription.setAttribute('placeholder', 'Значение (не обязательно)')
	chooseColor.append(chooseColorDescription)

	const dayInputText = document.createElement('div')
	dayInputText.classList.add('day-input__text')
	newFullForm.append(dayInputText)

	const dayInputTextP = document.createElement('p')
	dayInputTextP.classList.add('day-input__text_p')
	dayInputTextP.innerText = 'Текст:'
	dayInputText.append(dayInputTextP)

	const dayInputTextarea = document.createElement('textarea')
	dayInputTextarea.classList.add('day-input__text_full')
	dayInputTextarea.setAttribute('name', 'day-input__text_full')
	dayInputTextarea.setAttribute('id', 'day-input__text_full')
	dayInputTextarea.setAttribute('cols', '70')
	dayInputTextarea.setAttribute('rows', '20')	
	dayInputText.append(dayInputTextarea)

	const dayInputBtns = document.createElement('div')
	dayInputBtns.classList.add('day-input__btns')
	newFullForm.append(dayInputBtns)

	const cancelBtn = document.createElement('button')
	cancelBtn.setAttribute('type', 'button')
	cancelBtn.innerText = 'Отменить'
	dayInputBtns.append(cancelBtn)

	const saveBtn = document.createElement('button')
	saveBtn.setAttribute('type', 'button')
	saveBtn.innerText = 'Сохранить'
	dayInputBtns.append(saveBtn)
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