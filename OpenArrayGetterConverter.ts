import { OpenArrayContainer } from '@writetome51/open-array-container/OpenArrayContainer';
import { errorIfNotFunction } from 'basic-data-handling/errorIfNotFunction';


export class OpenArrayGetterConverter extends OpenArrayContainer {


	constructor(data = []) {
		super(data);
	}


	// These functions don't modify the array.  What they return depends on the function.

	// Does the same thing as Array.reduce(), but with a much better name.
	toOne(reducingFunction): any {
		errorIfNotFunction(reducingFunction);
		return this.data.reduce(reducingFunction);
	}


	// Does the same thing as Array.map()
	// Returns new array with each value in old array converted into something else.
	each(mappingFunction): any[] {
		errorIfNotFunction(reducingFunction);
		return this.data.map(mappingFunction);
	}


}
