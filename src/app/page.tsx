import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUsBrief from "@/components/AboutUsBrief";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Products from "@/components/Products";
import VideoShowcase from "@/components/VideoShowcase";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import DistributorCTA from "@/components/DistributorCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  // Rich SEO JSON-LD Structured Data
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://impactgrains.com/#organization",
        "name": "Impact Grains",
        "url": "https://impactgrains.com",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://impactgrains.com/#logo",
          "url": "https://impactgrains.com/images/logo.webp",
          "contentUrl": "https://impactgrains.com/images/logo.webp",
          "caption": "Impact Grains Logo",
          "width": "1024",
          "height": "360"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1075 Joseph Gomwalk Street, Gudu",
          "addressLocality": "Abuja",
          "addressRegion": "Federal Capital Territory",
          "addressCountry": "Nigeria"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+234-916-465-5254",
          "contactType": "sales",
          "areaServed": "NG"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://impactgrains.com/#website",
        "url": "https://impactgrains.com",
        "name": "Impact Grains",
        "alternateName": "Impact Grain",
        "publisher": {
          "@id": "https://impactgrains.com/#organization"
        }
      },
      {
        "@type": "Product",
        "name": "Empire Rice",
        "image": "https://impactgrains.com/images/empire%20rice.webp",
        "description": "Empire Rice is parboiled white long-grain rice, 100% stone-free, natural taste, premium quality local Nigerian rice.",
        "brand": {
          "@type": "Brand",
          "name": "Impact Grains"
        },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "NGN",
          "itemCondition": "https://schema.org/NewCondition",
          "offeredBy": {
            "@id": "https://impactgrains.com/#organization"
          }
        }
      }
    ]
  };

  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-1 flex flex-col">
        {/* Section 1 - Hero */}
        <Hero />

        {/* About Us Brief Section */}
        <AboutUsBrief />

        {/* Section 2 - About */}
        <About />

        {/* Section 3 - Why Choose Impact Grains */}
        <WhyChooseUs />

        {/* Section 4 - Products */}
        <Products />

        {/* Video Showcase Section */}
        <VideoShowcase />

        {/* Section 5 - Gallery */}
        <Gallery />

        {/* Section 6 - Testimonials */}
        <Testimonials />

        {/* Section 7 - Distributor CTA */}
        <DistributorCTA />

        {/* Section 8 - Contact */}
        <Contact />

        {/* Inject Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
