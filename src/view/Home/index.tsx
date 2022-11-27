import { ImagePNG } from "@assets/index";
import { Box, Container, Flex, Heading, Link } from "@chakra-ui/react";
import BannerImage from "@components/BannerImage";
import BannerLearnMore from "@components/BannerLearnMore";
import BrandsLogo from "@components/BrandsLogo";
import CategoriesCard from "@components/Card/CategoriesCard";
import { ProductCard } from "@components/Card/Product";
import Carousel from "@components/Carousel";
import Header from "@components/Header";
import { HeaderViewAll } from "@components/Header/HeaderViewAll";
import { mainColor } from "@theme/theme";
import Image from "next/image";
import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { SwiperSlide } from "swiper/react";
import Categories from "../../components/Categories";

type HomePageProps = {

};
const HomePage: React.FC<HomePageProps> = ({

}) => {
    const [active, setActive] = useState(false)
    const handleMouse = () => {
        setActive(!active)
    }

    return (
        <Box bg={mainColor.gray} paddingBottom={50}>
            <Header />
            <BannerLearnMore
                style={{ paddingY: '1.5rem' }}
                text="buy now, pay later starting at 0% APR"
                icon={<Image src={ImagePNG.BannerAds} alt='abc' />}
            />
            <Categories />

            <BannerImage imageSrc={ImagePNG.BannerSale} alt='banner sale' linkTo="abc" />

            <Container paddingX={5} marginY={10}>
                <HeaderViewAll title="shop by categories" />

                <Carousel slidesPerView={6} centeredSlides={false}>
                    {Array(12).fill({
                        link: 'abc',
                        name: 'Mobile phones',
                        src: ImagePNG.Categories1
                    }).map((ele, index) => (
                        <SwiperSlide key={index}><CategoriesCard src={ele.src} name={ele.name} link={ele.name} /></SwiperSlide>
                    ))}
                </Carousel>
            </Container>

            <Container paddingX={5} marginY={10}>
                <HeaderViewAll title="new products" />

                <Carousel slidesPerView={5} centeredSlides={false}>
                    {Array(12).fill({
                        link: 'abc',
                        name: '(Product 16) Sample - Computers & Accessories For Sale',
                        rate: Math.round(Math.random() * 5),
                        price: 20,
                        sale: 10,
                        color: ['black', 'gray', 'orange'],
                        src: ImagePNG.ProuductLoa1
                    }).map((product, index) => (
                        <SwiperSlide key={index}>
                            <ProductCard
                                imageSrc={[product.src]}
                                name={product.name}
                                tag='hot'
                                price={product.price}
                                rate={product.rate}
                                sale={product.sale}
                                listColor={product.color}
                            />
                        </SwiperSlide>
                    ))}
                </Carousel>
            </Container>

            <Container marginY={10}>
                <HeaderViewAll title="top brands" />

                <Carousel slidesPerView={6} pagination>
                    {Array(12).fill({
                        link: 'abc',
                        imageSrc: ImagePNG.ShopifyLogo
                    }).map((brand, index) => (
                        <SwiperSlide key={index}>
                            <BrandsLogo
                                linkTo="abc"
                                imageSrc={brand.imageSrc}
                            />
                        </SwiperSlide>
                    ))}
                </Carousel>
            </Container>
        </Box>
    );
};


export default HomePage