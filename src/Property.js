import React, { Component } from "react";
import MortgageCalculator from "mortgage-calculator-react";
import ReactDOM from "react-dom";
import { Grid, Container } from "semantic-ui-react";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles.css";
import { Carousel } from "react-responsive-carousel";
import Main1 from "./images/509467_livingroom.jpg";
import Main2 from "./images/509467_views.jpg";
import Main3 from "./images/509467_bedroom1.jpg";
import Main4 from "./images/509467_kitchen.jpg";
import Main5 from "./images/509467_floorplan.jpg";
import dso from "./images/dso.jpg";

const ContainerExampleContainer = () => (
  <Container>
    <Grid stackable columns={2}>
      <Grid.Row>
        <Grid.Column>
          <h3 class="propertyaddress">
            215 Chrystie 28W
            <h5 class="propertywebid">WEBID# 509467</h5>
          </h3>
        </Grid.Column>
        <Grid.Column>
          <div class="ui labeled icon menu">
            <a href="/" class="item">
              <i aria-hidden="true" class="map marker alternate icon">
                <br />
              </i>
              Map
            </a>
            <a href="/" class="item">
              <i aria-hidden="true" class="share icon" />
              Share
            </a>
            <a href="/" class="item">
              <i aria-hidden="true" class="eye icon" />
              Watch
            </a>

            <a href="/" class="item">
              <i aria-hidden="true" class="print icon" />
              Print
            </a>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Carousel showThumbs={false} infiniteLoop={true} className="Carousel">
      <div style={{ width: "100%", height: "auto", color: "#fff" }}>
        <img src={Main1} alt="215 Chrystie 28W - LIVING ROOM" />
      </div>
      <div style={{ width: "100%", height: "auto", color: "#fff" }}>
        <img src={Main2} alt="215 Chrystie 28W - VIEWS" />
      </div>
      <div style={{ width: "100%", height: "auto", color: "#fff" }}>
        <img src={Main3} alt="215 Chrystie 28W - BEDROOM 1" />
      </div>
      <div style={{ width: "100%", height: "auto", color: "#fff" }}>
        <img src={Main4} alt="215 Chrystie 28W - KITCHEN" />
      </div>
    </Carousel>
    <Grid>
      <Grid.Row>
        <div class="desc">
          <p>
            This is the first resale at 215 Chrystie, an 11-unit condo that
            exemplifies the highest standards in architectural design. 28W
            surpasses all expectations in quality finish. This 1,977 square foot
            has 2 bedrooms, 2.5 bathrooms with spectacular panoramic
            unobstructed views facing North, South, and West. The exoskeleton,
            column-free structure, is by the Pritzker-prize winning architects
            Herzog & de Meuron. Interiors are by iconic minimalist English
            architect John Pawson. The great room offers a dramatic display: A
            combined living room and dining room that spans 42 feet surrounded
            by floor-to-ceiling glass. The kitchen is crafted out of walnut
            cabinets with Basaltina countertops, island, and backsplash. Fully
            integrated appliances include a Miele 5-burner flush mounted gas
            cooktop, Wolf 36" oven, Miele 27" warming drawer, Miele 24" under
            counter wine refrigerator, Miele 24" dishwasher and Miele 24"
            coffee/espresso machine, and a 33" sink with stainless steel Vola
            fixtures. The 591 sq.ft. Master Bedroom Suite has rare unobstructed
            South views and a dressing area with walk-in closets and custom
            doors. The Master Bathroom includes a custom designed double vanity
            with an integrated sink, John Pawson custom designed 6' freestanding
            concrete tub, and a custom designed shower featuring precast
            concrete floors and walls, oversized rain shower head, and full
            height glass shower with breathtaking south views over the city. The
            unit has a washer and dryer and a large powder room. Monthly real
            estate taxes are $4,340 The unit is also available for rent for
            $34,000/month.
          </p>

          <p>
            Building Notes: This 11-unit condo has only 2 apartments per floor.
            There is a fulltime doorman and unit owners have full use of the
            hotel amenities in the adjoining hip Public Hotel. 215 Chrystie was
            designed by Swiss architects Herzog & de Meuron who designed the
            Tate Modern Museum in London and the Beijing Olympic Bird's Nest
            stadium among other notable public spaces. Interiors are by
            minimalist architect John Pawson, who designed London's new Design
            Museum. Pawson has written books, designed flatware, and has been
            the subject of a fascinating BBC documentary. "Living With The
            Future Tilty Barn."
          </p>

          <div class="ui stackable two column grid">
            <div class="column">
              <h3 class="propertyaddress">OFFERED AT </h3>
              <b>Asking Price:</b> $6,995,000
              <br />
              <b>Maintenance:</b> $3760
              <br />
              <b>Financing Allowed:</b> 90% permitted
              <br />
              Spectacular Views
              <br />
              1,977 square feet
              <br />
              10-foot-high ceilings
              <br />
              <h3 class="propertyaddress">FEATURES </h3>
              <b>Room Count:</b> 5<br />
              <b>Bedrooms:</b> 2<br />
              <b>Bathrooms:</b> 2.5
              <br />
              <b>Condition:</b> Excellent
              <br />
              Floor-to-ceiling glass windows
              <br />
              <b>Views:</b> Panoramic city views and River
              <br />
              <b>Exposures:</b> South, West North
              <br />
              Almost 600- sq.ft. master suite with bath
              <br />
              42-foot living/dining room
              <br />
              Large kitchen with Island
              <br />
              Miele appliances
              <br />
              <h3 class="propertyaddress">MORTGAGE CALCULATOR </h3>
              <MortgageCalculator />
            </div>
            <div class="column">
              <img width="350" src={Main5} alt="215 Chrystie 28W - FLOORPLAN" />
            </div>
          </div>
        </div>
      </Grid.Row>
    </Grid>
  </Container>
);

export default ContainerExampleContainer;
