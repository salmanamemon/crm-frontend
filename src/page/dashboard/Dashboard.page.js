import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import TicketTable from "../../components/ticket-table/TicketTable.comp";
import { PageBreadCrumb } from "../../components/breadcrumb/PageBreadCrumb.comp";
import tickets from "../../assets/data/dummy-tickets.json";

const Dashboard = () => {
    return(
        <Container>
            <Row>
                <Col>
                    <PageBreadCrumb page="Dashboard"/> 
                </Col>
            </Row>
            <Row>
                <Col className="text-center mt-5 mb-2">
                    <Link to="/add-ticket">
                        <Button
                            variant="info"
                            style={{ fontSize: "2rem", padding: "10px 30px", color: "#fff" }}
                        >
                            Add New Ticket
                        </Button>
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col className="text-center  mb-2">
                <div>Total tickets: 50</div>
                <div>Pending tickets: 5</div>
                </Col>
            </Row>
            <Row>
                <Col className="mt-2">Recently Added tickets</Col>
            </Row>
            <hr />

            <Row>
                <Col className="recent-ticket mb-5">
                    <TicketTable tickets={tickets}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Dashboard;