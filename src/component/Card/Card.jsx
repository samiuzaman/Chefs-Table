import { useEffect, useState } from "react";
import { CiStopwatch } from "react-icons/ci";
import { HiOutlineFire } from "react-icons/hi2";

const Card = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("recipe.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div className="md:w-2/3">
      <div className="grid grid-cols-2 gap-y-6">
        {cards.map((card) => (
          <div
            key={card.recipe_id}
            className="card border bg-base-100 w-96 shadow-xl text-left p-6"
          >
            <figure>
              <img
                className="rounded-2xl h-52 w-full"
                src={card.recipe_img}
                alt="Shoes"
              />
            </figure>
            <div className="mt-5">
              <h3 className="card-title mb-4 text-dark2 text-xl font-semibold">{card.recipe_name}</h3>
              <p className="font-FiraSans text-dark6">{card.short_description}</p>
              <hr className="my-4" />
              <h3 className="text-dark2 mb-4 text-lg font-medium">Ingredients: {card.ingredients.length} </h3>
              <ul className="font-FiraSans text-dark6">
                {card.ingredients.map((item, idx) => (
                  <li className="list-disc ml-6 mb-2" key={idx}>
                    {item}
                  </li>
                ))}
              </ul>
              <hr className="my-4" />
              <div className="flex items-center font-FiraSans gap-8 mb-6 text-lightDark">
                <span className="flex items-center gap-1 text-base font-normal">
                  <CiStopwatch></CiStopwatch> {card.preparing_time} minutes
                </span>
                <span className="flex items-center gap-1 text-base font-normal">
                  <HiOutlineFire></HiOutlineFire> {card.calories}
                </span>
              </div>
              <button className="btn btn-color">Want to Cook</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
