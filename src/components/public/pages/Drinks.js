// import Cards from "../components/basics/Cards";
import "./drinks.css";
import drinks from "./menu.json";

export default function DrinksPage() {
  console.log(drinks);
  return (
    <div class="menu">
      <h2>Itallap</h2>
      {Object.keys(drinks).map((category, i) => (
        <DrinkMainCategory key={i} category={drinks[category]} />
      ))}
    </div>
  );
}

function DrinkMainCategory(props) {
  console.log(props);
  return (
    <>
      <h3>{props.category.name}</h3>
      {Object.keys(props.category.subcategory).map((category, i) => (
        <DrinkSubCategory
          key={i}
          category={props.category.subcategory[category]}
        />
      ))}
      {Object.keys(props.category.drinks).map((category, i) => (
        <Drink key={i} drink={props.category.drinks[category]} />
      ))}
    </>
  );
}

function DrinkSubCategory(props) {
  console.log(props);
  return (
    <>
      <h4>{props.category.name}</h4>
    </>
  );
}

function Drink(props) {
  console.log(props.drink);
  return (
    <>
      <h5>{props.drink.name}</h5>
      {Object.keys(props.drink.units).map((idx, i) => (
        <DrinkUnit key={i} unit={props.drink.units[idx]} />
      ))}
    </>
  );
}

function DrinkUnit(props) {
  return (
    <div>
      {props.unit.amount} {props.unit.unit ?? "pohár"} {props.unit.unit_price}
    </div>
  );
}
