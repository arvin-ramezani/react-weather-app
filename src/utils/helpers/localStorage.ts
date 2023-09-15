export const saveToLocalStorage = (dataName: string, cityName: string) => {
  return localStorage.setItem(dataName, cityName);
};

export const getFromLocalStorage = (dataName: string) => {
  const data = localStorage.getItem(dataName);

  if (data) {
    return data;
  }
};
