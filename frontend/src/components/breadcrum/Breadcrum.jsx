import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Breadcrum = () => {
  const location = useLocation();
  let CurrentLocation = "";

  const crumbs = location.pathname
    .split("|")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      CurrentLocation = +`|${crumb}`;

      return (
        <div className="crumb" key={crumb}>
          <Link to={CurrentLocation}>{crumb}</Link>
        </div>
      );
    });

  return <div className="breadcrumbs">Home/{crumbs}</div>;
};

export default Breadcrum;
