import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container mx-auto px-4 md:px-6 py-4 md:py-6 text-center text-xs md:text-sm text-[var(--text-muted)]">
        © {new Date().getFullYear()} MySite. All rights reserved.
      </div>
    </footer>
  );
}
