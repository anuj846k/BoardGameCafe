import wines from "../../../../assets/Menu_assets/wines.png";

const winesStyle = {
  backgroundImage: `url(${wines})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  backgroundPosition: "center",
  minHeight: "100vh",
  opacity: "0.09",
  width: "100%",
};

const SeventhPage = () => {
  return (
    <div className="h-full">
      <div style={winesStyle} className="h-full absolute inset-0"></div>
      <main className="h-full w-full bg-secondary page-shadow relative z-10 p-10">
        <div className="space-y-2">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              BEER/WINE
            </h1>
            <p className="text-gray-600">
              Good beer and wine make life&apos;s moments memorable
            </p>
          </div>

          <div className="p-1 flex flex-row gap-16">
            <div className="space-y-2 w-1/2">
              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Babe Rose</h2>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold">
                    Archer Roose White/Red
                  </h2>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Kona Lager</h2>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Blue Point</h2>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Juneshine</h2>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Lunar Hard Seltzers</h2>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Allagash White</h2>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Doc Cider</h2>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Stella Artois</h2>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Shocktop</h2>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Finback</h2>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold">
                    Three&apos;s Brewery
                  </h2>
                </div>
              </div>
            </div>

            <div className="space-y-2 w-1/2">
              <div className="flex justify-between">
                <div className="bg-red-100 p-3 rounded-3xl text-center bg-opacity-25">
                  <h2 className="text-lg font-semibold bg-yellow-200 p-1 rounded-3xl">
                    ROTATING MENU
                  </h2>
                  <p>Check out our rotating selection from local breweries!</p>
                  <p>(tall silver cans on our counter)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SeventhPage;
