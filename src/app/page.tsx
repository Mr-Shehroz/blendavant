import Blog from "@/components/blogs";
import Choose from "@/components/choose";
import Decor from "@/components/decor";
import Footer from "@/components/footer";
import Form from "@/components/form";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Reviews from "@/components/reviews";
import Seller from "@/components/seller";
import Shipping from "@/components/shipping";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Shipping />
      <Seller />
      <Decor/>
      <Choose/>
      <Blog/>
      <Reviews/>
      <Form/>
      <Footer/>
    </div>
  );
}
