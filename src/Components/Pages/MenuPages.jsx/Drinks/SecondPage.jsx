import drinks from "../../../../assets/Menu_assets/drinks.png";

const DrinksStyle = {
  backgroundImage: `url(${drinks})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  backgroundPosition: "center",
  minHeight: "100vh",
  opacity: "0.25",
  width: "100%",
};


const SecondPage = () => {
  return (
    <div className="h-full">
      <div style={DrinksStyle} className="h-full absolute inset-0"></div>
      <main className="h-full w-full bg-secondary page-shadow p-10 relative z-10">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-black">
              SPECIALTY DRINKS
            </h1>
            <p className="text-black">Unwind with Our Specialty Drinks</p>
          </div>

          <div className="p-1 flex flex-row gap-16">
            <div className="space-y-2">
              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-black">Matcha Latte</h2>
                  <p className="text-black">$5.25 (Hot) / $5.75 (Cold)</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-black">Hot Chocolate</h2>
                  <p className="text-black">$4.50 (Hot)</p>
                  <p className="text-black">S&apos;more: $5.50</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-black">Nutella Latte</h2>
                  <p className="text-black">$5.75 (Hot) / $6.25 (Cold)</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-black">Chai</h2>
                  <p className="text-black">$5.00 (Hot) / $5.50 (Cold)</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-black">Dirty Chai</h2>
                  <p className="text-black">$6.25 (Hot) / $6.75 (Cold)</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-black">Lavender Latte</h2>
                  <p className="text-black">$5.75 (Hot) / $6.25 (Cold)</p>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-black">Rose Latte</h2>
                  <p className="text-black">$5.75 (Hot) / $6.25 (Cold)</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-black">Brown Sugar Latte</h2>
                  <p className="text-black">$5.75 (Hot) / $6.25 (Cold)</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-black">Bumblebee Latte</h2>
                  <p className="text-black">$6.25 (Hot) / $6.75 (Cold)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SecondPage;
