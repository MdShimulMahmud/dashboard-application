// components/Sidebar/SettingsMenuItem.jsx
import PropTypes from "prop-types";

export const SettingsMenuItem = ({ active, open, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center justify-between px-4 py-3 text-sm rounded-lg ${
      active ? "bg-blue-600 text-white" : "text-black hover:bg-gray-700"
    }`}
  >
    <span>⚙️ Settings</span>
    <svg
      className={`w-4 h-4 ml-2 transition-transform duration-300 ${
        open ? "transform rotate-180" : ""
      }`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-7 7-7-7"
      ></path>
    </svg>
  </button>
);

SettingsMenuItem.propTypes = {
  active: PropTypes.bool.isRequired,
  open: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
