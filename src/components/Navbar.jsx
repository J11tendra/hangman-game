import HomeNavbar from "./HomeNavbar";
import PlayNavbar from "./PlayNavbar";

import { AppContext } from "../context/Data";
import { useContext } from "react";

export default function Navbar() {
  const { activePage } = useContext(AppContext);

  return (
    <nav className="navbar flex flex-jc-spbtw-al-cnt">
      <div className="left-nav-items flex flex-js-spbtw">
        {activePage === "/" && <HomeNavbar />}
        {activePage === "/play" && <PlayNavbar />}
      </div>
      {activePage === "/play" && (
        <div className="mid-nav-items">
          <span>POINTS: 10</span>
        </div>
      )}
      <div className="right-nav-items">
        <svg
          className="svg-points-icon"
          width="70"
          height="34"
          viewBox="0 0 70 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.4966 6.72412C15.4966 6.58605 15.6085 6.47412 15.7466 6.47412H68.7466C68.8847 6.47412 68.9966 6.58605 68.9966 6.72412V26.7241C68.9966 26.8622 68.8847 26.9741 68.7466 26.9741H15.7466C15.6085 26.9741 15.4966 26.8622 15.4966 26.7241V6.72412Z"
            fill="white"
            stroke="black"
            strokeWidth="1.5"
          />
          <g clipPath="url(#clip0_28_42)">
            <path
              d="M18.2535 0.862061C9.31949 0.862061 2.05347 7.37643 2.05347 15.3862C2.05347 15.5476 2.05347 19.6897 2.05347 19.6897C2.05347 27.1077 9.31949 33.1379 18.2535 33.1379C27.1874 33.1379 34.4535 27.1077 34.4535 19.6897C34.4535 19.6897 34.4535 15.5476 34.4535 15.3862C34.4535 7.37643 27.1874 0.862061 18.2535 0.862061ZM5.65347 24.531V26.3923C4.42349 24.8269 3.61349 23.0194 3.34947 21.0775C3.94347 22.3202 4.72344 23.4713 5.65944 24.5096C5.65944 24.5149 5.65347 24.5256 5.65347 24.531ZM8.65349 29.1895C8.00549 28.743 7.40551 28.2481 6.85349 27.7209V25.6929C7.41747 26.1932 8.01751 26.6558 8.65349 27.0754V29.1895ZM11.6534 30.7979C11.0114 30.5397 10.3994 30.2439 9.81147 29.9103H9.85344V27.8016C10.4294 28.119 11.0355 28.3987 11.6534 28.6462V30.7979ZM14.6535 31.7016C14.0355 31.5725 13.4354 31.4165 12.8535 31.2283V29.0766C13.4415 29.2649 14.0415 29.4208 14.6535 29.5446V31.7016ZM17.6535 32.0513C17.0415 32.0298 16.4415 31.9814 15.8535 31.9007V29.749C16.4415 29.8296 17.0475 29.8781 17.6535 29.8996V32.0513ZM20.6534 31.9007C20.0654 31.9813 19.4654 32.0298 18.8534 32.0513V29.8996C19.4595 29.8781 20.0654 29.8296 20.6534 29.749V31.9007ZM23.6535 31.2283C23.0715 31.4166 22.4714 31.5725 21.8535 31.7016V29.5445C22.4655 29.4208 23.0654 29.2648 23.6535 29.0765V31.2283ZM24.8535 30.7979V28.6462C25.4715 28.3988 26.0775 28.119 26.6535 27.8017V29.9103H26.6955C26.1074 30.2439 25.4954 30.5397 24.8535 30.7979ZM29.6534 27.7209C29.1014 28.2481 28.5014 28.743 27.8534 29.1895V27.0754C28.4894 26.6558 29.0895 26.1932 29.6534 25.6929V27.7209ZM30.8535 26.3923V24.531C30.8535 24.5257 30.8475 24.5149 30.8475 24.5096C31.7835 23.4714 32.5635 22.3202 33.1575 21.0775C32.8934 23.0194 32.0834 24.8269 30.8535 26.3923ZM18.2535 28.7915C10.0095 28.7915 3.30144 22.7774 3.30144 15.3862C3.30144 7.99503 10.0095 1.98094 18.2535 1.98094C26.4975 1.98094 33.2055 7.99503 33.2055 15.3862C33.2055 22.7774 26.4975 28.7915 18.2535 28.7915Z"
              fill="black"
            />
            <path
              d="M5.65946 24.5095C5.65946 24.5148 5.65349 24.5256 5.65349 24.531V26.3922C4.42351 24.8268 3.61351 23.0194 3.34949 21.0775C3.94349 22.3201 4.72346 23.4713 5.65946 24.5095Z"
              fill="#F9A825"
            />
            <path
              d="M8.65352 27.0754V29.1895C8.00552 28.743 7.40554 28.2481 6.85352 27.7209V25.6929C7.41749 26.1932 8.01747 26.6558 8.65352 27.0754Z"
              fill="#F9A825"
            />
            <path
              d="M11.6535 28.6462V30.7979C11.0115 30.5397 10.3995 30.2439 9.81152 29.9103H9.8535V27.8016C10.4295 28.119 11.0355 28.3987 11.6535 28.6462Z"
              fill="#F9A825"
            />
            <path
              d="M14.6535 29.5445V31.7016C14.0355 31.5725 13.4355 31.4165 12.8535 31.2283V29.0766C13.4415 29.2648 14.0415 29.4208 14.6535 29.5445Z"
              fill="#F9A825"
            />
            <path
              d="M17.6535 29.8995V32.0512C17.0415 32.0297 16.4415 31.9813 15.8535 31.9006V29.7489C16.4415 29.8296 17.0475 29.878 17.6535 29.8995Z"
              fill="#F9A825"
            />
            <path
              d="M20.6535 29.7489V31.9006C20.0655 31.9813 19.4655 32.0297 18.8535 32.0512V29.8995C19.4595 29.878 20.0656 29.8296 20.6535 29.7489Z"
              fill="#F9A825"
            />
            <path
              d="M23.6535 29.0765V31.2282C23.0715 31.4165 22.4715 31.5725 21.8535 31.7016V29.5444C22.4655 29.4208 23.0655 29.2648 23.6535 29.0765Z"
              fill="#F9A825"
            />
            <path
              d="M26.6955 29.9103C26.1075 30.2439 25.4955 30.5397 24.8535 30.7979V28.6462C25.4715 28.3988 26.0775 28.119 26.6535 27.8017V29.9103H26.6955Z"
              fill="#F9A825"
            />
            <path
              d="M29.6535 25.693V27.721C29.1015 28.2482 28.5015 28.743 27.8535 29.1895V27.0755C28.4896 26.6558 29.0895 26.1932 29.6535 25.693Z"
              fill="#F9A825"
            />
            <path
              d="M30.8535 26.3923V24.531C30.8535 24.5257 30.8475 24.5149 30.8475 24.5095C31.7835 23.4713 32.5635 22.3201 33.1575 21.0775C32.8935 23.0194 32.0835 24.8269 30.8535 26.3923Z"
              fill="#F9A825"
            />
            <path
              d="M18.2534 1.98093C10.0094 1.98093 3.30139 7.99502 3.30139 15.3862C3.30139 22.7774 10.0094 28.7914 18.2534 28.7914C26.4974 28.7914 33.2054 22.7774 33.2054 15.3862C33.2054 7.99502 26.4974 1.98093 18.2534 1.98093ZM18.2534 26.559C11.3834 26.559 5.79144 21.5455 5.79144 15.3862C5.79144 9.22692 11.3834 4.21338 18.2534 4.21338C25.1234 4.21338 30.7154 9.22686 30.7154 15.3862C30.7154 21.5455 25.1234 26.559 18.2534 26.559Z"
              fill="#F9A825"
            />
            <path
              d="M18.2535 4.21338C11.3835 4.21338 5.7915 9.22692 5.7915 15.3862C5.7915 21.5454 11.3835 26.559 18.2535 26.559C25.1235 26.559 30.7155 21.5455 30.7155 15.3862C30.7155 9.22685 25.1235 4.21338 18.2535 4.21338ZM18.2535 25.4401C12.0675 25.4401 7.03948 20.9323 7.03948 15.3862C7.03948 9.84009 12.0675 5.33225 18.2535 5.33225C24.4395 5.33225 29.4675 9.84009 29.4675 15.3862C29.4675 20.9323 24.4395 25.4401 18.2535 25.4401Z"
              fill="black"
            />
            <path
              d="M18.2534 5.33228C12.0674 5.33228 7.03943 9.84012 7.03943 15.3862C7.03943 20.9323 12.0674 25.4401 18.2534 25.4401C24.4394 25.4401 29.4674 20.9323 29.4674 15.3862C29.4674 9.84012 24.4394 5.33228 18.2534 5.33228ZM22.8134 21.8629H12.8534C12.6434 21.8629 12.4515 21.766 12.3435 21.61C12.2355 21.4486 12.2234 21.2496 12.3195 21.0828C13.3935 19.1571 13.9155 16.8009 13.9155 13.8853C13.9155 10.7276 13.9155 7.46242 21.1455 7.39251C21.1515 7.39251 21.1515 7.39251 21.1515 7.39251C21.4815 7.39251 21.7515 7.62922 21.7515 7.92506C21.7574 8.2209 21.4935 8.46839 21.1575 8.46839C15.1155 8.52759 15.1155 10.6578 15.1155 13.8854C15.1155 14.2189 15.1095 14.547 15.0915 14.8698H19.4534C19.7834 14.8698 20.0534 15.1119 20.0534 15.4077C20.0534 15.7035 19.7834 15.9456 19.4534 15.9456H15.0195C14.8515 17.7746 14.4435 19.3722 13.7895 20.787H22.8135C23.1434 20.787 23.4134 21.0291 23.4134 21.3249C23.4134 21.6207 23.1434 21.8629 22.8134 21.8629Z"
              fill="#FFFF54"
            />
            <path
              d="M23.4135 21.325C23.4135 21.6208 23.1435 21.8629 22.8135 21.8629H12.8535C12.6434 21.8629 12.4515 21.7661 12.3435 21.61C12.2355 21.4487 12.2235 21.2496 12.3195 21.0828C13.3935 19.1571 13.9155 16.8009 13.9155 13.8853C13.9155 10.7276 13.9155 7.46243 21.1456 7.39252C21.1515 7.39252 21.1515 7.39252 21.1515 7.39252C21.4815 7.39252 21.7515 7.62923 21.7515 7.92507C21.7575 8.22091 21.4935 8.4684 21.1575 8.4684C15.1155 8.52759 15.1155 10.6578 15.1155 13.8854C15.1155 14.2189 15.1095 14.547 15.0915 14.8698H19.4535C19.7835 14.8698 20.0535 15.1119 20.0535 15.4077C20.0535 15.7036 19.7835 15.9456 19.4535 15.9456H15.0195C14.8515 17.7746 14.4435 19.3722 13.7895 20.787H22.8135C23.1435 20.7871 23.4135 21.0291 23.4135 21.325Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_28_42">
              <rect
                width="36"
                height="32.2759"
                fill="white"
                transform="translate(0.253418 0.862061)"
              />
            </clipPath>
          </defs>
        </svg>
        <span className="nav-points">10</span>
      </div>
    </nav>
  );
}