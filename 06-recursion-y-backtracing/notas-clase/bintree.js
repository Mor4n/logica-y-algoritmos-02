
// arbol binario seria en js algo como un objeto literal

// Balanced binary tree
let tree = {
    root: {
        data: 1,
        left: {
            data: 2,
            left: {
                data: 4,
                left: null,
                right: null
            },
    },         right: {
            data: 3,
            left: null,
            right: null
        }
     }

}

function binarysearch(tree, value) {
    if (tree === null) {
        return false;
    }
    if (tree.data === value) {
        return true;
    }
    if (value < tree.data) {
        return binarysearch(tree.left, value);
    } else {
        return binarysearch(tree.right, value);
    }
    
}

let result = binarysearch(tree.root, 3);
console.log(result);