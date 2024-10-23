import Navbar from "./component/Navbar/Navbar";
import Banner from "./component/Banner/Banner"
import OurRecipes from "./component/OurRecipes/OurRecipes";
import Card from "./component/Card/Card";
import Sidebar from "./component/Sidebar/Sidebar";

function App() {
  return (
    <>
      <header className="w-11/12 lg:4/5 mx-auto">
        <Navbar></Navbar>
        <Banner></Banner>
      </header>
      <main className="w-11/12 lg:4/5 mx-auto mb-20">
        <OurRecipes></OurRecipes>
        <div className="flex gap-5">
          <Card></Card>
          <Sidebar></Sidebar>
        </div>
      </main>
    </>
  );
}

export default App;
