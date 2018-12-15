# PublicArrayGetterConverter

An array-manipulating Typescript/Javascript class with methods that return the array   
converted into something else.  None of the methods modify the array.

To include in your project:

    // if using Typescript:
    import {PublicArrayGetterConverter} from '@writetome51/public-array-getter-converter';
    // if using ES5 Javascript:
    var PublicArrayGetterConverter = 
            require('@writetome51/public-array-getter-converter').PublicArrayGetterConverter;

PublicArrayGetterConverter has the built-in Array methods  `.map()`  and  `.reduce()` ,  
but renamed to  `.each()`  and  `.toOne()` , respectively.

To instantiate, pass the actual array it will contain to its constructor:

    let getConverted = new PublicArrayGetterConverter( [item1, item2, item3,...] );

You can reset the array by accessing the class 'data' property:

    getConverted.data = [1,2,3,4,...];


## Properties

	data : any[] (read-writable) // the actual array

## Methods
	
	each(
        mappingFunction: ((item: any, index?: number, array?: any[]) => any)
	): any[]
        // Does the same thing as Array.map()
        // Returns new array with each value in old array converted into something else.

	toOne(
        reducingFunction: ((previousValue: any, currentValue: any, index?: number, array?: any[]) => any)
	): any
        // Does the same thing as Array.reduce(), but with a much better name.


Usage Examples:

    getConverted.data = [1,2,3,4];  
    let result = getConverted.each((item, currentIndex, theArray) => {
	    return item * 2;
    });
    // result is now [2,4,6,8]

    // getConverted.data is still [1,2,3,4]

    result = getConverted.toOne((a, b, currentIndex, theArray) => {
	    return a * b;
    });
    // result is now 24
