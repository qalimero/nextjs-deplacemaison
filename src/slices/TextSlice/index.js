import {PrismicRichText} from "@prismicio/react";
import React from "react";
/**
 * @typedef {import("@prismicio/client").Content.TextSliceSlice} TextSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextSliceSlice>} TextSliceProps
 * @param {TextSliceProps}
 */
const TextSlice = ({ slice }) => {
  const contentSlice = slice.items;
/*  for (let i = 0; i < contentSlice.length; i++) {
    let contentText = contentSlice[i];
    if (contentText.text_item[0].type === 'heading3') {
      console.log(contentText)
    }
  }
  function f() {
    return Array.from(contentSlice);
  }*/

    return (
      <section
          className="text"
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
      >
        <div className="text__wrapper">
            {slice.items.map((item, i) =>
                    <PrismicRichText key={i} field={item}
                                     components={{
                                       paragraph: ({children}) => (
                                           <p className="text__paragraph">{children}</p>
                                       ),
                                       heading3: ({children}) => (
                                           <div className="text__titles">
                                           </div>
                                       )
                                     }}
                    >
                    </PrismicRichText>
            )}
        </div>
      </section>
    );
};

export default TextSlice;
