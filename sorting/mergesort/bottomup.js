var numeric_comparator = require('../numeric_comparator');

module.exports = mergesort = function (array, low, high, comp, swap) {
	var carrier = [];
	var width, i, temp;

	for (width = 1; width <= high; width *= 2) {
		for (i = low; i <= high; i += 2 * width) {
			merge(array, i, Math.min(high, i + width), Math.min(high, i + 2 * width - 1), carrier, comp);
		}

		temp = array;
		array = carrier;
		carrier = temp;
	}

	return array;
}

function merge(a, low, mid, high, b, comp) {
	var i1 = low, i2 = mid;

	for (var i = low; i <= high; i++) {
		if (i1 < mid && (i2 > high || comp(a[i1], a[i2]) < 0)) {
			b[i] = a[i1++];
		} else {
			b[i] = a[i2++];
		}
	}

}

var a = mergesort([12,32,32,4,1,1,234,1,1,1212121,3,2,5,71,955, 800], 0, 15, numeric_comparator, function (a, i, j) {
	var temp;

	temp = a[j];
	a[j] = a[i];
	a[i] = temp;

});

console.log(a);