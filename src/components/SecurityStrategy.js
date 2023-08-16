import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MdAddCircle } from "react-icons/md";

const SecurityStrategy = () => {
  const [key, setKey] = useState("objectives");

  const styles = {
    formContainer: {
      border: "2px solid #cecece",
      borderRadius: "10px",
    },
    form: {
      lable: { fontWeight: "600", fontFamily: "Arial", fontSize: "18px" },
    },
    button: { fontSize: "14px", padding: "8px 20px" },
    buttonPrimary: { fontSize: "14px", padding: "8px 20px", backgroundColor: "#273b7e", border: "1px solid #273b7e" },
  };

  return (
    <>
      <header>
        <div>Set Security Strategy</div>
        <hr />
      </header>
      <Tabs activeKey={key} onSelect={(k) => setKey(k)} style={{ border: "none" }}>
        <Tab eventKey="mission_vision" title="Mission & Vision" tabClassName="App__tab" disabled>
          Mission & Vision
        </Tab>
        <Tab eventKey="objectives" title="Strategic Business Objectives" tabClassName="App__tab">
          <div className="tab__body">
            {" "}
            <Form>
              {[0, 1].map((_, index) => {
                return (
                  <div className="p-4 mb-3" style={styles.formContainer} key={index}>
                    <Row>
                      <Col sm={12} md={12} lg={6}>
                        <Form.Group className="mb-3">
                          <Form.Label style={styles.form.lable}>Objective {index + 1}</Form.Label>
                          <Form.Control type="text" placeholder="" />
                        </Form.Group>
                      </Col>
                      <Col sm={12} md={12} lg={6}>
                        <Row>
                          <Col sm={12} md={12} lg={6}>
                            <Form.Group className="mb-3">
                              <Form.Label style={styles.form.lable}>Start Date</Form.Label>
                              <Form.Control type="date" placeholder="" />
                            </Form.Group>
                          </Col>
                          <Col sm={12} md={12} lg={6}>
                            <Form.Group className="mb-3">
                              <Form.Label style={styles.form.lable}>End Date</Form.Label>
                              <Form.Control type="date" placeholder="" />
                            </Form.Group>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={12} md={12} lg={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="d-flex flex-row justify-content-between">
                            <Row>
                              <Col sm={12} md={12} lg={6} style={styles.form.lable}>
                                Key Measures
                              </Col>
                              <Col sm={6} md={12} lg={12} className="font_sm">
                                Add additional key measures&nbsp;&nbsp;
                                <MdAddCircle style={{ fontSize: "20px" }} />
                              </Col>
                            </Row>
                          </Form.Label>
                          <Form.Control type="text" placeholder="" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <div className="d-flex flex-row justify-content-end">
                      <Button variant="outline-danger" className="mr-4" style={styles.button}>
                        Delete
                      </Button>
                      <Button style={styles.buttonPrimary}>Update</Button>
                    </div>
                  </div>
                );
              })}
              <div className="d-flex flex-row justify-content-end">
                <Button style={styles.buttonPrimary} className="d-flex justify-content-center">
                  <MdAddCircle style={{ fontSize: "20px" }} className="mr-2" />
                  <div> Add Objectives</div>
                </Button>
              </div>
            </Form>
          </div>
        </Tab>
      </Tabs>
    </>
  );
};

export default SecurityStrategy;
