import "./style.css";
import React from "react";
import { useEffect, useState } from "react";

function App() {
  const [jokesList, setJokesList] = useState([]);

  useEffect(() => {
    const headers = new Headers();
    headers.append("Accept", "application/json");
    const request = new Request("https://icanhazdadjoke.com/search", {
      method: "GET",
      cache: "reload",
      headers: headers
    });
    fetch(request)
      .then(res => res.json())
      .then(json => {
        setJokesList(json.results);
      });
  }, []);
  const jokes = jokesList.map(k => {
    return <li>{k.joke}</li>;
  });
  return (
    <div className="App">
      <h1 className="header">Jokes</h1>
      {jokes}
    </div>
  );
}

export default App;
