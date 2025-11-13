import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-10 p-6 text-center">
      <p>© 2025 WarmPaws. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <Link to="#" className="text-gray-600 hover:text-blue-600">Privacy Policy</Link>
        <Link to="#" className="text-gray-600 hover:text-blue-600">Contact</Link>
        <Link to="#" className="text-gray-600 hover:text-blue-600">Facebook</Link>
        <Link to="#" className="text-gray-600 hover:text-blue-600">Instagram</Link>
      </div>
    </footer>
  );
}
