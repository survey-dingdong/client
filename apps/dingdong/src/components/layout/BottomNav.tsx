import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { Icon } from "@dingdong/design-system";
import React from "react";
import { BOTTOM_NAVS } from "./_constants/bottomNav";
import { NavLink } from "react-router-dom";

const BottomNav: React.FC = () => {
  const [selectedNav, setSelectedNav] = React.useState(0);

  return (
    <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
      <BottomNavigation
        showLabels
        value={selectedNav}
        onChange={(_, newValue) => {
          setSelectedNav(newValue);
        }}
      >
        {BOTTOM_NAVS.map((nav, index) => (
          <BottomNavigationAction
            key={index}
            label={nav.label}
            component={NavLink}
            icon={<Icon icon={nav.icon} size="small" />}
            to={nav.path}
            value={index}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNav;
