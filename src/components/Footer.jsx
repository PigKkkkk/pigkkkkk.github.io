export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-copy">
          &copy; {year} <span>Gilbert Uwonkunda</span>. Built with React.
        </p>
        <p className="footer-tagline">
          Geospatial AI · Kigali, Rwanda
        </p>
      </div>
    </footer>
  );
}
