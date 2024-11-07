class LocalStorage<T> {
  setData(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  getData(key: string) {
    const data = localStorage.getItem(key);
    return { data: data ? JSON.parse(data) : null, error: null };
  }
}

export default new LocalStorage();
