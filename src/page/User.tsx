import { useState } from "react";
import Modal from "react-modal";

const User = () => {

    const [modal, setModal] = useState(false);

    const openModal = () => {
        setModal(true);
    };
    const closeModal = () => {
        setModal(false);
    };

    return (
        <>
            <div>
            <button onClick={openModal}>modal</button>
            <Modal isOpen={modal}>
                <button onClick={closeModal}>閉じこ</button>
                <h1>TestModal</h1>
            </Modal>


            </div>
            <h1>User</h1>
        </>
    )
} 
export default User;