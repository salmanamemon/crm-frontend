import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const LoginForm = ({ handleOnChange, handleOnSubmit, email, password }) => {
  return (
    <Container>
        <Row>
            <Col>
                <h1 className="text-info text-center">Client Login</h1>
                <hr />
                <Form autoComplete='off' onSubmit={handleOnSubmit}>
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control 
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleOnChange}
                            placeholder="Enter your email..."
                            
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            value={password}
                            placeholder="Enter your password..."
                            
                        />
                    </Form.Group>
                    <Button type="submit">Login</Button>
                </Form>
            </Col>
        </Row>
        <hr />
        <Row>
            <Col>
                <a className="text-info text-left" href="!#">Forget Password?</a>
            </Col>
        </Row>
    </Container>
    
  )
}

LoginForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
}

export default LoginForm