import Price from "../Price/Price";
export default function Schengen_Visa(){



    const Schengen_visaData = [
        {
            title: "Schengen Tourist Visa",
            price: "€80",
            description: "For individuals visiting Schengen Area countries for tourism, business, or family visits.",
            features: [
                "Stay up to 90 days within a 180-day period",
                "Multiple entries",
                "Processing time: 15 days",
                "Covers 26 European countries"
            ],
            link: "https://ec.europa.eu/home-affairs/policies/schengen-visas_en"
        },
        {
            title: "Schengen Business Visa",
            price: "€80",
            description: "For business professionals attending meetings, conferences, or work-related events in the Schengen Area.",
            features: [
                "Stay up to 90 days",
                "Multiple entries",
                "Processing time: 10-15 days",
                "Requires proof of business activity"
            ],
            link: "https://ec.europa.eu/home-affairs/policies/schengen-visas_en"
        },
        {
            title: "Schengen Family Reunion Visa",
            price: "€80",
            description: "For individuals reuniting with family members who are citizens or residents of a Schengen Area country.",
            features: [
                "Valid for family members of EU residents",
                "Stay over 90 days",
                "Pathway to residency",
                "Includes spouse and children"
            ],
            link: "https://ec.europa.eu/home-affairs/policies/schengen-visas_en"
        },
        {
            title: "Schengen Medical Treatment Visa",
            price: "€80",
            description: "For individuals seeking medical treatment in Schengen Area countries.",
            features: [
                "Stay for up to 90 days",
                "Multiple entries",
                "Requires proof of treatment",
                "Covers 26 European countries"
            ],
            link: "https://ec.europa.eu/home-affairs/policies/schengen-visas_en"
        },
        {
            title: "Schengen Student Visa",
            price: "€80",
            description: "For students pursuing academic or vocational training in a Schengen Area country.",
            features: [
                "Stay over 90 days",
                "Valid for duration of studies",
                "Includes spouse or children",
                "Renewable"
            ],
            link: "https://ec.europa.eu/home-affairs/policies/schengen-visas_en"
        },
        {
            title: "Schengen Transit Visa",
            price: "€80",
            description: "For travelers passing through the Schengen Area on their way to a non-Schengen destination.",
            features: [
                "Stay up to 5 days",
                "Single or double entry",
                "Transit through Schengen airports",
                "Short-term visa"
            ],
            link: "https://ec.europa.eu/home-affairs/policies/schengen-visas_en"
        }
    ];
    


    return(

        <>
            
            <Price pricingData={Schengen_visaData} name="Schengen"/>
        
        </>
    )
}