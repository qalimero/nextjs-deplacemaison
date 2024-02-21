import {PrismicRichText} from "@prismicio/react";
import React from "react";


/**
 * @typedef {import("@prismicio/client").Content.MarqueeSliceSlice} MarqueeSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MarqueeSliceSlice>} MarqueeSliceProps
 * @param {MarqueeSliceProps}
 */
const MarqueeSlice = ({ slice }) => {

  return (
    <section
      className="marquee"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="marquee__wrapper">
                  <PrismicRichText field={slice.primary.marque_list_item}
                  components={{
                    list: ({children}) => (
                        <ul className="marquee__list">
                            {Array.from({ length: 6 }, (_, index) => (
                                <React.Fragment key={index}>{children}</React.Fragment>
                            ))}
                        </ul>
                    ),
                    listItem: ({ children }) => (
                              <li className="marquee__list__item">
                                {children}
                              </li>
                    ),
                  }}
                  >
                  </PrismicRichText>
      </div>
    </section>
  );
};

export default MarqueeSlice;
