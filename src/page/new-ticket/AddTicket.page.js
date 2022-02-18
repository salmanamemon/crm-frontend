import React, {useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PageBreadCrumb } from "../../components/breadcrumb/PageBreadCrumb.comp";
import { AddTicketForm } from "../../components/add-ticket-form/AddTicketForm.comp";
import { shortText } from "../../utils/validation";


const initialFrmDt = {
  subject: "",
  issueDate: "",
  message: "",
};
const initialFrmError = {
  subject: false,
  issueDate: false,
  message: false,
}
export const AddTicket = () => {  

  const [frmData, setFrmData] = useState(initialFrmDt);
  const [frmDataError, setFrmDataError] = useState(initialFrmError);
  useEffect(() => {},[frmData, frmDataError]);

  //Handle On Change (For Individual Field)
  const handleOnChange = (e) => {
    const {name, value} = e.target;

    setFrmData({
      ...frmData,
      [name]: value,
    })
    //console.log(name,value);
  }

  //Handle On Submit (For Form)
  const handleOnSubmit = async (e) => {
    e.preventDefault();

    setFrmDataError(initialFrmError);
    
    const isSubjectValid = await shortText(frmData.subject)
    
    setFrmDataError({
      ...initialFrmError,
      subject: !isSubjectValid,
    })
    console.log('Form Submit request is recieved', frmData)
  }

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadCrumb page="New Ticket" />
        </Col>
      </Row>

      <Row>
        <Col>
          <AddTicketForm handleOnChange={handleOnChange} frmDt={frmData} frmDataError={frmDataError} handleOnSubmit={handleOnSubmit}/>
        </Col>
      </Row>
    </Container>
  );
};
