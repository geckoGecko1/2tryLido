// import './App.css';

import ConnectWallet from './forMain/ConnectWallet';
import FAQ from './forMain/FAQ';
import Statistics from './forMain/Statistics';
import PoolData from './forMain/PoolData';
import UserOutput from './forMain/UserOutput';

function Main() {
  return (
    <main class="ContainerStyles__ContainerStyle-sc-s3zvez-0 UpEGe sc-ac9b0f6d-0 vDCkH">
      <ConnectWallet />
      <PoolData />
      <Statistics />
      <UserOutput />
      <FAQ />
    </main>
  );
}

export default Main;
