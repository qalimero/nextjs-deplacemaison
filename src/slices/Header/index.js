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
        <div className="header__logo-items">
          <PrismicNextImage className="logo" field={slice.primary.logo}/>
          <PrismicNextImage className="logo logo--hidden"  field={slice.primary.logo}/>
        </div>
        <span className="header__badge">{slice.primary.ink_mode}</span>
        <span className="header__cart">{slice.primary.cart}</span>
      </section>
    </header>
  );
};

export default Header;
