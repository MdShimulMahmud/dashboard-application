// components/UserTable/UserTableHeader.jsx
export const UserTableHeader = () => (
    <tr className="bg-gray-50">
      {["Name", "Email", "Company", "Contact", "University", "Actions"].map((header) => (
        <th
          key={header}
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          {header}
        </th>
      ))}
    </tr>
  );