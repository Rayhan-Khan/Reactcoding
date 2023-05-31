
import { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';

import axios from 'axios';


export default function({title,close}) {
    const [contacts,setContacts]=useState([]);
    const [loading,setLoading]=useState(true);
    function Close(){
       close(false);
    }

    const fetchData = async () => {
        let response;
        try {
       
           response = await axios.get('https://contact.mediusware.com/api/contacts/');
           setContacts(response.data);
          setLoading(false) ;
          // Handle the successful response
        } catch (error) {
          console.error(error);
          // Handle the error
        }
      };
      
 
      useEffect(()=>{
        fetchData();
      },[])
      return (
        <>
    
          <Modal show={true} onHide={Close}>
            <Modal.Header closeButton>
              <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               { loading?
                <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    :  <table className="table table-striped ">
    <thead>
    <tr>
        <th scope="col">Contact number</th>
        <th scope="col">Country</th>
    </tr>
    </thead>
    <tbody>
      {contacts?.map(it=>{
        return(<tr>
            
        </tr>)
      })}
    </tbody>
</table>
      
    }
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={Close}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
    