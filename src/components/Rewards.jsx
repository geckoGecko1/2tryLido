// import './App.css';
import './forRewards/rewards.css';
import RewardsBalance from './forRewards/RewardsBalance';
import RewardsHistory from './forRewards/RewardsHistory';
import Withdraw from './forRewards/Withdraw';

function Rewards() {
  return (
    <div id="__next" data-reactroot>
      <div class="Toastify"></div>
      <main class="ContainerStyles__ContainerStyle-sc-s3zvez-0 cywrJc sc-1982e5dc-0 xvMDJ">
        <h1 class="HeadingStyles__H1Style-sc-u5f2uf-1 hpzOqt sc-6d14a0be-0 kjrMnG">
          <div class="Box-sc-7k2blr-0 withStyledSystem-sc-16nltcn-0 brPPWQ hOwAWP">
            Reward History
          </div>
        </h1>
        <h4 class="sc-6d14a0be-1 geYLLk">Track your earnings and referral rewards.</h4>
        <RewardsBalance />
        <RewardsHistory />
        <Withdraw />
      </main>
    </div>
  );
}

export default Rewards;
