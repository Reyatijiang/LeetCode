
var SmallestInfiniteSet = function() {
    this.smallest = 1;
    this.removed = new Set();
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
    const result = this.smallest;
    this.removed.add(result);
    this.smallest += 1
    while(this.removed.has(this.smallest)){
        this.smallest += 1;
    }

    return result;
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
    if(!this.removed.has(num)) return;
    this.removed.delete(num)
    if(num < this.smallest) this.smallest = num;
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
