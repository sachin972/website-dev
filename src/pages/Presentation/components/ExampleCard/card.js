import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import MKButton from "components/MKButton";
import { Link } from "react-router-dom";

export default function MediaCard({ image, name, description, btnText, route }) {
  console.log(description);
  return (
    <Card sx={{ maxWidth: "auto" }}>
      <CardMedia sx={{ height: 240 }} image={image} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button variant="outlined">{btnText}</Button> */}
        <MKButton component={Link} to={route} color="white" size="small" fullWidth>
          {btnText}
        </MKButton>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
}

// Setting default props for the ExampleCard
MediaCard.defaultProps = {
  name: "",
  description: "",
  btnText: "",
  route: "",
};

// Typechecking props for the ExampleCard
MediaCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string,
  description: PropTypes.string,
  btnText: PropTypes.string,
  route: PropTypes.string,
};
