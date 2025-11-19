import React, { useRef, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react"; 
import { posts } from "../data/posts";

const categories = ["All", "Sports", "Music", "Technology", "Entertainment"];

const SocialMedia = () => {
  const location = useLocation(); // ✅ Get current URL
  const categoriesToShow = categories.filter(cat => cat !== "All");
  const carouselRefs = useRef({});
  const [selectedCategory, setSelectedCategory] = useState("All");

  // ✅ Scroll to top on navigation or category change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, selectedCategory]);

  // If you get category from URL, you can set it here
  const params = new URLSearchParams(location.search);
  const categoryFromURL = params.get("category");
  useEffect(() => {
    if (categoryFromURL) {
      setSelectedCategory(categoryFromURL);
    }
  }, [categoryFromURL]);

  const scrollCarousel = (category, direction) => {
    const carouselElement = carouselRefs.current[category];
    if (!carouselElement) return;

    const scrollAmount = direction === 'left'
      ? -carouselElement.offsetWidth * 0.9
      : carouselElement.offsetWidth * 0.9;

    carouselElement.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <div className="p-10 pt-4 md:pt-10 rounded-lg bg-gray-50">
      <div className="pr-0 sm:pr-16 md:pr-10">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Trending Social Updates by Category
        </h2>
        <p className="text-gray-500 text-xs sm:text-sm mb-8">
          Updates every 15 mins
        </p>

        {categoriesToShow.map(category => {
          const categoryPosts = posts.filter(post => post.category === category);
          if (!categoryPosts.length) return null;

          return (
            <section key={category} className="mb-12">
              <div className="flex justify-between items-center mb-4 border-b border-indigo-200 pb-2">
                <h3 className="text-3xl font-semibold text-indigo-700">{category}</h3>
                <Link
                  to={`/allposts?category=${category.toUpperCase()}`}
                  className="text-indigo-600 text-sm font-medium hover:underline flex-shrink-0"
                >
                  View all →
                </Link>
              </div>

              <div className="relative">
                <button
                  onClick={() => scrollCarousel(category, 'left')}
                  className="absolute left-1 top-1/2 -translate-y-1/2 z-30 p-2 bg-white border rounded-full text-indigo-600 hover:bg-indigo-50 transition duration-150 shadow-lg opacity-90 hover:opacity-100 hidden sm:block"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={() => scrollCarousel(category, 'right')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-30 p-2 bg-white border rounded-full text-indigo-600 hover:bg-indigo-50 transition duration-150 shadow-lg opacity-90 hover:opacity-100 hidden sm:block"
                >
                  <ChevronRight size={24} />
                </button>

                <div
                  ref={el => carouselRefs.current[category] = el}
                  className="overflow-x-auto scrollbar-hide snap-x snap-mandatory"
                >
                  <div className="flex space-x-4 py-2">
                    {categoryPosts.map(post => (
                      <Link
                        key={post.id}
                        to={`/post/${post.id}`}
                        className="min-w-[80vw] sm:min-w-[300px] border rounded-xl p-4 bg-white flex-shrink-0 flex flex-col justify-between hover:shadow-xl transition cursor-pointer no-underline border-gray-200 snap-start select-none"
                      >
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-indigo-200 flex-shrink-0"></div>
                          <div>
                            <p className="text-sm font-semibold text-gray-800">{post.user}</p>
                            <p className="text-xs text-gray-500">{post.handle}</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-800 whitespace-pre-line mb-3 line-clamp-2">{post.text}</p>
                        {post.image && <img src={post.image} alt="post" className="w-full h-32 sm:h-40 object-cover rounded-lg mb-3 border border-gray-100" />}
                        <div className="flex items-center space-x-4 text-gray-500 text-xs mt-auto py-1">
                          <span>💬 {post.comments}</span>
                          <span>🔁 {post.retweets}</span>
                          <span>❤️ {post.likes}</span>
                          <span className="ml-auto text-gray-400">{post.date}</span>
                        </div>
                        <p className="text-gray-700 text-xs sm:text-sm italic my-2">{post.caption || "Stay tuned for more updates!"}</p>
                        <div className="flex justify-between items-center mt-2 text-xs pt-1">
                          <span className="bg-indigo-50 text-indigo-600 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-medium">{post.tag}</span>
                          <span className="text-gray-500 font-medium text-[10px] sm:text-xs">{post.category}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default SocialMedia;


