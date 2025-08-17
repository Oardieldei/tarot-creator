const calendarDates = document.querySelector('.calendar__dates')
const choosenDate = document.querySelector('.chose-date')
const choosenMonthInput = choosenDate.children[0].children[1]
const choosenYearInput = choosenDate.children[1].children[1]
const choosenDateBtn = choosenDate.children[2]
const dayFormContainer = document.querySelector('.days-input')
const monthCardSelect = document.querySelector('.month-card-select')
const monthCardSelect2 = document.querySelector('.month-card-select-2')

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
	{ text: "Серый", value: "616161" },
]

const isDateReal = (y, m) => {
	if (m != +m || y != +y) return false
	if (+m < 1 || +m > 12) return false
	if (+y < 1990) return false
	return true
}

const getNumberOfFirstDay = (y, m) => {
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

const hideForm = (index) => {
	dayFormContainer.classList.remove('inputs-active')
	const currentForm = dayFormContainer.querySelector(`.day${index}-input`)
	if (currentForm) {
		currentForm.classList.remove('day_shown')
	}
}

const showForm = (index) => {
	dayFormContainer.classList.add('inputs-active')
	const allForms = dayFormContainer.querySelectorAll('.day-input')
	allForms.forEach(form => form.classList.remove('day_shown'))

	const currentForm = dayFormContainer.querySelector(`.day${index}-input`)
	if (currentForm) {
		currentForm.classList.add('day_shown')

		currentForm.style.top = '0px'
		const formHeight = currentForm.offsetHeight
		const scrollY = window.scrollY
		const windowHeight = window.innerHeight

		if (scrollY + formHeight > scrollY + windowHeight) {
			const adjustedTop = Math.max(0, scrollY + windowHeight - formHeight)
			currentForm.style.top = adjustedTop + 'px'
		} else {
			currentForm.style.top = scrollY + 'px'
		}
	}
}

const createFormForDay = (index) => {
	const newFullForm = document.createElement('div')
	newFullForm.classList.add('day-input')
	newFullForm.classList.add(`day${index}-input`)
	dayFormContainer.append(newFullForm)

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
	chooseColorText.classList.add('day-input__choose-color_p')
	chooseColorText.innerText = 'Цвет: '
	chooseColor.append(chooseColorText)

	const chooseColorSelect = document.createElement('select')
	chooseColorSelect.classList.add(`day${index}-color-select`)
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
	dayInputTextarea.setAttribute('id', `day${index}-text_full`)
	dayInputText.append(dayInputTextarea)

	const dayInputBtns = document.createElement('div')
	dayInputBtns.classList.add('day-input__btns')
	newFullForm.append(dayInputBtns)

	const cancelBtn = document.createElement('button')
	cancelBtn.setAttribute('type', 'button')
	cancelBtn.innerText = 'Очистить'
	dayInputBtns.append(cancelBtn)

	const saveBtn = document.createElement('button')
	saveBtn.setAttribute('type', 'button')
	saveBtn.innerText = 'Сохранить'
	dayInputBtns.append(saveBtn)

	cancelBtn.addEventListener('click', () => {
		chooseCardSelectFirst.value = ''
		chooseCardSelectSecond.innerHTML = ''
		const hiddenOpt = document.createElement('option')
		hiddenOpt.selected = true
		hiddenOpt.disabled = true
		hiddenOpt.hidden = true
		chooseCardSelectSecond.append(hiddenOpt)

		chooseColorSelect.value = ''
		chooseColorDescription.value = ''
		dayInputTextarea.value = ''

		const dayCell = document.getElementById(`day${index}`)
		dayCell.style.removeProperty('box-shadow')

		const cardBlock = dayCell.children[1]
		cardBlock.innerHTML = ''
		hideForm(index)
	})

	saveBtn.addEventListener('click', () => {
		const cardType = chooseCardSelectFirst.value
		const cardName = chooseCardSelectSecond.value
		const color = chooseColorSelect.value

		if (!color) {
			alert(`Нужно выбрать цвет`)
			return
		}

		if (!cardName) {
			alert(`Нужно выбрать карту`)
			return
		}

		if (!cardType) {
			alert(`Нужно выбрать карту`)
			return
		}

		const cardPath = (cardType === 'sa')
			? `./img/cards/${cardName}.jpg`
			: `./img/cards/${cardType}-${cardName}.jpg`

		const dayCell = document.getElementById(`day${index}`)
		dayCell.style.boxShadow = `0 0 12px 3px #${color}`

		const cardBlock = dayCell.children[1]
		cardBlock.innerHTML = ''
		const img = document.createElement('img')
		img.src = cardPath
		img.alt = 'Карта'
		img.style.width = '100%'
		img.style.maxHeight = '100%'
		cardBlock.appendChild(img)

		hideForm(index)
	})
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
	if (dateNum < 10) newCell.classList.add('calendar__dates_cell__short_date')
	newCell.id = `day${dateNum}`
	calendarDates.append(newCell)

	const newCellInfo = document.createElement('div')
	newCellInfo.classList.add('calendar__dates_cell__info')
	newCell.append(newCellInfo)
	newCellInfo.innerText = dateNum

	const newCellCard = document.createElement('div')
	newCellCard.classList.add('calendar__dates_cell__card')
	newCell.append(newCellCard)

	createFormForDay(dateNum)

	newCell.addEventListener('click', () => {
		showForm(dateNum)
	})
}

const createEmptyCellsBefore = (y, m) => {
	for (let i = 0; i < getNumberOfFirstDay(y, m) - 1; i++) {
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
	dayFormContainer.innerHTML = ''
	calendarDates.innerHTML = ''
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

const saveBtnGlobal = document.querySelector('.save-btn')

saveBtnGlobal.addEventListener('click', () => {
	const month = choosenMonthInput.value
	const year = choosenYearInput.value
	const monthCardType = monthCardSelect.value
	const monthCardName = monthCardSelect2.value
	const allForms = document.querySelectorAll('.day-input')

	const data = {
		month: choosenMonthInput.value,
		year: choosenYearInput.value,
		monthCard: {
			cardType: monthCardType,
			cardName: monthCardName
		},
		days: []
	}

	for (let i = 0; i < allForms.length; i++) {
		const dayNumber = i + 1

		const cardTypeSelect = allForms[i].querySelector('select[class*="-card-select"]:not([class*="-card-select-2"])')
		const cardNameSelect = allForms[i].querySelector(`select[class*="-card-select-2"]`)
		const colorSelect = allForms[i].querySelector(`select[class*="-color-select"]`)
		const textArea = allForms[i].querySelector('textarea')

		const cardType = cardTypeSelect.value
		const cardName = cardNameSelect.value
		const color = colorSelect.value
		const text = textArea.value.trim()

		if (!cardType) {
			alert(`День ${dayNumber}: выберите тип карты!`)
			cardTypeSelect.focus()
			return
		}
		if (!cardName) {
			alert(`День ${dayNumber}: выберите карту!`)
			cardNameSelect.focus()
			return
		}
		if (!color) {
			alert(`День ${dayNumber}: выберите цвет!`)
			colorSelect.focus()
			return
		}

		data.days.push({
			day: dayNumber,
			cardType,
			cardName,
			color,
			description: allForms[i].querySelector('input[type="text"]').value.trim(),
			text
		})
	}

	const json = JSON.stringify(data, null, 2)
	const blob = new Blob([json], { type: 'application/json' })
	const url = URL.createObjectURL(blob)
	const a = document.createElement('a')
	a.href = url
	a.download = `calendar-${year}-${month}.json`
	a.click()
	URL.revokeObjectURL(url)
})

monthCardSelect.addEventListener('change', () => {
	monthCardSelect2.innerHTML = ''

	const saValues = [
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
	]

	const minorValues = [
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

	const selectedType = monthCardSelect.value
	const options = selectedType === 'sa' ? saValues : minorValues

	options.forEach(opt => {
		const option = new Option(opt.text, opt.value)
		monthCardSelect2.appendChild(option)
	})
})

const wdayWrapper = document.getElementById("what-day__wrapper")
const wdayToggle = wdayWrapper.querySelector(".what-day__toggle")
const wdayInput = document.getElementById("wday-input")
const wdayBtn = document.querySelector(".what-day__btn")

wdayToggle.addEventListener("click", () => {
	const isOpen = wdayWrapper.getAttribute("data-state") === "open"
	wdayWrapper.setAttribute("data-state", isOpen ? "closed" : "open")
})

wdayInput.addEventListener("input", () => {
	wdayInput.value = wdayInput.value.replace(/\D/g, "")
	if (wdayInput.value.length > 2) {
		wdayInput.value = wdayInput.value.slice(0, 2)
	}
})

wdayBtn.addEventListener('click', () => {
  const dayNum = wdayInput.value.trim()
  if (!dayNum) return

  const targetId = `day${dayNum}`
  const targetEl = document.getElementById(targetId)

  if (targetEl) {
    targetEl.scrollIntoView({ behavior: "smooth", block: "center" })
  } else {
    wdayInput.value = ""
  }
})