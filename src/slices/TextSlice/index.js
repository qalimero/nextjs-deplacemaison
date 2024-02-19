import {PrismicRichText} from "@prismicio/react";
import * as prismicR from '@prismicio/richtext'


/**
 * @typedef {import("@prismicio/client").Content.MarqueeSliceSlice} MarqueeSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MarqueeSliceSlice>} MarqueeSliceProps
 * @param {MarqueeSliceProps}
 */

const MarqueeSlice = ({slice}) => {
  return (
      <section
      className = "list"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className = "text__wrapper">
          {slice.items.map((item, i) => {
              if (item.type === 'paragraph' && item.type === 'heading2') {
                  return (
                      <div key={i} className="text__container">
                          <PrismicRichText
                              field={item.text_item}
                              components={{
                                  paragraph: ({ children }) => (
                                      <p key={i} className="text__edito__item">
                                          {children}
                                      </p>
                                  ),
                                  heading2: ({ children }) => (
                                      <h2 key={i} className="text__title-2__item">
                                          {children}
                                      </h2>
                                  ),
                              }}
                          />
                      </div>
                  );
              } else {
                  return (
                      <div key={i} className="list__container">
                          <PrismicRichText
                              field={item.text_item}
                              components={{
                                  list: ({ children }) => (
                                      <ul key={i} className="list__edito__items">
                                          {children}
                                      </ul>
                                  ),
                              }}
                          />
                      </div>
                  );
              }
          },
          )}
      </div>
      </section>
  );
};

export default MarqueeSlice;
