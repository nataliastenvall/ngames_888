import React from "react";

const Datadog = props => {
  return (
    <div class="iframe_dog">
      <iframe
        title="datadog"
        src="https://status.datadoghq.com/#past-incidents"
        className="updates-container"
        width="100%"
        height="600"
        scrolling="no"
      >
        Needs iframe!
      </iframe>
    </div>
  );
};

export default Datadog;
