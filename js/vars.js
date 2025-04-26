// номер месяца по порядку (без кавычек)
const chosenMonth = 3

// год (без кавычек)
const chosenYear = 2025

/* расклад (текст должен быть внутри кавычек, как в примере)
имя карты:
старший аркан просто названием (с маленькой буквы)
карты мастей: карта + масть, примеры: '1 плетей', '2 мечей', 'паж пентаклей', '10 кубков'
описание:
текст, отображаемый по клику на карту
иконки: иконки/эмодзи возле карты */
const daysTarotData = {
	day1: [
		'шут',
		'описание шут',
		'иконка 1',
		'иконка 2'
	],
	day2: [
		'маг',
		'описание маг',
		'иконка 1',
		'иконка 2'
	],
	day3: [
		'жрица',
		'описание жрица',
		'иконка 1',
		'иконка 2'
	],
	day4: [
		'императрица',
		'описание императрица',
		'иконка 1',
		'иконка 2'
	],
	day5: [
		'император',
		'описание император',
		'иконка 1',
		'иконка 2'
	],
	day6: [
		'жрец',
		'описание жрец',
		'иконка 1',
		'иконка 2'
	],
	day7: [
		'влюбленные',
		'описание влюбленные',
		'иконка 1',
		'иконка 2'
	],
	day8: [
		'колесница',
		'описание колесница',
		'иконка 1',
		'иконка 2'
	],
	day9: [
		'справедливость',
		'описание справедливость',
		'иконка 1',
		'иконка 2'
	],
	day10: [
		'отшельник',
		'описание отшельник',
		'иконка 1',
		'иконка 2'
	],
	day11: [
		'колесо фортуны',
		'описание колесо фортуны',
		'иконка 1',
		'иконка 2'
	],
	day12: [
		'сила',
		'описание сила',
		'иконка 1',
		'иконка 2'
	],
	day13: [
		'повешенный',
		'описание повешенный',
		'иконка 1',
		'иконка 2'
	],
	day14: [
		'смерть',
		'описание смерть',
		'иконка 1',
		'иконка 2'
	],
	day15: [
		'умеренность',
		'описание умеренность',
		'иконка 1',
		'иконка 2'
	],
	day16: [
		'дьявол',
		'описание дьявол',
		'иконка 1',
		'иконка 2'
	],
	day17: [
		'башня',
		'описание башня',
		'иконка 1',
		'иконка 2'
	],
	day18: [
		'звезда',
		'описание звезда',
		'иконка 1',
		'иконка 2'
	],
	day19: [
		'луна',
		'описание луна',
		'иконка 1',
		'иконка 2'
	],
	day20: [
		'солнце',
		'описание солнце',
		'иконка 1',
		'иконка 2'
	],
	day21: [
		'суд',
		'описание суд',
		'иконка 1',
		'иконка 2'
	],
	day22: [
		'мир',
		'описание мир',
		'иконка 1',
		'иконка 2'
	],
	day23: [
		'2 кубков',
		'описание 2 кубков',
		'иконка 1',
		'иконка 2'
	],
	day24: [
		'8 кубков',
		'описание 8 кубков',
		'иконка 1',
		'иконка 2'
	],
	day25: [
		'паж кубков',
		'описание паж кубков',
		'иконка 1',
		'иконка 2'
	],
	day26: [
		'1 мечей',
		'описание 1 мечей',
		'иконка 1',
		'иконка 2'
	],
	day27: [
		'король мечей',
		'описание король мечей',
		'иконка 1',
		'иконка 2'
	],
	day28: [
		'5 пентаклей',
		'описание 5 пентаклей',
		'иконка 1',
		'иконка 2'
	],
	day29: [
		'4 жезлов',
		'описание 4 жезлов',
		'иконка 1',
		'иконка 2'
	],
	day30: [
		'рыцарь жезлов',
		'описание рыцарь жезлов',
		'иконка 1',
		'иконка 2'
	],
	day31: [
		'рыцарь жезлов',
		'описание рыцарь жезлов',
		'иконка 1',
		'иконка 2'
	],
	
}


