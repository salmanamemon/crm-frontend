import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const PasswordReset = ({ handleOnChange, handleOnResetSubmit, formSwitcher, email, password }) => {
  return (
    <Container>
        <Row>
            <Col>
                <h1 className="text-info text-center">Reset Password</h1>
                <hr />
                <Form autoComplete='off' onSubmit={handleOnResetSubmit}>
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control 
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleOnChange}
                            placeholder="Enter your email..."
                            required
                        />
                    </Form.Group>
                    <Button type="submit">Reset Password</Button>
                </Form>
            </Col>
        </Row>
        <hr />
        <Row>
            <Col>
                <a className="text-info text-left" href="#" onClick={()=>{formSwitcher('login')}}>Want to Login?</a>
            </Col>
        </Row>
    </Container>
    
  )
}

PasswordReset.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
}

export default PasswordReset