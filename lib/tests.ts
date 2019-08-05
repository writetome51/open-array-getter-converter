import { PublicArrayGetterConverter } from './index';
import { arraysMatch } from '@writetome51/arrays-match';


let getConverted = new PublicArrayGetterConverter([1, 2, 3, 4]);

let result: any = getConverted.each((item) => {
	return item * 2;
});
if (arraysMatch(result, [2, 4, 6, 8])) console.log('test 1 passed');
else console.log('test 1 FAILED');


getConverted.data = [2, 4, 6, 8];
result = getConverted.toOne((a, b) => a * b);
if (result === 384) console.log('test 2 passed');
else console.log('test 2 FAILED');


getConverted.data = ['a', 'sentence', 'is', 'written'];
result = getConverted.toOne((a, b) => a + ' ' + b, 'hello');
if (result === 'hello a sentence is written') console.log('test 3 passed');
else console.log('test 3 FAILED');


let errorTriggered = false;
try {
	getConverted.each((1));
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 4 passed');
else console.log('test 4 FAILED');


errorTriggered = false;
try {
	getConverted.toOne((1));
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 5 passed');
else console.log('test 5 FAILED');
