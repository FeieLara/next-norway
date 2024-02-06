import type { Metadata } from "next";


export const metadata = {
 title: 'SEO pricing',
 description: 'Esta es la página de precios de mi servicio',
};

export default function PricingPage(){
    return(
        <>
        <span className="text-5xl"> Pricing Page</span>
        </>
    )
}