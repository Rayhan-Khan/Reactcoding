import React from 'react';
import Modal from './modal';
import {useState} from 'react'



const Problem2 = () => {

    const [showModal, setShowModal] = useState(false);

    const [allModal,setAllModal]=useState(false);
    function Allcontacts(){
        setShowModal(false);
        setAllModal(true);
    
    }

    function UScontacts(){
        setAllModal(false);
        setShowModal(true);
    }
    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                
                <div className="d-flex justify-content-center gap-3">
                <button onClick={Allcontacts} className="btn btn-lg btn-outline-primary" type="button" data-toggle="modal" data-target="#exampleModal">All Contacts</button>
                <button onClick={UScontacts} className="btn btn-lg btn-outline-warning" type="button" >US Contacts</button>
                </div>
            
            </div>
          { allModal &&  <Modal title="Allcontacts"close={setAllModal}/>}
          { showModal &&  <Modal title="Us Contacts"close={setShowModal}/>}
        </div>
    );
};

export default Problem2;