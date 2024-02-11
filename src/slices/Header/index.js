import {PrismicRichText, PrismicText} from "@prismicio/react";
import {PrismicNextImage} from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.HeaderSlice} HeaderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeaderSlice>} HeaderProps
 * @param {HeaderProps}
 */
const Header = ({ slice }) => {
  return (
    <header
      className="header"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <section className="header__wrapper">
        <div className="header__wrap__logo-items">
          <div className="header__inner__logo-items">
            <PrismicNextImage className="logo" field={slice.primary.logo}/>
            <PrismicNextImage className="logo logo--hidden" field={slice.primary.logo}/>
          </div>
        </div>
        <div className="header__badge">
          <span>{slice.primary.ink_mode}</span>
        </div>
        <div className="header__cart">
          <span className="header__cart">{slice.primary.cart}</span>
        </div>
      </section>
    </header>
  );
};

export default Header;
