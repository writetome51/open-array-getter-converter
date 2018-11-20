To include in your project:

    import {PublicArrayGetterConverter} from '@writetome51/public-array-getter-converter';

PublicArrayGetterConverter has the built-in Array methods  .map()  and  .reduce() ,  
but renamed to  .each()  and  .toOne() , respectively.

To instantiate, pass the actual array it will contain to its constructor:

    let getConverted = new PublicArrayGetterConverter( [item1, item2, item3,...] );

You can reset the array by accessing the class 'data' property:

    getConverted.data = [1,2,3,4,...];


Examples of using its methods:

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
