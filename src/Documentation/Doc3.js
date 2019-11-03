import React from "react";
import { Alert, Heading } from "react-bootstrap";

const Doc1 = props => {
  return (
    <Alert variant="info">
      <Alert.Heading>How much time did you spend with this task?</Alert.Heading>
      <p>
        I spend about 3 hours on this application. And about 4 hours for
        research about different approaches in data scraping and data framing. I
        was not succeeded in those new ways what I found, but at least I tried
        to improve my skills.
      </p>
      <hr />
      <p className="mb-0"></p>
    </Alert>
  );
};

export default Doc1;
