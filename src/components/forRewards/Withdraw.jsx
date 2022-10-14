// import './App.css';
import { useState } from 'react';
import PanelRecord from './forWithdraw/PanelRecord';
import PanelWithdraw from './forWithdraw/PanelWithdraw';

function Withdraw() {
  const [withdrawActive, setWithdrawActive] = useState(true);

  const clickOnWithdraw = () => {
    setWithdrawActive(true);
  };

  const clickOnRecord = () => {
    setWithdrawActive(false);
  };

  return (
    <>
      <div class="Box-sc-7k2blr-0 withStyledSystem-sc-16nltcn-0 brPPWQ dxaNbM"></div>

      <div class="Box-sc-7k2blr-0 withStyledSystem-sc-16nltcn-0 brPPWQ jFRrno">
        <div className="Box-sc-7k2blr-0 withStyledSystem-sc-16nltcn-0 brPPWQ ffnVwv withdraw-recordBox noselect">
          <div
            onClick={clickOnWithdraw}
            className={`withdrawArea ${withdrawActive == true ? 'active' : ' '}`}>
            <div className="withdraw">Withdraw</div>
          </div>
          <div
            onClick={clickOnRecord}
            className={`recordArea ${withdrawActive == false ? 'active' : ' '}`}>
            <div className="record ">Record</div>
          </div>
        </div>
        <div class="BlockStyles__BlockStyle-sc-x6m4g3-0 dWULCi sc-ad5319f6-0 gLvfmn">
          <div class="BlockStyles__BlockStyle-sc-x6m4g3-0 hqHkje sc-ad5319f6-0 hJvurP border-radiuse-top-0">
            <div class="Box-sc-7k2blr-0 withStyledSystem-sc-16nltcn-0 brPPWQ ffnVwv">
              {(withdrawActive && <PanelWithdraw />) || <PanelRecord />}
            </div>
            {withdrawActive && <div>Total balance:</div>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Withdraw;
