import { BrowserRouter, Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <BrowserRouter>
        <div className="navbar-section-1">
          <img
            className="logo"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAYAAADnRuK4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFCElEQVR4nO3cW6gVVRzH8Z+l3SjQbnSx6EL1kEFlhIUgWRSWRiIm3R56qh7zxZciKiwo8KEiiEMRFZVZCdqFLkYYdiOjKKNMtIcMi7QLhZl5dixZGzbDzJ71XzNr7bPd3w/83/as/8w6vz1nz+w1WwIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAxR9IWSSslHTLoncFwmSzpe0kdX3e0OPZJks4IqKkNehwb2MO9rokTA/uE1MkB/S6WtFHSM5KOj9jfqYH7Ml0N3dITHlfbJE1pOqg/8E5g/Sfp5ogedxl6dPzrY7xg7BNSq2t6vtzz2h2Srjbs73xJewz78lzkvOhgSd+WDHirmttrnNC1ET2+MfZwx2o1RdK+BAFydU6fvm8VXjsu6RFJhwXs85PG/XB/qyg3Vgy4xf9ra8I6mW9G9Nhs7OGOy+rQROFxdachQN3aJOn8mn1+OmJfzA6S9FWfAW9QMwRItXPwTkSAXO2WtMz/DQcWoCU1A27qs4MhCJBq58B9TjkqIkC9AXQXKtkDVHf26dZCxSNACpqDhQ0C5OpnSdcUtn0xdYAWBQ76maRJcfkhQAqbg7GGAep+wH5M0tGSzpX0a8oAuUB8YRh4HgFSJ2H9WPEmtQSoW02uFoNdZxx4AwFSJ3Gd3lKAmlTw2WdjxOBzI0Jk7TGKl/EdSVslHT4sAZofOfi6iIkf1QDtkHRFYLnvII+s6DshA/RJgwazjRM/qgHapnZMuADNa9jgdeMEjGqA9vir17J6TdLZwxqgjxo2cJeKMw0TP6oB6tTUs8MYoCtbavKKYeIJkErnYM0wBmh9S03cWeg8AqSRCtDcwDPLTZIelvRvzWufJ0AaqQC9X7Phe4XX3xOw+OusgAmwHsCofAZaM0wBmhOw4X2FbS4L2OapgAkgQCqdgyeGKUDrAr+q6F228WDANu7f3GktB+hdpT8D/ZDhDPSnD0lZPWRYmz3wAM02bPy2X0w/ZvhC7vGaCehETPyMxAFyx3Z54gBtVTsGHqDUO7C7YjFTV+y4uypqp78Rd0SDAHXrtz591heOyxogtz5ncWAt6vNUxEADNCtT0xUJAlRX17YQoLpa2iBA1tpV8VjTQAP0Rqamf0s6LnOALsgQoOszBsjVmRMpQDP9Db9cjR/IGKC/Ck+LpArQ9IwB+qnFBWWtBGht5sZ/SJqWKUDFe1abE60QVMYAVd0SiQnQ55IW+De19bm8/S6MOPu4D32vSnrJ15cRO+5uPhalmOzlGQK0KnOAlrQYoKsK9/N+sQZodcTip7LPMCuN4+wseTwlxWQvyBCgpRkD5O7qH9NigC4qjHGKpE9DAzQjYlF18S5074P91p1fljhA4yU34VIEaFbGAH1cMf9tBai7/2MhAVoVkf5T+xzAdxH/CnvX9rY92S4sShygf/yE5wrQvRkC1HV7zQ8u7L851uaPGdzd8AAsvw4RUu5py6KvW+7xYUmPyf7NliJAl/aZ/5iLobqlNpdI2l4VoPv93eHQdbt1XxtMM6xiHPdfh/S+e5e3GKLt/gKh6DZ/L6qNHr8XblL2WhGwzMVS+/yFy6SaJcihH4L3+iU57tdW6pwg6YOyAAGWn6x5tPDxAzBb7M9clh+vAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHSA+h8bneA6wjBXoAAAAABJRU5ErkJggg=="
            alt="Allen Logo"
          />
          <ul className="nav-links">
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/test-series">Test Series</Link></li>
            <li><Link to="/scholarships">Scholarships</Link></li>
            <li><Link to="/study-materials">Study Materials</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
          </ul>
        </div>
        <div className="navbar-section-2">
          <button className="btn talk-to-us">Talk to Us</button>
          <button className="btn login">Login</button>
        </div>
      </BrowserRouter>
    </nav>
  );
}

export default Navbar;
