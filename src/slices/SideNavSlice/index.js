/**
 * @typedef {import("@prismicio/client").Content.SiderBarSliceSlice} SiderBarSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SiderBarSliceSlice>} SiderBarSliceProps
 * @param {SiderBarSliceProps}
 */
const SideBarSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for side_bar_slice (variation: {slice.variation})
      Slices
    </section>
  );
};

export default SiderBarSlice;
