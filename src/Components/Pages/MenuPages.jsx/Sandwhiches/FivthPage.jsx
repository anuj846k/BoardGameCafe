import sandwiches from "../../../../assets/Menu_assets/sandwhiches.png";

const sandwichStyle = {
  backgroundImage: `url(${sandwiches})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  backgroundPosition: "center",
  minHeight: "100vh",
  opacity: "0.3",
  width: "100%",
};

const FivthPage = () => {
  return (
    <div className="h-full">
      <div style={sandwichStyle} className="h-full absolute inset-0"></div>
      <main className="h-full w-full bg-secondary page-shadow relative p-10">
        <div className="space-y-2">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              SANDWICHES & SALADS
            </h1>
            <p className="text-gray-600">
              A salad is not a meal, it is a style.
            </p>
          </div>

          <div className="p-1 flex flex-row gap-16">
            <div className="space-y-2 w-1/2">
              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold">
                    Beyond Bussin Sandwich
                  </h2>
                  <p>$15.00</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold">
                    Spicy Chicken Sandwich
                  </h2>
                  <p>$13.00</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Italian Panini</h2>
                  <p>$11.00</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Tuna Melt</h2>
                  <p>$11.00</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold">
                    Zesto Chicken Sandwich
                  </h2>
                  <p>$13.00</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Turkey Club</h2>
                  <p>$11.00</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Grilled Cheese</h2>
                  <p>$6.50</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Mixed Green Salad</h2>
                  <p>$6.50</p>
                </div>
              </div>
            </div>

            <div className="space-y-2 w-1/2">
              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Cobb Salad</h2>
                  <p>$10.00</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Pizza Panini</h2>
                  <p>$11.00</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold">
                    Smoked Salmon Tartine
                  </h2>
                  <p>$11.00</p>
                </div>
              </div>

              {/* Additional dishes */}
              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Pigs in a Blanket</h2>
                  <p>$7.00</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Tater Tots</h2>
                  <p>$5.00</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Onion Rings</h2>
                  <p>$5.00</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Fries</h2>
                  <p>$5.00</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Sweet Potato Fries</h2>
                  <p>$6.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FivthPage;
