// components/Sidebar/SettingsSubmenu.jsx
export const SettingsSubmenu = () => (
    <div className="bg-gray-500 rounded-md mt-2">
      {[
        { label: "Profile Settings", onClick: () => {} },
        { label: "Account Security", onClick: () => {} },
        { label: "Notification Preferences", onClick: () => {} },
      ].map((item) => (
        <MenuItem
          key={item.label}
          onClick={item.onClick}
          className="text-white px-4 py-2 rounded-lg transition-all duration-300 ease-in-out transform hover:bg-white hover:text-gray-900 hover:shadow-lg hover:scale-105"
        >
          {item.label}
        </MenuItem>
      ))}
    </div>
  );