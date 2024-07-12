import lemonade from "../../../../assets/Menu_assets/lemonade.png";

const lemonadeStyle = {
  backgroundImage: `url(${lemonade})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  backgroundPosition: "center",
  minHeight: "100vh",
  opacity: "0.09",
  width: "100%",
};

const SixthPage = () => {
  return (
    <div className="h-full">
      <div style={lemonadeStyle} className="h-full absolute inset-0"></div>
      <main className="h-full w-full bg-secondary page-shadow relative z-10 p-10">
        <div className="space-y-2">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              SEASONAL MENU
            </h1>
            <p className="text-gray-600">
              A salad is not a meal, it is a style.
            </p>
          </div>

          <div className="p-1 flex flex-row gap-16">
            <div className="space-y-2 w-1/2">
              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Pina Colada</h2>
                  <p>Medium: $4.75</p>
                  <p>Large: $5.75</p>
                  <p>Our coconut boba with pineapple flavor!</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold">MATCHA LEMONADE</h2>
                  <p>Medium: $5.00</p>
                  <p>Large: $6.00</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold">YUZU-ADE</h2>
                  <p>Large: $5.25</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold">
                    FRESHLY SQUEEZED LEMONADE
                  </h2>
                  <p>Medium: $4.00</p>
                  <p>Large: $5.00</p>
                  <p>
                    Real lemons with our signature recipe = amazing lemonade
                  </p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold">MATCHA LAVENDER OAT</h2>
                  <p>$6.50</p>
                  <p>
                    Lavender infused into our oatmilk.  
                  </p>
                </div>
              </div>

             
            </div>



            <div className="space-y-2 w-1/2">
               <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold">
                    Berry Lavender Lemonade
                  </h2>
                  <p>Medium: $5.25</p>
                  <p>Large: $6.25</p>
                  <p>
                    Made with real bourbon and definitely the drink we&apos;re most
                    excited for this fall.
                  </p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold">
                    Citrus Boba (Grapefruit or Orange)
                  </h2>
                  <p>Large: $6.00</p>
                  <p>Made with real fruit juice and fruit slices!</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold">
                    ROTATING BEER/WINE PROGRAM
                  </h2>
                  <p>
                    Check out our beer and wine at the front of our store! We&apos;re
                    constantly rotating out product from local breweries!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SixthPage;
