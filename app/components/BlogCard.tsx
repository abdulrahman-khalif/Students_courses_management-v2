import React from "react";
import blogImage1 from "./assets/blog-image-1.png"; // Update with your image paths
import blogImage2 from "./assets/blog-image-2.png";
import blogImage3 from "./assets/blog-image-3.png";

// 1. Define a type for a single blog post object
interface Blog {
  id: number;
  image: string;
  date: string;
  title: string;
  description: string;
  tags: string[];
  isLarge: boolean;
}

// 2. Define the props interface for the BlogCard component
interface BlogCardProps {
  blog: Blog;
}

// 3. The BlogCard component, now with typed props
const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <div
      className={`flex bg-white rounded-xl shadow-lg overflow-hidden ${blog.isLarge ? "md:flex-col" : "md:flex-row"}`}
    >
      <div
        className={`${blog.isLarge ? "w-full" : "w-full md:w-1/2"} flex-shrink-0`}
      >
        <img
          src={blog.image}
          alt={blog.title}
          className={`w-full  object-cover`}
        />
      </div>
      <div className={`p-6 ${blog.isLarge ? "w-full" : "w-full md:w-1/2"}`}>
        <p className="text-sm text-green-500 font-semibold mb-2">{blog.date}</p>
        <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
        <p className="text-gray-600 mb-4 text-sm">{blog.description}</p>
        <div className="flex flex-wrap gap-2">
          {blog.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-200 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// 4. The data array, now explicitly typed as an array of Blog objects
const blogs: Blog[] = [
  {
    id: 1,
    image: "./images/Image(4).png",
    date: "November 16, 2014",
    title: "Three Pillars of User Delight",
    description:
      "Delight can be experienced viscerally, behaviourally, and reflectively. A great design is ...",
    tags: ["Research", "UI UX"],
    isLarge: false,
  },
  {
    id: 2,
    image: "./images/Image(5).png",
    date: "September 24, 2017",
    title: "UX Mapping Methods",
    description:
      "Visual-design principles can be applied consistently throughout the process of creating a polished UX map...",
    tags: ["Research", "UI Design"],
    isLarge: false,
  },
  {
    id: 3,
    image: "./images/Image(6).png",
    date: "March 13, 2014",
    title: "Agile Development Projects and Usability",
    description:
      "Agile methods aim to overcome usability barriers in traditional development, but post new threats to user experience quality.",
    tags: ["Programming", "Research", "Developments"],
    isLarge: true,
  },
];

// 5. The main component
const RecentBlogsSection: React.FC = () => {
  const smallBlogs = blogs.filter((blog) => !blog.isLarge);
  const largeBlog = blogs.find((blog) => blog.isLarge);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Our recent blogs
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column for smaller blogs */}
          <div className="flex flex-col gap-8 w-full md:w-1/2">
            {smallBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
          {/* Right Column for the large blog */}
          <div className="w-full md:w-1/2">
            {largeBlog && <BlogCard blog={largeBlog} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentBlogsSection;
