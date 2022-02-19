import React from 'react';
import { Routes, Route} from "react-router-dom";
import './App.css';
import PrivateRoute from './components/private-route/PrivateRoute.comp';
import DefaultLayout from './layout/DefaultLayout';
import Dashboard  from './page/dashboard/Dashboard.page';
import Entry from './page/entry/Entry.page';
import { AddTicket } from './page/new-ticket/AddTicket.page';
import { TicketLists } from './page/ticket-list/TicketLists.page';
import { Ticket } from './page/ticket/Ticket.page';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Entry />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <DefaultLayout>
                  <Dashboard />
                </DefaultLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/add-ticket"
            element={
              <PrivateRoute>
                <DefaultLayout>
                  <AddTicket />
                </DefaultLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/tickets"
            element={
              <PrivateRoute>
                <DefaultLayout>
                  <TicketLists />
                </DefaultLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/ticket/:tId"
            element={
              <PrivateRoute>
                <DefaultLayout>
                  <Ticket />
                </DefaultLayout>
              </PrivateRoute>
            }
          />
        </Routes>
    </div>
  );
}

export default App;