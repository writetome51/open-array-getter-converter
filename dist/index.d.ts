import { PublicArrayContainer } from '@writetome51/public-array-container';


export declare class PublicArrayGetterConverter extends PublicArrayContainer {
	
	constructor(data?: any[]);


	toOne(
		reducingFunction: ((previousValue: any, currentValue: any, index?: number, array?: any[]) => any)
	): any;


	each(
		mappingFunction: ((item: any, index?: number, array?: any[]) => any)
	): any[];
}
