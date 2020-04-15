import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import dso from "./images/dso.jpg";
import cwc from "./images/cwc.jpg";
import bjr from "./images/bjr.jpg";
import jms from "./images/jms.jpg";
import nco from "./images/nco.jpg";
import cfg from "./images/cfg.jpg";
import emc from "./images/emc.jpg";

const GridExampleStackable = () => (
  <Grid stackable columns={3}>
    <Grid.Row>
      <Grid.Column>
        <Segment>
          <div class="ui card">
            <div class="image">
              <img border="0" alt="Donna Olshan" src={dso} />
            </div>
            <div class="content">
              <div class="header">Donna Olshan</div>
              <div class="meta">
                <span class="date">
                  <a href="MAILTO:dso@olshan.com">dso@olshan.com</a>
                </span>
              </div>
              <div class="description">
                PRESIDENT
                <br />
                LICENSED REAL ESTATE BROKER{" "}
              </div>
            </div>
            <div class="extra content">
              <a href="/Agent" alt="AGENT BIO">
                <i
                  aria-hidden="true"
                  class="arrow alternate circle right outline icon"
                />
              </a>
            </div>
          </div>{" "}
        </Segment>
      </Grid.Column>
    </Grid.Row>

    <Grid.Column>
      <Segment>
        <div class="ui card">
          <div class="image">
            <img border="0" alt="Cynthia Crowley" src={cwc} />
          </div>
          <div class="content">
            <div class="header">Matthew</div>
            <div class="meta">
              <span class="date">
                <a href="MAILTO:cwc@olshan.com">cwc@olshan.com</a>
              </span>
            </div>
            <div class="description">
              SENIOR RELOCATION SPECIALIST
              <br />
              LICENSED ASSOCIATE REAL ESTATE BROKER{" "}
            </div>
          </div>
          <div class="extra content">
            <a href="/Agent" alt="AGENT BIO">
              <i
                aria-hidden="true"
                class="arrow alternate circle right outline icon"
              />
            </a>
          </div>
        </div>{" "}
      </Segment>
    </Grid.Column>

    <Grid.Column>
      <Segment>
        <div class="ui card">
          <div class="image">
            <img border="0" alt="Barbara Riccardi" src={bjr} />
          </div>
          <div class="content">
            <div class="header">Barbara Riccardi</div>
            <div class="meta">
              <span class="date">
                <a href="MAILTO:bjr@olshan.com">bjr@olshan.com</a>
              </span>
            </div>
            <div class="description">
              LICENSED ASSOCIATE REAL ESTATE BROKER{" "}
            </div>
          </div>
          <div class="extra content">
            <a href="/Agent" alt="AGENT BIO">
              <i
                aria-hidden="true"
                class="arrow alternate circle right outline icon"
              />
            </a>
          </div>
        </div>{" "}
      </Segment>
    </Grid.Column>

    <Grid.Column>
      <Segment>
        <div class="ui card">
          <div class="image">
            <img border="0" alt="Nathalie Corro" src={nco} />
          </div>
          <div class="content">
            <div class="header">Nathalie Corro</div>
            <div class="meta">
              <span class="date">
                <a href="MAILTO:nathalie@olshan.com">nathalie@olshan.com</a>
              </span>
            </div>
            <div class="description">
              MARKETING SPECIALIST
              <br />
              LICENSED R.E. SALESPERSON{" "}
            </div>
          </div>
          <div class="extra content">
            <a href="/Agent" alt="AGENT BIO">
              <i
                aria-hidden="true"
                class="arrow alternate circle right outline icon"
              />
            </a>
          </div>
        </div>{" "}
      </Segment>
    </Grid.Column>

    <Grid.Column>
      <Segment>
        <div class="ui card">
          <div class="image">
            <img border="0" alt="Jennifer Stutz" src={jms} />
          </div>
          <div class="content">
            <div class="header">Jennifer Stutz</div>
            <div class="meta">
              <span class="date">
                <a href="MAILTO:jms@olshan.com">jms@olshan.com</a>
              </span>
            </div>
            <div class="description">
              SENIOR RENTAL/SALES/PROPERTY MANAGEMENT SPECIALIST
              <br />
              LICENSED ASSOCIATE REAL ESTATE BROKER{" "}
            </div>
          </div>
          <div class="extra content">
            <a href="/Agent" alt="AGENT BIO">
              <i
                aria-hidden="true"
                class="arrow alternate circle right outline icon"
              />
            </a>
          </div>
        </div>{" "}
      </Segment>
    </Grid.Column>

    <Grid.Column>
      <Segment>
        <div class="ui card">
          <div class="image">
            <img border="0" alt="Emily Chen" src={emc} />
          </div>
          <div class="content">
            <div class="header">Emily Chen</div>
            <div class="meta">
              <span class="date">
                <a href="MAILTO: ecc@olshan.com">ecc@olshan.com</a>
              </span>
            </div>
            <div class="description">
              CHIEF OF RESEARCH
              <br />
              PRIVATE WEALTH REAL ESTATE SPECIALIST
              <br />
              LICENSED ASSOCIATE REAL ESTATE BROKER{" "}
            </div>
          </div>
          <div class="extra content">
            <a href="/Agent" alt="AGENT BIO">
              <i
                aria-hidden="true"
                class="arrow alternate circle right outline icon"
              />
            </a>
          </div>
        </div>{" "}
      </Segment>
    </Grid.Column>

    <Grid.Column>
      <Segment>
        <div class="ui card">
          <div class="image">
            <img border="0" alt="Caroline Mitchell Fitzgibbons" src={cfg} />
          </div>
          <div class="content">
            <div class="header">Caroline Mitchell Fitzgibbons</div>
            <div class="meta">
              <span class="date">
                <a href="MAILTO: caroline@olshan.com">caroline@olshan.com</a>
              </span>
            </div>
            <div class="description">
              THE OLSHAN GROUP
              <br />
              LICENSED R.E. SALESPERSON
            </div>
          </div>
          <div class="extra content">
            <a href="/Agent" alt="AGENT BIO">
              <i
                aria-hidden="true"
                class="arrow alternate circle right outline icon"
              />
            </a>
          </div>
        </div>{" "}
      </Segment>
    </Grid.Column>
  </Grid>
);

export default GridExampleStackable;
