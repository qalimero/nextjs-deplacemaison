import {PrismicNextImage} from "@prismicio/next";
import {PrismicRichText} from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.ItemSliceSlice} ItemSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ItemSliceSlice>} ItemSliceProps
 * @param {ItemSliceProps}
 */
const ItemSlice = ({slice}) => {
    return (
        <section
            className="slider"
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
            <div className="slider__wrapper">
                <div className="slider__wrapper__items">
                    {slice.items.map((item, i) =>
                        <div className="slider__wrapper__item">
                            <div className="slider__inner">
                            <PrismicNextImage className="slider__wrapper__product__img" field={item.item_img}/>
                            <div className="slider__wrapper__item__bottom">
                            <PrismicNextImage className="slider__wrapper__product__label" field={item.item_label}/>
                            <p className="slider__wrapper__product__collection">{item.item_collection}</p>
                            <PrismicRichText field={item.item_title}
                                             components={{
                                                 heading4: ({children}) => (
                                                     <h4 className="slider__wrapper__product__title">{children}</h4>
                                                 )
                                             }}
                            />
                            <PrismicRichText field={item.item_price}
                                             components={{
                                                 paragraph: ({children}) => (
                                                     <p className="slider__wrapper__product__price">{children}</p>
                                                 )
                                             }}
                            />
                            <PrismicRichText field={item.item_price_discount}
                                             components={{
                                                 paragraph: ({children}) => (
                                                     <p className="slider__wrapper__product__discount">{children}</p>
                                                 )
                                             }}
                            />
                            </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ItemSlice;
