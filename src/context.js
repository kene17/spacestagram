import React, { createContext, useState } from "react";
export const MyContext = createContext();
const AppContext = ({ children }) => {
  const [fetchedData, setFetchData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [likedData, setLikedData] = useState([]);
  const [like, setLike] = useState(false);

  return (
    <MyContext.Provider
      value={{
        fetchedData,
        setFetchData,
        setLoading,
        setError,
        likedData,
        setLikedData,
        like,
        setLike,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default AppContext;
