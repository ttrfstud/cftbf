var numeric_comparator = require('../numeric_comparator');

module.exports = mergesort = function (array, low, high, comp, swap) {
	var carrier = [];
	var i, temp;
	var l, m, h;

	i = 0; var f = false;
	while(true) {
		i = low;
		l = i;

		while (array[i] <= array[++i]);

		m = i;

		if (m > high) break;

		while (array[i] <= array[++i]);

		h = --i;

		merge (array, l, Math.min(m, high), Math.min(h, high), carrier, comp);
		copy(array, l, Math.min(m, high), Math.min(h, high), carrier);
	}

	return array;
}

function copy(a, l, m, h, b) {
	for (var i = l; i <= h; i++) {
		a[i] = b[i];
	}
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