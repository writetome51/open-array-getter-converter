import { PublicArrayContainer } from '@writetome51/public-array-container';


export declare class PublicArrayGetterConverter extends PublicArrayContainer {

	constructor(data?: any[]);


	toOne(
		reducingFunction: ((total: any, currentValue: any, currentIndex?: number, array?: any[]) => any),
		initialValue?: any
	): any;


	each(
		mappingFunction: ((item: any, index?: number, array?: any[]) => any)
	): any[];
}
