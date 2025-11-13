import { Link } from "react-router";
import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 text-center px-6">
      {/* Animation and 404 Text */}
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-8xl sm:text-9xl font-bold text-[#F97316]"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-4 text-lg sm:text-xl text-base-content max-w-md"
      >
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </motion.p>

      {/* Illustration */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-10"
      >
        <img
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt="Not Found Illustration"
          className="w-72 sm:w-96 mx-auto drop-shadow-lg"
        />
      </motion.div>

      {/* Button */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-10"
      >
        <Link
          to="/"
          className="btn bg-[#F97316] hover:bg-[#ea580c] border-none text-white text-lg flex items-center gap-2 px-6 rounded-full"
        >
          <FaHome /> Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
