// import './App.css';

import { useCallback, useEffect, useState } from 'react';

function UserOutput() {
  const [address1, setAdress1] = useState('0xBs2...ikFZ');
  const [address2, setAdress2] = useState('0xNv4...i5dg');
  const [address3, setAdress3] = useState('0xgg0...fs12');
  const [address4, setAdress4] = useState('0xoP3...iaUg');

  const [number1, setNumber1] = useState('140');
  const [number2, setNumber2] = useState('267');
  const [number3, setNumber3] = useState('465');
  const [number4, setNumber4] = useState('742');

  function makeid(length) {
    let result = '';
    let characters = '123456789abcdefABCDEF';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const randomNumber = () => {
    const random = randomIntFromInterval(1, 100);
    if (random <= 10) {
      return randomIntFromInterval(13, 10000);
    } else {
      return randomIntFromInterval(100, 1000);
    }
  };

  // function makeidNumber(length) {
  //   let result = '';
  //   let characters = '123456789';
  //   let charactersLength = characters.length;
  //   for (let i = 0; i < length; i++) {
  //     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  //   }
  //   return result;
  // }

  useEffect(() => {
    // setInterval(() => {
    //   setAdress1('0x' + '...**' + makeid(4));
    //   setNumber1(makeidNumber(3));
    //   setAdress2(address1);
    //   setNumber2(number1);
    // }, 8000);
    const interval = setInterval(() => {
      setAdress1('0x' + makeid(3) + '...' + makeid(5));
      setNumber1(randomNumber);
      setAdress2(address1);
      setNumber2(number1);
      setAdress3(address2);
      setNumber3(number2);
      setAdress4(address3);
      setNumber4(number3);
    }, 1000);
    return () => clearInterval(interval);
  }, [address1]);

  return (
    <section class="sc-a9101ce-0 dSBLtC noselect">
      <div class="sc-a9101ce-1 kwaAuB">
        <h2 class="sc-a9101ce-2 dwxKiI">User Output</h2>
      </div>
      <div class="sc-a9101ce-4 iTLCtG">
        <div class="BlockStyles__BlockStyle-sc-x6m4g3-0 fQOiIp">
          <div class="DataTableStyles__DataTableStyle-sc-ipz6cg-0 ikJPGj">
            <div class="DataTableStyles__DataTableRowStyle-sc-ipz6cg-1 fsdlSu">
              <div class="DataTableStyles__DataTableTitleStyle-sc-ipz6cg-2 indEft">
                <div class="sc-13e170f7-0 juzJhD">
                  <b>Address</b>
                </div>
              </div>
              <div class="DataTableStyles__DataTableValueStyle-sc-ipz6cg-3 fZwGEa">
                <b>Quantity</b>
                {/* <span class="InlineLoaderStyles__InlineLoaderStyle-sc-zlo4k8-0 dUxivi"> </span> */}
              </div>
            </div>
            <div class="DataTableStyles__DataTableRowStyle-sc-ipz6cg-1 fsdlSu">
              <div class="DataTableStyles__DataTableTitleStyle-sc-ipz6cg-2 indEft">{address1}</div>
              <div class="DataTableStyles__DataTableValueStyle-sc-ipz6cg-3 fZwGEa">
                {number1} USDC
                {/* <span class="InlineLoaderStyles__InlineLoaderStyle-sc-zlo4k8-0 dUxivi"> </span> */}
              </div>
            </div>
            <div class="DataTableStyles__DataTableRowStyle-sc-ipz6cg-1 fsdlSu">
              <div class="DataTableStyles__DataTableTitleStyle-sc-ipz6cg-2 indEft">{address2}</div>
              <div class="DataTableStyles__DataTableValueStyle-sc-ipz6cg-3 fZwGEa">
                {number2} USDC
                {/* <span class="InlineLoaderStyles__InlineLoaderStyle-sc-zlo4k8-0 dUxivi"> </span> */}
              </div>
            </div>
            <div class="DataTableStyles__DataTableRowStyle-sc-ipz6cg-1 fsdlSu">
              <div class="DataTableStyles__DataTableTitleStyle-sc-ipz6cg-2 indEft">{address3}</div>
              <div class="DataTableStyles__DataTableValueStyle-sc-ipz6cg-3 fZwGEa">
                {number3} USDC
                {/* <span class="InlineLoaderStyles__InlineLoaderStyle-sc-zlo4k8-0 dUxivi"> </span> */}
              </div>
            </div>
            <div class="DataTableStyles__DataTableRowStyle-sc-ipz6cg-1 fsdlSu">
              <div class="DataTableStyles__DataTableTitleStyle-sc-ipz6cg-2 indEft">{address4}</div>
              <div class="DataTableStyles__DataTableValueStyle-sc-ipz6cg-3 fZwGEa">
                {number4} USDC
                {/* <span class="InlineLoaderStyles__InlineLoaderStyle-sc-zlo4k8-0 dUxivi"> </span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserOutput;
