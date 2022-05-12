import Card from "./Card";

const Header = () => {
  return (
    <header>
      <Card>
        <nav className="navbar navbar-expand-lg navbar-light px-2">
          <h1 className="fs-2 text-primary">Todos Simple</h1>
        </nav>
      </Card>
    </header>
  );
};

export default Header;
