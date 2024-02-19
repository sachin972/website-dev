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
import Information from "pages/LandingPages/AboutUs/sections/Information";
// import Team from "pages/LandingPages/AboutUs/sections/Team";
// import Featuring from "pages/LandingPages/AboutUs/sections/Featuring";
// import Newsletter from "pages/LandingPages/AboutUs/sections/Newsletter";
import img4 from "../../../assets/images/ivana-square.jpg";
import img5 from "../../../assets/images/bg-coworking.jpeg";
import img6 from "../../../assets/images/ivana-squares.jpg";
import MediaCard from "../../Presentation/components/ExampleCard/card";

import { Box, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/bg-about-us.jpg";

function Solution() {
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
              WHAT WE CAN DO FOR YOU
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              We support organizations in overcoming challenges and achieve sustainable growth.
            </MKTypography>
            {/* <MKButton color="default" sx={{ color: ({ palette: { dark } }) => dark.main }}>
              create account
            </MKButton> */}
            {/* <MKTypography variant="h6" color="white" mt={8} mb={1}>
              Find us on
            </MKTypography>
            <MKBox display="flex" justifyContent="center" alignItems="center">
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-facebook" />
              </MKTypography>
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-instagram" />
              </MKTypography>
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-twitter" />
              </MKTypography>
              <MKTypography component="a" variant="body1" color="white" href="#">
                <i className="fab fa-google-plus" />
              </MKTypography>
            </MKBox> */}
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
        <Information />
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <MediaCard
                image={img4}
                btnText="Read More"
                name="Organizational Strategy and Designing"
                description="Our proficiency in
                organizational strategy and
                design ensures your business
                strategy, structure, workforce,
                and processes are
                harmoniously integrated to
                achieve peak performance."
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <MediaCard
                image={img5}
                name="Assessment and Succession"
                description="We specialize in identifying
                and closing the talent gaps
                within your organization,
                ensuring your team is not just
                equipped for today's demands
                but is also future-proofed for
                the innovations ahead."
                btnText="Read More"
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <MediaCard
                image={img6}
                name="Total Rewards"
                description="Our consultancy specializes in
                creating and implementing
                effective total rewards
                strategies that align with your
                business goals and HR strategy,
                playing a crucial role in
                attracting, motivating, and
                retaining top talent."
                btnText="Read More"
              />
            </Grid>
          </Grid>
        </Container>

        <Container sx={{ mt: 15, mb: 6 }}>
          {/* <BuiltByDevelopers /> */}
          {/* <Divider
            sx={{ display: { xs: "none", md: "block" }, ml: 0 }}
            textAlign="center"
            variant="inset"
          >
            <div>Insights and Perspective</div>
          </Divider> */}
          {/* <DividerWithText text="Our Solutions" /> */}
          <Box position="relative">
            <Divider />
            <Typography
              variant="h3"
              sx={{
                position: "absolute",
                top: "-20px",
                left: "50%",
                transform: "translateX(-50%)",
                bgcolor: "background.paper",
                px: 1,
              }}
            >
              Featured Solutions
            </Typography>
          </Box>
        </Container>

        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <MediaCard
                image={img4}
                btnText="Read More"
                name="Diversity, Equity and Inclusion"
                description="Nurturing diversity, equity,
                and inclusion for creating a
                respectful, innovative, and
                productive workplace where
                everyone can thrive."
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <MediaCard
                image={img5}
                name="Cost Optimization"
                description="Aligning your operations
                with the demands of a
                shifting market landscape
                for sustainable cost
                optimization."
                btnText="Read More"
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <MediaCard
                image={img6}
                name="Customer Experience"
                description="Empowering your customer
                service teams to deliver
                exceptional service
                experiences that not only
                meet but surpass customer
                expectations.."
                btnText="Read More"
              />
            </Grid>
          </Grid>
        </Container>

        {/* <Team />
        <Featuring />
        <Newsletter /> */}
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Solution;
