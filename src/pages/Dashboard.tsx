import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>DevOps Interview Portal</h1>

      <br />

      <Link to="/linux">
        Linux Module
      </Link>

      <br />
      <br />

      <Link to="/aws">
        AWS Module
      </Link>
    </div>
  );
}