/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    //sort the products lexicographically
    products.sort();
    //build trie
    let root = {};
    for(let p of products){
        let node = root;
        for(let c of p){
            if(!node[c]){
                node[c] = {sugguestions:[]}
            }
            if(node[c].sugguestions.length < 3){
                node[c].sugguestions.push(p);
            }
            node = node[c];
        }
    }
    //search for word and build sugguestions.
    let result = [];
    let node = root;
    for(let c of searchWord){
        if(node && node[c] ){
            result.push(node[c].sugguestions);
            node = node[c];
        }
        else{
            //if no prefix found, push in empty array
            while (result.length < searchWord.length) {
                result.push([]);
            }
            break;
        }
        
    }
    return result;
};
