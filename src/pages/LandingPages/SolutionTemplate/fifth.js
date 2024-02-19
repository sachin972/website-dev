/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
// import MKButton from "components/MKButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// About Us page sections
// import Information from "pages/LandingPages/AboutUs/sections/Information";
import Team from "pages/LandingPages/AboutUs/sections/Team";
// import Featuring from "pages/LandingPages/AboutUs/sections/Featuring";
// import Newsletter from "pages/LandingPages/AboutUs/sections/Newsletter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/bg-about-us.jpg";
import SolInformation from "./information";

const obj = {
  heading: "Cost Efficiency for Competitive Advantage \nBuilding Leaner Organizations for Progress",
  description:
    "As the pressure to provide high-value services escalates alongside the imperative to boost productivity, cost optimization continues to occupy a top spot on the priority list for organizations. Shifts in business models, evolving employee preferences, changes in organizational size and structure, and revolutions in service delivery have rendered traditional workforce models outdated\nCollaborating closely with your team, we'll identify the areas to adjust in order to reallocate your resources efficiently, ensuring sustainable cost optimization.",
  offers: [
    {
      heading: "Optimize Your Operating Model for Efficiency",
      body: "We help redesign your operating model to eliminate waste and redundancies, ensuring that every process is streamlined and contributes directly to your bottom line.",
    },
    {
      heading: "Streamline Organizational Structure to Reduce Costs",
      body: "By creating a more efficient organizational structure, we help you cut unnecessary layers, fostering direct communication and reducing management overhead.",
    },
    {
      heading: "Rationalize Headcount to Optimize Spend",
      body: "We assist in aligning your workforce size with actual business needs, focusing on maintaining productivity with optimized costs, which includes identifying areas for automation and roles that deliver the highest value.",
    },
    {
      heading: "Revise Reward Systems to Drive Cost-Effective Performance",
      body: "We guide you in creating reward systems that motivate desired behaviors and performance efficiently, ensuring that compensation is aligned with market standards and business affordability.",
    },
    {
      heading: "Drive Change Management to Minimize Transition Costs",
      body: "We assist in effective change management that reduces the friction and costs associated with transformation, ensuring a smoother transition with less impact on productivity.",
    },
  ],
};

function Fifth() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "#",
          label: "free download",
          color: "default",
        }}
        sticky
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Cost Optimization
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              Progressing Efficiently
            </MKTypography>
            {/* <MKButton color="default" sx={{ color: ({ palette: { dark } }) => dark.main }}>
              create account
            </MKButton> */}
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <SolInformation obj={obj} />
        <Team />
        {/* <Featuring />
        <Newsletter /> */}
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Fifth;
