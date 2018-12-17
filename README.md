# PublicArrayGetterConverter

An array-manipulating Typescript/Javascript class with methods that return the array   
converted into something else.  None of the methods modify the array.

## Installation

You must have npm installed first. Then, in the command line:

    npm install @writetome51/public-array-getter-converter

## Loading

    // if using Typescript:
    import {PublicArrayGetterConverter} from '@writetome51/public-array-getter-converter';
    // if using ES5 Javascript:
    var PublicArrayGetterConverter = 
            require('@writetome51/public-array-getter-converter').PublicArrayGetterConverter;

PublicArrayGetterConverter has the built-in Array methods  `.map()`  and  `.reduce()` ,  
but renamed to  `.each()`  and  `.toOne()` , respectively.

To instantiate, pass the actual array it will contain to its constructor:

    let getConverted = new PublicArrayGetterConverter( [item1, item2, item3,...] );

You can reset the array by accessing the class `.data` property:

    getConverted.data = [1,2,3,4,...];


## Properties

	data : any[] (read-writable) // the actual array

	className: string (read-only)

## Methods
```	
each(
    mappingFunction: ((item: any, index?: number, array?: any[]) => any)
): any[]
    // Does the same thing as Array.map()
    // Returns new array with each value in old array converted into something else.

toOne(
    reducingFunction: ((previousValue: any, currentValue: any, index?: number, array?: any[]) => any)
): any
    // Does the same thing as Array.reduce(), but with a much better name.

protected   _createGetterAndOrSetterForEach(
		propertyNames: string[],
		configuration: IGetterSetterConfiguration
	   ) : void
    /*********************
    Use this method when you have a bunch of properties that need getter and/or 
    setter functions that all do the same thing. You pass in an array of string 
    names of those properties, and the method attaches the same getter and/or 
    setter function to each property.
    IGetterSetterConfiguration is this object:
    {
        get_setterFunction?: (
             propertyName: string, index?: number, propertyNames?: string[]
        ) => Function,
	    // get_setterFunction takes the property name as first argument and 
	    // returns the setter function.  The setter function must take one 
	    // parameter and return void.
	    
        get_getterFunction?: (
             propertyName: string, index?: number, propertyNames?: string[]
        ) => Function
	    // get_getterFunction takes the property name as first argument and 
	    // returns the getter function.  The getter function must return something.
    }
    *********************/ 


protected   _returnThis_after(voidExpression: any) : this
    // voidExpression is executed, then function returns this.
    // Even if voidExpression returns something, the returned data isn't used.

protected   _runMethod_and_returnThis(
    callingObject, 
    method: Function, 
    methodArgs: any[], 
    additionalAction?: Function // takes the result returned by method as an argument.
) : this
```

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

## Inheritance Chain

PublicArrayGetterConverter<--[PublicArrayContainer](https://github.com/writetome51/public-array-container#publicarraycontainer)<--[BaseClass](https://github.com/writetome51/typescript-base-class#baseclass)


## License
[MIT](https://choosealicense.com/licenses/mit/)