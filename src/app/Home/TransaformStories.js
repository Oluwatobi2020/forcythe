import * as React from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Box, Card, Grid2, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { transformData } from "@/helpers/transformData";

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

const TransformStories = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start", // Align items to the left
          width: "100%",
        }}
      >
        {/* Tabs */}
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            width: "100%",
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
            }}
          >
            {/* Tab Items */}
            {transformData?.map((label, index) => (
              <Tab
                key={label.id}
                label={
                  <Image
                    src={label?.logo} // Replace with the image URL or import
                    alt={label.title} // Use title as alt text
                    width={90} // Adjust width
                    height={40} // Adjust height
                  />
                }
                {...a11yProps(index)}
                sx={{
                  color: "#fff !important",
                  width: "200px",
                  background: value === index ? "#0C2645" : "",
                  borderRadius:
                    index === 0
                      ? "40px 0 0 40px"
                      : index === 4
                      ? "0 40px 40px 0"
                      : "",
                  padding: "1rem",
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
          {transformData?.map((cardData, index) => (
            <CustomTabPanel value={value} index={index} key={cardData?.id}>
              <Card
                sx={{
                  backgroundColor: "#0C2645",
                  padding: "2rem",
                  borderRadius: "30px",
                  width: "477px", // Ensure consistent width
                  height: "380px",
                  marginLeft: 0, // Align to the left
                }}
              >
                <Grid2
                  container
                  spacing={2}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Grid2 size={6.5}>
                    <Stack>
                      <Typography
                        sx={{
                          textAlign: "left",
                          color: "#fff",
                          fontSize: "1em",
                          paddingBottom: "1.3rem",
                        }}
                      >
                        {cardData.label}
                      </Typography>
                      <Typography
                        sx={{
                          textAlign: "left",
                          color: "#fff",
                          fontSize: "1em",
                          paddingBottom: "1.3rem",
                        }}
                      >
                        {cardData?.desc}
                      </Typography>
                      <Typography
                        sx={{
                          textAlign: "left",
                          color: "#fff",
                          fontSize: "1em",
                        }}
                      >
                        {cardData?.author}
                      </Typography>
                    </Stack>
                  </Grid2>
                  <Grid2
                    size={5.5}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      src={cardData?.image}
                      alt="Sample Image"
                      width={180}
                      height={300}
                    />
                  </Grid2>
                </Grid2>
              </Card>
            </CustomTabPanel>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default TransformStories;