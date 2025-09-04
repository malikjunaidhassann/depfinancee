
// import Hero from '@/components/hero';
import './globals.css';
// import RegisterForm from '@/components/RegisterForm';
import Queries from '@/components/Quries';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import Section from '@/components/Section';

export default function Home() {
  return (
    <>
    <Header/>
      <Banner/>
      <Section/>
      <Queries/>
      <Footer/>
      {/* <Hero/> */}
      {/* <RegisterForm/> */}
    </>
  );
}
