// OneDrinkPage.js
import { useParams } from "react-router-dom";

export default function OneDrink({ match }) {
  const { drinkId } = useParams();

  const drink = {
    id: 1,
    category_id: 7,
    active: true,
    name: "Espresso",
    description:
      "Erős, koncentrált kávé, melyet forró vízzel préselnek át finom őrölt kávébabokon.",
    units: [
      {
        id: 1,
        drink_id: 1,
        amount: 1,
        unit_price: 450,
        unit: null,
      },
    ],
    category: {
      id: 7,
      parent_id: 1,
      name: "Kávék",
    },
  };

  if (!drink) {
    return <div>Drink not found!</div>;
  }

  return (
    <div>
      <h2>Drink Details</h2>
      <h3>#{drinkId} {drink.name}</h3>
      <p>Description: {drink.description}</p>
      <p>Price: ${drink.units[0].unit_price.toFixed(2)}</p>
      {/* Add more details as needed */}
    </div>
  );
}
