import {PrismicRichText} from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.HeaderSliceSlice} HeaderSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeaderSliceSlice>} HeaderSliceProps
 * @param {HeaderSliceProps}
 */
const TitleSlice = ({slice}) => {
    return (
        <section
            className="titles"
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
            {/*tout le title__wraprer devient un H2*/}
            <div className="titles__wrapper">
                <PrismicRichText
                    field={slice.primary.title}
                    components={{
                        heading1: ({children}) => (
                            <h1 className="title-1">{children}</h1>
                        ),
                    }}
                />
                <div className="titles__content">
                    <PrismicRichText
                        field={slice.primary.title_line_two}
                        components={{
                            heading1: ({children}) => (
                                <h1 className="title-1 title-1--left">{children}</h1>
                            ),
                        }}
                    />
                    <div className="title-2__container">
                        <PrismicRichText field={slice.primary.subtitle}></PrismicRichText>
                        <PrismicRichText field={slice.primary.subtitle_line_two}></PrismicRichText>
                    </div>
                </div>
            </div>
            {/*tout le title__wraprer devient un H2*/}
        </section>
    );
};

export default TitleSlice;
