// Sidebar imports
import DashboardIcon from "@mui/icons-material/Dashboard";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import GridViewIcon from "@mui/icons-material/GridView";
import PersonIcon from "@mui/icons-material/Person";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import AssessmentIcon from "@mui/icons-material/Assessment";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DifferenceIcon from "@mui/icons-material/Difference";
import PaymentsIcon from "@mui/icons-material/Payments";
import ReviewsIcon from "@mui/icons-material/Reviews";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import LinkIcon from "@mui/icons-material/Link";

// Sidebar Data
export const SidebarData = [
  {
    path: "/dashboard",
    icon: DashboardIcon,
    heading: "Dashboard",
  },
  {
    path: "/dashboard/admins",
    icon: AdminPanelSettingsIcon,
    heading: "Admins",
  },
  {
    path: "/dashboard/users",
    icon: PersonIcon,
    heading: "Users",
  },
  {
    path: "/dashboard/buy-properties",
    icon: AssessmentIcon,
    heading: "BuyProperties",
  },
  {
    path: "/dashboard/rent-properties",
    icon: AssessmentIcon,
    heading: "RentProperties",
  },
  //   {
  //     path: "admins",
  //     icon: PersonIcon,
  //     heading: "admins",
  //   },
  //   {
  //     path: "Orders",
  //     icon: AddShoppingCartIcon,
  //     heading: "Orders",
  //   },

  //   {
  //     path: "Payment",
  //     icon: PaymentsIcon,
  //     heading: "Payments",
  //   },
  {
    path: "/dashboard/contact-us",
    icon: ReviewsIcon,
    heading: "ContactUs",
  },
  {
    path: "/dashboard/offers",
    icon: DifferenceIcon,
    heading: "Offers",
  },
  //   {
  //     path: "Contact",
  //     icon: ContactMailIcon,
  //     heading: "Contact us",
  //   },
];
