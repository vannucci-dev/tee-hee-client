import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";

export default function AlertDismissibleExample() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Hey There! Nice to see you!</Alert.Heading>
        <p>
          Just wanna grab your attention to double check that you understand
          that this is a demonstration-type website and not an actual
          e-commerce.
        </p>
        <hr />
        <p className="mb-0">
          The checkout as well as the payment will actually work, but (as the
          e-commerce is not real), there will be no product shipped to you so,{" "}
          <strong>PLEASE</strong>, do not waste your money. Thanks!
        </p>
        <hr />
        <p className="mb-0">
          You can close the alert in the top right corner. Thanks for visiting!
        </p>
      </Alert>
    );
  }
  return "";
}
