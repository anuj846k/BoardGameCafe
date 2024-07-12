export default function Event() {
  return (
    <div id="event" className="w-full h-full lg:bg-[url('./src/assets/img/bg.jpg')] md:bg-[url('./src/assets/img/bg.jpg')] bg-[#F1EADC] bg-no-repeat">
      <section className="w-full h-full py-12 md:py-24 lg:py-32 bg-muted flex justify-center ">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tighter md:text-4xl/tight lg:text-7xl">
              Upcoming Events and Programs
            </h1>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
              Explore our exciting lineup of board game events and educational
              programs.
            </p>
          </div>
          <div className="flex justify-center">
            <button className="btn bg-[#C3E0DC] px-8 font-semibold py-3 hover:bg-[#F1EADd]">
              <a href="#">Full Registration</a>
            </button>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-16 flex justify-center bg-[#F1EADC]" id="event">
        <div className="container grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-1 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-1 xl:grid-cols-2 md:px-6 lg:px-4 xl:px-0">
            <div className="w-full  lg:m-10 mx-auto lg:mx-0 md:mx-0">
              <img
                src="./src/assets/img/event1.jpg"
                alt=""
                className="h-[400px] w-full"
              />
            </div>
            <div className="w-full lg:m-10 md:m-10">
              <h1 className="text-4xl font-semibold">
                5-Minute MARVEL Cinematic Experience
              </h1>
              <h4 className="text-xl text-muted text-slate-700 italic mt-2 leading-8 ">
                5-Minute Marvel is a cooperative card game designed for
                fast-paced, high-energy play, perfect for Marvel fans and those
                who enjoy quick and dynamic gameplay.
              </h4>
              <div className="text-xl text-muted text-slate-700 italic mt-2 leading-8">
              <b>Date: </b> <i>May 10, 2023</i>
              <br />
              <b>Time: </b> <i>2:00 PM - 3:30 PM</i>
              <br />
              <b>Age: </b> <i>All ages</i>
              <br />
              </div>
              <button className="btn btn-primary bg-[#C3E0DC] p-4 rounded-xl text-md font-medium mt-4 hover:bg-[#FFF9B1]">
                Book your slot
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-1 xl:grid-cols-2 md:px-6 lg:px-4 xl:px-0">
            <div className="w-full m-10 mx-auto lg:mx-0 md:mx-0">
              <img
                src="./src/assets/img/event2.jpg"
                alt=""
                className="h-[400px] w-full"
              />
            </div>
            <div className="w-full lg:m-10 md:m-10">
              <h1 className="text-4xl font-semibold">
                A Game of Thrones: The Board Game
              </h1>
              <h4 className="text-xl text-muted text-slate-700 italic mt-2 leading-8 text-wrap ">
                Set in the world of Westeros, players represent the great houses
                vying for control of the Iron Throne. The game captures the
                political intrigue, warfare, and alliances from the books and TV
                series.
              </h4>
              <div className="text-xl text-muted text-slate-700 italic mt-2 leading-8">
              <b>Date: </b> <i>May 10, 2023</i>
              <br />
              <b>Time: </b> <i>2:00 PM - 3:30 PM</i>
              <br />
              <b>Age: </b> <i>All ages</i>
              <br />
              </div>
              <button className="btn btn-primary bg-[#C3E0DC] p-4 rounded-xl text-md font-medium mt-4 hover:bg-[#FFF9B1]">
                Book your slot
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-1 xl:grid-cols-2 md:px-6 lg:px-4 xl:px-0">
            <div className="w-full m-10 mx-auto lg:mx-0 md:mx-0">
              <img
                src="./src/assets/img/event3.jpg"
                alt=""
                className="h-[400px] w-full"
              />
            </div>
            <div className="w-full lg:m-10 md:m-10">
              <h1 className="text-4xl font-semibold">
                Bang! Dice Expansion: Old Saloon
              </h1>
              <h4 className="text-xl text-muted text-slate-700 italic mt-2 leading-8  ">
                The game retains its Wild West theme, where players assume roles
                such as Sheriff, Outlaws, Renegades, and Deputies. The expansion
                adds a thematic layer of the board game &quot;Old Saloon&quot;
                with new dice, characters, and modules.
              </h4>
              <div className="text-xl text-muted text-slate-700 italic mt-2 leading-8">
              <b>Date: </b> <i>May 10, 2023</i>
              <br />
              <b>Time: </b> <i>2:00 PM - 3:30 PM</i>
              <br />
              <b>Age: </b> <i>All ages</i>
              <br />
              </div>
              <button className="btn btn-primary bg-[#C3E0DC] p-4 rounded-xl text-sm font-medium mt-4 hover:bg-[#FFF9B1]">
                Book your slot
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-1 xl:grid-cols-2 md:px-6 lg:px-4 xl:px-0">
            <div className="w-full m-10 mx-auto lg:mx-0 md:mx-0">
              <img
                src="./src/assets/img/event4.jpg"
                alt=""
                className="h-[400px] w-full"
              />
            </div>
            <div className="w-full lg:m-10 md:m-10 ">
              <h1 className="text-4xl font-semibold">Battle for the island</h1>
              <h4 className="text-xl text-muted text-slate-700 italic mt-2 leading-8 ">
                It is a thematic and strategic board game where players compete
                to control a mythical island rich with resources and secrets.
                The game features a modular board, hidden objectives, and more.
              </h4>
              <div className="text-xl text-muted text-slate-700 italic mt-2 leading-8">
              <b>Date: </b> <i>May 10, 2023</i>
              <br />
              <b>Time: </b> <i>2:00 PM - 3:30 PM</i>
              <br />
              <b>Age: </b> <i>All ages</i>
              <br />
              </div>
              <button className="btn btn-primary bg-[#C3E0DC] p-4 rounded-xl text-md font-medium mt-4 hover:bg-[#FFF9B1]">
                Book your slot
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-1 xl:grid-cols-2 md:px-6 lg:px-4 xl:px-0">
            <div className="w-full m-10 mx-auto lg:mx-0 md:mx-0">
              <img
                src="./src/assets/img/event6.jpg"
                alt=""
                className="h-[400px] w-full"
              />
            </div>
            <div className="w-full lg:m-10 md:m-10 ">
              <h1 className="text-4xl font-semibold">
                Chameleons: A cooperative card game
              </h1>
              <h4 className="text-xl text-muted text-slate-700 italic mt-2 leading-8 ">
                Chameleons is a cooperative card game designed for fast-paced,A
                lighthearted game where players must identify a hidden
                Chameleon among them using deduction, quick thinking, and
                clever bluffing.
              </h4>
              <div className="text-xl text-muted text-slate-700 italic mt-2 leading-8">
              <b>Date: </b> <i>May 10, 2023</i>
              <br />
              <b>Time: </b> <i>2:00 PM - 3:30 PM</i>
              <br />
              <b>Age: </b> <i>All ages</i>
              <br />
              </div>
              <button className="btn btn-primary bg-[#C3E0DC] p-4 rounded-xl text-md font-medium mt-4 hover:bg-[#FFF9B1]">
                Book your slot
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
