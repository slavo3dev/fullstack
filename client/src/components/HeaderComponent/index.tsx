import React from "react";
import { Header, Container, Button, Icon } from "semantic-ui-react";

export default function HeaderComponent({ mobile }: { mobile: boolean }) {
  return (
    <Container text>
      <Header
        as="h1"
        content="Imagine-a-Company"
        inverted
        style={{
          fontSize: mobile ? "2em" : "4em",
          fontWeight: "normal",
          marginBottom: 0,
          marginTop: mobile ? "1.5em" : "3em",
        }}
      />
      <Header
        as="h2"
        content="Do whatever you want when you want to."
        inverted
        style={{
          fontSize: mobile ? "1.5em" : "1.7em",
          fontWeight: "normal",
          marginTop: mobile ? "0.5em" : "1.5em",
        }}
      />
      <Button primary size="huge">
        Get Started
        <Icon name="arrow right" />
      </Button>
    </Container>
  );
}
