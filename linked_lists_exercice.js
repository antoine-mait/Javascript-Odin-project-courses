class LinkedList{
    append(value){
        // add a new node containing value at the END of the list
    }
    prepend(value){
        // add a new node containing value at the start of the list
    }
    size(){
        // returns total number of nodes in the list
    }
    head(){
        // return first node of the list
    }
    tail(){
        // return last node of the list
    }
    at(index){
        // return the node at the given index
    }
    pop(){
        // remove the last element from the list
    }
    contains(value){
        //  return true if value is in the list , else return false
    }
    find(value){
        //  return index of the node containing the value or null if not found
    }
    toString(){
        //  represent the LinkedList object as a string, so print them and preview in console. 
        // (value) -> (value) -> (value)  -> (value)  -> (value) -> null
    }
    insertAt(value, index){
        //  insert a new node with the value provided at the index provided
        // update nextNode link for the nodes after the one we just indexed
    }
    removeAt(index){
        // remove the node at the given index
        // update nextNode link for the nodes after the one we just indexed
    }
}

class Node{
    // contain 
    //  value property , null by default
    //  nextNode property , null by default
}