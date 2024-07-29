import { useState } from "react";
import Modal from "react-modal";


import { Authenticator } from '@aws-amplify/ui-react';

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
            <h1 className="bg-teal-400">User</h1>

        <button onClick={openModal}>モーダル</button>
        
        <Modal isOpen={modal}>
        <div className="aspect-square w-100 bg-white">
            <button onClick={closeModal}>閉じこ</button>

            <Authenticator>
            {({ signOut, user }) => (
            <>
            <div>
                <h1>Hello {user?.username}</h1>
                <button onClick={signOut}>Sign out</button>
                {/* <Component {...pageProps} /> */}
            </div>
            </>
            )}
            </Authenticator>
        </div>

        </Modal>

        </div>
        </>
    )
} 
export default User;