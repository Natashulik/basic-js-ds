const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

constructor() {
  this.rootNode = null;

}


add(data) {
  this.rootNode = addWithin(this.rootNode, data);

  if(!this.rootNode) {
    this.rootNode=new Node(data);
    return this.rootNode;
  }

  function addWithin(node, data) {
    const start = new Node(data);
    if(!node) {
      return new Node(data);
    }

    if (node.data ===data) {
      return node;
    }

    if(data<node.data) {
      node.left = addWithin(node.left, data);
    } else {
      node.right = addWithin(node.right, data);
    }

    return node;
  }
}

has(data) {

  return search(this.rootNode, data);
  
  function search(node, data) { 
    if(!node) {
      return false;
    } 

    if(node.data === data) {
      return true;
    }

      return  data < node.data ?  search (node.left, data) : search (node.right, data);
  }
  
}


find (data) {
 
  return search(this.rootNode, data);
  
  function search(node, data) { 
    if(!node) {
      return null;
    } 

    if(node.data === data) {
      return node;
    }

      return  data < node.data ?  search (node.left, data) : search (node.right, data);
  }
  
}

remove(data) {
  
  this.rootNode = removeNode(this.rootNode, data);

  function removeNode(node, data) {
    if (!node) {
      return null;
    }

    if (data < node.data) {
      node.left = removeNode(node.left, data);
      return node;
    } else if (node.data < data) {
      node.right = removeNode(node.right, data);
      return node;
    } else {
      
      if (!node.left && !node.right) {
        
        return null;
      }

      if (!node.left) {
       
        node = node.right;
        return node;
      }

      if (!node.right) {
        
        node = node.left;
        return node;
      }

      
      let minFromRight = node.right;  
      while (minFromRight.left) {
        minFromRight = minFromRight.left;
      }
      node.data = minFromRight.data;

      node.right = removeNode(node.right, minFromRight.data); 

      return node;
    }
  }
}


min() {
  if (!this.rootNode) {
    return null;   
  }

  let node = this.rootNode;
  while (node.left) { 
    node = node.left;
  }

  return node.data; 
}

max() {
  if (!this.rootNode) {
    return null;     
  }

  let node = this.rootNode;
  while (node.right) {   
    node = node.right;
  }

  return node.data; 
}


root() {
  return this.rootNode;
}

}

module.exports = {
  BinarySearchTree
};