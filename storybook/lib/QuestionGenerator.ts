import { Equation, Question, Questions } from "./types";

const defaultQuestionSizes = [
	10, 30, 60, 80, 100, 120, 150, 200, 500, 750, 1000, 1500, 2000, 3000
];

class QuestionGenerator {
	equation: Equation;

	constructor({
		maxNum,
		digitSize,
		EquationClass
	}: {
		maxNum: number;
		digitSize: number;
		EquationClass: typeof Equation;
	}) {
		this.equation = new EquationClass(maxNum, digitSize);
	}

	questionSizes = () =>
		defaultQuestionSizes.filter(size => size <= this.equation.maxQuestionSize);

	genQuestions = (questionSize: number): Questions => {
		const usedQuestions = new Set();

		const questions = [];
		const maxUsedCount = questionSize * 3;
		for (
			let i = 0;
			i < Math.min(questionSize, this.equation.maxQuestionSize);
			i++
		) {
			let question: Question;
			let usedCount = 0;
			do {
				question = this.equation.gen();
				usedCount++;
			} while (
				usedQuestions.has(question.questionContent) &&
				usedCount <= maxUsedCount
			);

			if (usedCount > maxUsedCount) {
				break;
			}

			usedQuestions.add(question.questionContent);
			questions.push(question);
		}

		return questions;
	};
}

export default QuestionGenerator;