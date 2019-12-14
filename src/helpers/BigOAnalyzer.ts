import { Plot, plot } from 'nodeplotlib'
/**
 * @description This Class provides simple analyzing of loops using graphs.
 */
export class BigOAnalyzer {
	private xData: Array<number> = []
	private yData: Array<number> = []
	private startOfLoopTime: number = 0
	private firstLineLoopTime: number = 0

	/**
	 * @description Create the instance of the BigOAnalyzer Class right before the loop you are analyzing.
	 */
	constructor() {
		this.startOfLoopTime = Date.now()
	}

	/**
	 * @description Call this method right in the first line of the loop you are analyzing.
	 * @param n Typical the index variable of the loop
	 */
	firstLineOfLoop(n: number) {
		this.firstLineLoopTime = Date.now() - this.startOfLoopTime
		this.xData.push(this.firstLineLoopTime)
		this.yData.push(n)
	}

	/**
	 * @description Call this method after the loop you are analyzing.
	 */
	done() {
		const data: Plot[] = [{
			x: this.xData,
			y: this.yData,
		}];
		plot(data);
	}
}