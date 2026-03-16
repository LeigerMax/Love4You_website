import Hero from "./components/hero";
import Navbar from "./components/Navbar";
import Features from "./components/features";
import Privacy from "./components/privacy";
import DownloadPage from "./download/page";
import Footer from "./components/footer";
import ScreenshotsPage from "./screenshots/page";


export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <DownloadPage />
      <Features />
      <ScreenshotsPage />
      <Privacy />
      <Footer />
    </main>
  );
}