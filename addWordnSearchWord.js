/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
    this.wordSet = new Set();
    this.wordLenghtMapWithWord = new Map(); 
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    if(!this.wordSet.has(word)){
        this.wordSet.add(word);
    }
    const wordForMap = this.wordLenghtMapWithWord.get(word.length) || new Set();
    if(!wordForMap.has(word)){
        wordForMap.add(word);
        this.wordLenghtMapWithWord.set(word.length, wordForMap);
    }
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    if(typeof word !== 'string' ) return false;
    if(word.includes('.')){
        let set = this.wordLenghtMapWithWord.get(word.length);
        if(!set) return false;
        const wordRegExp = new RegExp(word);
        for(let i of set){
            if(wordRegExp.test(i)){
                return true
            }
        }
        return false;
    }
    else{
        return this.wordSet.has(word);
    }
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
