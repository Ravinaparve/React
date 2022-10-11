import React from "react";

export default function RecipeList() {
  const recipes = [
    {
      id: "greek-salad",
      name: "Greek Salad",
      ingredients: ["tomatoes", "cucumber", "onion", "olives", "feta"]
    },
    {
      id: "hawaiian-pizza",
      name: "Hawaiian Pizza",
      ingredients: [
        "pizza crust",
        "pizza sauce",
        "mozzarella",
        "ham",
        "pineapple"
      ]
    },
    {
      id: "hummus",
      name: "Hummus",
      ingredients: [
        "chickpeas",
        "olive oil",
        "garlic cloves",
        "lemon",
        "tahini"
      ]
    }
  ];

  const recipesItems = recipes.map((recipe) => (
    <div key={recipe.id}>
      <h3>{recipe.name}</h3>
      <ol>
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ol>
    </div>
  ));

  return <>{recipesItems}</>;
}

//Each of the recipes already includes an id field, so that’s what the outer loop uses for its key.

//There is no ID you could use to loop over ingredients.

//However, it’s reasonable to assume that the same ingredient won’t be listed twice within the same recipe, so its name can serve as a key.
