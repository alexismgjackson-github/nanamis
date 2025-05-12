// Import necessary components from React Router and internal components
import { Outlet } from "react-router-dom"; // Used to render nested route content
import Header from "./Header"; // Site header
import Footer from "./Footer"; // Site footer

// Layout component acts as a wrapper for all pages
export default function Layout() {
  return (
    <>
      {/* Header remains visible across all routes */}
      <Header />

      {/* Main content area - will render the active route's component */}
      <main>
        <Outlet /> {/* Placeholder for child route elements */}
      </main>

      {/* Footer remains visible across all routes */}
      <Footer />
    </>
  );
}
