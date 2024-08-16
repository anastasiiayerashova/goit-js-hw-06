class Storage {
    #items;
    constructor(items = []) {
        this.#items = items;
    }
    getItems() {
        return this.#items;
    }
    addItem(newItem) {
        return this.#items.push(newItem);
    }
    removeItem(itemToRemove) {
       this.#items = this.#items.filter(item => item !== itemToRemove);
    }
    // removeItem(itemToRemove) {
    //     this.#items.forEach((item, index) => {
    //         if (item === itemToRemove) {
    //             return this.#items.splice(index, 1);
    //         }
    //     })
    // }
    // removeItem(itemToRemove) {
    //     this.#items = this.#items.reduce((acc, item) => {
    //         if (item !== itemToRemove) {
    //             acc.push(item);
    //         }
    //         return acc;
    //     }, [])
    // }
    // removeItem(itemToRemove) {
    //     const indexOfItem = this.#items.indexOf(itemToRemove);
    //     if (indexOfItem !== -1) {
    //         this.#items.splice(indexOfItem, 1);
    //     }
    // }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
