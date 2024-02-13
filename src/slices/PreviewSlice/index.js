import {PrismicNextImage} from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.PreviewSliceSlice} PreviewSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PreviewSliceSlice>} PreviewSliceProps
 * @param {PreviewSliceProps}
 */
const PreviewSlice = ({ slice }) => {
  return (
    <section
      className="preview"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="preview__wrapper">
        <PrismicNextImage field={slice.items[i].preview_img}/>

      </div>
    </section>
  );
};

export default PreviewSlice;
