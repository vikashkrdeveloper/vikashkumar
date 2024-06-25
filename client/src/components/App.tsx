import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/home/landing-page";
import projects from "../pages/projects/projects";
import projectsDetails from "../pages/projects/projects-details";

const App = () => {
  return (
    <Routes>
      <Route path="/" Component={LandingPage} />
      <Route path="/about" element={<h1>About</h1>} />
      <Route path="/services" element={<h1>Services</h1>} />
      <Route path="/contact" element={<h1>Contact</h1>} />
      <Route path="/projects" Component={projects} />
      <Route path="/skills" element={<h1>Skills</h1>} />
      <Route path="/experience" element={<h1>Experience</h1>} />
      <Route path="/education" element={<h1>Education</h1>} />
      <Route path="/blog" element={<h1>Blog</h1>} />
      <Route path="/testimonials" element={<h1>Testimonials</h1>} />
      <Route path="/certifications" element={<h1>Certifications</h1>} />
      <Route path="/publications" element={<h1>Publications</h1>} />
      <Route path="/html" element={<h1>HTML</h1>} />
      <Route path="/css" element={<h1>CSS</h1>} />
      <Route path="/javascript" element={<h1>JavaScript</h1>} />
      <Route path="/reactjs" element={<h1>React JS</h1>} />
      <Route path="/nodejs" element={<h1>Node JS</h1>} />
      <Route path="/expressjs" element={<h1>Express JS</h1>} />
      <Route path="/mongodb" element={<h1>MongoDB</h1>} />
      <Route path="/java" element={<h1>Java</h1>} />
      <Route path="/python" element={<h1>Python</h1>} />
      <Route path="/dsa" element={<h1>Data Structures and Algorithms</h1>} />
      <Route path="/nextjs" element={<h1>Next JS</h1>} />
      <Route path="/tailwindcss" element={<h1>Tailwind CSS</h1>} />
      <Route path="/vite" element={<h1>Vite</h1>} />
      <Route path="/php" element={<h1>PHP</h1>} />
      <Route path="/git" element={<h1>Git</h1>} />
      <Route path="/github" element={<h1>GitHub</h1>} />
      <Route path="/hostinger" element={<h1>Hostinger</h1>} />
      <Route path="/vercel" element={<h1>Vercel</h1>} />
      <Route path="/netlify" element={<h1>Netlify</h1>} />
      <Route path="/c" element={<h1>C</h1>} />
      <Route path="/cpp" element={<h1>C++</h1>} />
      <Route path="/firebase" element={<h1>Firebase</h1>} />
      <Route path="/os" element={<h1>Operating Systems</h1>} />
      <Route path="/dbms" element={<h1>Database Management Systems</h1>} />
      <Route path="/sql" element={<h1>SQL</h1>} />
      <Route path="/nosql" element={<h1>NoSQL</h1>} />
      <Route path="/kotlin" element={<h1>Kotlin</h1>} />
      <Route path="/androidstudio" element={<h1>Android Studio</h1>} />
      <Route path="/typescript" element={<h1>TypeScript</h1>} />
      <Route path="/awards" element={<h1>Awards</h1>} />
      <Route path="/contributions" element={<h1>Contributions</h1>} />
      <Route path="/volunteer-work" element={<h1>Volunteer Work</h1>} />
      <Route path="/internships" element={<h1>Internships</h1>} />
      <Route path="/workshops" element={<h1>Workshops</h1>} />
      <Route path="/seminars" element={<h1>Seminars</h1>} />
      <Route path="/conferences" element={<h1>Conferences</h1>} />
      <Route path="/webinars" element={<h1>Webinars</h1>} />
      <Route path="/courses" element={<h1>Courses</h1>} />
      <Route path="/tutorials" element={<h1>Tutorials</h1>} />
      <Route path="/projects/details/:projectId" Component={projectsDetails} />
    </Routes>
  );
}

export default App;