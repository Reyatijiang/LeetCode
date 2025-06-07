
var Trie = function() {
    this.root = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root;
    for(let c of word){
        if(!node[c]){
            node[c] = {}
        }
        node = node[c];
    }
    node.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.traverse = function(word) {
    let node = this.root;
    for(let c of word){
        node = node[c];
        if(!node){
            return null
        }
    }
    return node;
};

Trie.prototype.search = function(word) {
    let node = this.traverse(word);
    if(node && node.isEnd){
        return true;
    }
    else{
        return false;
    }
    
}
/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.traverse(prefix);
    if(node){
        return true;
    }
    else{
        return false;
    }
    
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
