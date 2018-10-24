// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// core theme/views
import DashboardPage from "../views/Dashboard/Dashboard.jsx";
import UserProfile from "../views/UserProfile/UserProfile.jsx";
import TableList from "../views/TableList/TableList.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Material Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/user",
    sidebarName: "User Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/table",
    sidebarName: "Table List",
    navbarName: "Table List",
    icon: "content_paste",
    component: TableList
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
