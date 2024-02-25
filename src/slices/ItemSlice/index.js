/**
 * @typedef {import("@prismicio/client").Content.ItemSliceSlice} ItemSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ItemSliceSlice>} ItemSliceProps
 * @param {ItemSliceProps}
 */
const ItemSlice = ({ slice }) => {
  return (
    <section
      className="slider"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="slider__wrapper">
        
      </div>
    </section>
  );
};

export default ItemSlice;
