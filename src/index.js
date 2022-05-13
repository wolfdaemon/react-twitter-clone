import React from 'react';
import ReactDOM from 'react-dom/client';
import MyRoutes from './components/MyRoutes';
import './css/index.css';
//Global Variable but will not reset
//Need to click F5 for the id to show up.
window.id = localStorage.getItem('userId');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Contents of the webpage
    (cite.: https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure)
    Usually contains five basic sections:
        1. Header (<header>)
        2. Navigation Bar (<nav>)
        3. Main Content (<main>)
        4. Sidebar (<aside>)
        5. Footer (<footer>)
    The Sections are marked by comments explaining their use below. */}
    
      <MyRoutes />
    {/* Document Section: Navigation Bar
		(Links to site's main sections; i.e. the main menu)*/}
  </React.StrictMode>
);