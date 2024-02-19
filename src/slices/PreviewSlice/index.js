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
        { slice.items.map((item, i) =>
          <div key={i} className="preview__wrapper__items">
            <PrismicNextImage field={item.preview_img}/>
            <p className="preview__item__text">{item.preview_order}</p>
            <p className="preview__item__text">{item.preview_label}</p>
          </div>
          )}
      </div>
    </section>
  );
};

export default PreviewSlice;
