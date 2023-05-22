import React, { useState } from 'react';
import "./SignInPage.css"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const SignInPage = () => {

  const [password, setpassword] = useState("");
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className="backgroundContainer">
        <div className="centerContainer">
          <Card className="card">
            <Card.Header className="header">Welcome To KS Productivity Suite</Card.Header>
            <Card.Body>

              <Form>
                <Form.Group className="mb-4" controlId="formGroupEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control className="mb-3" type="email" placeholder="Alexjames@gmail.com" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>

                  <Form.Control

                    value={password}
                    type={visible ? "text" : "password"}
                    id="password"
                    onChange={(e) => setpassword(e.target.value)}
                    className="mb-3"
                    placeholder="********" />

                </Form.Group>

                <div className='p-2' onClick={() => setVisible(!visible)} >
                  {
                    visible ? <FaEye /> : <FaEyeSlash />
                  }
                </div>

              </Form>

              <Form>
                {['checkbox',].map((type) => (
                  <div key={`default-${type}`} className="text-center">
                    <Form.Check
                      className="checkbox"
                      type={type}
                      id={`default-${type}`}
                      label={`Remember me`}
                    />
                  </div>
                ))}
              </Form>

              < Button className="btn-primary" variant="primary">
                Sign In
              </Button>

            </Card.Body>

            <Card.Footer className="footer">Forgot password?</Card.Footer>
            <Card.Footer className="text-muted">Powered by KS-Technologies ⓒ 2023</Card.Footer>
          </Card>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
