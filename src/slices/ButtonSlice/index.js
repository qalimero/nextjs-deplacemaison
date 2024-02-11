/**
 * @typedef {import("@prismicio/client").Content.ButtonSliceSlice} ButtonSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ButtonSliceSlice>} ButtonSliceProps
 * @param {ButtonSliceProps}
 */
const ButtonSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for button_slice (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ButtonSlice;
