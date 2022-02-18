import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Spinner, Alert } from "react-bootstrap";
import { PageBreadCrumb } from "../../components/breadcrumb/PageBreadCrumb.comp";
import { MessageHistory } from "../../components/message-history/MessageHistory.comp";
import tickets from "../../assets/data/dummy-tickets.json";
import { UpdateTicket } from "../../components/update-ticket/UpdateTicket.comp";


export const Ticket = () => {
	const ticket = tickets[0];
	return (
		<Container>
			<Row>
				<Col>
					<PageBreadCrumb page="Ticket" />
				</Col>
			</Row>

			<Row>
				<Col className="text-weight-bolder text-secondary">
					<div className="subject">Subject: {ticket.subject}</div>
					<div className="date">Ticket Opened: {ticket.addedAt}</div>
					<div className="status">Status: {ticket.status}</div>
				</Col>
				<Col className="text-right">
					<Button variant="outline-info">Close Ticket</Button>
				</Col>
			</Row>
			<Row className="mt-4">
				<Col>
					<MessageHistory msg={ticket.history} />
				</Col>
			</Row>
			<hr />
			<Row className="mt-4">
				<Col>
					<UpdateTicket />
				</Col>
			</Row>

		</Container>
	);
};
