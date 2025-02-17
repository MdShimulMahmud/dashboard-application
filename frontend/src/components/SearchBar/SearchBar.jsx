// components/SearchBar/SearchBar.jsx
export const SearchBar = () => (
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold text-gray-900">Users Management</h2>
      <div className="flex space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search users..."
            className="w-64 pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <span className="absolute right-3 top-2.5 text-gray-400">🔍</span>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Add User
        </button>
      </div>
    </div>
  );