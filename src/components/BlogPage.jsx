import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

const BlogPage = () => {
    const blogs = [
        {
          title: "The Future of AI in Web Development",
          description: "Discover how artificial intelligence is transforming the way we build and interact with websites.",
          author: "John Doe",
          date: "February 7, 2025"
        },
        {
          title: "Why React is the Best Choice for Frontend Development",
          description: "A deep dive into the benefits of using React for building modern web applications.",
          author: "Jane Smith",
          date: "January 25, 2025"
        },
        {
          title: "Understanding Next.js and Its Advantages",
          description: "Explore why Next.js is becoming a go-to framework for server-side rendering and static site generation.",
          author: "Alex Johnson",
          date: "December 30, 2024"
        }
      ];
  return (
    <div>
        <NavBar/>
        <div className="container py-5">
        <h2 className="text-center mb-4 raleway-text">Latest Tech Blogs</h2>

        <div className="row raleway-text">
          {blogs.map((blog, index) => (
            <div key={index} className="col-12 col-md-6 mb-4">
              <div className="card shadow-sm service-card">
                <div className="card-body">
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text">{blog.description}</p>
                  <p className="text-muted"><small>By {blog.author} - {blog.date}</small></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

        <Footer/>
    </div>
  )
}

export default BlogPage