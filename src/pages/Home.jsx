import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { postsAPI } from "../api/axios";
import { categoryAPI } from "../api/categoryAPI";
import { User } from "lucide-react";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categories, setCategories] = useState(["All"]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch categories
        const categoryResponse = await categoryAPI.getCategories();
        const categoryNames = categoryResponse.data.map((cat) => cat.name);
        setCategories(["All", ...categoryNames]);

        // Fetch posts
        const postResponse = await postsAPI.getPosts();
        setPosts(postResponse.data);
        setFilteredPosts(postResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Fallback to local data if API fails
        setPosts([]);
        setFilteredPosts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filtered =
      selectedCategory === "All"
        ? posts
        : posts.filter((post) => post.category === selectedCategory);
    setFilteredPosts(filtered);
  }, [selectedCategory, posts]);

  if (loading) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 pr-5 sm:pr-16 md:pr-20 py-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome to Our Blog
          </h1>
          <p className="text-gray-600">
            Discover trending posts across different categories
          </p>
        </div>

        {/* Category Buttons - Single line scrollable */}
        <div className="mb-8">
          <div className="overflow-x-auto scrollbar-hide pb-2">
            <div className="flex gap-3 px-2 min-w-max">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0 ${
                    selectedCategory === cat
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPosts.length > 0 ? (
            filteredPosts.slice(0, 8).map((post) => (
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

                <p className="text-gray-700 mb-4 line-clamp-3">
                  {post?.caption}
                </p>
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
            <p className="text-gray-500 col-span-full text-center">
              No posts found for this category.
            </p>
          )}
        </div>

        {/* View All Link */}
        {filteredPosts.length > 8 && (
          <div className="text-center mt-8">
            <Link
              to={`/allposts${
                selectedCategory !== "All"
                  ? `?category=${selectedCategory}`
                  : ""
              }`}
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All Posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
