const ListName = 'Bookmark-List-000'

class Memory {
  updateList(newList) {
    localStorage.setItem(ListName, JSON.stringify(newList));
  }

  getList() {
    if (JSON.parse(localStorage.getItem(ListName)) === null) {
      return {};
    }
    return JSON.parse(localStorage.getItem(ListName));
  }

  clearAllStorage() {
    localStorage.removeItem(ListName);
  }
}

export default Memory;