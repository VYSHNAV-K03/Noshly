import React from 'react';
import r1 from '../assets/recipe1.jpg';

const Recipe = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Recipe Title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-teal-600">Paneer Tikka</h1>
        <p className="mt-2 text-lg text-gray-600">A flavorful and smoky grilled paneer appetizer</p>
      </div>

      {/* Image of the Recipe */}
      <div className="mb-8 text-center">
        <img
          src={r1} // Replace with actual image path
          alt="Paneer Tikka"
          className="mx-auto rounded-lg shadow-lg w-full md:w-3/4 lg:w-1/2"
        />
      </div>

      {/* Ingredients Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-teal-500">Ingredients</h2>
        <ul className="mt-4 list-disc pl-6 text-gray-700">
          <li>250g paneer (cubed)</li>
          <li>2 tbsp yogurt</li>
          <li>1 tbsp ginger-garlic paste</li>
          <li>1 tbsp red chili powder</li>
          <li>1 tsp turmeric powder</li>
          <li>1 tsp garam masala</li>
          <li>1 tbsp lemon juice</li>
          <li>1 tbsp oil</li>
          <li>Salt to taste</li>
          <li>Fresh coriander leaves for garnishing</li>
        </ul>
      </div>

      {/* Preparation Steps Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-teal-500">Preparation Steps</h2>
        <ol className="mt-4 list-decimal pl-6 text-gray-700">
          <li>
            In a mixing bowl, add yogurt, ginger-garlic paste, red chili powder, turmeric, garam masala, lemon juice, and oil. Mix well to form a smooth marinade.
          </li>
          <li>
            Add the paneer cubes to the marinade and gently toss to coat. Let it marinate for at least 30 minutes (preferably longer for better flavor).
          </li>
          <li>
            Preheat the grill or oven to 180°C (350°F). Place the marinated paneer on skewers or a grilling tray.
          </li>
          <li>
            Grill the paneer for 12-15 minutes or until it gets a nice char and smoky flavor.
          </li>
          <li>
            Garnish with fresh coriander leaves and serve hot with green chutney and onion rings.
          </li>
        </ol>
      </div>

      {/* Tips Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-teal-500">Tips</h2>
        <ul className="mt-4 list-disc pl-6 text-gray-700">
          <li>You can use bell peppers, onions, or tomatoes along with paneer for a colorful skewered dish.</li>
          <li>If you don't have a grill, you can also make paneer tikka in a pan or air fryer.</li>
          <li>For extra flavor, add a pinch of smoked paprika to the marinade.</li>
        </ul>
      </div>

      {/* Share Button */}
      <div className="text-center mt-8">
        <button
          className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-full"
          onClick={() => alert('Share this recipe with your friends!')}
        >
          Share Recipe
        </button>
      </div>
    </div>
  );
};

export default Recipe;
