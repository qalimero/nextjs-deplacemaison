/**
 * @typedef {import("@prismicio/client").Content.MarqueeSliceSlice} MarqueeSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MarqueeSliceSlice>} MarqueeSliceProps
 * @param {MarqueeSliceProps}
 */
const MarqueeSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for marquee_slice (variation: {slice.variation})
      Slices
    </section>
  );
};

export default MarqueeSlice;
