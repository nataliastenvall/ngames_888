import React from "react";
import { Alert, Heading } from "react-bootstrap";

const Doc1 = props => {
  return (
    <Alert variant="success">
      <Alert.Heading>
        When someone wants to add a new status page, how would that be done?
      </Alert.Heading>
      <p>
        If it will be the same way with iframe: 1)create new component like
        Datadog.js 2)add more rows and columns to our layout 3)call new
        components in App.js.
      </p>
      <hr />
      <p className="mb-0">
        In case with python library it will be more dynamic, but we still need
        to expand our layout.
      </p>
    </Alert>
  );
};

export default Doc1;
