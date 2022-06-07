const form = document.querySelector('.quiz')
const answers = Array.from(document.querySelectorAll('.answer'))
const allQuestions = document.querySelectorAll('.question-box-quiz')
const modal = document.querySelector('.modal-info')
const modalInfo = modal.querySelector('p')
const modalBtn = modal.querySelector('.close')

const handleQuiz = e => {
	e.preventDefault()

	const checkedAnswers = answers.filter(answer => answer.checked)
	const isTrue = checkedAnswers.every(answer => answer.value === 'true')
	const allChecked = checkedAnswers.length === allQuestions.length

	if (!allChecked) {
		modal.classList.add('modal-active')
		modalInfo.textContent = 'Wybierz wszystkie odpowiedzi!'
		return
	}

	checkedAnswers.forEach(answer => {
		const checkIfCorrect = answer.value === 'true'
		const answerBox = answer.closest('.question-box-quiz')

		if (checkIfCorrect) {
			answerBox.classList.add('correct')
			answerBox.classList.remove('incorrect')
		} else {
			answerBox.classList.add('incorrect')
			answerBox.classList.remove('correct')
		}
	})

	if (isTrue && allChecked) {
		modal.classList.add('modal-active')
		modalInfo.textContent = 'Brawo! Wszystkie odpowiedzi są poprawne!'
	} else {
		modal.classList.add('modal-active')
		modalInfo.textContent = 'Niestety przegrywasz...'
	}
}

const closeModal = () => {
	modal.classList.remove('modal-active')
}

modalBtn.addEventListener('click', closeModal)
form.addEventListener('submit', handleQuiz)
