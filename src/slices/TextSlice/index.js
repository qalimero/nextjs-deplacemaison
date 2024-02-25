import {PrismicRichText} from "@prismicio/react";
import React from "react";

/**
 * @typedef {import("@prismicio/client").Content.TextSliceSlice} TextSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextSliceSlice>} TextSliceProps
 * @param {TextSliceProps}
 */
const TextSlice = ({slice}) => {

    return (
        <section
            className="text"
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
            <div className="text__wrapper">
                {slice.items.map((item, i) =>
                        <PrismicRichText
                            field={item.text_item}
                            components={{
                                paragraph: ({children}) => (
                                    <div className="text__paragraph__items">
                                        <p className="text__paragraph">{children}</p>
                                    </div>
                                ),
                                heading3: ({children}) => (
                                    <div className="titles__wrapper">
                                        <h3 className="title-3"> {children}</h3>
                                    </div>
                                ),
                            }}
                        >
                        </PrismicRichText>
                )},
            </div>
        </section>
    );
};

export default TextSlice;
