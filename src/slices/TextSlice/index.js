import {PrismicRichText} from "@prismicio/react";
import * as prismicR from '@prismicio/richtext'


/**
 * @typedef {import("@prismicio/client").Content.MarqueeSliceSlice} MarqueeSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MarqueeSliceSlice>} MarqueeSliceProps
 * @param {MarqueeSliceProps}
 */
const  components = {
  list: ({node, children}) => (
      <strong className={node.items(0).text_item}>{children}</strong>
  )
}
const MarqueeSlice = ({slice}) => {
  return (
      <section
      className = "text"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className = "text__marquee">
        <div className="text__marquee__wrapper">
          <PrismicRichText field={slice.items[1].text_item} components={components} />
        </div>

      </div>
      <div className="text__description">

      </div>
    </section>
  );
};

export default MarqueeSlice;
