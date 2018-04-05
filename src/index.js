import _ from 'lodash';

const test_function = () => {
	console.log('Hello world!');
	const arr = [ 1, 2, 3, 5 ];
	const arr2 = [ 1, 2, 3, 4 ];

	arr.forEach((element, index) => {
		console.log(element)
	});

	const answer = _.difference(arr, arr2);
	console.log(answer);
	return answer;
}

test_function();

export default test_function;
