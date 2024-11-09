class LocalStorageService<T> {
  setData(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  getData(key: string) {
    const data = localStorage.getItem(key);
    return { data: data ? JSON.parse(data) : null, error: null };
  }
  removeData(key: string) {
    localStorage.removeItem(key);
  }
}

export default new LocalStorageService();
