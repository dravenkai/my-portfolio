import Azure from '../assets/AzureMed_HUB.png'
import Movie from '../assets/movie-project.png'

export const projects = [
  {
    id: 1,
    title: "AzureMed Hub",
    description: "A comprehensive medical inventory and sales management system designed for healthcare facilities. Features real-time stock tracking, sales analytics, and automated reporting.",
    image: Azure,
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Sanchez-313/Medical-Project.git",
    live: "http://localhost:5175/",
    featured: true
  },
  {
    id: 2,
    title: "Kai Channel",
    description: "A high-performance web application for media streaming and browsing. Users can explore trending movies, search by genre, and view detailed information with a smooth UI.",
    image: Movie,
    technologies: ["React", "Tailwind CSS", "Framer Motion", "TMDB API"],
    github: "#",
    live: "http://127.0.0.1:5500/Assignment1/Kai%20Channel/index.html",
    featured: false
  }
]
