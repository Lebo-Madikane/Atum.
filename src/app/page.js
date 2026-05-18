import Header from "@/components/Header/Header"
import Hero from "@/components/Hero/Hero"
import About from "@/components/About/About"
import Services from "@/components/Services/Services"
import CtaForm from "@/components/CtaForm/CtaForm"
import Footer from "@/components/Footer/Footer"
import LearnMore from "@/components/LearnMore/LearnMore"
import ContactForm from "@/components/ContactForm/ContactForm"


export default function HomePage() {
    return (
        <div>
            <main>
                <Header />
                <Hero />
                <About />
                <Services />
                <CtaForm />
                <Footer />
                <LearnMore />
                <ContactForm />
            </main>
        </div>
    )
}