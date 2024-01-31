/**
 * @typedef {import("@prismicio/client").Content.HeaderSliceSlice} HeaderSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeaderSliceSlice>} HeaderSliceProps
 * @param {HeaderSliceProps}
 */
const HeaderSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >

    </section>
  );
};

export default HeaderSlice;
