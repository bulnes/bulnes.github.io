export function Footer() {
  return (
    <footer className="mb-8 py-4">
      <div className="border-t border-solid border-text py-4">
        <div className="flex items-center justify-between text-xs">
          <p>&copy; 2023 - Bruno Bulnes</p>

          <nav className="flex items-center justify-center gap-3">
            <span>Home</span>
            <span>Projects</span>
            <span>Thoughts</span>
            <span>Contact</span>
          </nav>
        </div>
      </div>
    </footer>
  );
}
