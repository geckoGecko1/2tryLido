// import './App.css';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function RewardsHistory() {
  const sortRef = useRef(null);

  const [stateOfCheckMark, setStateOfCheckMark] = useState(false);
  const [popupState, setPopupState] = useState(false);

  const [popupNameState, setPopupNameState] = useState('USD');

  const ChangeStateOfCheckMark = () => {
    setStateOfCheckMark(!stateOfCheckMark);
    console.log('in Function', stateOfCheckMark);
  };

  const changepPopupState = () => {
    setPopupState(!popupState);
  };

  const changePopupNameState = (name) => {
    setPopupNameState(name);
    setPopupState(false);
  };

  useEffect(() => {
    const handelSortOutside = (event) => {
      const _event = event;
      if (sortRef.current && !_event.path.includes(sortRef.current)) {
        setPopupState(false);
      }
    };
    document.body.addEventListener('click', handelSortOutside);

    return () => {
      document.body.removeEventListener('click', handelSortOutside);
    };
  }, []);

  return (
    <>
      <div class="Box-sc-7k2blr-0 withStyledSystem-sc-16nltcn-0 brPPWQ dxaNbM"></div>
      <div class="Box-sc-7k2blr-0 withStyledSystem-sc-16nltcn-0 brPPWQ cCmFjS">
        <div class="BlockStyles__BlockStyle-sc-x6m4g3-0 zeCCr sc-ad5319f6-0 dNJDEI">
          <div class="Box-sc-7k2blr-0 withStyledSystem-sc-16nltcn-0 brPPWQ kEivEW">
            <div class="Box-sc-7k2blr-0 withStyledSystem-sc-16nltcn-0 brPPWQ knYknU">
              <div class="Box-sc-7k2blr-0 withStyledSystem-sc-16nltcn-0 brPPWQ ekLblf">
                <div class="Box-sc-7k2blr-0 withStyledSystem-sc-16nltcn-0 brPPWQ dfGzxs">
                  Reward history
                </div>
                <div class="Box-sc-7k2blr-0 withStyledSystem-sc-16nltcn-0 brPPWQ jDhufL">
                  <div class="Box-sc-7k2blr-0 withStyledSystem-sc-16nltcn-0 brPPWQ cdrfwP">
                    <div class="Box-sc-7k2blr-0 withStyledSystem-sc-16nltcn-0 brPPWQ">
                      <label class="InputStyles__InputWrapperStyle-sc-kdtshm-0 TevLh SelectStyles__SelectWrapperStyle-sc-1dvslu4-0 kRlWAa sc-50d58795-0 ePzspc">
                        <span class="InputStyles__InputContentStyle-sc-kdtshm-1 gRaRLP">
                          <input
                            type="text"
                            placeholder=" "
                            aria-invalid="false"
                            value="USD"
                            readonly
                            class="InputStyles__InputStyle-sc-kdtshm-2 gyVBVJ"
                          />
                        </span>
                        <span class="InputStyles__InputRightDecoratorStyle-sc-kdtshm-6 fgBlEV">
                          <div class="SelectArrowStyles__SelectArrowSmallStyle-sc-5nwf17-1 iEtTMk"></div>
                        </span>
                      </label>
                    </div>
                  </div>
                  <div
                    disabled
                    class="Box-sc-7k2blr-0 withStyledSystem-sc-16nltcn-0 sc-d667a58f-0 brPPWQ jYAoKl">
                    <a download="Lido Rewards.csv" class="sc-d667a58f-1 cKemAP" target="_self" href>
                      <button
                        disabled
                        type="button"
                        class="ButtonStyles__ButtonStyle-sc-gzfh1w-0 kAnMYE sc-d667a58f-2 ldLaJT">
                        <span class="ButtonStyles__ButtonContentStyle-sc-gzfh1w-2 hBoswx">
                          Export CSV
                        </span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div class="Box-sc-7k2blr-0 withStyledSystem-sc-16nltcn-0 brPPWQ jgTHgG">
                <div class="Box-sc-7k2blr-0 withStyledSystem-sc-16nltcn-0 brPPWQ fVIW">
                  <label class="CheckboxStyles__CheckboxWrapperStyle-sc-1wrjkg7-0 gOHDjk">
                    <input
                      onClick={ChangeStateOfCheckMark}
                      type="checkbox"
                      checked
                      class="CheckboxStyles__CheckboxInputStyle-sc-1wrjkg7-2 ezZgmm"
                    />
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="CheckboxStyles__CheckboxIconStyle-sc-1wrjkg7-1 hxwOKf">
                      {stateOfCheckMark && (
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M17.434 8.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0L7.293 12.98a1 1 0 111.414-1.414l2.02 2.02 5.293-5.293a1 1 0 011.414 0z"
                        />
                      )}
                    </svg>
                  </label>
                  <div
                    onClick={ChangeStateOfCheckMark}
                    class="Box-sc-7k2blr-0 withStyledSystem-sc-16nltcn-0 brPPWQ bZhQlM">
                    Include refferal rewards
                  </div>
                </div>
                <div class="Box-sc-7k2blr-0 withStyledSystem-sc-16nltcn-0 brPPWQ ekVDsz"></div>
              </div>
            </div>
            <div class="Box-sc-7k2blr-0 withStyledSystem-sc-16nltcn-0 brPPWQ cHmlbq">
              <div class="Box-sc-7k2blr-0 withStyledSystem-sc-16nltcn-0 brPPWQ cdrfwP">
                <div ref={sortRef} class="Box-sc-7k2blr-0 withStyledSystem-sc-16nltcn-0 brPPWQ">
                  <label class="InputStyles__InputWrapperStyle-sc-kdtshm-0 TevLh SelectStyles__SelectWrapperStyle-sc-1dvslu4-0 kRlWAa sc-50d58795-0 ePzspc">
                    <span
                      onClick={changepPopupState}
                      class="InputStyles__InputContentStyle-sc-kdtshm-1 gRaRLP">
                      <input
                        type="text"
                        aria-invalid="false"
                        value={popupNameState}
                        readonly="readonly"
                        class="InputStyles__InputStyle-sc-kdtshm-2 gyVBVJ"
                      />
                    </span>
                    <span class="InputStyles__InputRightDecoratorStyle-sc-kdtshm-6 fgBlEV">
                      <div
                        class={`SelectArrowStyles__SelectArrowSmallStyle-sc-5nwf17-1 ${
                          popupState == true ? 'hsZISl' : 'iEtTMk'
                        }`}></div>
                    </span>
                  </label>
                  <div id="lido-ui-modal-root">
                    {popupState && (
                      <div class="PopoverRootStyles__PopoverWrapperStyle-sc-1jpnpyg-0 fjUNjX">
                        <div
                          tabindex="-1"
                          role="listbox"
                          class="PopoverRootStyles__PopoverRootStyle-sc-1jpnpyg-1 bNNoIh PopoverStyles__PopoverStyle-sc-1h3f7dt-0 fgcQGl PopupMenuStyles__PopupMenuStyle-sc-tdldis-0 byyiGf ColumStyle "
                          data-placement="bottomLeft"
                          style={{ minWidth: '70px', left: '297px', top: '587px;' }}>
                          <button
                            onClick={() => changePopupNameState('USD')}
                            role="option"
                            aria-selected="false"
                            class="PopupMenuItemStyles__PopupMenuItemStyle-sc-j0keqv-0 jjIFjL ">
                            <span class="PopupMenuItemStyles__PopupMenuItemContentStyle-sc-j0keqv-1 glaQFj ColumStyle-active">
                              USD
                            </span>
                          </button>
                          <button
                            onClick={() => changePopupNameState('EUR')}
                            role="option"
                            aria-selected="false"
                            class="PopupMenuItemStyles__PopupMenuItemStyle-sc-j0keqv-0 jjIFjL">
                            <span class="PopupMenuItemStyles__PopupMenuItemContentStyle-sc-j0keqv-1 glaQFj ColumStyle-active">
                              EUR
                            </span>
                          </button>
                          <button
                            onClick={() => changePopupNameState('GBP')}
                            role="option"
                            aria-selected="false"
                            class="PopupMenuItemStyles__PopupMenuItemStyle-sc-j0keqv-0 jjIFjL">
                            <span class="PopupMenuItemStyles__PopupMenuItemContentStyle-sc-j0keqv-1 glaQFj ColumStyle-active">
                              GBP
                            </span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                {/* sdasd */}
              </div>
              <div
                disabled
                class="Box-sc-7k2blr-0 withStyledSystem-sc-16nltcn-0 sc-d667a58f-0 brPPWQ jYAoKl">
                <a download="Lido Rewards.csv" class="sc-d667a58f-1 cKemAP" target="_self" href>
                  <button
                    disabled
                    type="button"
                    class="ButtonStyles__ButtonStyle-sc-gzfh1w-0 kAnMYE sc-d667a58f-2 ldLaJT">
                    <span class="ButtonStyles__ButtonContentStyle-sc-gzfh1w-2 hBoswx">
                      Export CSV
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div class="Box-sc-7k2blr-0 withStyledSystem-sc-16nltcn-0 sc-6ee5b3c-0 brPPWQ oXzDs"></div>
          <div class="Box-sc-7k2blr-0 withStyledSystem-sc-16nltcn-0 brPPWQ bmvpDA">
            <div class="Box-sc-7k2blr-0 withStyledSystem-sc-16nltcn-0 brPPWQ jXkedI">
              Connect your wallet or enter your Ethereum address to see the stats.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RewardsHistory;
