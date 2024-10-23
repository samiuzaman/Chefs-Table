import Navbar from "./component/Navbar/Navbar";
import Banner from "./component/Banner/Banner";
import OurRecipes from "./component/OurRecipes/OurRecipes";
import Card from "./component/Card/Card";
import Sidebar from "./component/Sidebar/Sidebar";
import { useState } from "react";

function App() {
  const [recipeQueue, setRecipeQueue] = useState([]);
  const [preparedRecipe, setPreparedRecipe] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

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

  const handleRemove = (id) => {
    const deletedItem = recipeQueue.find((recipe) => recipe.recipe_id === id);
    const updatedQueue = recipeQueue.filter(
      (recipe) => recipe.recipe_id !== id
    );
    setRecipeQueue(updatedQueue);
    setPreparedRecipe([...preparedRecipe, deletedItem]);
  };

  const calculteTimeAndCalories = (time, calories) => {
    setTotalTime(totalTime + time);
    setTotalCalories(totalCalories + calories);
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
          <Sidebar
            recipeQueue={recipeQueue}
            handleRemove={handleRemove}
            preparedRecipe={preparedRecipe}
            calculteTimeAndCalories={calculteTimeAndCalories}
            totalTime={totalTime}
            totalCalories={totalCalories}
          ></Sidebar>
        </div>
      </main>
    </>
  );
}

export default App;
