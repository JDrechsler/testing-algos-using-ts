import { BigOAnalyzer } from "../../helpers/BigOAnalyzer";

async function testForLoop() {
	let bOA = new BigOAnalyzer()
	for (let index = 0; index < 12; index++) {
		bOA.firstLineOfLoop(index)
		console.log(index)
		if (index === 5 || index === 10) {
			await sleep(500)
		} else {
			await sleep(100)
		}
	}
	bOA.done()
}

function sleep(ms: number) {
	return new Promise(resolve => {
		setTimeout(resolve, ms)
	})
}

testForLoop()
