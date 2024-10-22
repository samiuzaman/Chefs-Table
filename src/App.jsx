import Navbar from "./component/Navbar/Navbar";
import Banner from "./component/Banner/Banner"

function App() {
  return (
    <>
      <header className="w-11/12 lg:4/5 mx-auto">
        <Navbar></Navbar>
        <Banner></Banner>
      </header>
    </>
  );
}

export default App;
