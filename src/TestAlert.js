import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Alert from 'terra-alert/lib/Alert';
import $ from 'jquery';


class TestAlert extends React.Component {
  render() {
    return (
      <div className="TestAlert_Alert">
        <Alert type="warning">This is a warning</Alert>
      </div>
    ) 
  }
}

export default TestAlert;