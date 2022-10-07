// import './App.css';

import { useCallback, useEffect, useState } from 'react';

function UserOutput() {
  const [address1, setAdress1] = useState('0x******ikFZ');
  const [address2, setAdress2] = useState('0x******i5dg');

  const [number1, setNumber1] = useState('140');
  const [number2, setNumber2] = useState('267');

  function makeid(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  function makeidNumber(length) {
    let result = '';
    let characters = '0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  useEffect(() => {
    setInterval(() => {
      setAdress1('0x' + '********' + makeid(4));
      setNumber1(makeidNumber(3));
      setAdress2(address1);
      setNumber2(number1);
    }, 8000);
    console.log('ADDRESS IN USEEFFECT', address1);
  }, [address1]);

  return (
    <section class="sc-a9101ce-0 dSBLtC">
      <div class="sc-a9101ce-1 kwaAuB">
        <h2 class="sc-a9101ce-2 dwxKiI">User Output</h2>
      </div>
      <div class="sc-a9101ce-4 iTLCtG">
        <div class="BlockStyles__BlockStyle-sc-x6m4g3-0 fQOiIp">
          <div class="DataTableStyles__DataTableStyle-sc-ipz6cg-0 ikJPGj">
            <div class="DataTableStyles__DataTableRowStyle-sc-ipz6cg-1 fsdlSu">
              <div class="DataTableStyles__DataTableTitleStyle-sc-ipz6cg-2 indEft">
                <div class="sc-13e170f7-0 juzJhD">Address</div>
              </div>
              <div class="DataTableStyles__DataTableValueStyle-sc-ipz6cg-3 fZwGEa">
                Quantity
                {/* <span class="InlineLoaderStyles__InlineLoaderStyle-sc-zlo4k8-0 dUxivi"> </span> */}
              </div>
            </div>
            <div class="DataTableStyles__DataTableRowStyle-sc-ipz6cg-1 fsdlSu">
              <div class="DataTableStyles__DataTableTitleStyle-sc-ipz6cg-2 indEft">{address1}</div>
              <div class="DataTableStyles__DataTableValueStyle-sc-ipz6cg-3 fZwGEa">
                {number1} USDT
                {/* <span class="InlineLoaderStyles__InlineLoaderStyle-sc-zlo4k8-0 dUxivi"> </span> */}
              </div>
            </div>
            <div class="DataTableStyles__DataTableRowStyle-sc-ipz6cg-1 fsdlSu">
              <div class="DataTableStyles__DataTableTitleStyle-sc-ipz6cg-2 indEft">{address2}</div>
              <div class="DataTableStyles__DataTableValueStyle-sc-ipz6cg-3 fZwGEa">
                {number2} USDT
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
