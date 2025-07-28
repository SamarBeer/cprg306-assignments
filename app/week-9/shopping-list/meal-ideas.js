'use client';

import { useState, useEffect } from 'react';

async function fetchMealIdeas(ingredient) {
  if (!ingredient) return [];
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await res.json();
  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function loadMealIdeas() {
      const ideas = await fetchMealIdeas(ingredient);
      setMeals(ideas);
    }

    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="bg-white shadow-md p-4 rounded text-black w-full md:w-1/2">
      <h2 className="text-xl font-semibold mb-4">Meal Ideas for: <span className="capitalize">{ingredient}</span></h2>
      {meals.length === 0 ? (
        <p>No meal ideas found.</p>
      ) : (
        <ul className="space-y-2">
          {meals.map((meal) => (
            <li key={meal.idMeal} className="flex items-center gap-3">
              <img src={meal.strMealThumb} alt={meal.strMeal} className="w-12 h-12 rounded" />
              <span>{meal.strMeal}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
