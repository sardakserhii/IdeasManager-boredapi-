import React, { useEffect, useState } from "react";
import MyIdeaCard from "./MyIdeaCard";
import styles from "./MyIdeaCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getMyIdeaAction } from "../../store/myIdeasListReducer";
import { fetchMyIdeas } from "../../asyncActions/myIdeas";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const MyIdeaList = () => {
  const dispatch = useDispatch();
  const myIdeas = useSelector((state) => state.myIdeasListReducer.myIdeas);

  useEffect(() => {
    dispatch(fetchMyIdeas());
  }, []);

  // return (
  //   <Stack
  //     direction="horizontal"
  //     gap={4}
  //     className={"align-items-stretch flex-wrap justify-content-center"}
  //   >
  //     {myIdeas.map((idea, i) => {
  //       return <MyIdeaCard idea={idea} key={idea.key + Date.now() + i} />;
  //     })}
  //   </Stack>
  // );

  return (
    <Carousel infiniteLoop={true} showArrows={true}>
      {myIdeas.map((idea, i) => {
        return <MyIdeaCard idea={idea} key={idea.key + Date.now() + i} />;
      })}
    </Carousel>
  );
};

export default MyIdeaList;
