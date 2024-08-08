import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "John D.",
    text: "The best coffee shop in town! The ambiance is perfect for relaxing or getting some work done. The baristas are friendly and knowledgeable, and the coffee is always fresh and delicious. I highly recommend the Coffee Cafe and the pastries.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Sarah L.",
    text: "I've been coming to this coffee shop every morning for the past year, and it's always a great start to my day. Espresso is my favorite, and they have a great selection of snacks. The staff is always welcoming and remembers my order. Highly recommended!",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Emily R",
    text: "I love the variety of coffee and the cozy atmosphere. The Wi-Fi is fast and reliable, making it a great place to get some work done. The staff is super friendly and makes everyone feel at home.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Michael S.",
    text: "This coffee shop is a gem! The coffee is amazing, and the customer service is top-notch. I love coming here with friends to chat and enjoy a delicious cup of coffee. The decor is also very charming and adds to the overall experience",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
    ],
  };
  return (
    <>
      <span id="testimonial"></span>
      <div className="py-14 mb-10">
        <div className="container">
          {/* header section  */}
          <div data-aos="fade-up" className="text-center mb-20">
            <h1 className="text-4xl font-bold font-cursive text-gray-800">
              Testimonials
            </h1>
          </div>
          {/* Testimonials cards section  */}
          <div data-aos="zoom-in">
            <Slider {...settings}>
              {TestimonialData.map((data) => {
                return (
                  <div className="my-6" key={data.id}>
                    <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative">
                      {/* image section  */}
                      <div className="mb-4">
                        <img
                          src={data.img}
                          alt={data.name}
                          className="rounded-full w-20 h-20"
                        />
                      </div>
                      {/* content section  */}
                      <div className="flex flex-col items-center gap-4">
                        <div className="space-y-3">
                          <p className="text-xs text-gray-500">{data.text}</p>
                          <h1 className="text-xl font-bold text-black/60 font-cursive">
                            {data.name}
                          </h1>
                        </div>
                      </div>
                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
