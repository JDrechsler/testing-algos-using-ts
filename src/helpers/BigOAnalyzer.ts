import { Plot, plot } from 'nodeplotlib'
export class BigOAnalyzer {
	private startN: number = 0
	private startTime: number = 0
	private currentN: number = 0
	private xData: Array<number> = []
	private yData: Array<number> = []

	constructor(n: number) {
		this.startN = n
		this.currentN = n
		this.startTime = Date.now() //?
	}

	updateN(newValue: number) {
		this.currentN = newValue
		this.trackUpdate(this.currentN)
	}

	done() {
		const data: Plot[] = [{
			x: this.xData,
			y: this.yData,
		}];
		plot(data);
	}

	private trackUpdate(value: number) {
		console.log(`Value n: ${value} | time: ${Date.now() - this.startTime}`) //?
		this.xData.push(Date.now() - this.startTime)
		this.yData.push(value)
	}
}