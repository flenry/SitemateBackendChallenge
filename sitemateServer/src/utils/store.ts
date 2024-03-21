interface JsonObject {
  [key: string]: any;
}

class Store {
  private static instance: Store;
  private store: JsonObject[];

  private constructor() {
    this.store = [];
  }

  public static getInstance(): Store {
    if (!Store.instance) {
      Store.instance = new Store();
    }
    return Store.instance;
  }

  public addObject(obj: JsonObject): void {
    this.store.push(obj);
  }

  public getObjectById(id: number): JsonObject | undefined {
    return this.store.find((obj) => obj.id === id);
  }

  public updateObjectById(id: number, updatedObj: JsonObject): boolean {
    const index = this.store.findIndex((obj) => obj.id === id);
    if (index !== -1) {
      this.store[index] = { ...this.store[index], ...updatedObj };
      return true;
    }
    return false;
  }

  public deleteObjectById(id: number): boolean {
    const index = this.store.findIndex((obj) => obj.id === id);
    if (index !== -1) {
      this.store.splice(index, 1);
      return true;
    }
    return false;
  }

  public getAllObjects(): JsonObject[] {
    return this.store;
  }
}

export default Store;
