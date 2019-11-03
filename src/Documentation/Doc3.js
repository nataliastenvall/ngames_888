import React from "react";
import { Alert, Heading } from "react-bootstrap";

const Doc1 = props => {
  return (
    <Alert variant="info">
      <Alert.Heading>How much time did you spend with this task?</Alert.Heading>
      <p>
        I spend about 3 hours on this application. And about 5 hours for
        research and making testing apps with different approaches in data
        scraping and data framing. I was not succeeded in those new ways what I
        found. I am happy, at least I tried and did not stuck on my first
        solution.
      </p>
      <hr />
      <p className="mb-0"></p>
    </Alert>
  );
};

export default Doc1;
