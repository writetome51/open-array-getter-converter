import { PublicArrayContainer } from '@writetome51/public-array-container/PublicArrayContainer';
import { errorIfNotFunction } from 'basic-data-handling/errorIfNotFunction';


export class PublicArrayGetterConverter extends PublicArrayContainer {


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
		errorIfNotFunction(mappingFunction);
		return this.data.map(mappingFunction);
	}


}
