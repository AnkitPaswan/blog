import { useState } from "react";
import { Search, X, Menu, Bell, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   if (searchQuery.trim()) {
  //     // Navigate to search results or filter posts
  //     navigate(`/allposts?search=${encodeURIComponent(searchQuery.trim())}`);
  //     setSearchQuery("");
  //   }
  // };


   const handleSearch = async (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/allposts?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <div className="w-full fixed top-0 z-50">
      {/* Modern Gradient Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Header */}
          <div className="hidden md:flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <button
                onClick={() => navigate("/")}
                className="text-2xl font-bold text-white hover:text-blue-100 transition-colors"
              >
                BLOGS
              </button>
            </div>

            {/* Search Bar - Desktop */}
            <div className="flex-1 max-w-lg mx-8">
              <form onSubmit={handleSearch} className="relative">
                <div className="relative">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search articles, topics, or authors..."
                    className="w-full pl-12 pr-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20 transition-all"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70" size={18} />
                </div>
              </form>
            </div>

            {/* Right Side Actions - Desktop */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors">
                <Bell size={20} />
              </button>
              <button className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors">
                <User size={20} />
              </button> 
            </div>
          </div>

          {/* Mobile Header */}
          <div className="md:hidden flex items-center justify-between h-14">
            {/* Mobile Logo */}
            <div className="flex items-center">
              <button
                onClick={() => navigate("/")}
                className="text-xl font-bold text-white hover:text-blue-100 transition-colors"
              >
                BLOGS
              </button>
            </div>

            {/* Mobile Search Toggle */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              >
                <Search size={18} />
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              >
                {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>

          {/* Mobile Search Bar - Expandable */}
          {isSearchOpen && (
            <div className="md:hidden px-4 pb-3">
              <form onSubmit={handleSearch} className="relative">
                <div className="relative">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search articles..."
                    className="w-full pl-10 pr-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20 transition-all text-sm"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70" size={16} />
                </div>
              </form>
            </div>
          )}
        </div>
      </div>

      {/* Secondary Navigation Bar */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between h-12">
            <nav className="flex space-x-8">
              <button
                onClick={() => navigate("/")}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors border-b-2 border-transparent hover:border-blue-600"
              >
                Home
              </button>
              <button
                onClick={() => navigate("/allposts")}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors border-b-2 border-transparent hover:border-blue-600"
              >
                All Posts
              </button>
              <button
                onClick={() => navigate("/about")}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors border-b-2 border-transparent hover:border-blue-600"
              >
                About
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors border-b-2 border-transparent hover:border-blue-600"
              >
                Contact
              </button>
            </nav>

            {/* Trending Alert */}
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Latest updates every 15 mins</span>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            {isMenuOpen && (
              <nav className="flex flex-col space-y-2 py-2 border-t border-gray-200">
                <button
                  onClick={() => {
                    navigate("/");
                    setIsMenuOpen(false);
                  }}
                  className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-colors text-left"
                >
                  Home
                </button>
                <button
                  onClick={() => {
                    navigate("/allposts");
                    setIsMenuOpen(false);
                  }}
                  className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-colors text-left"
                >
                  All Posts
                </button>
                <button
                  onClick={() => {
                    navigate("/about");
                    setIsMenuOpen(false);
                  }}
                  className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-colors text-left"
                >
                  About
                </button>
                <button
                  onClick={() => {
                    navigate("/contact");
                    setIsMenuOpen(false);
                  }}
                  className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-colors text-left"
                >
                  Contact
                </button>
              </nav>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
