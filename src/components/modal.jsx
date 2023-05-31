import { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";

import axios from "axios";
import CheckboxExample from "./checkbox";

export default function ({ title, close }) {
    const [isChecked, setIsChecked] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  function Close() {
    close(false);
  }

  const fetchData = async () => {
    let response;
 
    try {
      if (title === 'Allcontacts') {
        response = await axios.get(
          "https://contact.mediusware.com/api/contacts/"
        );
        setContacts(response.data);
      } else {
        response = await axios.get(
          "https://contact.mediusware.com/api/country-contacts/United%20States/"
        );
        setContacts(response.data);
      }
      setLoading(false);
      // Handle the successful response
    } catch (error) {
      console.error(error);
      // Handle the error
    }
  };

  let data=[];
   if(isChecked){
    data=contacts?.results.filter(it=>it.id%2===0);
   }else
      data=contacts?.results;
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Modal show={true} onHide={Close}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {loading ? (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            <table className="table table-striped ">
              <thead>
                <tr>
                  <th scope="col">Contact number</th>
                  <th scope="col">Country</th>
                </tr>
              </thead>
              <tbody>
                {data.map((it, idx) => {
                  return (
                    <tr key={idx}>
                      <td>{it.phone}</td>
                      <td>{it.country.name}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </Modal.Body>
        <Modal.Footer>
     
            <CheckboxExample isChecked={isChecked} setIsChecked={setIsChecked}/>
          
          <Button variant="secondary" onClick={Close}>
            Close
          </Button>
     
        </Modal.Footer>
      </Modal>
    </>
  );
}
