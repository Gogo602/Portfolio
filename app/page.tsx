import Footer from '@/components/Footer';
import Hero from '@/components/hero';
import Navbar from '@/components/navbar'
import SelectedWork from '@/components/selectedWork'
import Skills from '@/components/Skills';
export default function Home() {
  return (
    <div className="bg-gradient-to-r from-gray-900 opacity-96 to-green-950 min-h-screen">
      <Navbar />
      <Hero/>
      <SelectedWork />
      <Skills />
      <Footer/>
    </div>
  );
}
