interface myTest {
	x: Array<number>
	y: Array<number>
}

let myData: myTest = { x: [], y: [] } //?

myData.x.push(4)
myData.y.push(33, 6, 5, 4, 3, 2, 44)
myData.y.pop()

myData
//?
console.log(myData)
//?

let myNum: number = 1576292615728

