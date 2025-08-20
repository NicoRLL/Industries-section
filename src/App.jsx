import Hero from "./components/Hero";
import Industries from "./components/Industries";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Industries />
      <Contact />
      <Footer />
    </main>
  );
}
