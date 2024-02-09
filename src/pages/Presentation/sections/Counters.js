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
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
// import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

function Counters() {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={9}
          sx={{ mx: "auto" }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid
            item
            paddingX={10}
            xs={12}
            md={12}
            alignItems={"center"}
            alignContent={"center"}
            textAlign={"center"}
          >
            {/* <DefaultCounterCard
              count={70}
              suffix="+"
              title="Coded Elements"
              description="From buttons, to inputs, navbars, alerts or cards, you are covered"
            /> */}
            We partner with businesses to improve their performance, offering expert advice and
            management consultancy <br /> to address challenges and foster sustainable growth.
            {/* </Grid>
          <Grid item xs={12} md={6} display="flex">
            <Divider
              orientation="vertical"
              sx={{
                display: { xs: "none", md: "block" },
                mx: 0,
              }}
            />
            {/* <DefaultCounterCard
              count={15}
              suffix="+"
              title="Design Blocks"
              description="Mix the sections, change the colors and unleash your creativity"
            />  */}
            We help organizations design their strategies, <br /> structures, processes in alignment
            with their vision, mission and goals while helping them <br /> to put the right people
            at the right place for the right job.
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
            {/* </Grid>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={4}
              title="Pages"
              description="Save 3-4 weeks of work when you use our pre-made pages for your website"
            /> */}
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
