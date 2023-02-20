function SmallCard({ following, followers, repos }) {
  return (
    <div className="small-card">
      <div className="repos">
        <h3>Repos</h3>
        <h2>{repos}</h2>
      </div>
      <div className="followers">
        <h3>Followers</h3>
        <h2>{followers}</h2>
      </div>
      <div className="following">
        <h3>Following</h3>
        <h2>{following}</h2>
      </div>
    </div>
  );
}
export default SmallCard;
