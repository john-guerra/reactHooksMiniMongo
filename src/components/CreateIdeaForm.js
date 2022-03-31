import React, { useState } from "react";
import PropTypes from "prop-types";

const CreateIdeaForm = ({ ideas, onCreateIdea }) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("Baby");

  function onCreateIdeaHandler(evt) {
    evt.preventDefault();

    const newIdea = { name: name, createdAt: new Date(), status };
    onCreateIdea(newIdea);

    setName("");
  }

  return (
    <section className="CreateIdeaForm">
      <h2>Create idea</h2>

      <form onSubmit={onCreateIdeaHandler}>
        <div>
          <label className="form-label">
            Name:{" "}
            <input
              className="form-control"
              type="text"
              name="name"
              value={name}
              onChange={(evt) => {
                setName(evt.target.value);
              }}
            />
          </label>
        </div>

        <div>
          <label className="form-label">
            Status:{" "}
            <select
              name="status"
              value={status}
              className="form-select"
              onChange={(evt) => {
                setStatus(evt.target.value);
              }}
            >
              <option value="Baby">Baby</option>
              <option value="Teenager">Teenager</option>
              <option value="Ready">Ready</option>
            </select>
          </label>
        </div>

        <div>
          <button className="btn btn-primary" type="submit">
            Create
          </button>
        </div>
      </form>
    </section>
  );
};

CreateIdeaForm.propTypes = {
  ideas: PropTypes.array.isRequired,
  onCreateIdea: PropTypes.func.isRequired,
};

export default CreateIdeaForm;
