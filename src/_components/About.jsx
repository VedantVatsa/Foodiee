function About() {
  return (
    <section className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <header className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          About SugamRasoi
        </h2>

        <p className="mt-4 max-w-3xl text-gray-500 mx-auto">
          Welcome to SugamRasoi, your ultimate destination for discovering
          delicious recipes, culinary tips, and kitchen inspiration. Our mission
          is to make cooking easy, enjoyable, and accessible for everyone.
        </p>
      </header>

      <div className="mt-8 space-y-12">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRlYW18ZW58MHx8MHx8fDA%3D" // Replace with your actual image path
            alt="SugamRasoi Team"
            className="w-full h-64 lg:w-1/2 object-cover rounded-lg shadow-lg"
          />

          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-900">
              Our Journey
            </h3>
            <p className="mt-4 text-gray-500">
              SugamRasoi began as a humble YouTube channel where we shared our
              love for cooking with the world. Over time, our passion for food
              and dedication to creating simple yet delectable recipes resonated
              with viewers, leading to a thriving online community of food
              enthusiasts.
            </p>
            <p className="mt-4 text-gray-500">
              Today, SugamRasoi is more than just a recipe website. We are a
              community of food lovers who believe that cooking should be fun,
              creative, and stress-free. Whether you are a seasoned chef or a
              beginner in the kitchen, our recipes are designed to inspire and
              guide you every step of the way.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-900">
              What We Offer
            </h3>
            <p className="mt-4 text-gray-500">
              At SugamRasoi, you will find a diverse collection of recipes from
              various cuisines, all crafted to suit different tastes and dietary
              preferences. From quick weeknight dinners to elaborate weekend
              feasts, our recipes are designed to be easy to follow and deliver
              delicious results every time.
            </p>
            <p className="mt-4 text-gray-500">
              In addition to recipes, we offer:
            </p>
            <ul className="mt-4 list-disc list-inside text-gray-500 space-y-2">
              <li>Weekly meal plans to simplify your cooking routine</li>
              <li>Cooking tips and tricks to enhance your culinary skills</li>
              <li>Product reviews and kitchen gadget recommendations</li>
              <li>Interactive community forums and support</li>
              <li>Exclusive content for our premium members</li>
            </ul>
          </div>

          <img
            src="https://images.unsplash.com/photo-1547592180-85f173990554?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvb2tpbmd8ZW58MHx8MHx8fDA%3D" // Replace with your actual image path
            alt="Cooking"
            className="w-full h-64 lg:w-1/2 object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-900">
            Join Our Community
          </h3>
          <p className="mt-4 text-gray-500">
            We invite you to join our community of passionate cooks and food
            lovers. Subscribe to our YouTube channel, follow us on social media,
            and sign up for our newsletter to stay updated on the latest
            recipes, tips, and exclusive offers.
          </p>
          <p className="mt-4 text-gray-500">
            At SugamRasoi, we believe that the joy of cooking is best when
            shared. Let`&apos;s create delicious memories together!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
