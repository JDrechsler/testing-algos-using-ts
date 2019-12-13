import { BigOAnalyzer } from "../../helpers/BigOAnalyzer";

function testForLoop() {

	let bOA = new BigOAnalyzer(0)

	for (let index = 0; index < 28; index++) {
		bOA.updateN(index)
	}
	bOA.done()
}

testForLoop()
