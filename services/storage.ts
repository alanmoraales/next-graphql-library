const StorageService = () => {
  // A higher order function that validates if localStorage is available
  const withLocalStorageAvailable = (fn: Function) => {
    if (typeof localStorage === "undefined") {
      return () => {};
    }
    return fn;
  };

  // A function that reads userToken from localStorage
  const getUserToken = withLocalStorageAvailable(() => {
    return localStorage?.getItem("userToken") || "";
  });

  // A function that writes userToken to localStorage
  const setUserToken = withLocalStorageAvailable((token: string) => {
    localStorage?.setItem("userToken", token);
  });

  // A function that removes userToken from localStorage
  const removeUserToken = withLocalStorageAvailable(() => {
    localStorage?.removeItem("userToken");
  });

  return {
    getUserToken,
    setUserToken,
    removeUserToken,
  };
};

const storage = StorageService();

export default storage;
