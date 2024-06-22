function Home() {
  return (
    <div
      className="relative h-[30rem] w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <div className="bg-white bg-opacity-70 p-8 rounded-lg shadow-lg max-w-2xl">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 dark:text-gray-700">
            Providing the Best Recipes
          </h1>
          <p className="mb-4 text-lg text-gray-700 dark:text-gray-700">
            Discover a world of culinary delights with our meticulously curated
            recipes.
          </p>
          <p className="mb-4 text-lg text-gray-700 dark:text-gray-700">
            Join our community of food enthusiasts and elevate your cooking
            skills.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 dark:bg-blue-500 dark:hover:bg-blue-600">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
