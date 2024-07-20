// import React, { useState } from 'react';

import { Authenticator } from '@aws-amplify/ui-react';


function SignIn() {
    // const [count, setCount] = useState(0)
    
return (
    <div>
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
)}

export default SignIn
