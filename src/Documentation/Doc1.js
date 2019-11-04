import React from "react";
import { Alert, Heading } from "react-bootstrap";

const Doc1 = props => {
  return (
    <Alert variant="info">
      <Alert.Heading>Why did you do what you did?</Alert.Heading>
      <p>
        For the layout, I used react-bootstrap because it is responsive and it
        is an effective way to make a prototype fast. For Datadog status page, I
        used iframe and #past-incidents for showing the list of the latest
        incidents.For Azure status page I planned to use contentWindow.scrollTo
        just React way. And location.reload for refreshing the content. I would
        change my components to class based. So I can use state and set src for
        my iframe with setInterval. I would call setInterval in
        componentDidUpdate I suggest. I would also make it more dynamic with
        less repeating in the code. And of course: testing with Jest and Enzyme.
      </p>
      <hr />
      <p className="mb-0">
        Another option without API will be a Python backend which we can use
        with React, and some library like Pandas for getting and showing on the
        page an exact data.
      </p>
    </Alert>
  );
};

export default Doc1;
