# PublicArrayGetterConverter

An array-manipulating Typescript/Javascript class with methods that return the array   
converted into something else.  None of the methods modify the array.

PublicArrayGetterConverter has the built-in Array methods  `.map()`  and  `.reduce()` ,  
but renamed to  `.each()`  and  `.toOne()` , respectively.

## Constructor
```ts
constructor(data? = []) //  'data' is assigned to this.data .
```

When creating an instance, it's recommended you name the instance in a verb-form  
of the class name.  Example:
```
let getUsersConverted = new PublicArrayGetterConverter(users);
let combinedUser = getUsersConverted.toOne(fnArg);
let convertedUsers = getUsersConverted.each(fnArg);
```

You can reset the array by accessing the class `.data` property:
```ts
this.data = [1,2,3,4];
```


## Properties
```ts
data : any[]  // the actual array

className: string (read-only)
```


## Methods
<details>
<summary>view methods</summary>

```ts
each(
    mappingFunction: (item, index?, array?) => any
): any[]
    // Does the same thing as Array.map()
    // Returns new array with each value in old array converted into something else.

toOne(
    reducingFunction: (total: any,  item: any,  index?,  array?) => any,
    initialValue?: any
): any
    // Does the same thing as Array.reduce(), but with a much better name.
``` 
The methods below are not important to know about in order to use this  
class.  They're inherited from [BaseClass](https://github.com/writetome51/typescript-base-class#baseclass) .
```ts
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

protected   _errorIfPropertyHasNoValue(
                property: string, // can contain dot-notation, i.e., 'property.subproperty'
                propertyNameInError? = ''
            ) : void
    // If value of this[property] is undefined or null, it triggers fatal error:
    // `The property "${propertyNameInError}" has no value.`
```
</details>


## Usage Examples:
<details>
<summary>view examples</summary>

```ts
let getNumbersConverted = new PublicArrayGetterConverter([1,2,3,4]);

getNumbersConverted.each((item) => item * 2);
// -->  [2,4,6,8]

// getNumbersConverted.data is still [1,2,3,4]

getNumbersConverted.toOne((product, currentItem) => product * currentItem);
// -->  24
```
</details>

## Inheritance Chain

PublicArrayGetterConverter<--[PublicArrayContainer](https://github.com/writetome51/public-array-container#publicarraycontainer)<--[BaseClass](https://github.com/writetome51/typescript-base-class#baseclass)


## Installation

`npm i  @writetome51/public-array-getter-converter`

## Loading
```ts
// if using Typescript:
import {PublicArrayGetterConverter} from '@writetome51/public-array-getter-converter';
// if using ES5 Javascript:
var PublicArrayGetterConverter = 
        require('@writetome51/public-array-getter-converter').PublicArrayGetterConverter;
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
