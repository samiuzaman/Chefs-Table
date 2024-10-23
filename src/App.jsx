import Navbar from "./component/Navbar/Navbar";
import Banner from "./component/Banner/Banner";
import OurRecipes from "./component/OurRecipes/OurRecipes";
import Card from "./component/Card/Card";
import Sidebar from "./component/Sidebar/Sidebar";
import { useState } from "react";

function App() {
  const [recipeQueue, setRecipeQueue] = useState([]);

  const addRecipeToQueue = (recipe) => {
    const isExist = recipeQueue.find(
      (previous) => previous.recipe_id === recipe.recipe_id
    );
    if (!isExist) {
      setRecipeQueue([...recipeQueue, recipe]);
    } else {
      alert("Recipe already exists");
    }
  };

  // console.log(recipeQueue);
  return (
    <>
      <header className="w-11/12 lg:4/5 mx-auto">
        <Navbar></Navbar>
        <Banner></Banner>
      </header>
      <main className="w-11/12 lg:4/5 mx-auto mb-20">
        <OurRecipes></OurRecipes>
        <div className="flex gap-5">
          <Card
            addRecipeToQueue={addRecipeToQueue}
            recipeQueue={recipeQueue}
          ></Card>
          <Sidebar recipeQueue={recipeQueue}></Sidebar>
        </div>
      </main>
    </>
  );
}

export default App;
