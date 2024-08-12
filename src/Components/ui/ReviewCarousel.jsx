import { MdStars } from "react-icons/md";

const ReviewCarousel = () => {
  return (
    <div className="mb-20">
      <div className="items-center flex justify-center mb-10  ">
        <MdStars size={70} className="text-[#004D43]"/>
        <h1 className="text-6xl font-bold text-[#004D43] ">Customer Feedback</h1>
        <MdStars size={70} className="text-[#004D43]" />
      </div>
      <div className="bg-red-200 h-[50vh] p-20 flex gap-10">
        <div className="h-[35vh]  w-[35vh] rounded-xl bg-yellow-200">

        </div>
        <div className="h-[35vh]  w-[35vh] rounded-xl bg-yellow-200">

        </div><div className="h-[35vh]  w-[35vh] rounded-xl bg-yellow-200">

</div><div className="h-[35vh]  w-[35vh] rounded-xl bg-yellow-200">

</div>
      </div>

    </div>
  );
};

export default ReviewCarousel;
