const StorageService = () => {
  // A function that reads userToken from localStorage
  const getUserToken = () => {
    return localStorage?.getItem("userToken") || "";
  };

  // A function that writes userToken to localStorage
  const setUserToken = (token: string) => {
    localStorage?.setItem("userToken", token);
  };

  // A function that removes userToken from localStorage
  const removeUserToken = () => {
    localStorage?.removeItem("userToken");
  };

  return {
    getUserToken,
    setUserToken,
    removeUserToken,
  };
};

const storage = StorageService();

export default storage;
