import { dataObjectToUse } from './vars.js'
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

