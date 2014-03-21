var numeric_comparator = require('../numeric_comparator');

module.exports = heapsort = function (a, low, high, comp, swap) {
	heapify(a, low, high, comp, swap);

	var end = high;
	while (end > low) {
		swap(a, end, 0);
		end--;
		heapify(a, low, end, comp, swap);
	}

	return a;
};

function heapify(a, low, high, comp, swap) {
	// first child node
	var start = low + 1;

	while (start <= high) {
		siftup(a, low, start++, comp, swap);
	}
}

function siftup(a, start, end, comp, swapf) {
	var parent;
	var child;

	child = end;
	while (child > start) {
		parent = start + Math.floor((child - start - 1) / 2);
		if (comp(a[child], a[parent]) > 0) {
			swapf(a, child, parent);
			child = parent;
		} else {
			return;
		}
	}
}

var a = heapsort([12,32,32,4,1,1,234,1,1,1212121,3,2,5,71,955, 800], 0, 15, numeric_comparator, function (a, i, j) {
	var temp;

	temp = a[j];
	a[j] = a[i];
	a[i] = temp;

});

console.log(a);