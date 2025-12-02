import type { Metadata } from "next";
import { Suspense } from "react";
import CTABanner from "@/components/cta-banner";
import FAQ from "@/components/faq";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar/navbar";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";
import AuthObserver from "@/features/auth/components/auth-observer";

export const metadata: Metadata = {
  title: "Home",
  description: "Built with AI.",
};

function HomeContent() {
  return (
    <>
      <Hero />
      <Suspense fallback={<div className="h-96 animate-pulse bg-muted" />}>
        <Features />
      </Suspense>
      <Suspense fallback={<div className="h-96 animate-pulse bg-muted" />}>
        <Pricing />
      </Suspense>
      <Suspense fallback={<div className="h-96 animate-pulse bg-muted" />}>
        <FAQ />
      </Suspense>
      <Suspense fallback={<div className="h-96 animate-pulse bg-muted" />}>
        <Testimonials />
      </Suspense>
      <CTABanner />
    </>
  );
}

export default async function Home() {
  return (
    <AuthObserver>
      <Navbar />
      <main className="pt-16 xs:pt-20 sm:pt-24">
        <Suspense
          fallback={<div className="h-screen animate-pulse bg-muted" />}
        >
          <HomeContent />
        </Suspense>
        <Footer />
      </main>
    </AuthObserver>
  );
}
