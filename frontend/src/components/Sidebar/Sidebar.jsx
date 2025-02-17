// components/Sidebar/Sidebar.jsx
import PropTypes from "prop-types";
import { MenuItem } from "./MenuItem";
import { SettingsMenuItem } from "./SettingsMenuItem";
import { SettingsSubMenu } from "./SettingsSubMenu";

export const Sidebar = ({
  activeTab,
  setActiveTab,
  settingsMenuOpen,
  setSettingsMenuOpen,
}) => (
  <div className="w-64 min-h-screen">
    <div className="flex items-center justify-center h-16 bg-gray-900">
      <span className="text-white text-xl font-semibold">🏠 AES</span>
    </div>
    <nav className="mt-6">
      <div className="px-4 space-y-2">
        <MenuItem
          active={activeTab === "dashboard"}
          onClick={() => setActiveTab("dashboard")}
        >
          📊 Dashboard
        </MenuItem>
        <MenuItem
          active={activeTab === "profile"}
          onClick={() => setActiveTab("profile")}
        >
          👤 Users
        </MenuItem>
        <SettingsMenuItem
          active={activeTab === "settings"}
          open={settingsMenuOpen}
          onClick={() => {
            setSettingsMenuOpen(!settingsMenuOpen);
            setActiveTab("settings");
          }}
        />
        {settingsMenuOpen && <SettingsSubMenu />}
      </div>
    </nav>
  </div>
);

Sidebar.propTypes = {
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
  settingsMenuOpen: PropTypes.bool.isRequired,
  setSettingsMenuOpen: PropTypes.func.isRequired,
};
