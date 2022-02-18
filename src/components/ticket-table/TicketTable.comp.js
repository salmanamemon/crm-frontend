import React from 'react';
import { Table } from 'react-bootstrap';
import tickets from '../../assets/data/dummy-tickets.json'
import PropTypes from "prop-types";

const TicketTable = ({ tickets }) => {

  if(!tickets.length); 
  
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Subjects</th>
          <th>Status</th>
          <th>Opened Date</th>
        </tr>
      </thead>
      <tbody>
        {tickets.length ? 
            tickets.map((row) => (
                <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.subject}</td>
                    <td>{row.status}</td>
                    <td>{row.addedAt}</td>
                </tr>
                )
            )
            : 
            (
                <tr>
                  <td colSpan="4" className="text-center">
                    No ticket show{" "}
                  </td>
                </tr>
            )
        }
      </tbody>
    </Table>
  )
}

export default TicketTable

TicketTable.propTypes = {
  tickets: PropTypes.array.isRequired,
}