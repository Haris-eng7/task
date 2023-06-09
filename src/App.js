import "./App.css";
import BannerSection from "./components/BannerSection";
import Footer from "./components/Footer";
import FormSection from "./components/FormSection";
import Header from "./components/Header";
import ImageWithText from "./components/ImageWithText";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <BannerSection />
        <FormSection />
        <ImageWithText />
        <Footer />
      </header>
    </div>
  );
}

export default App;
