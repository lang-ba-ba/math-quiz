import { Equation, EquationResult } from "../lib/types";
import { genSequence } from "./equationUtils";

class Subtraction extends Equation {
	minNum = 2;
	step = 2;

	constructor(maxNum: number, digitSize: number) {
		super(maxNum, digitSize);

		if (digitSize === 2) {
			this.maxQuestionSize = 100;
		} else {
			this.maxQuestionSize = 500;
		}
	}

	gen = (): EquationResult => {
		const digits = genSequence(
			this.digitSize,
			this.minNum,
			this.maxNum,
			this.step
		);
		const answer = digits.pop();

		const questionContent = digits.join(" - ");

		return {
			questionContent,
			answer
		} as EquationResult;
	};
}

export default Subtraction;