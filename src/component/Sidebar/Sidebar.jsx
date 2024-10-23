import PropTypes from "prop-types";

const Sidebar = ({ recipeQueue }) => {
  return (
    <div className="w-[38%] border-2 rounded-xl p-4">
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
                    onClick={() => console.log("Preparing")}
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
    </div>
  );
};

Sidebar.propTypes = {
  recipeQueue: PropTypes.array,
};

export default Sidebar;
