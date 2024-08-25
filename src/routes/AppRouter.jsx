import NavbarNew from './NavbarNew';
import Footer from '../Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Route1 from './Route1';
import Route2 from './Route2';
import ErrorComponent from './ErrorComponent';
import RouteWithParams from './RouteWithParams';


function AppRouter() {

  // 0. Cleanup
  // 1. Create a new component Route1
  // 2. Create a new component Route2
  // 3. import Route1 and Route2 in AppRouter
  // 4.0: install dependency using: npm install react-router-dom
  // 4. import Router, Route, Routes from react-router-dom
  // 5. Add a new Route for Route1 and Route2
  // // 5.1 does it make a new call?
  // 6. Add a new Route for RouteParam with a parameter
  // 7. Update the Navbar with new links for Route1, Route2, RouteParam
  // // 7.1 Use anchor first and then use Link
  // 8. Add a new ErrorComponent for Page Not Found

  return (
    <div className="App">
      <Router>
        <NavbarNew /> 
        <Routes>
          <Route path="/route1" element={<Route1 />} />
          <Route path="/route2" element={<Route2 />} />
          <Route path="/routeparam/:id" element={<RouteWithParams />} />
          <Route path="*" element={<ErrorComponent />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default AppRouter;