//--------------------------------------------------------------------------
// все, что ниже, тебе не нужно

const dataObjectToUse = {}

dataObjectToUse.month = chosenMonth - 1
dataObjectToUse.year = chosenYear
dataObjectToUse.cards = []

const createFileName = (cardNameRU) => {
	let correctFileName

	switch (cardNameRU) {
		case 'шут':
			correctFileName = '00-Shut'
			break;
		case 'маг':
			correctFileName = '01-Mag'
			break;
		case 'жрица':
			correctFileName = '02-Zhrica'
			break;
		case 'императрица':
			correctFileName = '03-Imperatrica'
			break;
		case 'император':
			correctFileName = '04-Imperator'
			break;
		case 'жрец':
			correctFileName = '05-Zhrec'
			break;
		case 'влюбленные':
			correctFileName = '06-Vljublennye'
			break;
		case 'колесница':
			correctFileName = '07-Kolesnica'
			break;
		case 'справедливость':
			correctFileName = '08-Spravedlivost'
			break;
		case 'отшельник':
			correctFileName = '09-Otshelnik'
			break;
		case 'колесо фортуны':
			correctFileName = '10-Koleso-Fortuny'
			break;
		case 'сила':
			correctFileName = '11-Sila'
			break;
		case 'повешенный':
			correctFileName = '12-Poveshennyj'
			break;
		case 'смерть':
			correctFileName = '13-Smert'
			break;
		case 'умеренность':
			correctFileName = '14-Umerennost'
			break;
		case 'дьявол':
			correctFileName = '15-Diavol'
			break;
		case 'башня':
			correctFileName = '16-Bashnja'
			break;
		case 'звезда':
			correctFileName = '17-Zvezda'
			break;
		case 'луна':
			correctFileName = '18-Luna'
			break;
		case 'солнце':
			correctFileName = '19-Solnce'
			break;
		case 'суд':
			correctFileName = '20-Sud'
			break;
		case 'мир':
			correctFileName = '21-Mir'
			break;
		case '1 кубков':
			correctFileName = 'kubkov-01'
			break;
		case '2 кубков':
			correctFileName = 'kubkov-02'
			break;
		case '3 кубков':
			correctFileName = 'kubkov-03'
			break;
		case '4 кубков':
			correctFileName = 'kubkov-04'
			break;
		case '5 кубков':
			correctFileName = 'kubkov-05'
			break;
		case '6 кубков':
			correctFileName = 'kubkov-06'
			break;
		case '7 кубков':
			correctFileName = 'kubkov-07'
			break;
		case '8 кубков':
			correctFileName = 'kubkov-08'
			break;
		case '9 кубков':
			correctFileName = 'kubkov-09'
			break;
		case '10 кубков':
			correctFileName = 'kubkov-10'
			break;
		case 'король кубков':
			correctFileName = 'kubkov-korol'
			break;
		case 'королева кубков':
			correctFileName = 'kubkov-koroleva'
			break;
		case 'паж кубков':
			correctFileName = 'kubkov-pazh'
			break;
		case 'рыцарь кубков':
			correctFileName = 'kubkov-rycar'
			break;
		case '1 мечей':
			correctFileName = 'mechei-01'
			break;
		case '2 мечей':
			correctFileName = 'mechei-02'
			break;
		case '3 мечей':
			correctFileName = 'mechei-03'
			break;
		case '4 мечей':
			correctFileName = 'mechei-04'
			break;
		case '5 мечей':
			correctFileName = 'mechei-05'
			break;
		case '6 мечей':
			correctFileName = 'mechei-06'
			break;
		case '7 мечей':
			correctFileName = 'mechei-07'
			break;
		case '8 мечей':
			correctFileName = 'mechei-08'
			break;
		case '9 мечей':
			correctFileName = 'mechei-09'
			break;
		case '10 мечей':
			correctFileName = 'mechei-10'
			break;
		case 'король мечей':
			correctFileName = 'mechei-korol'
			break;
		case 'королева мечей':
			correctFileName = 'mechei-koroleva'
			break;
		case 'паж мечей':
			correctFileName = 'mechei-pazh'
			break;
		case 'рыцарь мечей':
			correctFileName = 'mechei-rycar'
			break;
		case '1 пентаклей':
			correctFileName = 'pentaklei-01'
			break;
		case '2 пентаклей':
			correctFileName = 'pentaklei-02'
			break;
		case '3 пентаклей':
			correctFileName = 'pentaklei-03'
			break;
		case '4 пентаклей':
			correctFileName = 'pentaklei-04'
			break;
		case '5 пентаклей':
			correctFileName = 'pentaklei-05'
			break;
		case '6 пентаклей':
			correctFileName = 'pentaklei-06'
			break;
		case '7 пентаклей':
			correctFileName = 'pentaklei-07'
			break;
		case '8 пентаклей':
			correctFileName = 'pentaklei-08'
			break;
		case '9 пентаклей':
			correctFileName = 'pentaklei-09'
			break;
		case '10 пентаклей':
			correctFileName = 'pentaklei-10'
			break;
		case 'король пентаклей':
			correctFileName = 'pentaklei-korol'
			break;
		case 'королева пентаклей':
			correctFileName = 'pentaklei-koroleva'
			break;
		case 'паж пентаклей':
			correctFileName = 'pentaklei-pazh'
			break;
		case 'рыцарь пентаклей':
			correctFileName = 'pentaklei-rycar'
			break;
		case '1 жезлов':
			correctFileName = 'zhezlov-01'
			break;
		case '2 жезлов':
			correctFileName = 'zhezlov-02'
			break;
		case '3 жезлов':
			correctFileName = 'zhezlov-03'
			break;
		case '4 жезлов':
			correctFileName = 'zhezlov-04'
			break;
		case '5 жезлов':
			correctFileName = 'zhezlov-05'
			break;
		case '6 жезлов':
			correctFileName = 'zhezlov-06'
			break;
		case '7 жезлов':
			correctFileName = 'zhezlov-07'
			break;
		case '8 жезлов':
			correctFileName = 'zhezlov-08'
			break;
		case '9 жезлов':
			correctFileName = 'zhezlov-09'
			break;
		case '10 жезлов':
			correctFileName = 'zhezlov-10'
			break;
		case 'король жезлов':
			correctFileName = 'zhezlov-korol'
			break;
		case 'королева жезлов':
			correctFileName = 'zhezlov-koroleva'
			break;
		case 'паж жезлов':
			correctFileName = 'zhezlov-pazh'
			break;
		case 'рыцарь жезлов':
			correctFileName = 'zhezlov-rycar'
			break;
		default:
			alert('Неверное имя карты:', cardNameRU)
			break;
	}

	correctFileName += '.jpg'
	return correctFileName
}

