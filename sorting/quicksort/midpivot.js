var numeric_comparator = require('../numeric_comparator');

module.exports = quicksort = function (array, low, high, comp, swap) {
	if (high - low <= 0) {
		return array;	
	}

	var pivot = Math.floor(low + (high - low) / 2);

	var less = [];
	var greater = [];

	for (var i = low; i <= high; i++) {
		if (i === pivot) continue;
		if (comp(array[i], array[pivot]) <= 0) less.push(array[i]);
		else greater.push(array[i]);
	}

	less = quicksort(less, 0, less.length - 1, comp, swap);
	greater = quicksort(greater, 0, greater.length - 1, comp, swap);

	return less.concat(array[pivot]).concat(greater);
};



var res = quicksort([12,32,32,4,1,1,234,1,1,1212121,3,2,5,71,955], 0, 13, numeric_comparator, function (a, i, j) {
	var temp;

	temp = a[j];
	a[j] = a[i];
	a[i] = temp;

});

console.log(res);