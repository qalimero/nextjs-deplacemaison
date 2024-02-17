import {PrismicNextImage} from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.ButtonSliceSlice} ButtonSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ButtonSliceSlice>} ButtonSliceProps
 * @param {ButtonSliceProps}
 */
const ButtonSlice = ({ slice }) => {
  return (
    <section
        className="button"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="button__wrapper">
        <button className="button__item">
          {slice.primary.button_text}
          <div className="button__item__img">
            <PrismicNextImage className="button__item__img__icon" field={slice.primary.button_icon} />
            <PrismicNextImage className="button__item__img__bg" field={slice.primary.button_icon_bg} />
          </div>
          </button>
      </div>
    </section>
  );
};

export default ButtonSlice;
