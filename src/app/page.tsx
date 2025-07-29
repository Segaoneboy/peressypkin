import Header from "@/components/UI/Header";
import Skills from "@/components/UI/Skills";
import Projects from "@/components/UI/Projects";
import Contacts from "@/components/UI/Contacts";

export default function Home() {
  return (
      <>
        <Header/>
        <main>
            <Skills />
            <Projects />
        </main>
        <Contacts/>
      </>
  );
}
