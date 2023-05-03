const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      occupation: "Web Developer",
      image: "../../../../public/images/user1.jpg",
      quote:
        "I recently had the pleasure of dining at Chef Jane's restaurant, and I was blown away by the incredible flavors and textures in each dish. From the appetizers to the main course to the dessert, everything was simply superb. Chef Jane clearly has a passion for cooking and it shows in every bite. Highly recommend!",
    },
    {
      id: 2,
      name: "Jane Doe",
      occupation: "Graphic Designer",
      image: "../../../../public/images/user2.jpg",
      quote:
        "Chef John is an absolute genius in the kitchen. Every dish he creates is a masterpiece that delights the senses. His attention to detail is unmatched, and he takes great care in ensuring that each ingredient is perfectly prepared. If you have the opportunity to try Chef John's food, don't hesitate – you won't be disappointed!",
    },
    {
      id: 3,
      name: "Bob Smith",
      occupation: "Marketing Manager",
      image: "../../../../public/images/user3.jpg",
      quote:
        "Chef Bob is a true artist when it comes to food. His creativity knows no bounds, and he's constantly experimenting with new flavors and techniques to produce dishes that are truly unique. But it's not just about the creativity – Chef Bob's dishes are also incredibly delicious and satisfying. He's truly a master of his craft and I'm grateful for the opportunity to experience his culinary creations.",
    },
  ];

  return (
    <div>
      <h2 className="text-center font-bold text-3xl mt-28 text-red-400">
        Reviews From Our Beloved Customers
      </h2>
      <div className="carousel w-full md:w-3/5 mx-auto my-16">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="mx-auto flex flex-col justify-center bg-red-50 px-10 rounded-md md:py-28">
            <img
              src={testimonials[0].image}
              className="w-[100px] rounded-full h-[100px] mx-auto "
            />
            <div className="md:px-32 md:mt-9">
              <p className="italic mb-3">{`"${testimonials[0].quote}"`}</p>
              <h1 className="text-right text-red-400 font-bold italic">
                {testimonials[0].name}
              </h1>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <div className="mx-auto flex flex-col justify-center bg-red-50 px-10 rounded-md md:py-24">
            <img
              src={testimonials[1].image}
              className="w-[100px] rounded-full h-[100px] mx-auto"
            />
            <div className="md:px-32 md:mt-9">
              <p className="italic mb-3">{`"${testimonials[1].quote}"`}</p>
              <h1 className="text-right text-red-400 font-bold italic">
                {testimonials[1].name}
              </h1>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide3" className="carousel-item relative w-full">
          <div className="mx-auto flex flex-col justify-center bg-red-50 px-10 rounded-md py-10 md:py-24">
            <img
              src={testimonials[2].image}
              className="w-[100px] rounded-full h-[100px] mx-auto"
            />
            <div className="md:px-32 md:mt-9">
              <p className="italic mb-3">{`"${testimonials[2].quote}"`}</p>
              <h1 className="text-right text-red-400 font-bold italic">
                {testimonials[2].name}
              </h1>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
