
import React, { useEffect, useState, useContext } from "react";
import Modal from 'react-modal'
import {CharacterList} from "../../Contexts/Characters";

import './styles.css'

Modal.setAppElement('#root')

export default function CustomModal({modalStatus}) {
  
    const [[character, setCharacter], [selectedCharacter, setSelectedCharacter], [maxCharacters], [modalIsOpen, setModalIsOpen]] = useContext(CharacterList)

    let subtitle;
    function openModal() {
      setModalIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setModalIsOpen(false);
    }

    const customStyles = {

        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          },
    }

    return (

        <div>
        <Modal
          isOpen={modalStatus}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      </div>

    )
}





/* import { useState } from "react";
import './styles.css'
import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function CustomModal() {

    const [modal, setModal] = useState(false)
    
    function handleModal(value) {
      setModal(value)
    }
    
    const customStyles = {
      content: {
        position : 'absolute',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: 'red'
      },
    };

    return(
        <>
        
            <Modal 
                isOpen={modal}
                onRequestClose={handleModal(false)}
                style={customStyles}
            >
              
            </Modal>

        </>
    )

} */