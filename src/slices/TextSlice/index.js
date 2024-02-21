import {PrismicRichText} from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.TextSliceSlice} TextSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextSliceSlice>} TextSliceProps
 * @param {TextSliceProps}
 */
const TextSlice = ({ slice }) => {
  return (
      <section
          className="text"
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
      >
        <div className="text__wrapper">
            {slice.items.map((item, i) =>
                    <PrismicRichText key={i} field={item.text_item}
                                     components={{
                                         paragraph: ({children}) => (
                                             <p className="text__paragraph">{children}</p>
                                         ),
                                         heading3: ({children}) => (
                                             <h3 className="title-3">{children}</h3>
                                         ),
                                     }}
                    >
                    </PrismicRichText>
                )}
        </div>
      </section>
  );
};

export default TextSlice;
