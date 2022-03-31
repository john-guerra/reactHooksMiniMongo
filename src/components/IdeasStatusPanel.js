import React from "react";
import PropTypes from "prop-types";

const IdeasStatusPanel = ({ status, ideas, onDeleteIdea }) => {
  console.log("IdeasStatusPanel.render ", status, ideas);

  return (
    <div className="IdeasStatusPanel">
      <h3>{status}</h3>
      <ul>
        {ideas.map((idea, i) => (
          <li key={"idea" + i}>
            {idea.name} ({idea.createdAt.toLocaleString()}){" "}
            <button
              className="btn btn-outline-danger"
              onClick={() => {
                onDeleteIdea(idea);
              }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

IdeasStatusPanel.propTypes = {
  status: PropTypes.string.isRequired,
  ideas: PropTypes.array.isRequired,
  onDeleteIdea: PropTypes.func.isRequired,
};

export default IdeasStatusPanel;
