var numeric_comparator = require('../numeric_comparator');

module.exports = mergesort = function (array, low, high, comp, swap) {
	if (low >= high) {
		return;
	}

	var mid = Math.floor(low + (high - low) / 2);

	mergesort(array, low, mid, comp, swap);
	mergesort(array, mid + 1, high, comp, swap);

	var carrier = [];

	merge(array, low, mid, high, carrier, comp, swap);
	copy(carrier, low, high, array);
}

function merge(array, low, mid, high, carrier, comp, swap) {
	var i1 = low, i2 = mid + 1;

	for (var i = low; i <= high; i++) {
		if (i1 <= mid && (i2 > high || comp(array[i1], array[i2]) <= 0)) {
			carrier[i] = array[i1++];
		} else {
			carrier[i] = array[i2++];
		}
	}

}

function copy(carrier, low, high, array) {
	for (var i = low; i <= high; i++) {
		array[i] = carrier[i];
	}
}

var a = [12,32,32,4,1,1,234,1,1,1212121,3,2,5,71,955, 35];
mergesort(a, 0, 15, numeric_comparator, function (a, i, j) {
	var temp;

	temp = a[j];
	a[j] = a[i];
	a[i] = temp;

});

console.log(a);