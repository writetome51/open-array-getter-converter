import { PublicArrayGetterConverter } from './index';


let getConverted = new PublicArrayGetterConverter([1, 2, 3, 4]);

let result: any = getConverted.each((item) => {
	return item * 2;
});
if (result.length === 4 && result[0] === 2) console.log('test 1 passed');
else console.log('test 1 FAILED');


result = getConverted.toOne((a, b) => {
	return a * b;
});
if (result === 24) console.log('test 2 passed');
else console.log('test 2 FAILED');


let errorTriggered = false;
try {
	getConverted.each((1));
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 3 passed');
else console.log('test 3 FAILED');


errorTriggered = false;
try {
	getConverted.toOne((1));
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 4 passed');
else console.log('test 4 FAILED');