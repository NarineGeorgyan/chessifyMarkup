import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import News from "./components/News";
import Users from "./components/Users";
import ImagePart from "./components/ImagePart";

function App() {
  return (
    <div className="App">
      <Header />

      <main className="main">
        <ImagePart />

        <News />
        <Users />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
