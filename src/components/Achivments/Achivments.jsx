import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAchivments } from "../../asyncActions/myIdeas";
import styles from "./Achivments.module.css";

const Achivments = () => {
  const dispatch = useDispatch();
  const achivments = useSelector((state) => state.achivmentsReducer.achivmentsList);

  useEffect(() => {
    dispatch(getAchivments());
  }, []);

  return (
    <div className={styles.achivmentsContainer}>
      {Object.keys(achivments).map((type, i) => (
        <div className={styles.card} key={i}>{`${type} :  ${achivments[type]} `}</div>
      ))}
    </div>
  );
};

export default Achivments;
