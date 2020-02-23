import React from "react";
import { Container, Header, List } from "semantic-ui-react";

const ContainerExampleFluid = () => (
  <div>
    <Container fluid>
      <br />
      <Header as="h1">COMPANY</Header>

      <p>
        Olshan Realty Inc., was founded in 1980, and is one of New York City's
        leading boutique residential brokerage firms, specializing in
        residential sales, rentals, corporate relocation, investments, and
        property management. The company has been a marketing trendsetter by
        deploying social media and technology. Olshan Realty also was the first
        company in Manhattan to have a corporate relocation department, and has
        represented Fortune 500 relocating executives from Sony, Verizon,
        Mercedes Benz, DuPont, Time-Warner, Mobil, Exxon, J.C. Penney, W.R.
        Grace, Citicorp, Goldman Sachs, Credit-Suisse and Deutsche Bank among
        others.
      </p>
      <p>
        <Header as="h3">SALES FORCE</Header>
        Olshan Realty is a licensed real estate brokerage firm, serving New York
        City, specializing in the sale of co-ops and condos, townhouses, lofts
        and rentals. Salespersons are equipped to handle all areas, price
        ranges, and needs. Many agents live and work in the neighborhoods they
        serve, and are closely involved in their communities. They know about
        available apartments, neighborhood characteristics, schools and
        shopping. They can help guide the client thru the purchase, mortgage,
        co-op and condo application process. All agents are members of The Real
        Estate Board of New York.
        <Header as="h3">CORPORATE RELOCATION DEPARTMENT</Header>
        When it comes to relocating executives, companies often turn to
        corporate relocation experts to help buy and sell residential real
        estate for their employees. Olshan Realty Inc. has the premier
        relocation department and the top choice of America's relocation
        companies. Since 1980, Olshan has handled hundreds of millions of
        dollars in transactions on behalf of corporate America. Olshan has
        represented Cartus, Brookfield Global Relocation, Prudential Relocation,
        Relocation Resources, Mobility Services International, Associates
        Relocation and Royal LePage among others. Our full-time staff is
        equipped to handle brokerage, rental, property management and home
        finding assistance. Olshan serves customers in all price ranges. The
        company's database accesses all the many thousands of sales and rental
        listing across New York. It also is the exclusive broker for many
        rentals being handled by Olshan Realty's Property Management division.
        <p>
          Olshan serves customers in all price ranges. The company's database
          accesses all the many thousands of sales and rental listing across New
          York. It also is the exclusive broker for many rentals being handled
          by Olshan Realty's Property Management division.
        </p>
        <Header as="h3">INVESTMENT AND WEALTH MANAGEMENT SERVICES</Header>
        New York City has proven a superb place to invest in real estate. Many
        clients are looking for wealth diversification by investing in a
        portfolio of New York real estate. Olshan Realty routinely assists
        investors looking to maximize returns. The company is highly experienced
        in 1031 exchanges, and advises on bulk purchases that can be resold or
        rented. Olshan offers property management services for these
        investments.
        <Header as="h3">MARKETING DEPARTMENT - BEING DIGITAL</Header>
        <List bulleted>
          <List.Item>
            {" "}
            <Header as="h5">Being Digital 24/7</Header>It's all about the Web.
            Today's buyer wants pictures, floorplans, 24/7 information. Olshan's
            marketing department helps create a strategic plan to sell or rent a
            property.
          </List.Item>
          <List.Item>
            <Header as="h5">Google Search Optimization</Header>Type in your
            building on the web and see where it appears. Olshan pays attention
            to pushing its exclusive properties to the top of the search engine
            rankings.
          </List.Item>
          <List.Item>
            <Header as="h5">Olshan.Com</Header>Website and Domain Strategy:
            Since 1995, when Donna Olshan saw the power of the internet, the
            company has been an active purchaser of prime Internet real estate
            in the form of domain names which drive traffic to Olshan.com and
            its exclusive listings. Olshan Realty owns names the following
            names: www.townhouse.com, www.co-ops.com, www.nyrealestate.com,
            www.cityhomes.com, www.nybroker.com, www.nyclofts.com,
            www.nyhomes.com among 80 other top real estate domain names.
          </List.Item>
          <List.Item>
            <Header as="h5">Social Media Strategies</Header>The consumer is
            constantly changing the way they research and purchase real estate.
            Olshan Realty employs Facebook and blogs to keep their properties in
            the Social Media conversation.
          </List.Item>
          <List.Item>
            <Header as="h5">Direct Mail</Header>Olshan also uses traditional
            media to publicize it properties by using direct mail to interest
            neighbors and friends.
          </List.Item>
          <List.Item>
            <Header as="h5">Staging</Header>Presentation of a property is
            critical. The sales price is greatly influenced by how the property
            is presented or staged. Olshan will provide recommendations to help
            best present a property and maximize market value. Often this
            involves hiring a stager or just helping you edit the clutter and
            reposition the furniture.
          </List.Item>
        </List>
        <br />
      </p>
    </Container>
  </div>
);

export default ContainerExampleFluid;
