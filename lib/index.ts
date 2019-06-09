import { errorIfNotFunction } from 'error-if-not-function';
import { PublicArrayContainer } from '@writetome51/public-array-container';


export class PublicArrayGetterConverter extends PublicArrayContainer {


	// These functions don't modify the array.  What they return depends on the function.


	// Does the same thing as Array.reduce(), but with a much better name.

	toOne(
		reducingFunction: ((total: any, currentValue: any, currentIndex?, array?) => any),
		initialValue?
	): any {
		errorIfNotFunction(reducingFunction);
		// @ts-ignore
		return this.data.reduce(...arguments);
	}


	// Does the same thing as Array.map()
	// Returns new array with each value in old array converted into something else.

	each(mappingFunction: ((item, index?, array?) => any)): any[] {
		errorIfNotFunction(mappingFunction);
		return this.data.map(mappingFunction);
	}


}
