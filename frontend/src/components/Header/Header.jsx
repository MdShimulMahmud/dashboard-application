// components/Header/Header.jsx
import PropTypes from 'prop-types';
export const Header = ({ handleLogout }) => (
    <header className="h-16 bg-white shadow-sm flex items-center justify-between px-6">
      <h1 className="text-xl font-semibold text-gray-800">Admin Dashboard</h1>
      <button
        onClick={handleLogout}
        className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
      >
        Logout
      </button>
    </header>
);

Header.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};