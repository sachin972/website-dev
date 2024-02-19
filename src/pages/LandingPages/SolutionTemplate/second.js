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
      heading: "Talent Assessment",
      body: "We use our knowledge, research, and assessment tools to help organizations understand and use their employees' talents better. We don't just look at what skills people have; we also offer advice and plans to help find and grow the talents needed for their current jobs and for future opportunities.",
    },
    {
      heading: "Succession Planning",
      body: "Organizations need to prepare for the transitions of key personnel well in advance. This ensures that the company remains strong and maintains continuous performance.",
    },
    {
      heading: "Training & Certification",
      body: "At our consultancy, we are dedicated to fostering professional growth and leadership excellence. We understand the dynamic nature of the business world and the continuous evolution required to stay ahead.",
    },
    { heading: "Robust HR Strategy", body: "Something" },
  ],
};

function Second() {
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
              Assessment and Succession
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              Recognize the current skills within your organization and the skills needed for future
              success.
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

export default Second;
