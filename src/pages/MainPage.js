import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import IdeasPanel from "../components/IdeasPanel.js";
import CreateIdeaForm from "../components/CreateIdeaForm.js";

const MainPage = ({ imm }) => {
  const [ideas, setIdeas] = useState([]);

  async function reloadIdeas() {
    let dbIdeas = await imm.getIdeas();

    setIdeas([...dbIdeas]);
  }
  useEffect(() => {
    reloadIdeas();

    return () => {
      console.log("The component was destroyed");
    };
  }, []);

  async function onCreateIdea(newIdea) {
    console.log("On Create Idea");
    await imm.createIdea(newIdea);
    await reloadIdeas();
  }

  async function onDeleteIdea(ideaToDelete) {
    console.log("On Delete Idea");
    await imm.removeIdea(ideaToDelete);
    await reloadIdeas();
  }

  return (
    <div className="MainPage">
      <CreateIdeaForm
        ideas={ideas}
        onCreateIdea={onCreateIdea}
      ></CreateIdeaForm>
      <IdeasPanel ideas={ideas} onDeleteIdea = {onDeleteIdea}></IdeasPanel>
    </div>
  );
};

MainPage.propTypes = {
  imm: PropTypes.object.isRequired,
};

export default MainPage;
