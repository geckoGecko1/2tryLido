// import './App.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header class="ContainerStyles__ContainerStyle-sc-s3zvez-0 jZXtRO sc-10caba54-0 hdhJEX">
      <div class="sc-10caba54-1 OxIOs">
        <div class="LidoLogoStyles-sc-fifpqw-0 lcaCNs">
          <svg width="89" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.172 4.094h2.25v9.656h5.531v2.156h-7.781V4.094zm17.617 0h2.25v11.812h-2.25V4.094zm13.021 0h3.75c.774 0 1.512.162 2.212.487.7.313 1.319.738 1.856 1.275a6.078 6.078 0 0 1 1.275 1.875c.313.713.469 1.469.469 2.269s-.156 1.556-.469 2.269a6.078 6.078 0 0 1-1.275 1.875 6.435 6.435 0 0 1-1.856 1.293c-.7.313-1.438.47-2.212.47h-3.75V4.093zm3.75 9.656c.462 0 .906-.1 1.33-.3.438-.2.82-.469 1.144-.806.338-.338.6-.732.788-1.181.2-.463.3-.95.3-1.463 0-.512-.1-.994-.3-1.444a3.576 3.576 0 0 0-.788-1.2 3.717 3.717 0 0 0-1.143-.806 3.09 3.09 0 0 0-1.331-.3h-1.5v7.5h1.5zM82.558 16a5.56 5.56 0 0 1-2.213-.45 5.978 5.978 0 0 1-1.818-1.275 6.625 6.625 0 0 1-1.238-1.912A6.118 6.118 0 0 1 76.84 10c0-.838.15-1.619.45-2.344a6.304 6.304 0 0 1 1.238-1.912 5.575 5.575 0 0 1 1.818-1.275A5.367 5.367 0 0 1 82.558 4a5.24 5.24 0 0 1 2.194.469c.7.3 1.306.725 1.818 1.275a5.868 5.868 0 0 1 1.238 1.912c.312.725.469 1.506.469 2.344 0 .85-.157 1.637-.47 2.363a6.144 6.144 0 0 1-1.237 1.912 5.689 5.689 0 0 1-1.818 1.275c-.688.3-1.42.45-2.194.45zm0-2.156c.462 0 .906-.094 1.331-.281a3.31 3.31 0 0 0 1.106-.788 4.13 4.13 0 0 0 .75-1.219c.188-.475.282-.993.282-1.556 0-.563-.094-1.075-.282-1.537a3.855 3.855 0 0 0-.75-1.22 3.263 3.263 0 0 0-2.437-1.088 3.333 3.333 0 0 0-1.35.282 3.25 3.25 0 0 0-1.088.807 3.854 3.854 0 0 0-.75 1.219A4.057 4.057 0 0 0 79.09 10c0 .563.093 1.081.28 1.556.188.463.438.869.75 1.219.313.338.675.6 1.088.787a3.3 3.3 0 0 0 1.35.282z" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="m7.005 0 4.949 7.748-4.949 2.884-4.948-2.884L7.005 0zM3.572 7.381l3.433-5.376 3.434 5.376-3.434 2.002L3.572 7.38z"
              fill="#00A3FF"
            />
            <path
              d="M6.998 12.335 1.258 8.99l-.157.245a6.999 6.999 0 1 0 11.796 0l-.157-.245-5.742 3.346z"
              fill="#00A3FF"
            />
          </svg>
        </div>
      </div>
      <div class="sc-9a13c5a1-0 dXUYPd">
        <Link to={'/'} class="sc-9a13c5a1-1 lovFKf">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.988 9.05a1 1 0 01.89.55 1 1 0 01-.08 1.04l-8 11a1 1 0 01-1.81-.59v-6h-5a1 1 0 01-.89-.64 1 1 0 01.08-1l8-11a1 1 0 011.12-.36 1 1 0 01.69 1v6h5zm-7 5v3.92l5-6.92h-4a1 1 0 01-1-1V6.13l-5 6.92h4a1 1 0 011 1z"
            />
          </svg>
          <span>Start</span>
        </Link>

        <Link to={'/rewards'} class="sc-9a13c5a1-1 pSWez">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.4 7.6h.9a2.7 2.7 0 012.7 2.7v7.2a2.7 2.7 0 01-2.7 2.7H5.7A2.7 2.7 0 013 17.5V6.7A2.7 2.7 0 015.7 4h9a2.7 2.7 0 012.7 2.7v.9zm-2.7-1.8h-9a.9.9 0 100 1.8h9.9v-.9a.9.9 0 00-.9-.9zm4.5 9h-.9a.9.9 0 110-1.8h.9v1.8zm-.9-3.6h.9v-.9a.9.9 0 00-.9-.9H5.7a2.7 2.7 0 01-.9-.153V17.5a.9.9 0 00.9.9h12.6a.9.9 0 00.9-.9v-.9h-.9a2.7 2.7 0 010-5.4z"
            />
          </svg>
          <span>Rewards</span>
        </Link>
      </div>
      <div class="sc-10caba54-2 iyCGYJ">
        <button type="button" class="ButtonStyles__ButtonStyle-sc-gzfh1w-0 kehQmq">
          <span class="ButtonStyles__ButtonContentStyle-sc-gzfh1w-2 kdqiBT">Connect wallet</span>
        </button>
        <button
          type="button"
          class="ButtonStyles__ButtonStyle-sc-gzfh1w-0 fozxxf sc-da274e2e-0 OwrAb">
          <span class="ButtonStyles__ButtonContentStyle-sc-gzfh1w-2 kdqiBT">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19 12.63A7.015 7.015 0 1111.37 5 5.456 5.456 0 0019 12.63z"
              />
            </svg>
          </span>
        </button>
      </div>
    </header>
  );
}

export default Header;
