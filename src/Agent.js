import React from "react";
import { Segment, Image, Header } from "semantic-ui-react";
import dso from "./images/dso.jpg";
import Prop1 from "./images/509467.jpg";
import Prop2 from "./images/18694126.jpg";
import Prop3 from "./images/18717721.jpg";
import Prop4 from "./images/18744997.jpg";

const ImageExampleFloated = () => (
  <Segment>
    <h2> </h2>
    <div class="ui sticky">
      <p>
        <Image
          src={dso}
          class="ui  image"
          bordered
          size="small"
          floated="left"
        />
      </p>
    </div>
    <Header as="h4">EXCLUSIVE AGENT</Header>
    <Header as="h3">DONNA OLSHAN</Header>
    PRESIDENT / LICENSED REAL ESTATE BROKER
    <br />
    Direct Phone: 212-751-3300 x110
    <br />
    Residence: 212-517-6617
    <br />
    Fax: 212-751-3577
    <br />
    <a href="MAILTO:dso@olshan.com">dso@olshan.com</a>
    <p>
      <br />
      Donna Olshan is the President and sole owner of Olshan Realty Inc. which
      she started in 1980. The company is known for its high level of service,
      innovative marketing techniques, relocation department and cutting edge
      technology.
    </p>
    <p>
      Olshan is the author of the Olshan Luxury Report, published weekly, and
      frequently quoted in the New York Times, Wall Street Journal, Observer,
      The Real Deal, Crain’s, Politico, and various media outlets. The report
      covers all the contracts signed in Manhattan at $4 million and above is
      considered an industry standard, and the “go to” resource for buyers,
      sellers, developers, banks, hedge funds, and various institutions looking
      for a pulse on the Manhattan luxury market. It has a global list of
      subscribers.
    </p>
    <p>
      Olshan Realty Inc. is a trend setter. It was the first residential
      brokerage company to have a corporate relocation department. Olshan has
      represented every major corporate relocation company in addition to a long
      list of Fortune 500 companies that have included Sony, General Electric,
      IBM, Citicorp, Mercedes Benz, Credit Suisse, Cartus, Brookfield Global
      Relocation, Coldwell Banker Relocation, Prudential, Associates Relocation
      and Royal LePage of Canada. Olshan Realty was the exclusive Manhattan
      broker representing the group moves of Mobil, Exxon, J.C. Penney, American
      Home Products, and GTE.
    </p>
    <p>
      "We attracted our following among the corporations because of our service.
      I am a great believer in follow up and meticulous attention to detail. It
      is important to listen to what the customer wants. Many brokers can't meet
      the paperwork and reporting demands of corporations and their executives.
      Word of mouth and repeat business is very important to us. Some of our
      clients have been with us for over 20 years," said Olshan. "Over the last
      three decades, we have been through many kinds of markets and each
      presents its own challenge. We have a pro-active marketing approach that
      embraces technology and social media. On the buyer side, we've got the
      knowledge, skills, research, data, and contacts to be able to direct the
      customer to the right deal. This is a professional's firm where every
      agent has a lot of experience and where the owner is always available to
      personally speak to any buyer or seller working with an agent of the firm.
      My name is on the door and nobody gets lost."
    </p>
    <p>
      Donna Olshan is a graduate of George Washington University, the wife of
      Peter Bonventre, a three-time Emmy award winner, best selling author, and
      former magazine editor and ESPN commentator. She is a member of the Real
      Estate Board of New York and has served on the Board of City Lights Youth
      Theatre. She is the founder and board member of the Martin V. Bonventre
      Lectureship Series at Brooklyn Hospital which features world-renowned
      doctors speaking on various cutting-edge topics in the medical field.
    </p>
    <Header as="h2">DONNA'S CURRENT LISTINGS</Header>
    <hr />
    <div class="ui  two column grid">
      <div class="column">
        <Image
          src={Prop1}
          class="ui  image"
          alt="address"
          bordered
          size="small"
          floated="left"
        />
        <b>1234 Address Way</b>
        <br />
        $1,000,000
        <p>
          <a href="MAILTO:dso@olshan.com" class="top20">
            <i
              aria-hidden="true"
              class="arrow alternate circle right outline icon"
            />
          </a>
        </p>
      </div>
      <div class="column">
        <Image
          src={Prop2}
          class="ui  image"
          alt="address"
          bordered
          size="small"
          floated="left"
        />
        <b>1234 Address Way</b>
        <br />
        $1,000,000
        <p>
          <a href="MAILTO:dso@olshan.com" class="top20">
            <i
              aria-hidden="true"
              class="arrow alternate circle right outline icon"
            />
          </a>
        </p>
      </div>
      <div class="column">
        <Image
          src={Prop3}
          class="ui  image"
          alt="address"
          bordered
          size="small"
          floated="left"
        />
        <b>1234 Address Way</b>
        <br />
        $1,000,000
        <p>
          <a href="MAILTO:dso@olshan.com" class="top20">
            <i
              aria-hidden="true"
              class="arrow alternate circle right outline icon"
            />
          </a>
        </p>
      </div>
      <div class="column">
        <Image
          src={Prop4}
          class="ui  image"
          alt="address"
          bordered
          size="small"
          floated="left"
        />
        <b>1234 Address Way</b>
        <br />
        $1,000,000
        <p>
          <a href="linktoprop" class="top20">
            <i
              aria-hidden="true"
              class="arrow alternate circle right outline icon"
            />
          </a>
        </p>
      </div>
    </div>
    <br />
    <Header as="h3">RECENTLY SOLD</Header>
    <hr />
    <div class="ui  four column grid">
      <div class="column">
        <Image
          src={Prop4}
          class="ui  image"
          alt="address"
          bordered
          size="small"
          floated="left"
        />
        <br />
        <b>1234 Address Way</b>
        <br />
        $1,000,000
        <p>
          <a href="MAILTO:dso@olshan.com">VIEW</a>
        </p>
      </div>
      <div class="column">
        <Image
          src={Prop3}
          class="ui  image"
          alt="address"
          bordered
          size="small"
          floated="left"
        />
        <br />
        <b>1234 Address Way</b>
        <br />
        $1,000,000
        <p>
          <a href="MAILTO:dso@olshan.com">VIEW</a>
        </p>
      </div>
      <div class="column">
        <Image
          src={Prop2}
          class="ui  image"
          alt="address"
          bordered
          size="small"
          floated="left"
        />
        <br />
        <b>1234 Address Way</b>
        <br />
        $1,000,000
        <p>
          <a href="MAILTO:dso@olshan.com">VIEW</a>
        </p>
      </div>
      <div class="column">
        <Image
          src={Prop1}
          class="ui  image"
          alt="address"
          bordered
          size="small"
          floated="left"
        />
        <br />
        <b>1234 Address Way</b>
        <br />
        $1,000,000
        <p>
          <a href="MAILTO:dso@olshan.com">VIEW</a>
        </p>
      </div>
      <br />
    </div>
    <div class="ui  four column grid">
      <div class="column">
        <Image
          src={Prop1}
          class="ui  image"
          alt="address"
          bordered
          size="small"
          floated="left"
        />
        <br />
        <b>1234 Address Way</b>
        <br />
        $1,000,000
        <p>
          <a href="MAILTO:dso@olshan.com">VIEW</a>
        </p>
      </div>
      <div class="column">
        <Image
          src={Prop2}
          class="ui  image"
          alt="address"
          bordered
          size="small"
          floated="left"
        />
        <br />
        <b>1234 Address Way</b>
        <br />
        $1,000,000
        <p>
          <a href="MAILTO:dso@olshan.com">VIEW</a>
        </p>
      </div>
      <div class="column">
        <Image
          src={Prop3}
          class="ui  image"
          alt="address"
          bordered
          size="small"
          floated="left"
        />
        <br />
        <b>1234 Address Way</b>
        <br />
        $1,000,000
        <p>
          <a href="MAILTO:dso@olshan.com">VIEW</a>
        </p>
      </div>
      <div class="column">
        <Image
          src={Prop4}
          class="ui  image"
          alt="address"
          bordered
          size="small"
          floated="left"
        />
        <br />
        <b>1234 Address Way</b>
        <br />
        $1,000,000
        <p>
          <a href="MAILTO:dso@olshan.com">VIEW</a>
        </p>
      </div>
      <br />
    </div>
    <hr />
    <br />
    <p>
      <a href="/Agents">&lt; BACK TO AGENTS PAGE</a>
    </p>
  </Segment>
);

export default ImageExampleFloated;
