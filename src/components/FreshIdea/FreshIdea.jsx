import React from "react";
import { fetchFreshIdea } from "../../asyncActions/freshIdeas";
import { useDispatch } from "react-redux";
import { removeFreshIdeaAction } from "../../store/freshIdeaListReducer";
import { fetchMyIdeas, fetchPostFreshIdea } from "../../asyncActions/myIdeas";
import { Card } from "react-bootstrap";

const FreshIdea = (props) => {
  const dispatch = useDispatch();

  function deleteIdea() {
    dispatch(removeFreshIdeaAction(props.idea));
    dispatch(fetchPostFreshIdea({ ...props.idea }));
    dispatch(fetchMyIdeas()); // ALT : dispatch(addMyIdeaAction(props.idea));
    dispatch(fetchFreshIdea());
  }

  if (props.idea) {
    return (
      <Card id={props.idea.key} onClick={deleteIdea} style={{ width: "16rem" }}>
        <Card.Body className="d-flex flex-column">
          <Card.Text>{props.idea.activity}</Card.Text>
          <Card.Title>{props.idea.type}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
};

export default FreshIdea;
