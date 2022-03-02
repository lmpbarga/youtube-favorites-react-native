import { makeAutoObservable } from "mobx";

export interface SearchStore {
  search: {
    query: string;
  };
}

class Search {
  query = "";

  constructor() {
    makeAutoObservable(this);
  }

  setQuery(query: string) {
    this.query = query;
  }

  reset() {
    this.query = "0";
  }
}

export const searchStore = new Search();
