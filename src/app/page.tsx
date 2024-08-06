import Layout from "@/components/Layout";
import Header from "@/components/Header";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

const Home = () => {
  return (
    <div>
      <Layout>
        <Header />
        <About />
        <Education />
        <Skills />
        <Projects />
      </Layout>
    </div>
  );
};

export default Home;
