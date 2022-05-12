import Card from "./Card";

const Footer = () => {
  return (
    <footer className="fixed-bottom">
      <Card>
        <p className="text-center">
          <span className="text-muted">&copy; 2022</span> Create By {" "}
          <a href="" target="_blank">Amir Abasi</a>
        </p>
      </Card>
    </footer>
  );
};

export default Footer;
