const StorageService = () => {
  // A function that reads userToken from localStorage
  const getUserToken = () => {
    return localStorage?.getItem("userToken") || "";
  };

  // A function that writes userToken to localStorage
  const setUserToken = (token: string) => {
    localStorage?.setItem("userToken", token);
  };

  return {
    getUserToken,
    setUserToken,
  };
};

const storage = StorageService();

export default storage;
