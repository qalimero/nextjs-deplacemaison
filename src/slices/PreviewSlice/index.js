/**
 * @typedef {import("@prismicio/client").Content.PreviewSliceSlice} PreviewSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PreviewSliceSlice>} PreviewSliceProps
 * @param {PreviewSliceProps}
 */
const PreviewSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for preview_slice (variation: {slice.variation})
      Slices
    </section>
  );
};

export default PreviewSlice;
