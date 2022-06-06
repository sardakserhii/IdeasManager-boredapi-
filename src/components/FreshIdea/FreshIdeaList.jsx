import FreshIdea from "./FreshIdea";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFreshIdea } from "../../asyncActions/freshIdeas";
import { Stack } from "react-bootstrap";

const FreshIdeaList = () => {
  const dispatch = useDispatch();
  const freshIdeas = useSelector((state) => state.freshIdeaListReducer.freshIdeaList);

  useEffect(() => {
    dispatch(fetchFreshIdea());
    dispatch(fetchFreshIdea());
    dispatch(fetchFreshIdea());
    dispatch(fetchFreshIdea());
  }, []);

  return (
    <Stack direction="horizontal" gap={4} className={"justify-content-between align-items-stretch"}>
      {freshIdeas.map((idea) => (
        <FreshIdea idea={idea} key={idea.key + Date.now()} />
      ))}
    </Stack>
  );
};

export default FreshIdeaList;
