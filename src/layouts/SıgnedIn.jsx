import React from 'react';
import { Dropdown, Image, Menu } from 'semantic-ui-react';


const SıgnedIn = ({ signOut }) => {
    


    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://i.sozcu.com.tr/wp-content/uploads/2020/08/20/iecrop/lucifer_16_9_1597918182-670x371.jpg" />

                <Dropdown>
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info" />
                        <Dropdown.Item onClick={signOut} on text="Çıkış yap" icon="sign-out" />

                    </Dropdown.Menu>
                </Dropdown>

            </Menu.Item>
        </div>
    );
}

export default SıgnedIn;
