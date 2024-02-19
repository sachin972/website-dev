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
  heading: "Sharing the Vision,\nWorking through and with the people",
  description:
    "We help in transforming organizations by shaping their structures, strategies, and work processes with a focus on their most valuable asset - their people. We create environments where every team member can thrive and contribute meaningfully to the business. We guide organizations to seamlessly integrate all their aspects, creating a culture where everyone grows together and succeeds as one.",
  offers: [
    {
      heading: "High Performing Executive Teams",
      body: "In today's volatile and uncertain environment, characterized by constant change, a robust executive team is vital for navigating challenges and capitalizing on opportunities. Our consultancy focuses on enhancing executive team performance by strengthening visionary leadership, fostering shared purpose, developing talent, establishing performance benchmarks, and optimizing organizational processes and systems.",
    },
    {
      heading: "Organizational Structure",
      body: "We recognize the critical importance of aligning organizational structure with strategic objectives. Our consultants excel in crafting organizations that facilitate seamless operations, transparent assignment of duties and responsibilities and increased productivity.",
    },
    {
      heading: "Job and Work Design",
      body: "In today's dynamic business environment, a robust job and career architecture is essential for organizational success. Our consultancy specializes in creating tailored work and career frameworks, precise job definitions, fair compensation structures, and opportunities for professional development, ultimately optimizing organizational performance and maximizing employee potential.",
    },
    { heading: "Robust HR Strategy", body: "Something" },
  ],
};

function First() {
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
              Organizational Strategy and Designing
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              Tailored solutions aimed at synchronization of the strategy, structure, people and
              operations of your business.
            </MKTypography>
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

export default First;
