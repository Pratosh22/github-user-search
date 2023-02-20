import "./card.css";
import location_img from "../assets/icon-location.svg";
import twitter_img from "../assets/icon-twitter.svg";
import company_img from "../assets/icon-company.svg";
import link_img from "../assets/icon-website.svg";
import SmallCard from "./SmallCard";
// import avatar from "../assets/illustration-empty.svg";
function Card(props) {
  let {
    avatar_url,
    name,
    login,
    bio,
    following,
    followers,
    public_repos,
    location,
    company,
    twitter_username,
    blog,
  } = props.data;
  return (
    <div className="card">
      <div className="main-left">
        <div className="card-image">
          <img src={avatar_url} alt="avatar" />
        </div>
      </div>
      <div className="main-right">
        <div className="card-content">
          <h1 className="name">{name}</h1>
          <p className="username" style={{ color: "#0863ca" }}>
            @{login}
          </p>
          <p className="bio">{bio===null ? 'Bio not available':bio}</p>
        </div>
        <SmallCard following={following} followers={followers} repos={public_repos}/>
        <div className="details">
          <div className="left">
            <div className={location === null ? 'location not-available inside' : 'location inside'}>
              <img src={location_img} alt="location" />
              <h3>{location===null ? 'Not available':location}</h3>
            </div>
            <div className={twitter_username === null ? 'twitter not-available inside' : 'twitter inside'}>
              <img src={twitter_img} alt="twitter" />
              <h3>{twitter_username===null ? 'Not available':twitter_username}</h3>
            </div>
          </div>
          <div className="right ">
            <div className="link inside">
              <img src={link_img} alt="link" />
              <a href={blog}>{blog=== 0 ? "Not available" : blog}</a>
            </div>
            <div className={company === null ? 'company not-available inside' : 'company inside'}>
              <img src={company_img} alt="company" />
              <h3>{company===null ? 'Not available':company}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
