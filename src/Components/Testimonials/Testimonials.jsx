import React from "react";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Sophia Carter",
    image: "https://www.easternstandard.com/wp-content/webp-express/webp-images/uploads/2023/10/Temple-Graduate-aspect-ratio-684-855.jpg.webp",
    review:
      "StudyMate helped me find my ideal partner for competitive exam prep! We stayed motivated and achieved our goals together. Highly recommend!",
    rating: 5,
  },
  {
    name: "Alex Jones",
    image: "https://i.ibb.co.com/bjQJ4Q5z/how-to-apply-to-us-colleges-as-an-international-student.jpg",
    review:
      "The matching system is incredible — I connected with someone who studies the exact subjects I do! That made all the difference.",
    rating: 4.8,
  },
  {
    name: "justin kayle",
    image: "https://thumbs.dreamstime.com/b/african-american-male-student-college-uniform-holding-books-isolated-white-background-382240882.jpg",
    review:
      "It made online studying fun again. The UI is clean, smooth, and the partner feature is just genius! Highly recommended. Try it out now. ",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-base-200 text-base-content transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">
          What Our Users Say
        </h2>
        <p className="text-gray-500  mb-12 max-w-2xl mx-auto">
          Real feedback from students who found their perfect study partners on StudyMate.
        </p>

        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="card bg-base-100 border border-gray-200   rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300">
                <figure className="flex justify-center  mb-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-[#F97316] "
                  />
                </figure>
                <div className="card-body text-center ">
                  <h3 className="font-semibold text-lg mb-2">{t.name}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                    “{t.review}”
                  </p>

                  {/* Rating */}
                  <div className="flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < Math.round(t.rating)
                            ? "text-[#F97316] fill-[#F97316] "
                            : "text-gray-400"
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
