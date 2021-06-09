import React from 'react';
import { Button, Menu } from 'semantic-ui-react';

const SignedOut = ({signIn}) => {
    return (
        <div>
            <Menu.Item>
                <Button  onClick={signIn} primary >Giriş yap</Button>
                <Button primary style={{marginLeft:"0.5em"}} >Kayıt ol</Button>
            </Menu.Item>

        </div>
    );
}

export default SignedOut;
