var numeric_comparator = require('../numeric_comparator');

var lhash = {1 : 1, 3 : 2, 5 : 3, 9 : 4, 15 : 5, 25 : 6, 41 : 7, 67 : 8, 109: 9, 177 : 10, 287 : 11, 465 : 12, 753 : 13, 1219 : 14, 1973 : 15, 3193 : 16, 5167 : 17, 8361 : 18, 13529: 19, 21891: 20, 35421: 21, 57313: 22, 92735: 23, 150049: 24, 242785: 25, 392835: 26, 635621: 27, 1028457: 28, 1664079: 29, 2692537: 30, 4356617: 31, 7049155: 32, 11405773: 33, 18454929: 34, 29860703: 35, 48315633: 36, 78176337: 37 };
// no zero!
var lheap = module.exports.lheap = function (num) {
	this.trees = []; // in decreasing size, with ascending roots
	this.trees.push([num]);
	this.trees[0].size = 1;
}

lheap.prototype.insert = function (number, d) {
	var nutree;

	// checking the two last trees in heap
	var last = this.trees[this.trees.length - 1];
	var plast = this.trees[this.trees.length - 2];

	d && console.log(JSON.stringify(plast), plast);
	d && console.log(JSON.stringify(last), last.size);
	if (this.trees.length >= 2 && /* at least two trees */
			(lhash[last.size] === lhash[plast.size] - 1 ||
			last.size === 1 && plast.size === 1)) { /* where their sizes are consecutive lnumbers */
		console.log('b1');
		// get them both out
		this.trees.pop();
		this.trees.pop();
		// form new tree
		nutree = [number, plast, last];
		nutree.size = plast.size + last.size + 1;
		this.trees.push(nutree);
	} else if (lhash[last.length] === 1) { /*if the last tree is singleton of size 1 */
		// we insert new singleton tree (length = L(0)) into heap		
		nutree = [number];
		nutree.size = 1;
		this.trees.push(nutree);
	} else { /* if no previous cases apply */
		nutree = [number];
		nutree.size = 1;
		this.trees.push(nutree);
	}

	rebalance(this.trees, this.trees.length - 1);
};

function rebalance(heap, cap) {
	var ct, cro, crc, clc;
	var fr, fl;
	var temp;
	var sidx;

	var last = heap[cap];
	var root = last[0];
	var rchild = last[1] && last[1][0] || void 0;
	var lchild = last[2] && last[2][0] || void 0;

	for (var i = heap.length - 2; i >= 0; i--) {
		ct = heap[i];
		cro = ct[0];

		if (cro > root && (cro > rchild && cro > lchild || !rchild && !lchild)) {
			sidx = i;
			break;
		}
	}

	if (typeof sidx !== 'undefined') {
		last[0] = cro;
		ct[0] = root;
	} else {
		ct = last;
	}

	// siftdown the displaced root down the heap

	while(true) {
		if (!ct[1]) return; // no left child, no right child

		crc = ct[1][0];
		clc = ct[2][0];

		if (crc > root) {
			fr = true;
		}

		if (clc > root) {
			fl = true;
		}

		if (fl && fr) {
			if (crc >= clc) {
				fl = 0;
			} else {
				fr = 0;
			}
		}

		if (fl) {
			ct[2][0] = root;
			ct[0] = clc;
			ct = ct[2];
		} else if (fr) {
			ct[1][0] = root;
			ct[0] = crc;
			ct = ct[1];
		} else {
			// the tree is already balanced
			return;
		}
	}
}

lheap.prototype.dequeue = function () {
	var retval;
	var last;
	var rchild, lchild;

	last = this.trees.pop();

	if (!last) {
		return;
	} else {
		retval = last[0];
		
		if (last[1]) {
			lchild = last[1];
			rchild = last[2];
		}
	}

	if (rchild) {
		this.trees.push(lchild);
		this.trees.push(rchild);
		rebalance(this.trees, this.trees.length - 2);
		rebalance(this.trees, this.trees.length - 1);
	}

	return retval;
}

var smoothsort = module.exports.smoothsort = function (a, low, high, comp, swap) {
	var heap;
	var pos;
	var i;

	heap = new lheap(a[low]);
	for (i = low + 1; i <= high; i++) {
		console.log(JSON.stringify(heap));
		var story = '';
		heap.trees.forEach(function (tree) {
			story += ' ' + tree.size;
		});

		console.log(story);
		heap.insert(a[i]);
	}

	pos = high;

	console.log(JSON.stringify(heap, null, '\t'));

		var story = '';
		heap.trees.forEach(function (tree) {
			story += ' ' + tree.size;
		});

		console.log(story);
	while (pos >= low) {
		a[pos--] = heap.dequeue();
	}

	return a;
};

// var res = smoothsort([12,32,32,4,1,1,234,1,1,1212121,3,2,5,71,955], 0, 14, numeric_comparator, function (a, i, j) {
// 	var temp;

// 	temp = a[j];
// 	a[j] = a[i];
// 	a[i] = temp;

// });

// console.log(res);