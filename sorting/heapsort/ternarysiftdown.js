var numeric_comparator = require('../numeric_comparator');

module.exports = heapsort = function (a, low, high, comp, swap) {
	heapify(a, low, high, comp, swap);

	var end = high;
	while (end > low) {
		swap(a, end, 0);
		end--;
		siftdown(a, low, end, comp, swap);
	}

	return a;
};

function heapify(a, low, high, comp, swap) {
	// last parent node
	var offset = high - low;

	var start = low + Math.floor((offset - 1) / 3);

	while (start >= low) {
		siftdown(a, start--, high, comp, swap);
	}
}

function siftdown(a, start, end, comp, swapf) {
	var root;
	var child;
	var swap;

	root = start;

	while ((child = root * 3 + 1) <= end) {
		swap = root;

		if (comp(a[swap], a[child]) < 0) {
			swap = child;
		}

		if (child + 1 <= end && comp(a[child + 1],a[swap]) > 0) {
			swap = child + 1;
		}

		if (child + 2 <= end && comp(a[child + 2],a[swap]) > 0) {
			swap = child + 2;
		} 

		if (root !== swap) {
			swapf(a, root, swap);
			root = swap;	
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