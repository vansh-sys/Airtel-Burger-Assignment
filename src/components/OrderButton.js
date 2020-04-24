import React from "react";
import Button from "@material-ui/core/Button";

function OrderButton(props) {
  return (
    <Button variant="contained" onClick={props.click}>
      Add to Cart
    </Button>
  );
}

export default OrderButton;
