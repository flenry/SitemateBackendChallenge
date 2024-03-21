import { useState } from "react";

import "./App.css";

function App() {
  const [method, setMethod] = useState("add");
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [response, setResponse] = useState(null);

  const handleSubmit = async () => {
    let url = "http://localhost:3000";
    let options = {};

    const json = JSON.stringify({ title, description });

    switch (method) {
      case "add":
        options = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: json,
        };
        break;
      case "view":
        url += `/${id}`;
        options = { method: "GET" };
        break;
      case "update":
        url += `/${id}`;
        options = {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: json,
        };
        break;
      case "delete":
        url += `/${id}`;
        options = { method: "DELETE" };
        break;
      default:
        break;
    }

    const response = await fetch(url, options);
    const data = await response.json();

    setResponse(data);
  };

  return (
    <>
      <div>JSON Objects</div>
      <select onChange={(e) => setMethod(e.target.value)}>
        <option value="add">Add</option>
        <option value="view">View</option>
        <option value="update">Update</option>
        <option value="delete">Delete</option>
      </select>
      <input
        type="text"
        placeholder="ID"
        onChange={(e) => setId(e.target.value)}
      />
      {(method === "add" || method === "update") && (
        <>
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </>
      )}
      <button onClick={handleSubmit}>Submit</button>
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
    </>
  );
}

export default App;
