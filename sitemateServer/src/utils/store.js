"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Store {
    constructor() {
        this.store = [];
    }
    static getInstance() {
        if (!Store.instance) {
            Store.instance = new Store();
        }
        return Store.instance;
    }
    addObject(obj) {
        this.store.push(obj);
    }
    getObjectById(id) {
        return this.store.find((obj) => obj.id === id);
    }
    updateObjectById(id, updatedObj) {
        const index = this.store.findIndex((obj) => obj.id === id);
        if (index !== -1) {
            this.store[index] = Object.assign(Object.assign({}, this.store[index]), updatedObj);
            return true;
        }
        return false;
    }
    deleteObjectById(id) {
        const index = this.store.findIndex((obj) => obj.id === id);
        if (index !== -1) {
            this.store.splice(index, 1);
            return true;
        }
        return false;
    }
    getAllObjects() {
        return this.store;
    }
}
exports.default = Store;
