import React from "react";
import PropTypes from "prop-types";

import IdeasStatusPanel from "./IdeasStatusPanel.js";

const IdeasPanel = ({ ideas, onDeleteIdea }) => {
  return (
    <div className="IdeasPanel">
      <div className="row">
        <div className="col-4">
          <IdeasStatusPanel
            status="Baby"
            ideas={ideas.filter((d) => d.status === "Baby")}
            onDeleteIdea = {onDeleteIdea}
          ></IdeasStatusPanel>
        </div>
        <div className="col-4">
          <IdeasStatusPanel
            status="Teenager"
            ideas={ideas.filter((d) => d.status === "Teenager")}
            onDeleteIdea = {onDeleteIdea}
          ></IdeasStatusPanel>
        </div>
        <div className="col-4">
          <IdeasStatusPanel
            status="Ready"
            ideas={ideas.filter((d) => d.status === "Ready")}
            onDeleteIdea = {onDeleteIdea}
          ></IdeasStatusPanel>
        </div>
      </div>
    </div>
  );
};

IdeasPanel.propTypes = {
  ideas: PropTypes.array.isRequired,
  onDeleteIdea : PropTypes.func.isRequired
};

export default IdeasPanel;
