

import { Central as Layout } from "@/layouts";
import "./NotFound.style.scss";

function NotFound() {
  return (
    <Layout title={"Page Not Found"}>
      <div className="not-found-container">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-message">Oops! Looks like you’ve wandered off the map.</p>
        <div className="not-found-suggestions">
          <p></p>
          <button className="not-found-home-button" onClick={() => window.location.href = '/'}>
            🧭 Go to Home
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default NotFound;

