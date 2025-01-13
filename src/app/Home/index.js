"use client";
import React from "react";
import NavBar from "../NavBar";
import Image from "next/image";
import {
  Box,
  Button,
  Card,
  Grid2,
  Stack,
  Typography,
  Tab,
  Tabs,
} from "@mui/material";
import DottedMap from "../../assets/dotted_map3.png";
import StacAi from "../../assets/stac_ai.png";
import Starks from "../../assets/starks.png";
import ExePro from "../../assets/exec_pro.png";
import FundChannel from "../../assets/fund_channel.png";
import MobileOne from "../../assets/mobile 1.png";
import { BsFillCaretRightFill } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TransformStories from "./TransaformStories";
import Spotlight from "./Spotlight";
import { RiStackLine } from "react-icons/ri";
import { bestCall } from "@/helpers/transformData";

const LandingPage = () => {
  const sliderImagesOne = [
    {
      id: 1,
      pic: StacAi,
    },
    {
      id: 2,
      pic: Starks,
    },
    {
      id: 3,
      pic: ExePro,
    },
    // {
    //   id: 4,
    //   pic: MobileOne,
    // },
    {
      id: 4,
      pic: FundChannel,
    },
  ];
  const settingsOne = {
    // dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  const settingsTwo = {
    // dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    rtl: true,
  };
  return (
    <div style={{ background: "#030516", width: "100%" }}>
      <Box sx={{ paddingBottom: "4rem", border: "1px solid white" }}>
        <NavBar />
      </Box>
      <Box
        sx={{
          width: "100%",
          // height: "95vh",
          display: "flex",
          justifyContent: "center",
          // alignItems: "center",
          backgroundImage: `url(${DottedMap.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Card
          sx={{
            width: "80%",
            height: "400px",
            background: "#F9F9FE1A", // Semi-transparent white
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            borderRadius: "50px",
            padding: "3rem",
            margin: "2rem 0 2rem 0",
          }}
        >
          <Stack>
            <Typography
              sx={{
                color: "#fff",
                fontSize: "5.5em",
                textAlign: "left",
                lineHeight: "5rem",
              }}
            >
              We build <span style={{ color: "#1685EC" }}>products</span> that
              shape a better future
            </Typography>
            <Typography
              sx={{
                color: "#B2B2B2",
                fontSize: "1.3em",
                textAlign: "left",
                paddingTop: "1.5rem",
                width: "85%",
              }}
            >
              We’re the architects of digital excellence across industries. We
              redefine business with cutting-edge digital strategies that
              invokes sector-wide transformation.
            </Typography>

            <Box
              sx={{
                // border: "1px dashed #fff",
                // padding: "0 0 0.3rem 0.5rem",
                // borderRadius: "40px",
                // "&:hover": {
                //   border: "1px dashed #064386",
                // },
                paddingTop: "2rem",
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
          </Stack>
        </Card>
      </Box>
      <Box sx={{ width: "100%", padding: "3rem 0 0 0" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography sx={{ color: "#fff", fontSize: "2.7em" }}>
            Success in <span style={{ color: "#1685EC" }}>Motion</span> – Our
            clients’ journey
          </Typography>
        </Box>
        <Box sx={{ width: "100%", height: "500px", overflowX: "hidden" }}>
          <Slider {...settingsOne}>
            {sliderImagesOne?.map((slidePic) => {
              return (
                <div key={slidePic?.id}>
                  <Card
                    sx={{
                      background: "#010C18",
                      padding: "2rem",
                      // marginRight: "1rem",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "95%",
                      // borderRadius: "20px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        // padding:"2rem"
                      }}
                    >
                      <Image
                        src={slidePic?.pic}
                        alt={slidePic?.pic}
                        width={350}
                        height={300}
                        // style={{ paddingRight: "1rem" }}
                      />
                    </div>
                  </Card>
                </div>
              );
            })}
          </Slider>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "500px",
            overflowX: "hidden",
            marginTop: "-7rem",
          }}
        >
          <Slider {...settingsTwo}>
            {sliderImagesOne?.map((slidePic) => {
              return (
                <div key={slidePic?.id}>
                  <Card
                    sx={{
                      background: "#010C18",
                      padding: "2rem",
                      // marginRight: "1rem",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "95%",
                      // borderRadius: "20px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        // padding:"2rem"
                      }}
                    >
                      <Image
                        src={slidePic?.pic}
                        alt={slidePic?.pic}
                        width={350}
                        height={300}
                        // style={{ paddingRight: "1rem" }}
                      />
                    </div>
                  </Card>
                </div>
              );
            })}
          </Slider>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "-6rem",
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontSize: "2.7em",
            width: "70%",
            textAlign: "center",
          }}
        >
          Discover the{" "}
          <span style={{ color: "#1685EC" }}>transformative stories</span> of
          startups that scaled new heights with us
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "3rem",
        }}
      >
        <TransformStories />
      </Box>
      <Box
        sx={{
          width: "100%",
          padding: "3rem 0 0 7rem",
          // marginTop: "-6rem",
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontSize: "2.7em",
            width: "70%",
            textAlign: "left",
          }}
        >
          From <span style={{ color: "#1685EC" }}>Spark</span> to{" "}
          <span style={{ color: "#1685EC" }}>Spotlight</span>: we take you every
          step of the way to success.
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "3rem",
        }}
      >
        <Spotlight />
      </Box>

      <Box
        sx={{
          width: "100%",
          padding: "3rem 0 0 3rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // marginTop: "-6rem",
        }}
      >
        <Typography
          sx={{
            color: "#B3D0F2",
            fontSize: "2.7em",
            width: "100%",
            textAlign: "center",
          }}
        >
          Your best call for B2B/B2C product innovation
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          // display: "flex",
          // justifyContent: "center",
          padding: "3rem 0 3rem 0",
          background:
            "linear-gradient(180deg, #030516 0%, #0C2645 53.48%, #0A2548 53.48%, #060E22 112.32%)",
        }}
      >
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          {bestCall?.map((mapItems) => {
            return (
              <Grid2
                container
                spacing={2}
                key={mapItems?.id}
                sx={
                  {
                    // display: "flex",
                    // alignItems: "center",
                    // justifyContent: "center",
                  }
                }
              >
                <Grid2
                  size={{ lg: 4, md: 4, sm: 12, xs: 12 }}
                  sx={{
                    marginRight: { lg: "2rem", md: "2rem", sm: "0", xs: "0" },
                  }}
                >
                  <Card
                    sx={{
                      background: "#030516",
                      padding: "1.5rem",
                      borderRadius: "20px",
                      width: "300px",
                      height: "300px",
                      "&:hover": {
                        boxShadow: "1px 0px 6px 2px #60A6E7",
                      },
                    }}
                  >
                    <Stack>
                      <Box sx={{ padding: "0 0 2rem 0" }}>
                        <Typography
                          sx={{
                            textAlign: "left",
                            background: "#3B6694",
                            borderRadius: "10px",
                            padding: "0.5rem",
                            width: "50px",
                            height: "50px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <RiStackLine color="#fff" size={30} />
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            textAlign: "left",
                            color: "#fff",
                            fontSize: "1.5em",
                            padding: "0 0 1.5rem 0",
                          }}
                        >
                          {mapItems?.title}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          sx={{ textAlign: "left", color: "#B2B2B2" }}
                        >
                          {mapItems?.desc}
                        </Typography>
                      </Box>
                    </Stack>
                  </Card>
                </Grid2>
              </Grid2>
            );
          })}
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            padding: "3rem 0 3rem 0",
          }}
        >
          <Box
            sx={{
              borderRadius: "50%",
              width: "50%",
              height: "100vh",
              border: "1px solid #fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding:"2rem",
              background:
                "linear-gradient(180deg, #030516 0%, #0C2645 1.25%, #0A2548 42.04%, #060E22 90.76%)",
            }}
          >
            <Stack
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "2em",
                  color: "#fff",
                  width: "80%",
                }}
              >
                We build solutions that help{" "}
                <span style={{ color: "#1685EC" }}>businesses</span> of all
                sizes to <span style={{ color: "#1685EC" }}>scale</span>
              </Typography>

              <Grid2
                container
                spacing={3}
                sx={{ display: "flex", alignItems: "flex-start", padding:"3rem 0 0 0" }}
              >
                <Grid2 size={3}>
                  <Stack sx={{ display: "flex", justifyContent: "center" }}>
                    <Typography sx={{ color: "#1685EC", fontSize: "2.5em" }}>
                      50+
                    </Typography>
                    <Typography sx={{ color: "#fff", fontSize: "1em" }}>
                      Clients
                    </Typography>
                  </Stack>
                </Grid2>
                <Grid2 size={3}>
                  <Stack sx={{ display: "flex", justifyContent: "center" }}>
                    <Typography sx={{ color: "#1685EC", fontSize: "2.5em" }}>
                      120+
                    </Typography>
                    <Typography sx={{ color: "#fff", fontSize: "1em" }}>
                      Projects
                    </Typography>
                  </Stack>
                </Grid2>
                <Grid2 size={3}>
                  <Stack sx={{ display: "flex", justifyContent: "center" }}>
                    <Typography sx={{ color: "#1685EC", fontSize: "2.5em" }}>
                      10+
                    </Typography>
                    <Typography sx={{ color: "#fff", fontSize: "1em" }}>
                      Leads
                    </Typography>
                  </Stack>
                </Grid2>
                <Grid2 size={3}>
                  <Stack sx={{ display: "flex", justifyContent: "center" }}>
                    <Typography sx={{ color: "#1685EC", fontSize: "2.5em" }}>
                      10+
                    </Typography>
                    <Typography sx={{ color: "#fff", fontSize: "1em" }}>
                      Glorious Years
                    </Typography>
                  </Stack>
                </Grid2>
              </Grid2>
            </Stack>
          </Box>
        </Box>
      </Box>
    </div>
    // <div style={{ background: "#1D1E2E", height: "100vh" }}>
    // </div>
  );
};

export default LandingPage;