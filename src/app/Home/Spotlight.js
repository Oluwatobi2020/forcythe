import * as React from "react";
import PropTypes from "prop-types";
import {
  Tabs,
  Tab,
  Box,
  Card,
  Grid2,
  Stack,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import { spotlightData } from "@/helpers/transformData";
import { BsFillCaretRightFill } from "react-icons/bs";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Spotlight = () => {
  const [value, setValue] = React.useState(0);
  const matchesOne = useMediaQuery("(max-width:600px)");
  const matchesTwo = useMediaQuery("(max-width:470px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box
        sx={{
          // display: "flex",
          // flexDirection: "column",
          // alignItems: "flex-start", // Align items to the left
          // width: "100%",
          padding: "0rem 6rem 0 6rem",
        }}
      >
        {/* Tabs */}
        <Box
          sx={{
            // borderBottom: 1,
            borderColor: "divider",
            width: { lg: "38%", md: "40%", sm: "95%", xs: "95%" },
            padding: "0 0 0 1rem",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{
              display: "flex",
              justifyContent: "flex-start", // Align tabs to the left
              border: "1px solid #60A6E7",
              borderRadius: "40px",
              color: "#fff",
              padding: "0.5rem",
            }}
          >
            {/* Tab Items */}
            {spotlightData?.map((items, index) => (
              <Tab
                key={items?.id}
                label={items?.tabTitle}
                {...a11yProps(index)}
                sx={{
                  color:
                    value === index ? "#030516 !important" : "#fff !important",
                  //   width: "200px",
                  background: value === index ? "#B3D0F2" : "",
                  borderRadius: value === index ? "40px" : "",
                  padding: "1rem",
                  fontWeight: value === index ? 600 : 400,
                }}
              />
            ))}
          </Tabs>
        </Box>

        {/* CustomTabPanels */}
        <Box
          sx={{
            marginTop: "1rem", // Space between tabs and cards
            width: "100%", // Match the width of the tabs
          }}
        >
          {spotlightData?.map((spotData, index) => {
            const { id, title, desc, illustration, tabTitle } = spotData;
            return (
              <CustomTabPanel value={value} index={index} key={id}>
                <Grid2
                  sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    marginTop: {
                      lg: "-4rem",
                      md: "-4rem",
                      sm: "0rem",
                      xs: "0rem",
                    },
                  }}
                  container
                  spacing={2}
                >
                  <Grid2 size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
                    <Stack>
                      <Typography
                        sx={{
                          fontSize: {
                            lg: "2em",
                            md: "1.8em",
                            sm: "1.3em",
                            xs: "1.3em",
                          },
                          color: "#fff",
                          textAlign: {
                            lg: "left",
                            md: "left",
                            sm: "center",
                            xs: "center",
                          },
                          padding: "0 0 3rem 0",
                          fontWeight: "700",
                          width: {
                            lg: "70%",
                            md: "80%",
                            sm: "100%",
                            xs: "100%",
                          },
                        }}
                      >
                        {title}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#B2B2B2",
                          fontSize: "1.3em",
                          textAlign: {
                            lg: "left",
                            md: "left",
                            sm: "center",
                            xs: "center",
                          },
                          width: {
                            lg: "80%",
                            md: "80%",
                            sm: "100%",
                            xs: "100%",
                          },
                        }}
                      >
                        {desc}
                      </Typography>
                    </Stack>
                  </Grid2>
                  <Grid2
                    size={{ lg: 6, md: 6, sm: 12, xs: 12 }}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      src={illustration}
                      alt={title}
                      width={matchesOne ? 300 : matchesTwo ? 300 : 500}
                      height={matchesOne ? 300 : matchesTwo ? 300 : 400}
                    />
                  </Grid2>
                </Grid2>
              </CustomTabPanel>
            );
          })}
          <Box
            sx={{
              marginLeft: {
                lg: "1rem",
                md: "1rem",
                // sm: "0",
                // xs: "0",
              },
              display: "flex",
              justifyContent: { sm: "center", xs: "center" },
            }}
          >
            <Button
              sx={{
                fontFamily: "Outfit, serif",
                background: "#fff",
                borderRadius: "40px",
                padding: "0.5rem 1.5rem 0.5rem 1.5rem",
                fontWeight: 600,
                color: "primary.main",
                fontSize: "1.1em",
                marginTop: {
                  lg: "-5rem",
                  md: "-4.5rem",
                  sm: "0rem",
                  xs: "0rem",
                },
                "&:hover": {
                  background: "#064386",
                  color: "#fff",
                },
              }}
              endIcon={<BsFillCaretRightFill />}
            >
              Book a call
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Spotlight;
