
import tender from "../../../../assets/Menu_assets/tender.png"; 

const cafeStyle = {
  backgroundImage: `url(${tender})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  backgroundPosition: "center",
  minHeight: "100vh",
  opacity: "0.12",
  width: "100%",
};

const FourthPage = () => {
  return (
    <div className="h-full">
      <div style={cafeStyle} className="h-full absolute inset-0"></div>
      <main className="h-full w-full bg-secondary page-shadow relative z-10 p-10">
        <div className="space-y-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              HOT BITES
            </h1>
            <p className="text-gray-600">Spice up your day with our sizzling hot bites!</p>
          </div>

          <div className="p-1 flex flex-row  items-center justify-center gap-16">
            <div className="space-y-2 w-1/2">
              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Chicken Poppers</h2>
                  <p>$6.00</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Mozz Sticks</h2>
                  <p>$7.00</p>
                </div>
              </div>

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
                  <h2 className="text-xl font-semibold">Chicken Tenders</h2>
                  <p>$8.00</p>
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

export default FourthPage;
