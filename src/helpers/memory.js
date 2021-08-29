const LIST_NAME = 'Bookmark-List-000';

class Memory {
  static updateList(newList) {
    localStorage.setItem(LIST_NAME, JSON.stringify(newList));
  }

  static getList() {
    const bookmarkList = JSON.parse(localStorage.getItem(LIST_NAME));
    if (bookmarkList === null) {
      return [];
    }
    return bookmarkList;
  }

  static clearAllStorage() {
    localStorage.removeItem(LIST_NAME);
  }
}

export default Memory;
