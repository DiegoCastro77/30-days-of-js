class ContactList {
    constructor(size) {
        this.hashTable = new Array(size).fill(null).map(() => []);
    }

    insert(name, phone) {
        const index = this._hash(name);
        const bucket = this.hashTable[index];
        for (const contact of bucket) {
            if (contact[0] === name) {
                contact[1] = phone;
                return;
            }
        }
        bucket.push([name, phone]);
    }

    get(name) {
        const index = this._hash(name);
        const bucket = this.hashTable[index];
        for (const contact of bucket) {
            if (contact[0] === name) {
                return contact[1];
            }
        }
        return null;
    }

    retrieveAll() {
        return this.hashTable.filter(bucket => bucket.length > 0);
    }

    delete(name) {
        const index = this._hash(name);
        const bucket = this.hashTable[index];
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === name) {
                bucket.splice(i, 1);
                return;
            }
        }
        return null;
    }


    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * (i + 1)) % this.hashTable.length;
        }
        return hash;
    }
}

const contactList = new ContactList(10);
contactList.insert("Mr michi", "123-456-7890");
console.log(contactList.retrieveAll());

console.log(contactList.get("Mr Michi"));

// contactList.delete("Mr michi");
console.log(contactList.get("Mr Michi"));