const createReadableCardName = (cardNameRU) => {
	let cardNameSplit = cardNameRU.split('')
	let cardNameSplitChanging = cardNameSplit.map((item, index, array) => {		
		if (item === ' ') {
			array[index + 1] = array[index + 1].toUpperCase()
			return ' '
		}
		switch (item) {
			case '1':
				return 'Туз'
			case '2':
				return 'Двойка'
			case '3':
				return 'Тройка'
			case '4':
				return 'Четверка'
			case '5':
				return 'Пятерка'
			case '6':
				return 'Шестерка'
			case '7':
				return 'Семерка'
			case '8':
				return 'Восьмерка'
			case '9':
				return 'Девятка'
			case '10':
				return 'Десятка'
			default:
				break;
		}
		if (index === 0) return item.toUpperCase()
		return item
	})

	return cardNameSplitChanging.join('')
}

const createDaysCardsInfo = () => {
	for (let i = 1; i <= 31; i++) {
		let val = 'day' + i
		dataObjectToUse.cards.push({
			image: createFileName(daysTarotData[val][0]),
			name: createReadableCardName(daysTarotData[val][0]),
			description: daysTarotData[val][1],
			icon1: daysTarotData[val][2],
			icon2: daysTarotData[val][3],
		})
	}
}

createDaysCardsInfo()

console.log(dataObjectToUse)

export { dataObjectToUse }