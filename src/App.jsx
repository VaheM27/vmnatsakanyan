import Contact from "./components/feature/contact";
import Layout from "./components/feature/layout";
import "./App.scss";
import { useEffect, useState } from "react";
import Loader from "./components/shared/Loader";

function App() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 4800);
  }, []);
  return (
    <div className="App">
      {loader ? (
        <Loader />
      ) : (
        <Layout>
          <Contact />
        </Layout>
      )}
    </div>
  );
}

export default App;
