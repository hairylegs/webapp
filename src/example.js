import React from "react";
import { Header, Grid, Image } from "semantic-ui-react";
import "./styles.css";

const HeaderExamplePage = () => (
  <div>
    <Header as="h1">First Header</Header>
    <Header as="h2">Second Header</Header>
    <Header as="h3">Third Header</Header>
    <Header as="h4">Fourth Header</Header>
    <Header as="h5">Fifth Header</Header>
    <Header as="h6">Sixth Header</Header>
  </div>
);

const GridExampleDividedNumber = () => (
  <Grid columns={2} divided>
    <Grid.Row>
      <Grid.Column width={16}>
        <h1 class="ui header centered" style={{ marginTop: 25 }}>
          SEARCH
        </h1>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
      </Grid.Column>
      <Grid.Column>
        <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default GridExampleDividedNumber;
