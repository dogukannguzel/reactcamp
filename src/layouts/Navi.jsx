import React, { useState } from "react";
import CartSummary from "./CartSummary";
import { Container, Menu } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SıgnedIn"
import SıgnedIn from "./SıgnedIn";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navi() {

  const {cartItems} = useSelector(state => state.cart)

  const [isAuthenticated, setIsAuthenticated] = useState(true)

  const history = useHistory()

  function handleSignOut() {

    setIsAuthenticated(false)
    history.push("/")
  }

  function handleSignIn() {
    setIsAuthenticated(true)

  }

  return (
    <div>
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item as={NavLink} to ="/" name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
        {cartItems.length>0&&<CartSummary/>}

            {isAuthenticated ? <SignedIn signOut={handleSignOut} /> : <SignedOut signIn={handleSignIn} />}


          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
