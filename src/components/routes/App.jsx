import { Outlet } from "react-router-dom";
import Footer from "../Footer.jsx";
import Header from "../Header.jsx";
import "./index.css";
import { useSelector } from "react-redux";
import FetchStatus from "../FetchStatus.jsx";
import LoaderSpinner from "../LoaderSpinner.jsx";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus)
  return (
    <>
      
      <Header />
      <FetchStatus/>
      {fetchStatus.currentlyFatching ? <LoaderSpinner/> : <Outlet/>}           
      <Footer />
    </>
  );
}

export default App;
