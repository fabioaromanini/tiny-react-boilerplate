import _ from 'lodash';

console.log('Hello world!');
const arr = [ 1, 2, 3, 5 ];
const arr2 = [ 1, 2, 3, 4 ];

arr.forEach((element, index) => {
	console.log(element)
});

console.log(_.difference(arr, arr2));
