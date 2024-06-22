import { useState } from "react";

function Recipe() {
  const [currentPage, setCurrentPage] = useState(1);

  const recipes = [
    {
      name: "Samosa Chaat",
      description:
        "A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.",
      imageUrl:
        "https://images.unsplash.com/photo-1714799263348-41c7245cd714?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Chicken Masala",
      description:
        "A delicious Indian curry made with marinated chicken in a spiced tomato sauce.",
      imageUrl:
        "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Katora Chaat",
      description:
        "Traditional Mexican tacos with seasoned beef, lettuce, and cheese.",
      imageUrl:
        "https://www.shutterstock.com/shutterstock/photos/2395733155/display_1500/stock-photo-aloo-tokri-chaat-or-potato-basket-stuffed-chat-or-katori-chat-2395733155.jpg",
    },
    {
      name: "Frankie Roll",
      description:
        "A healthy bowl with quinoa, chickpeas, avocado, and a tahini dressing.",
      imageUrl:
        "https://www.shutterstock.com/shutterstock/photos/2112932411/display_1500/stock-photo-roll-wrap-franky-paneer-food-2112932411.jpg",
    },
    {
      name: "Mughlai Paratha",
      description:
        "A simple yet delicious pizza topped with fresh tomatoes, mozzarella, and basil.",
      imageUrl:
        "https://www.shutterstock.com/shutterstock/photos/2282193997/display_1500/stock-photo-mughlai-paratha-romanized-moglai-is-a-popular-bengali-street-food-of-soft-fried-bread-enhanced-by-a-2282193997.jpg",
    },
    {
      name: "Cold Coffee",
      description:
        "A classic salad with romaine lettuce, croutons, Parmesan cheese, and Caesar dressing.",
      imageUrl:
        "https://www.shutterstock.com/shutterstock/photos/2445871369/display_1500/stock-photo-iced-coffee-with-whipped-cream-and-caramel-sauce-on-a-black-background-copy-space-2445871369.jpg",
    },
    {
      name: "Pav Bhaji",
      description:
        "A variety of sushi rolls with fresh fish, vegetables, and rice.",
      imageUrl:
        "https://www.shutterstock.com/shutterstock/photos/2458582661/display_1500/stock-photo-pav-bhaji-is-a-fast-food-dish-from-india-thick-and-spicy-vegetable-curry-fried-and-served-with-a-2458582661.jpg",
    },
    {
      name: "Nariyal Ladoo",
      description:
        "Fluffy pancakes served with syrup, fresh fruits, and whipped cream.",
      imageUrl:
        "https://www.shutterstock.com/shutterstock/photos/1188972511/display_1500/stock-photo-coconut-sweet-laddoo-or-nariyal-ladduis-a-popular-festival-food-from-india-served-over-moody-1188972511.jpg",
    },
  ];

  const totalRecipes = recipes.length;
  const recipesPerPage = 4;
  const totalPages = Math.ceil(totalRecipes / recipesPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Recipe Collection
          </h2>

          <p className="mt-4 max-w-md mx-auto text-gray-500">
            Explore our diverse collection of recipes, crafted to bring out the
            chef in you.
          </p>
        </header>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Showing <span>{recipesPerPage * (currentPage - 1) + 1}</span> to{" "}
            <span>{Math.min(recipesPerPage * currentPage, totalRecipes)}</span>{" "}
            of {totalRecipes}
          </p>
        </div>

        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {recipes
            .slice(
              (currentPage - 1) * recipesPerPage,
              currentPage * recipesPerPage
            )
            .map((recipe, index) => (
              <li
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <a href="#" className="block overflow-hidden group">
                  <img
                    src={recipe.imageUrl}
                    alt={recipe.name}
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600">
                      {recipe.name}
                    </h3>

                    <p className="mt-2 text-gray-600">{recipe.description}</p>
                  </div>
                </a>
              </li>
            ))}
        </ul>

        <div className="mt-8 flex justify-center">
          <button
            onClick={handlePrevPage}
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            disabled={currentPage === 1}
          >
            <span className="sr-only">Previous</span>
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md ${
                currentPage === index + 1
                  ? "border-indigo-500 bg-indigo-500 text-white"
                  : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={handleNextPage}
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            disabled={currentPage === totalPages}
          >
            <span className="sr-only">Next</span>
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Recipe;
