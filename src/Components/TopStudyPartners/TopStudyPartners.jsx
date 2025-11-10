import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { Star } from "lucide-react"; // nice modern star icon

const TopStudyPartners = () => {
  const [partners, setPartners] = useState([]);

  // Fetch top-rated partners from MongoDB API
  useEffect(() => {
    fetch("https://your-server-url.com/partners/top-rated")
      .then((res) => res.json())
      .then((data) => setPartners(data))
      .catch((err) => console.error("Error fetching partners:", err));
  }, []);

  return (
    <section className="py-16 bg-base-100 text-base-content">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#F97316] to-orange-600 bg-clip-text text-transparent">
          Top Study Partners
        </h2>
        <p className="text-base-content  mb-10 max-w-3xl mx-auto">
          Meet some of the highest-rated study partners on StudyMate. Learn,
          collaborate, and grow together.
        </p>

        {/* Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {partners.slice(0, 6).map((partner) => (
            <div
              key={partner._id}
              className="card bg-base-200 shadow-md hover:shadow-xl transition rounded-2xl border border-gray-100"
            >
              <figure className="px-6 pt-6">
                <img
                  src={partner.photo || "https://via.placeholder.com/150"}
                  alt={partner.name}
                  className="rounded-full w-28 h-28 object-cover border-4 border-primary"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="text-lg font-semibold">{partner.name}</h3>

                <p className="text-sm text-gray-500">
                  {partner.subjects?.join(", ") || "No subjects listed"}
                </p>

                {/* Rating */}
                <div className="flex items-center justify-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={
                        i < partner.rating
                          ? "text-primary fill-primary"
                          : "text-gray-400"
                      }
                    />
                  ))}
                  <span className="ml-1 text-sm text-gray-500">
                    {partner.rating.toFixed(1)}
                  </span>
                </div>

                {/* Button */}
                <div className="card-actions mt-4">
                  <Link
                    to={`/profile/${partner._id}`}
                    className="btn btn-primary bg-gradient-to-r from-[#F97316] to-orange-600 border-none text-white rounded-full"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default TopStudyPartners;
