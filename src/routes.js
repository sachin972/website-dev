/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Kit 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

// @mui material components
import Icon from "@mui/material/Icon";

// @mui icons
// import GitHubIcon from "@mui/icons-material/GitHub";

// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import Author from "layouts/pages/landing-pages/author";
// import SignIn from "layouts/pages/authentication/sign-in";

// Sections
// import PageHeaders from "layouts/sections/page-sections/page-headers";
// import Features from "layouts/sections/page-sections/featuers";
// import Navbars from "layouts/sections/navigation/navbars";
// import NavTabs from "layouts/sections/navigation/nav-tabs";
// import Pagination from "layouts/sections/navigation/pagination";
// import Inputs from "layouts/sections/input-areas/inputs";
// import Forms from "layouts/sections/input-areas/forms";
// import Alerts from "layouts/sections/attention-catchers/alerts";
// import Modals from "layouts/sections/attention-catchers/modals";
// import TooltipsPopovers from "layouts/sections/attention-catchers/tooltips-popovers";
// import Avatars from "layouts/sections/elements/avatars";
// import Badges from "layouts/sections/elements/badges";
// import BreadcrumbsEl from "layouts/sections/elements/breadcrumbs";
// import Buttons from "layouts/sections/elements/buttons";
// import Dropdowns from "layouts/sections/elements/dropdowns";
// import ProgressBars from "layouts/sections/elements/progress-bars";
// import Toggles from "layouts/sections/elements/toggles";
// import Typography from "layouts/sections/elements/typography";
import { ContactPage } from "@mui/icons-material";

