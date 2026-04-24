import { Footer } from "../../components/layout/footer"
import { Header } from "../../components/layout/header"
import { SectionBenefits } from "../../components/layout/sections/sectionBenefits"
import { SectionCTA } from "../../components/layout/sections/sectionCta"
import { SectionMain } from "../../components/layout/sections/sectionMain"
import { SectionShowcase } from "../../components/layout/sections/sectionShowcase"
import { SectionSpecs } from "../../components/layout/sections/sectionSpecs"

export const Main = () => {
    return (
        <>
            <Header />
            <SectionMain />
            <SectionBenefits />
            <SectionShowcase />
            <SectionSpecs />
            <SectionCTA />
            <Footer />
        </>
    )
}