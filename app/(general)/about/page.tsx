import type {Metadata} from "next";

export const metadata:Metadata ={
    title: 'SEO About',
    description: 'SEO Description',
    keywords: ['About Page', 'Fernando', 'Información', '...']

};

export default function AboutPage(){
    return(
        
        <span className="text-5xl"> About Page</span>
        
     
    )
}