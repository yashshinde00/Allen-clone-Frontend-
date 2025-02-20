import { BrowserRouter, Link } from "react-router-dom";
import "./home.css"

const programCards = [
    { title: 'JEE', href: '#jee' },
    { title: 'NEET', href: '#neet' },
    { title: 'Grade 6-10', href: '#grade-6-10' }
  ];

const Home = () => {
  return (
    <div className="Cross">
      <div className="content">
      <BrowserRouter>
        <div className="breadcrumb">
          <Link to="/">Home</Link> &gt; Online Programs
        </div>

        <h1>Online Programs</h1>
        
        <div className="description">
          To get the full ALLEN Learning Experience explore the Ultimate Series of
          Programs for JEE, NEET and Olympiads. The Ultimate Programs are Allen
          Recommended. They provide a fully structured curriculum with a week-by-week
          plan and foster meaningful teacher-student interaction. These programs
          offer a personalized study experience, guiding you throughout your journey
          on where to concentrate your efforts.
        </div>

        <h2>Discover the perfect online program</h2>
        
        <div className="program-cards">
          {programCards.map((program) => (
            <div key={program.title} className="program-card">
              <h3>{program.title}</h3>
              <Link to={program.to} className="view-link">
                View →
              </Link>
            </div>
          ))}
        </div>
      </BrowserRouter>
        
      </div>
    </div>
  )
}

export default Home;
