// import './App.css';
import usdc from '../../../assets/img/usdc.png';

function PanelWithdraw() {
  return (
    <>
      <span class="Box-sc-7k2blr-0 withStyledSystem-sc-16nltcn-0 brPPWQ ikQVfU">
        <label class="InputStyles__InputWrapperStyle-sc-kdtshm-0 gPQpbf sc-c9951d72-0 ekXqsL">
          <span class="InputStyles__InputContentStyle-sc-kdtshm-1 gcBjxM">
            <input
              type="text"
              placeholder="Enter amount "
              aria-invalid="false"
              spellcheck="false"
              class="InputStyles__InputStyle-sc-kdtshm-2 WHtZg"
            />
          </span>
          <div className="usdcLable noselect">
            <div className="usdcVertecal"> |</div>
            <img className="usdcLable_img" src={usdc} />
            <div className="usdcText"> USDC</div>
          </div>
        </label>
      </span>
      <div class="Box-sc-7k2blr-0 withStyledSystem-sc-16nltcn-0 brPPWQ epiThS"></div>
      <div class="Box-sc-7k2blr-0 withStyledSystem-sc-16nltcn-0 brPPWQ ijcZvh">
        <button disabled type="button" class="ButtonStyles__ButtonStyle-sc-gzfh1w-0 cyZqyk">
          <span class="ButtonStyles__ButtonContentStyle-sc-gzfh1w-2 hBoswx">Confirm</span>
        </button>
      </div>
    </>
  );
}

export default PanelWithdraw;
