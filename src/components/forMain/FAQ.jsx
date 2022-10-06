// import './App.css';

import Question from './FAQ/Question';

function FAQ() {
  return (
    <section class="sc-a9101ce-0 dSBLtC">
      <div class="sc-a9101ce-1 kwaAuB">
        <h2 class="sc-a9101ce-2 dwxKiI">FAQ</h2>
      </div>
      <div class="sc-a9101ce-4 iTLCtG">
        <Question
          title="What is aPool?"
          text={[
            <p>
              aPool is a unique opportunity to create a stream of passive income without making an
              investment. It utilizes smart contracts to increase the margin given out to the pool
              trading team by exchanges, in return allowing for higher returns for the team and, in
              turn, up to 15% a month for the users.
            </p>,
          ]}
        />
        <Question
          title="How does aPool work?"
          text={[
            <p>
              By connecting customers' wallets to the aPool platform, the exchange will see that as
              valid collateral and increase our margin, allowing us to perform more frequent and…
              more profitable trades.
            </p>,
          ]}
        />
        <Question
          title="What is margin trading?"
          text={[
            <p>
              Margin trading is a method of trading assets using funds provided by the exchange in
              the form of leverage. When compared to regular trading accounts, margin accounts allow
              traders to access greater sums of capital, allowing them to leverage their positions.
            </p>,
            <p>
              Essentially, margin trading amplifies trading results so that traders are able to
              realize larger profits on successful trades. This ability to expand trading results
              makes margin trading especially popular in low-volatility markets, particularly the
              international Forex market. Still, margin trading is also used in stock, commodity,
              and cryptocurrency markets.
            </p>,
          ]}
        />
        <Question
          title="How is aPool secure?"
          text={[
            <p>
              We do not require you to invest or purchase a native token. At no point in time will
              we or the exchanges attempt to withdraw your funds.
            </p>,
            <p>
              Due to the nature of the smart contract, your funds are protected by a "glass screen"
              that allows us to use the connected wallets to increase the margin we trade on without
              risking them directly.
            </p>,
            <p>NO RISK IS TRANSFERRED TO YOU BY CONNECTING YOUR WALLET.</p>,
          ]}
        />
        <Question
          title={'What is the difference between medium-volatility and high risk margin trading?'}
          text={[
            <p>
              <b>Medium-volatility</b> - Bitcoin, Litecoin, Ethereum, Solana, DOT, XRP (IMAGES)
            </p>,
            <p>
              Average income per month is about 38-40%. Of these, we send 10% to our partners for
              their input. After each trading session we withdraw funds in USDT and close trades
              until the next day.
            </p>,
            <p>
              <b>High-risk</b>
            </p>,
            <p>
              These are all new coins and tokens that hit exchanges and we are among the first to
              buy tokens at 5% of the capital allocated to this particular strategy.
            </p>,
            <p>
              Average returns range from 40-150% per month. If selected, you get from 7-15% per
              month.
            </p>,
          ]}
        />
        <Question title="aPool Referral Program" />
        <Question title="How to claim refferal reward?" />
      </div>
    </section>
  );
}

export default FAQ;
