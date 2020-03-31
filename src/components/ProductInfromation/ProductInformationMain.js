import React from 'react';
import ProductsInformation from './ProductInformation';

const graniteImage =require('../../images/1.jpg');
const quartzImage =require('../../images/6.jpg');
const quartziteImage =require('../../images/5.jpg');
const porcelainImage =require('../../images/4.jpg');
const marbleImage =require('../../images/7.jpg');

const ProductsInformationMain = (props) => {
    const productsInforData = {
        granite:{
            image:graniteImage,
            title:'Granite Countertop Pricing',
            heading:'Includes Material, Fabrication, Installation & Edge',
            priceDetail:'Starting at $799',
            priceDescription:'Only $799 up to 30SF Only $1,099 up to 40SF Only $1,299 up to 50SF',
            titleDescription:'Restrictions may apply. Subject to change without notice.'
        },
        quartz:{
            image:quartzImage,
            title:'Quartz Countertop Pricing',
            heading:'Includes Material, Fabrication, Installation & Edge',
            priceDetail:'Starting at $999',
            priceDescription:'Only $999 up to 30SF Only $1,399 up to 40SF Only $1,599 up to 50SF',
            titleDescription:'Restrictions may apply. Subject to change without notice.'
        },
        quartzite:{
            image:quartziteImage,
            title:'Quartzite Countertop Pricing',
            heading:'Includes Material, Fabrication, Installation & Edge',
            priceDetail:'Starting at only $15999',
            priceDescription:'Only $1599 up to 30SF Only $1,799 up to 40SF Only $1,999 up to 50SF',
            titleDescription:'Restrictions may apply. Subject to change without notice.'
        },
        porcelain:{
            image:porcelainImage,
            title:'Porcelain Countertop Pricing',
            heading:'Includes Material, Fabrication, Installation & Edge',
            priceDetail:'Starting at only $1599',
            priceDescription:'Only $1599 up to 30SF Only $1,799 up to 40SF Only $1,999 up to 50SF',
            titleDescription:'Restrictions may apply. Subject to change without notice.'
        },
        marble:{
            image:marbleImage,
            title:'Marble Countertop Pricing',
            heading:'Includes Material, Fabrication, Installation & Edge',
            priceDetail:'Starting at only $999',
            priceDescription:'Only $999 up to 30SF Only $1,399 up to 40SF Only $1,599 up to 50SF',
            titleDescription:'Restrictions may apply. Subject to change without notice.'
        }
    }
    return (
        <ProductsInformation data={productsInforData[props.type]} />
    );
};
export default ProductsInformationMain;