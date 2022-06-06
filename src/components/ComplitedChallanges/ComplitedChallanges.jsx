import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyComplitedChallanges } from "../../asyncActions/myIdeas";
import styles from "./complitedChallanges.module.css";

const ComplitedChallanges = () => {
  const dispatch = useDispatch();
  const complitedChallanges = useSelector(
    (state) => state.complitedChallangesReducer.complitedChallanges
  );

  useEffect(() => {
    dispatch(fetchMyComplitedChallanges());
  }, []);

  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Title</th>
            <th>Type</th>
            <th>When</th>
          </tr>
        </thead>
        <tbody>
          {complitedChallanges.map((challange, i) => (
            <tr key={i}>
              <td>{challange.activity}</td>
              <td>{challange.type}</td>
              <td>{challange.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ComplitedChallanges;
