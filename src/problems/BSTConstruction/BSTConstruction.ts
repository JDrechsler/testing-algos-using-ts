import { BigOAnalyzer } from "../../helpers/BigOAnalyzer";

// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.

class BST {
	value: number;
	left: BST;
	right: BST;

	constructor(value: number) {
		this.value = value;
		this.left = null
		this.right = null
	}

	/**
	 * @Average O(n) time | O(1) space
	 * @Worst value
	 */
	insertUsingLoop(value: number): BST {
		let currentNode: BST = this
		let treeMaxHeight = 100

		let bOA = new BigOAnalyzer()
		for (let index = 0; index < treeMaxHeight; index++) {
			bOA.firstLineOfLoop(index)
			console.log(index)
			if (value < currentNode.value) {
				if (currentNode.left === null) {
					currentNode.left = new BST(value) //?
					break
				} else {
					currentNode = currentNode.left
				}
			} else {
				if (currentNode.right === null) {
					currentNode.right = new BST(value) //?
					break

				} else {
					currentNode = currentNode.right
				}
			}

		}
		bOA.done()

		return this;
	}

	insertUsingRecursion(value: number): BST {
		if (value < this.value) {
			if (this.left === null) {
				this.left = new BST(value)
			} else {
				this.left.insertUsingRecursion(value)
			}
		} else {
			if (this.right === null) {
				this.right = new BST(value)
			} else {
				this.right = this.right.insertUsingRecursion(value)
			}
		}

		return this;
	}

	contains(value: number) {
		// Write your code here.
	}

	remove(value: number) {
		// Write your code here.
		// Do not edit the return statement of this method.
		return this;
	}
}

const nBST1 = new BST(10) //?
	.insertUsingLoop(5)
	.insertUsingLoop(15)
	.insertUsingLoop(6)
	.insertUsingLoop(2)
	.insertUsingLoop(14)
	.insertUsingLoop(22)

// const nBST1 = new BST(10) //?
// 	.insertUsingRecursion(5)
// 	.insertUsingRecursion(15)
// 	.insertUsingRecursion(5)
// 	.insertUsingRecursion(2)
// 	.insertUsingRecursion(14)
// 	.insertUsingRecursion(22)

nBST1//?

let testCases = [
	{ name: "testCase1", result: nBST1.left.value === 5 /*?*/ },
	{ name: "testCase2", result: nBST1.right.right.value === 22 /*?*/ }
]

let allTestCasesAreTrue = testCases.every(testCase => {
	return testCase.result === true
})

if (allTestCasesAreTrue) {
	console.log("All test cases are true!!!!")
}
else {
	console.log("Not all test cases are true")
}

