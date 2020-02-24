import React, { Component } from "react";
import { Accordion, Icon, Header } from "semantic-ui-react";

export default class AccordionExampleFluid extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <Accordion fluid styled>
        <Header as="h1">FAQ</Header>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          What is the difference between a co-op and a condo?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>
            When you own a co-op apartment you own shares in a private
            corporation, unlike a house or condo where you receive a deed.
            Owners also receive a proprietary lease that outlines the rules,
            regulations and organization of the co-op. In order to sell or rent
            your co-op apartment, you need the approval of the co-op board.
          </p>

          <p>
            When you own a condominium apartment you receive a deed and are
            assigned a block and lot for tax purposes. Real estate taxes are
            billed twice yearly by the City of New York. The condo board
            maintains a 'right of first refusal' over all sales and rentals. The
            board may elect to match an existing contract sale price and/or
            lease and all terms of a transaction. Condos tend to be in newer
            construction high rises built from 1985 on.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          What is the difference between monthly maintenance charged in a co-op
          and the monthly common charge in a condo?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
            The monthly fee charged by a co-op is called maintenance. This
            includes all the costs of operating the building including salaries
            for employees, taxes and any mortgage that might be on the building
            as a whole. The common charge is similar except that the condo does
            not have an underlying mortgage and property taxes are paid directly
            by the owner of the unit to the city.
          </p>
          <p>
            The co-op maintenance has a portion that is tax deductible. The
            deduction is generally between 40-60% depending on how much property
            tax the building pays and how much interest it pays on its
            underlying mortgage.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          What is the approval process for purchasing a co-op or condo?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
            In New York City, over 80% of the apartments available for purchase
            are in co-ops. Purchasers are required to submit a co-op board
            package which is a detailed application including a documented asset
            and liability statement, personal and business reference letters,
            two to three years tax returns plus landlord and bank reference
            letters. A formal interview is required of each applicant. Condo
            applications, as a rule, are generally far less extensive and a
            formal interview is not required. Generally, both co-ops and condos
            require credit checks of applicants.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 3}
          index={3}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          Is there an advantage to buying a co-op over a condo? Condo over a
          co-op?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
          <p>
            Prices tend to be 25-30% less for co-ops than equivalent condos, and
            there is a fair amount of control over building tenancy. Those are
            the major advantages for this type of ownership. Co-ops generally
            restrict subletting to one to two years and some charge a monthly
            fee for this privilege. Condos generally allow for unlimited
            subletting though leases must typically be at least one year in
            length.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 4}
          index={4}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          Can I make renovations in a co-op and/or a condo?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 4}>
          <p>
            Cosmetic renovations such as painting, wallpapering, etc. generally
            do not need board approval. Major renovations that require plumbing,
            electrical or wall movement need board approval. You should use a
            licensed and insured contractor. Work is generally restricted to
            Monday through Friday, 8:30 to 4:30 PM. Buildings along Fifth Avenue
            and Park Avenue may only allow renovations during the summer months.
            Some buildings will limit the number of projects occurring
            simultaneously within a building. Before purchasing an apartment
            that requires renovation, a buyer should read the building's
            alteration agreement.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 5}
          index={5}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          What are the closing costs when purchasing a Co-op?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 5}>
          <p>
            <b>ESTIMATED CLOSING COSTS</b>
            <p>Coop - Purchaser</p>
            <div role="list" class="ui bulleted list">
              <div role="listitem" class="item">
                Attorney $2,500 and up{" "}
              </div>
              <div role="listitem" class="item">
                Bank Fees $1,600 for bank attorney, application, appraisal and
                credit reports.
              </div>
              <div role="listitem" class="item">
                1% point for mortgage
              </div>
              <div role="listitem" class="item">
                Board Package application $500-$1,250{" "}
              </div>
              <div role="listitem" class="item">
                Flip tax 1-2% of the sales price depending if there is a flip
                tax in the building (may be paid by seller)
              </div>
              <div role="listitem" class="item">
                Short-term interest (1 month max.)
              </div>

              <div role="listitem" class="item">
                Move-in deposit ($500-$1,000)
              </div>

              <div role="listitem" class="item">
                Lien Search $300
              </div>

              <div role="listitem" class="item">
                Mortgage Document -Recognition Agreement fee $250.00
              </div>

              <div role="listitem" class="item">
                Mansion Tax: 1-3.90% of entire sale, depending on sale price
              </div>
            </div>

            <div role="list" class="ui list">
              <div role="listitem" class="item">
                From $1,000,000 to less than $1,999,999 the mansion tax is 1.00%
              </div>
              <div role="listitem" class="item">
                From $2,000,000 to less than $2,999,999 the mansion tax is 1.25%
              </div>
              <div role="listitem" class="item">
                From $3,000,000 to less than $4,999,999 the mansion tax is 1.50%
              </div>
              <div role="listitem" class="item">
                From $5,000,000 to less than $9,999,999 the mansion tax is 2.25%
              </div>
              <div role="listitem" class="item">
                From $10,000,000 to less than $14,999,999 the mansion tax is
                3.25%
              </div>
              <div role="listitem" class="item">
                From $15,000,000 to less than $19,999,999 the mansion tax is
                3.50%
              </div>
              <div role="listitem" class="item">
                From $20,000,000 to less than $24,999,999 the mansion tax is
                3.75%
              </div>
              <div role="listitem" class="item">
                $25,000,000 and more the mansion tax is 3.90%
              </div>
            </div>
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 6}
          index={6}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          What are the closing costs when purchasing a Condo or Townhouse?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 6}>
          <p>
            <b>ESTIMATED CLOSING COSTS</b>
            <p>Condo/Townhouse - Purchaser</p>
            <div role="list" class="ui bulleted list">
              <div role="listitem" class="item">
                Attorney $2,500 and up{" "}
              </div>
              <div role="listitem" class="item">
                Bank Fees $1,600 for bank attorney, application and credit
                reports.
              </div>
              <div role="listitem" class="item">
                1% point for mortgage
              </div>
              <div role="listitem" class="item">
                Board Package Application $500-$750{" "}
              </div>
              <div role="listitem" class="item">
                Short term interest 1 month maximum
              </div>
              <div role="listitem" class="item">
                Real Estate Tax escrow 2-6 months
              </div>

              <div role="listitem" class="item">
                Recording Fees $200
              </div>

              <div role="listitem" class="item">
                Mortgage Recording Tax is 1.8% of amount of mortgage under
                $500,000 or 1.925% of entire amount on loans over $500,000
              </div>

              <div role="listitem" class="item">
                Fee Title Insurance $450 per $100,000
              </div>

              <div role="listitem" class="item">
                Mortgage Title Insurance $200 per $100,000
              </div>

              <div role="listitem" class="item">
                Violation Search $170
              </div>

              <div role="listitem" class="item">
                Some condos require several months in common charges as a flip
                tax paid by the buyer (not refundable).
              </div>

              <div role="listitem" class="item">
                Mansion Tax: 1-3.90% of entire sale, depending on sale price
              </div>
            </div>

            <div role="list" class="ui list">
              <div role="listitem" class="item">
                From $1,000,000 to less than $1,999,999 the mansion tax is 1.00%
              </div>
              <div role="listitem" class="item">
                From $2,000,000 to less than $2,999,999 the mansion tax is 1.25%
              </div>
              <div role="listitem" class="item">
                From $3,000,000 to less than $4,999,999 the mansion tax is 1.50%
              </div>
              <div role="listitem" class="item">
                From $5,000,000 to less than $9,999,999 the mansion tax is 2.25%
              </div>
              <div role="listitem" class="item">
                From $10,000,000 to less than $14,999,999 the mansion tax is
                3.25%
              </div>
              <div role="listitem" class="item">
                From $15,000,000 to less than $19,999,999 the mansion tax is
                3.50%
              </div>
              <div role="listitem" class="item">
                From $20,000,000 to less than $24,999,999 the mansion tax is
                3.75%
              </div>
              <div role="listitem" class="item">
                $25,000,000 and more the mansion tax is 3.90%
              </div>
            </div>

            <p>
              Please note on purchases of new construction condominiums, it is
              customary for the developer to charge the purchaser the seller's
              closing costs (see below).
            </p>
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 7}
          index={7}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          What are the closing costs when selling a Co-op?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 7}>
          <p>
            <b>ESTIMATED CLOSING COSTS</b>
            <p>Co-op - Seller</p>
            <div role="list" class="ui bulleted list">
              <div role="listitem" class="item">
                Broker: 6%
              </div>
              <div role="listitem" class="item">
                Attorney: $2,500 and up
              </div>
              <div role="listitem" class="item">
                Managing Agent: $500 and up
              </div>
              <div role="listitem" class="item">
                Flip Tax: 1% to 2% of sales price if building has one
              </div>
              <div role="listitem" class="item">
                Stock Transfer: $.05/share
              </div>
              <div role="listitem" class="item">
                NYC Transfer Tax: 1% of purchaser price up to 500K. 1.425% of
                entire purchase price when price exceeds $500,000.
              </div>

              <div role="listitem" class="item">
                NY State Transfer Tax: 0.40% up to 2,999,999
              </div>

              <div role="listitem" class="item">
                NY State Transfer Tax: $3M and above 0.65%
              </div>

              <div role="listitem" class="item">
                Pay-off Bank Attorney: $300
              </div>

              <div role="listitem" class="item">
                Move-out Deposit: $500-$1,000
              </div>

              <div role="listitem" class="item">
                UCC-3 Filing Fee: $50
              </div>
            </div>
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 8}
          index={8}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          What are the closing costs when selling a Condo or Townhouse?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 8}>
          <p>
            <b>ESTIMATED CLOSING COSTS</b>
            <p>Condo/Townhouse - Seller</p>
            <div role="list" class="ui bulleted list">
              <div role="listitem" class="item">
                Broker: 6%
              </div>
              <div role="listitem" class="item">
                Attorney: $2,500 and up
              </div>
              <div role="listitem" class="item">
                Managing Agent: $500 and up
              </div>
              <div role="listitem" class="item">
                Flip Tax: 2 -3 months common charges if building has one
              </div>
              <div role="listitem" class="item">
                Title Company Fees: $200
              </div>
              <div role="listitem" class="item">
                NYC Transfer Tax: 1% of purchaser price up to 500K. 1.425% of
                entire purchase price when price exceeds $500,000.
              </div>

              <div role="listitem" class="item">
                NY State Transfer Tax: 0.40% up to 2,999,999
              </div>

              <div role="listitem" class="item">
                NY State Transfer Tax: $3M and above 0.65%
              </div>

              <div role="listitem" class="item">
                Pay-off Bank Attorney: $300
              </div>

              <div role="listitem" class="item">
                Move-out Deposit: $500-$1,000
              </div>
            </div>
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 9}
          index={9}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          What are the financing requirements when purchasing a co-op?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 9}>
          <p>
            Each building has its rules as to how much financing a purchaser is
            allowed. It is best to get this information from your broker. Most
            of the buildings between Lexington and Fifth Avenue and along
            Central Park West do not allow more than 50% financing. Some
            buildings on Fifth and Park Avenue do not allow financing at all.
            Nevertheless, there are still a good number of buildings that allow
            up to 80% financing.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 10}
          index={10}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          Is there a net worth requirement necessary for passing a co-op board?{" "}
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 10}>
          <p>
            Co-op boards scrutinize the asset and liability statements of
            applicants in order to insure that the applicant has ample cash
            reserves remaining after purchase. Once again, each building is
            different and since these are private corporations, they tend not to
            put their specific net worth requirements in writing. It is best to
            check with the managing agent of the building or consult your
            broker.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 11}
          index={11}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          How does somebody make an offer?{" "}
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 11}>
          <p>
            Offers are generally made orally, although it is recommended that
            they be put in writing and submitted to your agent. When making the
            offer, it is important to state the price, the terms of the sale
            i.e. financing, closing date and personal property included.
            Appliances, air conditioners and blinds are customarily included.
            Excluded are chandeliers, sconces and window treatments. A buyer
            profile should be included that states job position, salary and
            bonus.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 12}
          index={12}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          What can I do to prepare myself for a bidding war?{" "}
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 12}>
          <p>
            The best thing to do is to find an experienced agent. The second
            best thing is to give your agent a detailed asset and liability
            statement, a typed biography on yourself and a list of personal and
            business references. The references should be from well-respected
            individuals who have known the purchaser for a length of time and
            who would be willing to write a reference letter. In a competitive
            bidding situation, often the best offer wins but sometimes the
            seller considers which buyer has the best offer combined with their
            potential for passing the co-op board. Sometimes the best package
            wins and selling yourself as a solid buyer can help you get the
            apartment.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 13}
          index={13}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          What am I looking for in a building's financial statement?{" "}
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 13}>
          <p>
            When purchasing an apartment it is important to look at the
            financials of the co-op or condo. Financial statements will tell you
            about the building's underlying mortgage, its interest rate and when
            it comes due. Refinancing an existing loan can lead to higher
            monthly maintenance fees. Financials will inform you of any pending
            lawsuits from tenants or other parties. Financial statements will
            also tell you how much money is in the building's reserve fund. This
            is money set aside for future repairs. These are some of the major
            highlights of the statement.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 14}
          index={14}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          What are tax abatements?{" "}
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 14}>
          <p>
            Many condominiums enjoy the benefit of real estate tax abatements.
            421-A is a program in which taxes are phased in over a 12-year
            period. Generally, taxes are not paid for the first two years and
            then they are due in 20% increments every two years thereafter. This
            type of information can be found in the prospectus or black book.
            You should be able to obtain the prospectus from the listing broker
            or managing agent for the condo.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 15}
          index={15}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          Why do I need an attorney?{" "}
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 15}>
          <p>
            In New York County, brokers are prohibited from drafting contracts
            of sale. Attorneys are needed for real estate transactions. The best
            thing to do is hire an experienced real estate attorney who is
            willing to charge a flat fee.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 16}
          index={16}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          Do I need a home inspector or engineer to look at the property before
          signing a contract?{" "}
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 16}>
          <p>
            In routine co-op and condo purchases an engineer's inspection is not
            necessary because structural defects are the responsibility of the
            building. For townhouse purchases, hiring an engineer is
            recommended. The same goes for purchasing a brownstone apartment in
            a building where there are few units and a small working capital or
            reserve fund. Sometimes penthouse apartments or apartments with
            terraces in hi-rise buildings leak and in this case, we recommend an
            engineer.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 17}
          index={17}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          Who pays the commission?{" "}
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 17}>
          <p>In sales, it is customary for the seller to pay the commission.</p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 18}
          index={18}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          Who represents me?{" "}
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 18}>
          <p>
            In New York County, it is customary to have two agents. In general a
            buyer's agent represents the buyer and the listing broker represents
            the seller. Dual agency is when there is only one broker
            representing both parties and is the fiduciary of both.
          </p>
        </Accordion.Content>
      </Accordion>
    );
  }
}
