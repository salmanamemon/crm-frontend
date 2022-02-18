import React from "react";
import {
  Form,
  Card,
  Row,
  Col,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";

import "./add-ticket-form.style.css";
import PropTypes from 'prop-types';

export const AddTicketForm = ({handleOnChange, handleOnSubmit, frmDt, frmDataError}) => {
  console.log(frmDt);
  return (
    <Card className="mt-3 add-new-ticket bg-light">
      <h1 className="text-info text-center">Add New Ticket</h1>
      <hr />
      <div>
        Error Msgs
      </div>
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group as={Row} className="mb-4">
          <Form.Label column sm={3}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="subject"
              maxLength="100"
              placeholder="Subject"
              value={frmDt.subject}
              onChange={handleOnChange}
              required
            />
            <Form.Text className="text-danger">
              {frmDataError.subject && "Subject is required"}
            </Form.Text>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Issue Found
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="date"
              name="issueDate"
              value={frmDt.issueDate}
              onChange={handleOnChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Details</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            rows="5"
            value={frmDt.message}
            onChange={handleOnChange}
            required
          />
        </Form.Group>

        <Button className="text-white" type="submit" variant="info" block>
          Open Ticket
        </Button>
      </Form>
    </Card>
  );
};

AddTicketForm.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  frmDt: PropTypes.object.isRequired,
  frmDataError: PropTypes.object.isRequired,
}