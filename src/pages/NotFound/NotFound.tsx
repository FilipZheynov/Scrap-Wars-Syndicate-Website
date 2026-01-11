import { Link } from "react-router-dom"; // if using react-router

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[var(--bg-secondary)] text-center px-4">
      <h1 className="text-9xl font-extrabold text-[var(--text-secondary)] mb-4">404</h1>
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[var(--text-primary)]">Page Not Found</h2>
      <p className="text-[var(--text-secondary)] mb-6">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-[var(--primary-base)] text-[var(--text-primary)] rounded-lg hover:bg-[var(--primary-dark)] transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
