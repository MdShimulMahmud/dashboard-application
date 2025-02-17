// components/Sidebar/MenuItem.jsx
import PropTypes from "prop-types";

export const MenuItem = ({ active, onClick, children }) => (
  <button
    className={`w-full flex items-center px-4 py-3 text-sm rounded-lg ${
      active ? "bg-blue-600 text-gray-100" : "text-black hover:bg-gray-700"
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);

MenuItem.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
