import { useState } from "react";
import Modal from "react-modal";

const TestModal = () => {
const [modal, setModal] = useState(false);

const openModal = () => {
    setModal(true);
};
const closeModal = () => {
    setModal(false);
};
return (
    <>
    <button onClick={openModal}>modal</button>
    <Modal isOpen={modal}>
        <button onClick={closeModal}>close</button>
        <h1>TestModal</h1>
    </Modal>
    </>
);
};
export default TestModal;
