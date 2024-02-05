import React, { useState } from "react";

const Header = () => {
  const [isOpen, setNavState] = useState(false);

  return (
    <div className="container navbar-container">
      <header className="navbar">
        <a href="/" className="logo" title="Home">
          <svg width="100" height="17" viewBox="0 0 100 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
              d="M8 0.5V4.5H0V16.5H8V12.5H16V0.5H8ZM4 12.5H8V8.5H12V4.5H8V8.5H4V12.5Z" fill="#2D2D2D" />
            <path d="M28.112 4.784V7.448H31.952V9.288H28.112V12.12H32.744V14H25.488V2.912H32.736L32.472 4.784H28.112Z"
              fill="#2D2D2D" />
            <path
              d="M39.1458 2.128V11.328C39.1458 11.6693 39.2418 11.9147 39.4338 12.064C39.6311 12.208 39.9004 12.28 40.2417 12.28C40.4604 12.28 40.6711 12.256 40.8737 12.208C41.0764 12.1547 41.2657 12.0933 41.4417 12.024L42.0498 13.712C41.7618 13.8613 41.4151 13.992 41.0098 14.104C40.6044 14.216 40.1324 14.272 39.5938 14.272C38.5697 14.272 37.8177 13.9787 37.3377 13.392C36.8577 12.8 36.6178 12.008 36.6178 11.016V3.856H34.1138V2.128H39.1458Z"
              fill="#2D2D2D" />
            <path d="M47.5475 4.784V7.72H51.4355V9.6H47.5475V14H44.9155V2.912H52.2035L51.9315 4.784H47.5475Z"
              fill="#2D2D2D" />
            <path
              d="M61.0532 11.552C61.0532 11.872 61.0959 12.104 61.1813 12.248C61.2719 12.392 61.4159 12.5013 61.6133 12.576L61.0933 14.24C60.5919 14.192 60.1679 14.0827 59.8213 13.912C59.4799 13.736 59.2106 13.472 59.0133 13.12C58.6879 13.5093 58.2719 13.8 57.7653 13.992C57.2586 14.1787 56.7412 14.272 56.2132 14.272C55.3386 14.272 54.6399 14.024 54.1172 13.528C53.5999 13.0267 53.3413 12.384 53.3413 11.6C53.3413 10.6773 53.7012 9.96533 54.4212 9.464C55.1466 8.96267 56.1652 8.712 57.4772 8.712H58.6213V8.392C58.6213 7.94933 58.4773 7.62133 58.1893 7.408C57.9066 7.19467 57.4906 7.088 56.9412 7.088C56.6692 7.088 56.3199 7.128 55.8932 7.208C55.4666 7.28267 55.0399 7.392 54.6133 7.536L54.0293 5.856C54.5786 5.648 55.1492 5.49067 55.7412 5.384C56.3386 5.27733 56.8719 5.224 57.3413 5.224C58.6053 5.224 59.5386 5.48267 60.1413 6C60.7493 6.512 61.0532 7.25333 61.0532 8.224V11.552ZM57.0853 12.464C57.3573 12.464 57.6426 12.384 57.9412 12.224C58.2399 12.0587 58.4666 11.8267 58.6213 11.528V10.152H57.9972C57.2932 10.152 56.7759 10.2613 56.4453 10.48C56.1146 10.6933 55.9492 11.008 55.9492 11.424C55.9492 11.7493 56.0479 12.0053 56.2453 12.192C56.4479 12.3733 56.7279 12.464 57.0853 12.464Z"
              fill="#2D2D2D" />
            <path
              d="M71.143 13.504C70.8123 13.7173 70.4123 13.8987 69.943 14.048C69.4737 14.1973 68.9457 14.272 68.359 14.272C67.2497 14.272 66.4257 13.9893 65.887 13.424C65.3483 12.8533 65.079 12.08 65.079 11.104V7.248H63.295V5.504H65.079V3.664L67.607 3.36V5.504H70.343L70.095 7.248H67.607V11.104C67.607 11.5253 67.703 11.8267 67.895 12.008C68.087 12.1893 68.3937 12.28 68.815 12.28C69.1137 12.28 69.3857 12.2453 69.631 12.176C69.8817 12.1013 70.1057 12.008 70.303 11.896L71.143 13.504Z"
              fill="#2D2D2D" />
            <path
              d="M78.2807 5.504V12.272H80.4408V14H73.3447V12.272H75.7527V7.232H73.4248V5.504H78.2807ZM76.7527 1.056C77.1901 1.056 77.5474 1.192 77.8248 1.464C78.1021 1.736 78.2408 2.07467 78.2408 2.48C78.2408 2.88533 78.1021 3.22667 77.8248 3.504C77.5474 3.776 77.1901 3.912 76.7527 3.912C76.3101 3.912 75.9474 3.776 75.6647 3.504C75.3874 3.22667 75.2487 2.88533 75.2487 2.48C75.2487 2.07467 75.3874 1.736 75.6647 1.464C75.9474 1.192 76.3101 1.056 76.7527 1.056Z"
              fill="#2D2D2D" />
            <path
              d="M85.2105 1.88V6.344C85.5678 5.96533 85.9545 5.68533 86.3705 5.504C86.7918 5.31733 87.2372 5.224 87.7065 5.224C88.4638 5.224 89.0425 5.44533 89.4425 5.888C89.8425 6.33067 90.0425 6.95467 90.0425 7.76V14H87.5145V8.464C87.5145 7.952 87.4558 7.59467 87.3385 7.392C87.2265 7.18933 87.0132 7.088 86.6985 7.088C86.5225 7.088 86.3492 7.13067 86.1785 7.216C86.0132 7.296 85.8505 7.41333 85.6905 7.568C85.5305 7.72267 85.3705 7.90667 85.2105 8.12V14H82.6825V2.128L85.2105 1.88Z"
              fill="#2D2D2D" />
            <path
              d="M97.4682 5.504V12.272H99.6283V14H92.5322V12.272H94.9402V7.232H92.6123V5.504H97.4682ZM95.9402 1.056C96.3776 1.056 96.7349 1.192 97.0123 1.464C97.2896 1.736 97.4283 2.07467 97.4283 2.48C97.4283 2.88533 97.2896 3.22667 97.0123 3.504C96.7349 3.776 96.3776 3.912 95.9402 3.912C95.4976 3.912 95.1349 3.776 94.8522 3.504C94.5749 3.22667 94.4362 2.88533 94.4362 2.48C94.4362 2.07467 94.5749 1.736 94.8522 1.464C95.1349 1.192 95.4976 1.056 95.9402 1.056Z"
              fill="#2D2D2D" />
          </svg>
        </a>
        <button onClick={() => setNavState(!isOpen)} className="menu-toggler" title="Toggle Menu">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
            className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
          </svg>
        </button>
        <nav className={`menu ${isOpen ? 'active' : ''}`}>
          <ul className="menu-items">
            <li>
              <a className="menu-item" href="#latest-work">
                Work
              </a>
            </li>
            <li>
              <a className="menu-item" href="#main-footer">
                Contact
              </a>
            </li>
            <li>
              <a className="menu-item" href="#main-footer">
                Social Links
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;