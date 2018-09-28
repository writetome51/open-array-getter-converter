import { OpenArrayContainer } from '@writetome51/open-array-container/OpenArrayContainer';


export class OpenArrayGetterConverter extends OpenArrayContainer {


	constructor(data = []) {
		super(data);
	}


	// These functions don't modify the array.  What they return depends on the function.

	toOne(reducingFunction): any {
		return this.data.reduce(reducingFunction);
	}

	// Returns new array with each value in old array converted into something else.
	each(mappingFunction): any[] {
		return this.data.map(mappingFunction);
	}


}
