import React from "react";
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";

export const UpdateTicket = ({ handleOnSubmit, handleOnChange, msg }) => {
  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <Form.Label>Reply</Form.Label>
        <Form.Text className="d-block">
          Please reply your message here or update the ticket
        </Form.Text>
        <Form.Control
          as="textarea"
          row="5"
          name="detail"
          value={msg}
          onChange={handleOnChange}
        />
        <div className="text-right mt-3 mb-3">
          <Button variant="info" type="submit">
            Reply
          </Button>
        </div>
      </Form>
    </div>
  );
};

UpdateTicket.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  msg: PropTypes.string.isRequired
}