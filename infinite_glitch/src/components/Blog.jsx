import React, { useEffect, useState } from 'react';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const apiUrl = process.env.REACT_APP_RSS_URL;  

  useEffect(() => {

    const fetchRSS = async () => {
      if (!apiUrl) {
        console.error('API URL is not defined');
        return;
      }

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Failed to fetch RSS feed', error);
      }
    };

    fetchRSS();
  }, [apiUrl]);


  return (
    <div name="blog" className="bg-gray-100 w-full min-h-screen pt-20">
      <div className="mx-auto p-5 sm:p-10 w-full max-w-screen-lg flex flex-col justify-center h-full">
        <div className='mb-10 text-center'>
          <p className="text-3xl sm:text-4xl font-bold text-gray-800">My Blog</p>
        </div>
        <div className="grid gap-6 sm:gap-8 mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 sm:px-0">
          {blogs.map(({ title, link, pubDate, contentSnippet, imageUrl }) => (
            <a
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              className="block bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
              key={link}
            >
              {imageUrl && (
                <div className="relative">
                  <img
                    src={imageUrl}
                    alt={`${title} blog thumbnail`}
                    className="w-full h-48 sm:h-60 object-cover rounded-t-lg"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white text-xl font-bold opacity-0 transition-opacity duration-300 hover:opacity-100">
                    <p className="text-center px-2">{title}</p>
                  </div>
                </div>
              )}
              <div className="p-4 sm:p-6">
                <header>
                  <p className='text-xl sm:text-2xl font-semibold mb-2 text-gray-800'>{title}</p>
                  <p className="text-gray-600 mb-4">{new Date(pubDate).toLocaleDateString()}</p>
                </header>
                <p className="text-gray-700 mb-4">{contentSnippet}</p>
                <button className="px-6 py-3 text-sm text-white bg-gradient-to-r from-blue-500 to-blue-800 rounded-md hover:bg-opacity-90 w-full">
                  Read More
                </button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
