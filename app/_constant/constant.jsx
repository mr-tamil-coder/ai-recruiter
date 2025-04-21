// In @/app/_constant/constant.js
// Store icon names as strings instead of component references
export const SideBarOptions = [
  {
    id: 1,
    name: "Dashboard",
    href: "/dashboard",
    icon: "LayoutDashboard",
    active: false
  },
  {
    id: 2,
    name: "Schedule Interview",
    href: "/schedule-interview",
    icon: "CalendarClock", 
    active: false
  },
  {
    id: 3,
    name: "All Interviews",
    href: "/interviews",
    icon: "Users", 
    active: false
  },
  {
    id: 4,
    name: "Billing",
    href: "/billing",
    icon: "CreditCard", 
    active: false
  },
  {
    id: 5,
    name: "Settings",
    href: "/settings",
    icon: "Settings", 
    active: false
  }
];