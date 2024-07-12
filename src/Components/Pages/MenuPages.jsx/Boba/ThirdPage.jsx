import bubbleTea from "../../../../assets/Menu_assets/boba.png"; 
import bubbleTea2 from "../../../../assets/Menu_assets/boba2.png"; 
import cafe from "../../../../assets/Menu_assets/cafe.png"; 
const cafeStyle = {
    backgroundImage: `url(${cafe})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
    minHeight: "100vh",
    opacity: "0.17",
    width: "100%",
  };
  
const ThirdPage = () => {
  return (
    <div className="h-full">
      <div style={cafeStyle} className="h-full absolute inset-0"></div>
      <main className="h-full w-full bg-secondary page-shadow p-10">
        <div className="space-y-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              THE OG
            </h1>
            <p className="text-gray-600">Bad day? Have a boba.</p>
          </div>

          <div className="p-1 flex flex-row gap-16">
            <div className="space-y-2 w-1/2">
              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Classic Milk Tea</h2>
                  <p>Medium: $4.25</p>
                  <p>Large: $5.25</p>
                  <p>Hot: $5.25</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Brown Sugar Boba</h2>
                  <p>Medium: $4.75</p>
                  <p>Large: $5.75</p>
                  <p>Hot: $5.75</p>
                  <p>Caffeine free</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Taro Boba Coconut Boba</h2>
                  <p>Medium: $4.25</p>
                  <p>Large: $5.25</p>
                  <p>Hot: $5.25</p>
                  <p>Caffeine free, dairy free</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Fruit Green/Black Tea</h2>
                  <p>Medium: $4.25</p>
                  <p>Large: $5.25</p>
                  <p>Comes in a variety of flavors:</p>
                  <p>mango/strawberry/passionfruit/peach/green apple/lychee/kiwi</p>
               
                </div>
              </div>
            </div>

            <div className="space-y-2 w-1/2">
              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Jasmine Milk Tea Wintermelon Milk Tea</h2>
                  <p>Medium: $4.25</p>
                  <p>Large: $5.25</p>
                  <p>Hot: $5.25</p>
                  <p>Dairy free</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold bg-green-200 rounded-md px-2">Toppings +$0.50</h2>
                  <p>Tapioca pearls, lychee jelly, mixed jelly, grass jelly, pop strawberry, pop passionfruit, mango stars</p>
                </div>
              </div>

              <div className="flex justify-center ">
                <img src={bubbleTea} className="h-40 w-50" alt="Bubble Tea" />
                <img src={bubbleTea2} className="h-40 w-50" alt="Bubble Tea" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ThirdPage;
