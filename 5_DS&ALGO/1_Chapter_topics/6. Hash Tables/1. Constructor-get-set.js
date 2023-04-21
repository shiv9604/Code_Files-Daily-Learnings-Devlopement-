// HashTable constructor only creates an dataMap array with provided length.
class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }

  // _ in Hash function determines it should called only with another method and it will return the hash of passed key with the help of equation.
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < hash.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) & this.dataMap.length;
    }
    return hash;
  }

  set(key, value) {
    let index = this._hash(key);
    if(!this.dataMap[index]){
      this.dataMap[index] = [];
    }
    this.dataMap[index].push([key,value]);
    return this;
  }

  get(key) {
    let index = this._hash(key);
    if(this.dataMap[index]){
      for(let i = 0; i<this.dataMap[index].length; i++){
        if(this.dataMap[index][i][0]===key){
          return this.dataMap[index][i][1]
        }
      }
    }
    return undefined;
  }

  keys(){
    let allKeys = [];
    for(let i = 0; i < this.dataMap.length; i++){
      if(this.dataMap[i]){
        for(let j = 0; i<this.dataMap[i].length;j++){
          allKeys.push(this.dataMap[i][j][0])
        }
      }
      
    }
    return allKeys;
  }
}
const myHashTable = new HashTable();

myHashTable.set('washers',200)
myHashTable.set('bolts',100)
myHashTable.set('lumber',500)

console.log(myHashTable);

console.log(myHashTable.get('washers'))
console.log("Keys :",myHashTable.keys());
