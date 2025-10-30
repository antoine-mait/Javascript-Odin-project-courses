
class HashMap {
  constructor(loadFactor = 0.75) {
    this.loadFactor = loadFactor;
    this.capacity = 16;
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
    this.size = 0;
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }
    
    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    
    // Check if key already exists (update case)
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        return;
      }
    }
    
    // Key doesn't exist, add new entry
    bucket.push([key, value]);
    this.size++;
    
    // Check if we need to grow
    if (this.size / this.capacity > this.loadFactor) {
      this.grow();
    }
  }

  grow() {
    const oldBuckets = this.buckets;
    this.capacity *= 2;
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
    this.size = 0;
    
    // Rehash all entries
    for (const bucket of oldBuckets) {
      for (const [key, value] of bucket) {
        this.set(key, value);
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    
    for (const [k, v] of bucket) {
      if (k === key) {
        return v;
      }
    }
    
    return null;
  }

  has(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    
    for (const [k] of bucket) {
      if (k === key) {
        return true;
      }
    }
    
    return false;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        this.size--;
        return true;
      }
    }
    
    return false;
  }

  length() {
    return this.size;
  }

  clear() {
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
    this.size = 0;
  }

  keys() {
    const keysArray = [];
    
    for (const bucket of this.buckets) {
      for (const [key] of bucket) {
        keysArray.push(key);
      }
    }
    
    return keysArray;
  }

  values() {
    const valuesArray = [];
    
    for (const bucket of this.buckets) {
      for (const [, value] of bucket) {
        valuesArray.push(value);
      }
    }
    
    return valuesArray;
  }

  entries() {
    const entriesArray = [];
    
    for (const bucket of this.buckets) {
      for (const entry of bucket) {
        entriesArray.push(entry);
      }
    }
    
    return entriesArray;
  }
}

// Test the HashMap
const test = new HashMap();