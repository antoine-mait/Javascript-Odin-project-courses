class Node {
    constructor(value) {
        this.attribut = value,
            this.leftChildren = null,
            this.rightChildren = null
    }
}

class Tree {
    constructor(array) {
        const cleanArray = [...new Set(array)].sort((a, b) => a - b);
        this.root = this.buildTree(cleanArray)
    }

    buildTree(array) {
        if (array.length === 0) {
            return null
        }
        const mid = Math.floor(array.length / 2);
        const value = array[mid];

        let tree = new Node(value)
        tree.leftChildren = this.buildTree(array.slice(0, mid));
        tree.rightChildren = this.buildTree(array.slice(mid + 1));

        return tree;
    }

    insert(value) {
        let current = this.root
        while (true) {
            if (value < current.attribut) {
                if (current.leftChildren === null) {
                    current.leftChildren = new Node(value)
                    return
                } else {
                    current = current.leftChildren;
                }
            } else if (value > current.attribut) {
                if (current.rightChildren === null) {
                    current.rightChildren = new Node(value)
                    return
                } else {
                    current = current.rightChildren;
                }
            } else {
                return
            }
        }
    }

    delete(value, current = this.root) {
        if (!current) {
            return null;
        }
        if (value < current.attribut) {
            current.leftChildren = this.delete(value, current.leftChildren);
        } else if (value > current.attribut) {
            current.rightChildren = this.delete(value, current.rightChildren);
        } else {
            if (!current.leftChildren && !current.rightChildren) {
                return null;
            } else if (!current.leftChildren) {
                return current.rightChildren
            } else if (!current.rightChildren) {
                return current.leftChildren
            } else {
                let successor = this.findMin(current.rightChildren);
                current.attribut = successor.attribut;
                current.rightChildren = this.delete(successor.attribut, current.rightChildren)
            }
        }
        return current
    }

    findMin(current) {
        while (current.leftChildren) {
            current = current.leftChildren
        }
        return current;
    }

    find(value, current = this.root) {
        if (!current) {
            return null;
        }
        if (value === current.attribut) {
            return current;
        }
        if (value < current.attribut) {
            return this.find(value, current.leftChildren);
        }
        return this.find(value, current.rightChildren);
    }

    levelOrderForEach(callback, queue = [this.root]) {
        if (typeof callback !== "function") {
            throw new Error("A callback function is required");
        }

        if (queue.length === 0) return;

        const node = queue.shift();
        callback(node);

        if (node.leftChildren) queue.push(node.leftChildren);
        if (node.rightChildren) queue.push(node.rightChildren);

        this.levelOrderForEach(callback, queue);
    }

    inOrderForEach(callback, current = this.root) {
        if (typeof callback !== "function") {
            throw new Error("A callback function is required");
        }
        if (current === null) return;
        this.inOrderForEach(callback, current.leftChildren);
        callback(current);
        this.inOrderForEach(callback, current.rightChildren);
    }

    preOrderForEach(callback, current = this.root) {
        if (typeof callback !== "function") {
            throw new Error("A callback function is required");
        }
        if (current === null) return;
        callback(current);
        this.preOrderForEach(callback, current.leftChildren);
        this.preOrderForEach(callback, current.rightChildren);
    }

    postOrderForEach(callback, current = this.root) {
        if (typeof callback !== "function") {
            throw new Error("A callback function is required");
        }
        if (current === null) return;
        this.preOrderForEach(callback, current.leftChildren);
        this.preOrderForEach(callback, current.rightChildren);
        callback(current);
    }
    height(value, node = this.find(value)) {
        const node = this.find(value);
        if (node === null) return null;

        let leftHeight = -1;
        if (node.leftChildren) {
            leftHeight = this.height(undefined, node.leftChildren);
        }

        let rightHeight = -1;
        if (node.rightChildren) {
            rightHeight = this.height(undefined, node.rightChildren);
        }

        return Math.max(leftHeight, rightHeight) + 1;

    }
    isBalanced(node = this.root) {
        if (node === null) {
            return true;
        }

        let leftHeight = -1;
        if (node.leftChildren) {
            leftHeight = this.height(undefined, node.leftChildren);
        }

        let rightHeight = -1;
        if (node.rightChildren) {
            rightHeight = this.height(undefined, node.rightChildren);
        }

        if (Math.abs(leftHeight - rightHeight) > 1) {
            return false;
        }

        return this.isBalanced(node.leftChildren) && this.isBalanced(node.rightChildren);
    }
    rebalance() {
        const values = [];

        this.inOrderForEach((node) => {
            values.push(node.attribut);
        });

        this.root = this.buildTree(values);
    }
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node === null) {
        return;
    }
    if (node.rightChildren !== null) {
        prettyPrint(node.rightChildren, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.attribut}`);
    if (node.leftChildren !== null) {
        prettyPrint(node.leftChildren, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
};

function generateRandomArray(size, max) {
    const array = [];
    for (let i = 0; i < size; i++) {
        array.push(Math.floor(Math.random() * max));
    }
    return array;
}

// 1. Create a binary search tree from an array of random numbers < 100
console.log('=== Creating Binary Search Tree ===');
const randomArray = generateRandomArray(15, 100);
console.log('Random array:', randomArray);
const tree = new Tree(randomArray);
prettyPrint(tree.root);

// 2. Confirm that the tree is balanced
console.log('\n=== Checking if tree is balanced ===');
console.log('Is balanced:', tree.isBalanced());

// 3. Print out all elements in level, pre, post, and in order
console.log('\n=== Tree Traversals ===');

console.log('Level order:');
tree.levelOrderForEach((node) => {
    console.log(node.attribut);
});

console.log('\nPre order:');
tree.preOrderForEach((node) => {
    console.log(node.attribut);
});

console.log('\nPost order:');
tree.postOrderForEach((node) => {
    console.log(node.attribut);
});

console.log('\nIn order:');
tree.inOrderForEach((node) => {
    console.log(node.attribut);
});

// 4. Unbalance the tree by adding several numbers > 100
console.log('\n=== Unbalancing the tree ===');
tree.insert(150);
tree.insert(200);
tree.insert(250);
tree.insert(300);
tree.insert(350);
console.log('Added numbers: 150, 200, 250, 300, 350');
prettyPrint(tree.root);

// 5. Confirm that the tree is unbalanced
console.log('\n=== Checking if tree is unbalanced ===');
console.log('Is balanced:', tree.isBalanced());

// 6. Balance the tree by calling rebalance
console.log('\n=== Rebalancing the tree ===');
tree.rebalance();
prettyPrint(tree.root);

// 7. Confirm that the tree is balanced
console.log('\n=== Checking if tree is balanced after rebalance ===');
console.log('Is balanced:', tree.isBalanced());

// 8. Print out all elements in level, pre, post, and in order
console.log('\n=== Tree Traversals After Rebalance ===');

console.log('Level order:');
tree.levelOrderForEach((node) => {
    console.log(node.attribut);
});

console.log('\nPre order:');
tree.preOrderForEach((node) => {
    console.log(node.attribut);
});

console.log('\nPost order:');
tree.postOrderForEach((node) => {
    console.log(node.attribut);
});

console.log('\nIn order:');
tree.inOrderForEach((node) => {
    console.log(node.attribut);
});