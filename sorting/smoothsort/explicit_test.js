var lheap = require('./explicit').lheap;

var tests = [
	function test1() {
		var heap = new lheap(6);
		heap.insert(2);
		console.log('afta inserting 2', JSON.stringify(heap.trees));
		heap.insert(0);
		console.log('afta inserting 0', JSON.stringify(heap.trees));
		heap.insert(7);
		console.log('afta inserting 7', JSON.stringify(heap.trees));

		if (heap.trees.length !== 2) throw new Error(JSON.stringify(heap));
		if (heap.trees[0][0] !== 6) throw new Error(JSON.stringify(heap));
		if (heap.trees[0][1][0] !== 2) throw new Error(JSON.stringify(heap));
		if (heap.trees[0][2][0] !== 0) throw new Error(JSON.stringify(heap));
		if (heap.trees[1][0] !== 7) throw new new Error(JSON.stringify(heap));

		heap.insert(5);

		if (heap.trees.length !== 1) throw new Error(JSON.stringify(heap));
		if (heap.trees[0][0] !== 7) throw new Error(JSON.stringify(heap));
		if (heap.trees[0][1][0] !== 6) throw new Error(JSON.stringify(heap));
		if (heap.trees[0][1][1][0] !== 2)  throw new Error(JSON.stringify(heap));
		if (heap.trees[0][1][2][0] !== 0) throw new Error(JSON.stringify(heap));
		if (heap.trees[0][2][0] !== 5) throw new Error(JSON.stringify(heap));

		console.log('Hey, all passed!');
	},
	function test2() {
		// Hijack!
		var heap = new lheap();
		heap.trees = [[41,[28, [27], [18]], [31]]];
		heap.insert(33, 1);

		if (heap.trees.length !== 2) throw new Error(JSON.stringify(heap));
		if (heap.trees[0][0] !== 33) throw new Error(JSON.stringify(heap));
		if (heap.trees[0][1][0] !== 28) throw new Error(JSON.stringify(heap));
		if (heap.trees[0][1][1][0] !== 27) throw new Error(JSON.stringify(heap));
		if (heap.trees[0][1][2][0] !== 18) throw new Error(JSON.stringify(heap));
		if (heap.trees[0][2][0] !== 31) throw new Error(JSON.stringify(heap));
		if (heap.trees[1][0] !== 41) throw new Error(JSON.stringify(heap));

		console.log('Hey, all passed!');
	},
	function test3() {
		var heap = new lheap();
		heap.trees = [
			[
				58,
				[
					41,
					[28,
						[27],
						[18]
					],
					[31]
				],
				[	
					53,
					[45],
					[26]
				]
			],
			[
				97,
				[
					93,
					[59],
					[90]
				],
				[54]
			]
		];

		heap.dequeue();
		if (heap.trees.length !== 3) throw new Error(JSON.stringify(heap));
		if (heap.trees[0][0] !== 58) throw new Error(JSON.stringify(heap));
		if (heap.trees[0][1][0] !== 41) throw new Error(JSON.stringify(heap));
		if (heap.trees[0][1][1][0] !== 28) throw new Error(JSON.stringify(heap));
		if (heap.trees[0][1][1][1][0] !== 27) throw new Error(JSON.stringify(heap));
		if (heap.trees[0][1][1][2][0] !== 18) throw new Error(JSON.stringify(heap));
		if (heap.trees[0][1][2][0] !== 31) throw new Error(JSON.stringify(heap));
		if (heap.trees[0][2][0] !== 53) throw new Error(JSON.stringify(heap));
		if (heap.trees[0][2][1][0] !== 45) throw new Error(JSON.stringify(heap));
		if (heap.trees[0][2][2][0] !== 26) throw new Error(JSON.stringify(heap));
		if (heap.trees[1][0] !== 90) throw new Error(JSON.stringify(heap));
		if (heap.trees[1][1][0] !== 59) throw new Error(JSON.stringify(heap));
		if (heap.trees[1][2][0] !== 54) throw new Error(JSON.stringify(heap));
		if (heap.trees[2][0] !== 93) throw new Error(JSON.stringify(heap));

		console.log('Hey, all passed!');
	},
	function test4() {
		var heap = new lheap();
		heap.trees = [
			[6, [0], [2]],
			[7]
		];

		heap.dequeue();

		if (heap.trees.length !== 1) throw new Error(JSON.stringify(heap));
		if (heap.trees[0][0] !== 6) throw new Error(JSON.stringify(heap));
		if (heap.trees[0][1][0] !== 0) throw new Error(JSON.stringify(heap));
		if (heap.trees[0][2][0] !== 2) throw new Error(JSON.stringify(heap));

		console.log('Hey, all passed!');
	},
	function test5() {
		var heap = new lheap();
		var tree1 = [32, [12], [4]];
		tree1.size = 3;
		var tree2 = [32];
		tree2.size = 1;
		heap.trees = [
			tree1, tree2
		];

		heap.insert(1, 1);

		if (heap.trees.length !== 1) throw new Error(JSON.stringify(heap));
		if (heap.trees[0][0] !== 32) throw new Error(JSON.stringify(heap));
		if (heap.trees[0][1][0] !== 32) throw new Error(JSON.stringify(heap));
		if (heap.trees[0][1][1][0] !== 12) throw new Error(JSON.stringify(heap));
		if (heap.trees[0][1][2][0] !== 4) throw new Error(JSON.stringify(heap));
		if (heap.trees[0][2][0] !== 1) throw new Error(JSON.stringify(heap));

		console.log('Hey, all passed!');
	}
];

tests.forEach(function (test) {
	test();
});