import Hero from "./components/hero";
import Navbar from "./components/Navbar";
import Features from "./components/features";
import Privacy from "./components/privacy";
import DownloadPage from "./download/page";
import Footer from "./components/footer";
import ScreenshotsPage from "./screenshots/page";
import FAQ from "./components/FAQ";


export default function Home() {
  return (
    <main id="main-content" className="min-h-screen">
      <Navbar />
      <Hero />
      <DownloadPage />
      <Features />
      <ScreenshotsPage />
      <FAQ />
      <Privacy />
      <Footer />
    </main>
  );
}