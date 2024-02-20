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
// import Team from "pages/LandingPages/AboutUs/sections/Team";
// import Featuring from "pages/LandingPages/AboutUs/sections/Featuring";
// import Newsletter from "pages/LandingPages/AboutUs/sections/Newsletter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/bg-about-us.jpg";
import SolInformation from "./information";

const obj = {
  heading:
    "Serving beyond customer expectation\nEvery point of contact is an opportunity to strengthen loyalty and achieve your business goals.",
  description:
    "Building strong customer relationships is a gradual process, developed through countless interactions between your brand and its customers. Each interaction may evoke various sentiments, ranging from positive and negative to neutral. The aim should be to elevate positive interactions, improve upon the neutral ones, and address any negative experiences.\nEvery moment with your customers is absolutely critical. Our experts are dedicated to upgrade and transform your customer service teams so that you deliver exceptional customer experiences that boost loyalty and retention. We’re committed to helping our clients make the most of these moments that matter.",
  offers: [
    {
      heading: "We define the talent needed to create exceptional customer experiences.",
      body: "By leveraging our extensive analysis and research, we define qualities, skills, and competencies that are necessary for creating exceptional customer experiences, and the behaviors that create positive interactions to ensure customer loyalty.",
    },
    {
      heading: "We access where you CX talent currently stands.",
      body: "Conducting a comprehensive assessment of your team's existing skills, knowledge, and capabilities in delivering customer experience, we identify areas of strength and pinpoint gaps or areas for improvement.",
    },
    {
      heading: "We provide personalized training and coaching for the customer service teams.",
      body: "Based on the assessment, we provide personalized training programs and coaching sessions to address the specific needs of your customer service team. This tailored approach ensures that each team member acquires the necessary skills and knowledge to excel in their role.",
    },
  ],
};

function Sixth() {
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
              Customer Experience
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              Make each moment special for Customers
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
        {/* <Team /> */}
        {/* <Featuring />
        <Newsletter /> */}
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Sixth;
