import React from "react";

const Azure = props => {
  return (
    <div id="iframe_azure">
      <iframe
        title="azure"
        src="https://status.azure.com/ru-ru/status"
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

export default Azure;
