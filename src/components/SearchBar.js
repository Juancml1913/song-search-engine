import { useState } from "react";

const initialForm = {
  search: "",
};

function SearchBar({ getSongsLocal }) {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.search) {
      alert("Datos incompletos.");
      return;
    }

    getSongsLocal(form.search);

    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialForm);
  };

  return (
    <nav
      className="level"
      style={{ padding: "1em", backgroundColor: "#ffc355" }}
    >
      <div className="level-item">
        <span className="icon">
          <i className="fas fa-home"></i>
        </span>
        <p className="title is-3">Song search engine</p>
      </div>
      <div className="level-item">
        <div className="field has-addons">
          <p className="control">
            <input
              className="input"
              type="text"
              name="search"
              placeholder="Find a song"
              onChange={handleChange}
              value={form.search}
            />
          </p>
          <p className="control">
            <button className="button is-dark" onClick={handleSubmit}>
              Search song
            </button>
          </p>
        </div>
      </div>
    </nav>
  );
}

export default SearchBar;
