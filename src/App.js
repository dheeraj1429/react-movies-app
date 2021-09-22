import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import AllPage from "./component/AllPage/AllPage";

export const DataContext = React.createContext();

function App() {
  const [Collection, setCollection] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=3`)
      .then((res) => {
        setCollection(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <DataContext.Provider value={Collection}>
        <AllPage />
      </DataContext.Provider>
    </div>
  );
}

export default App;
