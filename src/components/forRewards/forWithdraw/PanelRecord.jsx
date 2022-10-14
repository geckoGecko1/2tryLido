// import './App.css';
import { useState } from 'react';
import usdc from '../../../assets/img/usdc.png';
import OutputBlock from './forPanelRecord/OutputBlock';
import RewardBlock from './forPanelRecord/RewardBlock';
import WithdrawBlock from './forPanelRecord/WithdrawBlock';

function PanelRecord() {
  const [acitveLi, setActiveLi] = useState(1);

  const changeActiveLi = (id) => {
    setActiveLi(id);
  };

  return (
    <>
      <div className="record_menu">
        <ul className="record_menu_ul noselect">
          <li
            className={`li-1 ${acitveLi == 1 ? 'active-li' : ' '}`}
            onClick={() => changeActiveLi(1)}>
            Withdraw
          </li>
          <li
            className={`li-2 ${acitveLi == 2 ? 'active-li' : ' '}`}
            onClick={() => changeActiveLi(2)}>
            Output
          </li>
          <li
            className={`li-3 ${acitveLi == 3 ? 'active-li' : ' '}`}
            onClick={() => changeActiveLi(3)}>
            Reward
          </li>
        </ul>
      </div>
      {acitveLi == 1 && <WithdrawBlock />}
      {acitveLi == 2 && <OutputBlock />}
      {acitveLi == 3 && <RewardBlock />}
    </>
  );
}

export default PanelRecord;
