import PropTypes from "prop-types";

const Sidebar = ({
  recipeQueue,
  handleRemove,
  preparedRecipe,
  calculteTimeAndCalories,
  totalTime,
  totalCalories,
}) => {
  return (
    <div className="w-[38%] border-2 rounded-xl p-4">
      {/* Want to Cook Table */}
      <div className="overflow-x-auto">
        <h3 className="text-center text-2xl text-dark2 font-semibold border-b-2 pb-3">
          Want to cook: {recipeQueue.length}
        </h3>
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>

          {recipeQueue?.map((recipe, index) => (
            <tbody key={index}>
              <tr className="hover">
                <th>{index + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time}</td>
                <td>{recipe.calories}</td>
                <td>
                  <button
                    onClick={() => {
                      handleRemove(recipe.recipe_id);
                      calculteTimeAndCalories(
                        recipe.preparing_time,
                        recipe.calories
                      );
                    }}
                    className="text-base text-darkShade font-medium bg-btnBg px-3 py-1 rounded-full"
                  >
                    Preparing
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>

      {/* Currently Cooking Table */}
      <div className="overflow-x-auto mt-12">
        <h3 className="text-center text-2xl text-dark2 font-semibold border-b-2 pb-3">
          Currently cooking: {preparedRecipe.length}
        </h3>
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {preparedRecipe?.map((recipe, index) => (
              // <tbody key={index}>
              <tr key={index} className="hover">
                <th>{index + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time}</td>
                <td>{recipe.calories}</td>
              </tr>
              // </tbody>
            ))}
            <tr className="border-none">
              <th></th>
              <td>Total</td>
              <td>Time = {totalTime}</td>
              <td>Time = {totalCalories}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  recipeQueue: PropTypes.array,
  handleRemove: PropTypes.func,
  preparedRecipe: PropTypes.array,
  // calculteTimeAndCalories: PropTypes.func,
  // totalTime: PropTypes.string,
  // totalCalories: PropTypes.string,
};

export default Sidebar;
