import Navbar from "./component/Navbar/Navbar";
import Banner from "./component/Banner/Banner"
import OurRecipes from "./component/OurRecipes/OurRecipes";

function App() {
  return (
    <>
      <header className="w-11/12 lg:4/5 mx-auto">
        <Navbar></Navbar>
        <Banner></Banner>
      </header>
      <main>
        <OurRecipes></OurRecipes>
      </main>
    </>
  );
}

export default App;
