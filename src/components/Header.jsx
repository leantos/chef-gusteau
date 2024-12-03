const logo = "/src/assets/chef.svg";
export function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Chef Logo" className="chef-logo" />
      <h1 className="site-title">Chef Claude</h1>
    </div>
  );
}