const routes = [
  {
    name: "Insights",
    icon: <Icon>dashboard</Icon>,
    collapse: [
      {
        name: "AI at Workplace",
        route: "/pages/landing-pages/about-us",
        component: <AboutUs />,
      },
      {
        name: "People, Planet and Profitability",
        route: "/pages/landing-pages/contact-us",
        component: <ContactUs />,
      },
      {
        name: "Transformational Leadership",
        route: "/pages/landing-pages/author",
        component: <Author />,
      },
    ],
  },
  // {
  //   name: "Expertise",
  //   icon: <Icon>dashboard</Icon>,
  //   columns: 1,
  //   rowsPerColumn: 2,
  //   collapse: [
  //     {
  //       //Corporate & Investment Banking / Global Markets
  //       // Energy & Natural Resources
  //       // Insurance
  //       // Life Sciences Consulting
  //       // Manufacturing Consulting
  //       // Healthcare Consulting
  //       // Media & Entertainment
  //       // Private Equity Consulting
  //       // Professional Services
  //       // Real Estate Consulting
  //       // Retail
  //       // Software & Platforms
  //       // Telecommunications Consulting
  //       // Travel, Hospitality & Leisure
  //       // Agribusiness Consulting
  //       // Government Consulting
  //       // Public Sector Consulting
  //       name: "Our Areas",
  //       collapse: [
  //         {
  //           name: "Corporate & Investment Banking / Global Markets",
  //           route: "/pages/landing-pages/about-us",
  //           component: <AboutUs />,
  //         },
  //         {
  //           name: "Energy & Natural Resources",
  //           route: "/pages/landing-pages/contact-us",
  //           component: <ContactUs />,
  //         },
  //         {
  //           name: "Insurance",
  //           route: "/pages/landing-pages/author",
  //           component: <Author />,
  //         },
  //         {
  //           name: "Life Sciences Consulting",
  //           route: "/pages/landing-pages/author",
  //           component: <Author />,
  //         },
  //         {
  //           name: "Manufacturing Consulting",
  //           route: "/pages/landing-pages/author",
  //           component: <Author />,
  //         },
  //         {
  //           name: "Healthcare Consulting",
  //           route: "/pages/landing-pages/author",
  //           component: <Author />,
  //         },
  //         {
  //           name: "Media & Entertainment",
  //           route: "/pages/landing-pages/author",
  //           component: <Author />,
  //         },
  //         {
  //           name: "Private Equity Consulting",
  //           route: "/pages/landing-pages/author",
  //           component: <Author />,
  //         },
  //         {
  //           name: "Professional Services",
  //           route: "/pages/landing-pages/author",
  //           component: <Author />,
  //         },
  //         {
  //           name: "Real Estatae Consulting",
  //           route: "/pages/landing-pages/author",
  //           component: <Author />,
  //         },
  //         {
  //           name: "Retail",
  //           route: "/pages/landing-pages/author",
  //           component: <Author />,
  //         },
  //         {
  //           name: "Software & Plateforms",
  //           route: "/pages/landing-pages/author",
  //           component: <Author />,
  //         },
  //         {
  //           name: "Telecommunication Consultancy",
  //           route: "/pages/landing-pages/author",
  //           component: <Author />,
  //         },
  //         {
  //           name: "Travel, Hospitality & Leisure",
  //           route: "/pages/landing-pages/author",
  //           component: <Author />,
  //         },
  //         {
  //           name: "Agribusiness Consulting",
  //           route: "/pages/landing-pages/author",
  //           component: <Author />,
  //         },
  //         {
  //           name: "Government Consulting",
  //           route: "/pages/landing-pages/author",
  //           component: <Author />,
  //         },
  //         {
  //           name: "Public Sector Consulting",
  //           route: "/pages/landing-pages/author",
  //           component: <Author />,
  //         },
  //       ],
  //     },
  //     // {
  //     //   name: "account",
  //     //   collapse: [
  //     //     {
  //     //       name: "sign in",
  //     //       route: "/pages/authentication/sign-in",
  //     //       component: <SignIn />,
  //     //     },
  //     //   ],
  //     // },
  //   ],
  // },
  {
    name: "Solutions",
    icon: <Icon>dashboard</Icon>,
    collapse: [
      {
        name: "Organizational Strategy and Designing",
        route: "/pages/landing-pages/about-us",
        component: <AboutUs />,
      },
      {
        name: "Assessment and Succession",
        route: "/pages/landing-pages/contact-us",
        component: <ContactUs />,
      },
      {
        name: "Total Rewards",
        route: "/pages/landing-pages/author",
        component: <Author />,
      },
    ],
  },
  // {
  //   name: "Careers",
  //   icon: <Icon>view_day</Icon>,
  //   collapse: [
  //     {
  //       name: "page sections",
  //       description: "See all sections",
  //       dropdown: true,
  //       collapse: [
  //         {
  //           name: "page headers",
  //           // route: "/sections/page-sections/page-headers",
  //           route: "#",
  //           component: <PageHeaders />,
  //         },
  //         {
  //           name: "features",
  //           // route: "/sections/page-sections/features",
  //           route: "#",
  //           component: <Features />,
  //         },
  //       ],
  //     },
  //     {
  //       name: "navigation",
  //       description: "See all navigations",
  //       dropdown: true,
  //       collapse: [
  //         {
  //           name: "navbars",
  //           // route: "/sections/navigation/navbars",
  //           route: "#",
  //           component: <Navbars />,
  //         },
  //         {
  //           name: "nav tabs",
  //           // route: "/sections/navigation/nav-tabs",
  //           route: "#",
  //           component: <NavTabs />,
  //         },
  //         {
  //           name: "pagination",
  //           // route: "/sections/navigation/pagination",
  //           route: "#",
  //           component: <Pagination />,
  //         },
  //       ],
  //     },
  //     {
  //       name: "input areas",
  //       description: "See all input areas",
  //       dropdown: true,
  //       collapse: [
  //         {
  //           name: "inputs",
  //           // route: "/sections/input-areas/inputs",
  //           route: "#",
  //           component: <Inputs />,
  //         },
  //         {
  //           name: "forms",
  //           // route: "/sections/input-areas/forms",
  //           route: "#",
  //           component: <Forms />,
  //         },
  //       ],
  //     },
  //     {
  //       name: "attention catchers",
  //       description: "See all examples",
  //       dropdown: true,
  //       collapse: [
  //         {
  //           name: "alerts",
  //           // route: "/sections/attention-catchers/alerts",
  //           route: "#",
  //           component: <Alerts />,
  //         },
  //         {
  //           name: "modals",
  //           // route: "/sections/attention-catchers/modals",
  //           route: "#",
  //           component: <Modals />,
  //         },
  //         {
  //           name: "tooltips & popovers",
  //           // route: "/sections/attention-catchers/tooltips-popovers",
  //           route: "#",
  //           component: <TooltipsPopovers />,
  //         },
  //       ],
  //     },
  //     {
  //       name: "elements",
  //       description: "See all 32 examples",
  //       dropdown: true,
  //       collapse: [
  //         {
  //           name: "avatars",
  //           // route: "/sections/elements/avatars",
  //           route: "#",
  //           component: <Avatars />,
  //         },
  //         {
  //           name: "badges",
  //           // route: "/sections/elements/badges",
  //           route: "#",
  //           component: <Badges />,
  //         },
  //         {
  //           name: "breadcrumbs",
  //           // route: "/sections/elements/breadcrumbs",
  //           route: "#",
  //           component: <BreadcrumbsEl />,
  //         },
  //         {
  //           name: "buttons",
  //           // route: "/sections/elements/buttons",
  //           route: "#",
  //           component: <Buttons />,
  //         },
  //         {
  //           name: "dropdowns",
  //           // route: "/sections/elements/dropdowns",
  //           route: "#",
  //           component: <Dropdowns />,
  //         },
  //         {
  //           name: "progress bars",
  //           // route: "/sections/elements/progress-bars",
  //           route: "#",
  //           component: <ProgressBars />,
  //         },
  //         {
  //           name: "toggles",
  //           // route: "/sections/elements/toggles",
  //           route: "#",
  //           component: <Toggles />,
  //         },
  //         {
  //           name: "typography",
  //           // route: "/sections/elements/typography",
  //           route: "#",
  //           component: <Typography />,
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    name: "About",
    icon: <Icon>article</Icon>,
    href: "#",
    // collapse: [
    //   {
    //     name: "getting started",
    //     description: "All about overview, quick start, license and contents",
    //     href: "#",
    //   },
    //   {
    //     name: "foundation",
    //     description: "See our colors, icons and typography",
    //     href: "#",
    //   },
    //   {
    //     name: "components",
    //     description: "Explore our collection of fully designed components",
    //     href: "#",
    //   },
    //   {
    //     name: "plugins",
    //     description: "Check how you can integrate our plugins",
    //     href: "#",
    //   },
    // ],
  },
  {
    name: "Contact US",
    icon: <ContactPage />,
    href: "#contact",
  },
];

export default routes;
