import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { postsAPI } from "../api/axios";
import { categoryAPI } from "../api/categoryAPI";
import { User } from "lucide-react";

export default function AllPosts() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const categoryFromURL = params.get("category") || "All";
  const searchFromURL = params.get("search");

  const [selectedCategory, setSelectedCategory] = useState(categoryFromURL);
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [categories, setCategories] = useState(["All"]);


  // Scroll to top on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, categoryFromURL]);

  useEffect(() => {
    setSelectedCategory(categoryFromURL);
  }, [categoryFromURL]);



  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch categories
        const categoryResponse = await categoryAPI.getCategories();
        const categoryNames = categoryResponse.data.map((cat) => cat.name);
        setCategories(["All", ...categoryNames]);

        // Fetch posts based on search or category
        if (searchFromURL) {
          const searchResponse = await postsAPI.searchPosts(searchFromURL);
          setPosts(searchResponse.data);
          setFilteredPosts(searchResponse.data);
        } else {
          const postResponse = await postsAPI.getPosts();
          setPosts(postResponse.data);
          setFilteredPosts(postResponse.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        // Fallback to local data if API fails
        setPosts([]);
        setFilteredPosts([]);
      }
    };
    fetchData();
  }, [searchFromURL]);

  useEffect(() => {
    const filtered =
      selectedCategory === "All"
        ? posts
        : posts.filter((post) => post.category === selectedCategory);
    setFilteredPosts(filtered);
  }, [selectedCategory, posts]);

  return (
    <div className="bg-gray-50 pt-10 pb-10 min-h-screen">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 pr-5 sm:pr-16 md:pr-20">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">
            {searchFromURL
              ? `Search Results for "${searchFromURL}"`
              : selectedCategory === "All"
              ? "All Trending Posts"
              : `All ${selectedCategory} Posts`}
          </h2>
          <Link
            to="/"
            className="text-blue-600 text-sm font-medium hover:underline flex-shrink-0 pr-10"
          >
            ← Back to Home
          </Link>
        </div>

        <p className="text-gray-500 text-sm mb-4">
          {searchFromURL
            ? `Found ${filteredPosts.length} results for "${searchFromURL}"`
            : `Showing latest posts for ${selectedCategory}`}
        </p>

        {/* Category Buttons - Only show if not searching */}
        {!searchFromURL && (
          <div className="mb-6">
            {/* Desktop: Multi-line wrap */}
            <div className="hidden md:flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                    selectedCategory === cat
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Mobile: Single line horizontal scroll */}
            <div className="md:hidden overflow-x-auto scrollbar-hide pb-2">
              <div className="flex gap-2 px-2 min-w-max">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0 ${
                      selectedCategory === cat
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="border rounded-lg p-4 bg-white flex flex-col justify-between hover:shadow-lg transition min-h-[300px] cursor-pointer"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      {post.user}
                    </p>
                    <p className="text-xs text-gray-500">{post.handle}</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 line-clamp-3">{post.text}</p>
                {post.image && (
                  <img
                    src={post.image}
                    alt="post"
                    className="rounded-md mb-2 border w-full h-36 object-cover"
                  />
                )}

                <div className="flex items-center space-x-4 text-gray-500 text-xs mt-auto">
                  <span>💬 {post.comments}</span>
                  <span>🔁 {post.retweets}</span>
                  <span>❤️ {post.likes}</span>
                  <span className="ml-auto">{post.date}</span>
                </div>

                <div className="flex justify-between items-center mt-2 text-xs">
                  <span className="bg-gray-100 px-2 py-1 rounded-full">
                    {post.tag}
                  </span>
                  <span className="text-gray-500 font-medium">
                    {post.category}
                  </span>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-gray-500">
              {searchFromURL
                ? `No posts found for "${searchFromURL}". Try a different search term.`
                : "No posts found for this category."}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
