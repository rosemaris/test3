import * as React from 'react';
import styles from './Dashboard.module.scss';
import { IDashboardProps } from './IDashboardProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Col, Container, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Dashboard extends React.Component<IDashboardProps, {}> {
  public render(): React.ReactElement<IDashboardProps> {
    return (
      <Container>
        
        <Row>
          <Col>
            <h6>Entry Information</h6>
            <p />
            <hr />
            <p />
          </Col>
        </Row>
        <Row>
          <Col md="4">
            <Form.Label>Submitted Entry Date</Form.Label><br />
            {/* <Form.Label>{moment(new Date(this.state.Item.SubmittedEntryDate).toLocaleString("en-US", { timeZone: "Australia/Sydney" })).format("DD/MM/YYYY hh:mm A")}</Form.Label>
            {!!!this.state.Item.SubmittedEntryDate && <Form.Label>-</Form.Label>} */}
            <p />
          </Col>
          <Col md="4">
            <Form.Label>Facility Presentation</Form.Label><br />
            {/* <Form.Label>{moment(new Date(this.state.Item.SubmittedEntryDate).toLocaleString("en-US", { timeZone: "Australia/Sydney" })).format("DD/MM/YYYY hh:mm A")}</Form.Label>
            {!!!this.state.Item.SubmittedEntryDate && <Form.Label>-</Form.Label>} */}
            <p />
          </Col>
          <Col md="4">
            <Form.Label>Form Reference Number</Form.Label><br />
            {/* <Form.Label>{moment(new Date(this.state.Item.SubmittedEntryDate).toLocaleString("en-US", { timeZone: "Australia/Sydney" })).format("DD/MM/YYYY hh:mm A")}</Form.Label>
            {!!!this.state.Item.SubmittedEntryDate && <Form.Label>-</Form.Label>} */}
            <p />
          </Col>
          <Col md="4">
            <Form.Label>Status</Form.Label><br />
            <Form.Select>
              <option value="New">New</option>
              <option value="Active">Active</option>
              <option value="Replied">Replied</option>
              <option value="Closed">Closed</option>
              <option value="Archieved">Archieved</option>
            </Form.Select>
            <p />
          </Col>
          <Col md="4">
            <Form.Label>Assigned Specialist</Form.Label><br />
            <Form.Select>
              <option value="Select Specialist">Select Specialist</option>
              <option value="Richard">Richard</option>
              <option value="Nonon">Nonon</option>
              <option value="Edward">Edward</option>
              <option value="Clark">Clark</option>
            </Form.Select>
            <p />
          </Col>
          <Col md="4">
            <Form.Label>Has Advice Been Given and Sent?</Form.Label> <br />
            {/* <Form.Label>{this.state.Item.Email}</Form.Label>
            {!!!this.state.Item.Email && <Form.Label>-</Form.Label>} */}
            <p />
          </Col>
          <Col md="4">
            <Form.Label>Date of Assessment</Form.Label><br />
            {/* <Form.Label>{moment(new Date(this.state.Item.SubmittedEntryDate).toLocaleString("en-US", { timeZone: "Australia/Sydney" })).format("DD/MM/YYYY hh:mm A")}</Form.Label>
            {!!!this.state.Item.SubmittedEntryDate && <Form.Label>-</Form.Label>} */}
            <p />
          </Col>
        </Row>
        <Row>
          <Col><h6>Consent</h6></Col>
          <p />
          <hr />
          <p />
        </Row>
        <Row>
          <Col md="4">
            <Form.Label>Referral Consent</Form.Label> <br />
            {/* <Form.Label>{this.state.Item.Email}</Form.Label>
            {!!!this.state.Item.Email && <Form.Label>-</Form.Label>} */}
            <p />
          </Col>
          <Col md="4">
            <Form.Label>Consent (Attachments)</Form.Label> <br />
            {/* <Form.Label>{this.state.Item.Email}</Form.Label>
            {!!!this.state.Item.Email && <Form.Label>-</Form.Label>} */}
            <p />
          </Col>
          <Col md="4">
            <Form.Label>Research purposes</Form.Label> <br />
            {/* <Form.Label>{this.state.Item.Email}</Form.Label>
            {!!!this.state.Item.Email && <Form.Label>-</Form.Label>} */}
            <p />
          </Col>
        </Row>
        <Row>
          <Col><h6>Medical Practitioner Information</h6></Col>
          <p />
          <hr />
          <p />
        </Row>
        <Row>
          <Col md="4">
            <Form.Label>Name</Form.Label> <br />
            {/* <Form.Label>{this.state.Item.Email}</Form.Label>
            {!!!this.state.Item.Email && <Form.Label>-</Form.Label>} */}
            <p />
          </Col>
          <Col md="4">
            <Form.Label>Email</Form.Label> <br />
            {/* <Form.Label>{this.state.Item.Email}</Form.Label>
            {!!!this.state.Item.Email && <Form.Label>-</Form.Label>} */}
            <p />
          </Col>
          <Col md="4">
            <Form.Label>Contact Number</Form.Label> <br />
            {/* <Form.Label>{this.state.Item.Email}</Form.Label>
            {!!!this.state.Item.Email && <Form.Label>-</Form.Label>} */}
            <p />
          </Col>
          <Col md="4">
            <Form.Label>Position</Form.Label> <br />
            {/* <Form.Label>{this.state.Item.Email}</Form.Label>
            {!!!this.state.Item.Email && <Form.Label>-</Form.Label>} */}
            <p />
          </Col>
          <Col md="4">
            <Form.Label>Secondary Email</Form.Label> <br />
            {/* <Form.Label>{this.state.Item.Email}</Form.Label>
            {!!!this.state.Item.Email && <Form.Label>-</Form.Label>} */}
            <p />
          </Col>
          <Col md="4">
            <Form.Label>Practice Type</Form.Label> <br />
            {/* <Form.Label>{this.state.Item.Email}</Form.Label>
            {!!!this.state.Item.Email && <Form.Label>-</Form.Label>} */}
            <p />
          </Col>
          <Col md="4">
            <Form.Label>Facility Name</Form.Label> <br />
            {/* <Form.Label>{this.state.Item.Email}</Form.Label>
            {!!!this.state.Item.Email && <Form.Label>-</Form.Label>} */}
            <p />
          </Col>
          <Col md="4">
            <Form.Label>Patient Location/Status</Form.Label> <br />
            {/* <Form.Label>{this.state.Item.Email}</Form.Label>
            {!!!this.state.Item.Email && <Form.Label>-</Form.Label>} */}
            <p />
          </Col>
          <Col md="4">
            <Form.Label>Other Location/Status</Form.Label> <br />
            {/* <Form.Label>{this.state.Item.Email}</Form.Label>
            {!!!this.state.Item.Email && <Form.Label>-</Form.Label>} */}
            <p />
          </Col>
          <Col md="4">
            <Form.Label>Practice Name</Form.Label> <br />
            {/* <Form.Label>{this.state.Item.Email}</Form.Label>
            {!!!this.state.Item.Email && <Form.Label>-</Form.Label>} */}
            <p />
          </Col>
          <Col md="4">
            <Form.Label>Practice Email</Form.Label> <br />
            {/* <Form.Label>{this.state.Item.Email}</Form.Label>
            {!!!this.state.Item.Email && <Form.Label>-</Form.Label>} */}
            <p />
          </Col>
          <Col md="4">
            <Form.Label>Practice Address</Form.Label> <br />
            {/* <Form.Label>{this.state.Item.Email}</Form.Label>
            {!!!this.state.Item.Email && <Form.Label>-</Form.Label>} */}
            <p />
          </Col>
        </Row>
        <Row>
          <Col><h6>Patient Information</h6></Col>
          <p />
          <hr />
          <p />
        </Row>
        <Row>
          <Col md="4">
            <Form.Label>Name</Form.Label> <br />
            {/* <Form.Label>{this.state.Item.Email}</Form.Label>
            {!!!this.state.Item.Email && <Form.Label>-</Form.Label>} */}
            <p />
          </Col>
          <Col md="4">
            <Form.Label>Sex</Form.Label> <br />
            {/* <Form.Label>{this.state.Item.Email}</Form.Label>
            {!!!this.state.Item.Email && <Form.Label>-</Form.Label>} */}
            <p />
          </Col>
          <Col md="4">
            <Form.Label>DOB</Form.Label><br />
            {/* <Form.Label>{moment(new Date(this.state.Item.SubmittedEntryDate).toLocaleString("en-US", { timeZone: "Australia/Sydney" })).format("DD/MM/YYYY hh:mm A")}</Form.Label>
            {!!!this.state.Item.SubmittedEntryDate && <Form.Label>-</Form.Label>} */}
            <p />
          </Col>
          <Col md="4">
            <Form.Label>Local URN</Form.Label> <br />
            {/* <Form.Label>{this.state.Item.Email}</Form.Label>
            {!!!this.state.Item.Email && <Form.Label>-</Form.Label>} */}
            <p />
          </Col>
          <Col md="4">
            <Form.Label>Logan Hospital URN</Form.Label><br />
            <Form.Select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Form.Select>
            <p />
          </Col>
          <Col md="4">
            <Form.Label>Contact Number</Form.Label> <br />
            {/* <Form.Label>{this.state.Item.Email}</Form.Label>
            {!!!this.state.Item.Email && <Form.Label>-</Form.Label>} */}
            <p />
          </Col>
          <Col md="4">
            <Form.Label>Address</Form.Label> <br />
            {/* <Form.Label>{this.state.Item.Email}</Form.Label>
            {!!!this.state.Item.Email && <Form.Label>-</Form.Label>} */}
            <p />
          </Col>
          <Col md="4">
            <Form.Label>Language(s)</Form.Label> <br />
            {/* <Form.Label>{this.state.Item.Email}</Form.Label>
            {!!!this.state.Item.Email && <Form.Label>-</Form.Label>} */}
            <p />
          </Col>
          <Col md="4">
            <Form.Label>Indigenous Status</Form.Label> <br />
            {/* <Form.Label>{this.state.Item.Email}</Form.Label>
            {!!!this.state.Item.Email && <Form.Label>-</Form.Label>} */}
            <p />
          </Col>
        </Row>
        <Row>
          <Col><h6>Speciality Information</h6></Col>
          <p />
          <hr />
          <p />
        </Row>
        <Row>
          <Col><h6>Dates of Incident(s)</h6></Col>
        </Row>
        <Row>
          <Col md="4">
            <Form.Label>Is this the first onset of dizziness/vertigo?</Form.Label> <br />
            {/* <Form.Label>{this.state.Item.Email}</Form.Label>
            {!!!this.state.Item.Email && <Form.Label>-</Form.Label>} */}
            <p />
          </Col>
          <Col md="4">
            <Form.Label>Exact date of first onset of dizziness/vertigo?</Form.Label> <br />
            {/* <Form.Label>{this.state.Item.Email}</Form.Label>
            {!!!this.state.Item.Email && <Form.Label>-</Form.Label>} */}
            <p />
          </Col>
          <Col md="4">
            <Form.Label>First Occurrence of dizziness/vertigo</Form.Label> <br />
            {/* <Form.Label>{this.state.Item.Email}</Form.Label>
            {!!!this.state.Item.Email && <Form.Label>-</Form.Label>} */}
            <p />
          </Col>
          <Col md="4">
            <Form.Label>Approximate date of first onset of dizziness/vertigo</Form.Label> <br />
            {/* <Form.Label>{this.state.Item.Email}</Form.Label>
            {!!!this.state.Item.Email && <Form.Label>-</Form.Label>} */}
            <p />
          </Col>
          <Col md="4">
            <Form.Label>Other Dates of dizziness/vertigo</Form.Label> <br />
            {/* <Form.Label>{this.state.Item.Email}</Form.Label>
            {!!!this.state.Item.Email && <Form.Label>-</Form.Label>} */}
            <p />
            <hr />
            <p />
          </Col>
        </Row>
      </Container>
    );
  }
}
