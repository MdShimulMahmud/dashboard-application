// components/UserTable/UserTableRow.jsx
import PropTypes from 'prop-types';
export const UserTableRow = ({ user, onEdit, onDelete }) => (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {user.name || "N/A"}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {user.email || "N/A"}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {user.company || "N/A"}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {user.phone || "N/A"}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {user.university || "N/A"}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <button
          className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-1 px-3 rounded-lg text-xs"
          onClick={() => onEdit(user._id)}
        >
          Edit
        </button>
        <button
          className="ml-2 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold py-1 px-3 rounded-lg text-xs"
          onClick={() => onDelete(user._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
  

  UserTableRow.propTypes = {
    user: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string,
      email: PropTypes.string,
      company: PropTypes.string,
      phone: PropTypes.string,
      university: PropTypes.string
    }).isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
  };