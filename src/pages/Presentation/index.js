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
// import { FaIcons } from "react-icons/fa";
// import { Label } from "semantic-ui-react";
import "./index.css";
import React from "react";
// import { Button, Input, InputGroupAddon, InputGroupText, InputGroup, Row, Col } from "reactstrap";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
// import MKSocialButton from "components/MKSocialButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
// import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
import Counters from "pages/Presentation/sections/Counters";
import Information from "pages/Presentation/sections/Information";
// import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
import Pages from "pages/Presentation/sections/Pages";
import Testimonials from "pages/Presentation/sections/Testimonials";
// import Download from "pages/Presentation/sections/Download";

// Presentation page components
// import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/bg-presentation.jpg";
// import InputIcon from "layouts/sections/input-areas/inputs/components/InputIcon";
// import Forms from "layouts/sections/input-areas/forms";
// import FormSimple from "layouts/sections/input-areas/forms/components/FormSimple";

import MediaCard from "./components/ExampleCard/card";
import img1 from "../../assets/images/city-profile.jpg";
import img2 from "../../assets/images/bg-about-us.jpg";
import img3 from "../../assets/images/bruce-mars.jpg";
import img4 from "../../assets/images/ivana-square.jpg";
import img5 from "../../assets/images/bg-coworking.jpeg";
import img6 from "../../assets/images/ivana-squares.jpg";

import { ArrowForward } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Button, Box, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import DividerWithText from "./divider";
// import Solution from "pages/LandingPages/Solutions";
// import { Chip } from "@mui/material";

function Presentation() {
  // const [firstFocus, setFirstFocus] = React.useState(false);
  // const [lastFocus, setLastFocus] = React.useState(false);
  return (
    <>
      <DefaultNavbar
        routes={routes}
        // action={{
        //   type: "external",
        //   // route: "https://www.creative-tim.com/product/material-kit-react",
        //   // label: "free download",
        //   color: "info",
        // }}
        sticky
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Bharmani Consulting{" "}
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              EMPOWERING ORGANIZATIONS FROM WITHIN
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              Solutions that Begin and End with People
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
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Counters />
        <Information />
        {/* <DesignBlocks /> */}
        <Pages />
        <Container sx={{ mt: 6, mb: 6 }}>
          {/* <BuiltByDevelopers /> */}
          {/* <Divider
            sx={{ display: { xs: "none", md: "block" }, ml: 0 }}
            textAlign="center"
            variant="inset"
          >
            <div>Insights and Perspective</div>
          </Divider> */}
          <DividerWithText text="Insights and Perspective" />
        </Container>

        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <MediaCard
                image={img1}
                btnText="Read More"
                name="AI at workplace"
                description="Give us your contact and we'll discuss over your ideas."
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <MediaCard
                image={img2}
                name="People, Planet and Profitability"
                description="Get heated and pull up your ideas and view them in reality."
                btnText="Read More"
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <MediaCard
                image={img3}
                name="Transformational Leadership"
                description="We are providing consultancy in several fields wherever required."
                btnText="Read More"
              />
            </Grid>
          </Grid>
        </Container>
        <Box display="flex" justifyContent="center" mt={2}>
          <Button
            size="large"
            sx={{ bgcolor: "#00008B", mx: "auto", px: 20, mt: 5 }}
            variant="contained"
            color="primary"
            endIcon={<ArrowForward />}
            component={Link}
            to="/pages/landing-pages/insights"
          >
            {" "}
            Explore all Insights{" "}
          </Button>
        </Box>

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
              Our Solutions
            </Typography>
          </Box>
        </Container>

        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <MediaCard
                image={img4}
                btnText="Read More"
                name="Organizational Strategy and Designing"
                description="Give us your contact and we'll discuss over your ideas."
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <MediaCard
                image={img5}
                name="Assessment and Succession"
                description="Get heated and pull up your ideas and view them in reality."
                btnText="Read More"
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <MediaCard
                image={img6}
                name="Total Rewards"
                description="We are providing consultancy in several fields wherever required."
                btnText="Read More"
              />
            </Grid>
          </Grid>
        </Container>
        {/* <Box display="flex" justifyContent="center" mt={2}>
      <Button variant="contained" color="primary">
        Centered Button
      </Button>
    </Box> */}
        <Box display="flex" justifyContent="center" mt={2}>
          <Button
            size="large"
            sx={{ bgcolor: "#00008B", mx: "auto", px: 20, mt: 5 }}
            variant="contained"
            color="primary"
            endIcon={<ArrowForward />}
            component={Link}
            to="/pages/landing-pages/solutions"
          >
            {" "}
            Explore all Solutions{" "}
          </Button>
        </Box>
        <Testimonials />
        {/* <Download /> */}
        {/* <MKBox pt={18} pb={6}>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={5} ml="auto" sx={{ textAlign: { xs: "center", lg: "left" } }}>
                <MKTypography variant="h4" fontWeight="bold" mb={0.5}>
                  Thank you for your support!
                </MKTypography>
                <MKTypography variant="body1" color="text">
                  We deliver the best web products
                </MKTypography>
              </Grid>
              <Grid
                item
                xs={12}
                lg={5}
                my={{ xs: 5, lg: "auto" }}
                mr={{ xs: 0, lg: "auto" }}
                sx={{ textAlign: { xs: "center", lg: "right" } }}
              >
                <MKSocialButton
                  component="a"
                  href="https://twitter.com/intent/tweet?text=Check%20Material%20Design%20System%20made%20by%20%40CreativeTim%20%23webdesign%20%23designsystem%20%23mui5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fmaterial-kit-react"
                  target="_blank"
                  color="twitter"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-twitter" />
                  &nbsp;Tweet
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-kit-react"
                  target="_blank"
                  color="facebook"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-facebook" />
                  &nbsp;Share
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.pinterest.com/pin/create/button/?url=https://www.creative-tim.com/product/material-kit-react"
                  target="_blank"
                  color="pinterest"
                >
                  <i className="fab fa-pinterest" />
                  &nbsp;Pin it
                </MKSocialButton>
              </Grid>
            </Grid>
          </Container>
        </MKBox> */}
        {/* <FormSimple id="contact" /> */}
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
