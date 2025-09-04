
// import Hero from '@/components/hero';
import './globals.css';
// import RegisterForm from '@/components/RegisterForm';
import Queries from '@/components/Quries';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import Section from '@/components/Section';
import Fab from '@/components/Fab';

export default function Home() {
  return (
    <>
    <Header/>
      <Banner/>
      <Section/>
      <Fab/>
      <Queries/>
      <Footer/>
    </>
  );
}
