/**
 * @typedef {import("@prismicio/client").Content.ItemSliceSlice} ItemSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ItemSliceSlice>} ItemSliceProps
 * @param {ItemSliceProps}
 */
const ItemSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for item_slice (variation: {slice.variation}) Slices
    </section>
  );
};

export default ItemSlice;
