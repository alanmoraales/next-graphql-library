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
    console.log("setUserToken", token);
    localStorage?.setItem("userToken", token);
  });

  // A function that removes userToken from localStorage
  const removeUserToken = withLocalStorageAvailable(() => {
    console.log("removeUserToken");
    localStorage?.removeItem("userToken");
    console.log("removeddddUserToken");
  });

  return {
    getUserToken,
    setUserToken,
    removeUserToken,
  };
};

const storage = StorageService();

export default storage;
