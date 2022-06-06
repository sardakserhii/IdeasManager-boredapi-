import React, { useState } from "react";
import styles from "./MyIdeaCard.module.css";
import { useDispatch } from "react-redux";
import { removeMyIdeaAction } from "../../store/myIdeasListReducer";
import { getAchivments, postComplitedIdea } from "../../asyncActions/myIdeas";
import { Card, Carousel } from "react-bootstrap";

const MyIdeaCard = ({ idea }) => {
  const dispatch = useDispatch();
  function complitIdea() {
    let newIdea = { ...idea };
    newIdea.isComplited = true;
    dispatch(postComplitedIdea(newIdea));
    dispatch(removeMyIdeaAction(idea));
    dispatch(getAchivments());
  }

  if (idea) {
    return (
      <Card
        id={idea.key}
        onClick={complitIdea}
        style={{ backgroundColor: "rgba(0, 0, 0, 0.3)", color: "black", height: 300 }}
      >
        <Card.Body className="d-flex flex-column justify-content-evenly">
          <Card.Text>{idea.activity}</Card.Text>
          <Card.Title style={{ fontSize: "4rem" }}>{idea.type}</Card.Title>
        </Card.Body>
      </Card>
    );

    // return <div>{idea.activity}</div>;
  }
};

export default MyIdeaCard;
