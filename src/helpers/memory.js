const ListName = 'Bookmark-List-000';

class Memory {
  static updateList(newList) {
    localStorage.setItem(ListName, JSON.stringify(newList));
  }

  static getList() {
    if (JSON.parse(localStorage.getItem(ListName)) === null) {
      return {};
    }
    return JSON.parse(localStorage.getItem(ListName));
  }

  static clearAllStorage() {
    localStorage.removeItem(ListName);
  }
}

export default Memory;
