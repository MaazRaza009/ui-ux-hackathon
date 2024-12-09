import BlueHeader from "./components/blue-header";
import Navbar from "./components/navbar";
import Carausel from "./components/caraousel";
import Editors from "./components/editorspick";
import ProductCard from "./components/products-card";
// import CardText from "./components/cards-text";
import GreenDiv from "./components/green-div";
import Whitediv from "./components/white-dic";
import Footer from "./components/footer";
import Featured from "./components/Featured";

export default function Home(){
  return(
    <div>
      <BlueHeader/>
      <Navbar/>
      <Carausel/>
      <Editors/>
      <ProductCard/>
      {/* <CardText /> */}
      <GreenDiv/>
      <Whitediv/>
      <Featured />
      <Footer/>
           
    </div>
  )
}