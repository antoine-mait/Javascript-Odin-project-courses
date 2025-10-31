class Node{
    constructor(value) {
        this.attribut = value,
        this.leftChildren = null,
        this.rightChildren = null
    }
}

class Tree{
    constructor( array ) {
        const cleanArray = [...new Set(array)].sort((a, b) => a - b);
        this.root = this.buildTree(cleanArray)
    }

    buildTree(array){
        if (array.length === 0 ){
            return null
        }
        const mid = Math.floor(array.length / 2);
        const value = array[mid];

        let tree = new Node(value)
        tree.leftChildren = this.buildTree(array.slice(0 , mid));
        tree.rightChildren = this.buildTree(array.slice(mid + 1));

        return tree;
    }

    insert(value){
        let current = this.root
        while (true){
            if ( value < current.attribut){
                if (current.leftChildren === null){
                    current.leftChildren = new Node(value)
                    return
                }else{
                    current = current.leftChildren;
                }
            }else if ( value > current.attribut){
                if (current.rightChildren === null){
                    current.rightChildren = new Node(value)
                    return
                }else{
                    current = current.rightChildren;
                }
            }else {
                return
            }
        }
    }

    delete(value, current = this.root){
        if(!current){
            return null;
        }
        if(value < current.attribut){
             current.leftChildren = this.delete(value, current.leftChildren);
        }else if(value > current.attribut){
             current.rightChildren = this.delete(value, current.rightChildren);
        }else{
            if(!current.leftChildren && !current.rightChildren){
                return null;
            }else if(!current.leftChildren){
                return current.rightChildren
            }else if(!current.rightChildren){
                return current.leftChildren
            }else{
                let successor = this.findMin(current.rightChildren);
                current.attribut = successor.attribut;
                current.rightChildren = this.delete(successor.attribut, current.rightChildren)
            }
        }
        return current
    }

    findMin(current){
        while (current.leftChildren){
            current = current.leftChildren
        }
        return current;
    }

    find(value, current = this.root){
        if(!current){
            return null;
        }
        // return the node with the value
    }
}


const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.rightChildren  !== null) {
    prettyPrint(node.rightChildren , `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.attribut}`);
  if (node.leftChildren  !== null) {
    prettyPrint(node.leftChildren , `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};

const test = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
prettyPrint(test.root);