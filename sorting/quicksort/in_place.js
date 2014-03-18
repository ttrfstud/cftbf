// var numeric_comparator = require('../numeric_comparator');

function partition(array, low, high, pivot, comp, swap) {
	swap(array, high, pivot);

	var storeIndex = low;

	for (var i = low; i < high; i++) {
		if (comp(array[i], array[high]) < 0) {
			swap(array, i, storeIndex);
			storeIndex++;
		}
	}

	swap(array, storeIndex, high);

	return storeIndex;
}

module.exports = quicksort = function (array, low, high, comp, swap) {
	if (high - low <= 0) {
		return array;	
	}

	var pivot = partition(array, low, high, low, comp, swap);

	quicksort(array, low, pivot - 1, comp, swap);
	quicksort(array, pivot + 1, high, comp, swap);
};


// var ar = [12,32,32,4,1,1,1,1,1212121,3,2,5,71,955];
// quicksort(ar, 0, 13, numeric_comparator, function swap(a, i, j) {
// 	var temp;

// 	temp = a[j];
// 	a[j] = a[i];
// 	a[i] = temp;
// });

// console.log(ar);