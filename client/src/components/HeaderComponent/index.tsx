import React from "react";
import { Header, Image } from "semantic-ui-react";
import logo from "../../assets/logo192.png";

export default function HeaderComponent() {
  return (
    <Header as="h2" color="blue">
      <Image circular src={logo} /> ReactLion
    </Header>
  );
}
