import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import AttosetFeature from "../components/attoset/AttosetFeature";
import Projects from "../components/project/Projects";
import Experience from "../components/experience/Experience";
import Footer from "../components/footer/Footer";
import Cursor from "../components/cursor/Cursor";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <AttosetFeature />
        <Projects />
        <Experience />
      </main>
      <Footer />
      <Cursor />
    </>
  );
}
