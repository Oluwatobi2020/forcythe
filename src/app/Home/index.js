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
  CardMedia,
  CardContent,
  CardActions,
  useMediaQuery,
} from "@mui/material";
import DottedMap from "../../assets/dotted_map3.png";
import StacAi from "../../assets/stac_ai.png";
import Starks from "../../assets/starks.png";
import ExePro from "../../assets/exec_pro.png";
import FundChannel from "../../assets/fund_channel.png";
import { BsFillCaretRightFill } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TransformStories from "./TransaformStories";
import Spotlight from "./Spotlight";
import { RiStackLine } from "react-icons/ri";
import { bestCall, blogCard } from "@/helpers/transformData";
import { GoDotFill } from "react-icons/go";
import Footer from "../Footer";

const LandingPage = () => {
  const matchesOne = useMediaQuery("(max-width:960px)");
  const matchesTwo = useMediaQuery("(max-width:600px)");
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
            padding: { lg: "3rem", md: "2rem", sm: "1rem", xs: "1rem" },
            margin: "2rem 0 2rem 0",
          }}
        >
          <Stack>
            <Typography
              sx={{
                color: "#fff",
                fontSize: { lg: "5.5em", md: "4.5em", sm: "3em", xs: "2em" },
                textAlign: {
                  lg: "left",
                  md: "left",
                  sm: "center",
                  xs: "center",
                },
                lineHeight: "5rem",
              }}
            >
              We build <span style={{ color: "#1685EC" }}>products</span> that
              shape a better future
            </Typography>
            <Typography
              sx={{
                color: "#B2B2B2",
                fontSize: { lg: "1.3em", md: "1.1em", sm: "1em", xs: "1em" },
                textAlign: {
                  lg: "left",
                  md: "left",
                  sm: "center",
                  xs: "center",
                },
                paddingTop: "1.5rem",
                width: { lg: "85%", md: "85%", sm: "100%", xs: "100%" },
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
                display: "flex",
                justifyContent: { xs: "center", sm: "center" },
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
          <Typography
            sx={{
              color: "#fff",
              fontSize: { lg: "2.7em", md: "2.4em", sm: "1.5em", xs: "1.5em" },
            }}
          >
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
                        width={matchesOne ? 400 : matchesTwo ? 450 : 350}
                        height={matchesOne ? 250 : matchesTwo ? 250 : 300}
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
                        width={matchesOne ? 400 : matchesTwo ? 450 : 350}
                        height={matchesOne ? 250 : matchesTwo ? 250 : 300}
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
            fontSize: { lg: "2.7em", md: "2.4em", sm: "1.5em", xs: "1.5em" },
            width: { lg: "70%", md: "80%", sm: "90%", xs: "90%" },
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
            fontSize: { lg: "2.7em", md: "2.4em", sm: "1.5em", xs: "1.5em" },
            width: { lg: "70%", md: "80%", sm: "90%", xs: "90%" },
            textAlign: { lg: "left", md: "left", sm: "center", xs: "center" },
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
            fontSize: { lg: "2.7em", md: "2.4em", sm: "1.5em", xs: "1.5em" },
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
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { sm: "column", xs: "column" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {bestCall?.map((mapItems) => {
            return (
              <Grid2
                container
                spacing={2}
                key={mapItems?.id}
                sx={{
                  paddingTop: { sm: "2rem", xs: "2rem" },
                }}
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
              width: { lg: "50%", md: "50%", sm: "80%", xs: "90%" },
              height: { lg: "100vh", md: "100vh", sm: "70vh", xs: "60vh" },
              border: "1px solid #fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "2rem",
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
                  fontSize: {
                    lg: "2em",
                    md: "1.5em",
                    sm: "1.3em",
                    xs: "1.3em",
                  },
                  color: "#fff",
                  width: { lg: "80%", md: "80%", sm: "90%", xs: "90%" },
                }}
              >
                We build solutions that help{" "}
                <span style={{ color: "#1685EC" }}>businesses</span> of all
                sizes to <span style={{ color: "#1685EC" }}>scale</span>
              </Typography>

              <Grid2
                container
                // spacing={2}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  padding: "3rem 0 0 0",
                }}
              >
                <Grid2 size={{ lg: 3, md: 3, sm: 6, xs: 6 }}>
                  <Stack
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#1685EC",
                        fontSize: {
                          lg: "2.5em",
                          md: "2.3em",
                          sm: "1.8em",
                          xs: "1.8em",
                        },
                      }}
                    >
                      50+
                    </Typography>
                    <Typography sx={{ color: "#fff", fontSize: "1em" }}>
                      Clients
                    </Typography>
                  </Stack>
                </Grid2>
                <Grid2 size={{ lg: 3, md: 3, sm: 6, xs: 6 }}>
                  <Stack sx={{ display: "flex", justifyContent: "center" }}>
                    <Typography
                      sx={{
                        color: "#1685EC",
                        fontSize: {
                          lg: "2.5em",
                          md: "2.3em",
                          sm: "1.8em",
                          xs: "1.8em",
                        },
                      }}
                    >
                      120+
                    </Typography>
                    <Typography sx={{ color: "#fff", fontSize: "1em" }}>
                      Projects
                    </Typography>
                  </Stack>
                </Grid2>
                <Grid2
                  size={{ lg: 3, md: 3, sm: 6, xs: 6 }}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Stack sx={{ display: "flex", justifyContent: "center" }}>
                    <Typography
                      sx={{
                        color: "#1685EC",
                        fontSize: {
                          lg: "2.5em",
                          md: "2.3em",
                          sm: "1.8em",
                          xs: "1.8em",
                        },
                      }}
                    >
                      10+
                    </Typography>
                    <Typography sx={{ color: "#fff", fontSize: "1em" }}>
                      Leads
                    </Typography>
                  </Stack>
                </Grid2>
                <Grid2 size={{ lg: 3, md: 3, sm: 6, xs: 6 }}>
                  <Stack sx={{ display: "flex", justifyContent: "center" }}>
                    <Typography
                      sx={{
                        color: "#1685EC",
                        fontSize: {
                          lg: "2.5em",
                          md: "2.3em",
                          sm: "1.8em",
                          xs: "1.8em",
                        },
                      }}
                    >
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
      <Box
        sx={{
          width: "100%",
          padding: "3rem 7rem 3rem 7rem",
          background:
            "linear-gradient(180deg, #0A2548 13.78%, #0C2645 24.31%, #030516 59.76%)",
        }}
      >
        <Grid2
          container
          spacing={2}
          sx={{
            width: "100%",
            paddingBottom: "2rem",
          }}
        >
          <Grid2
            size={{ lg: 9, md: 9, sm: 12, xs: 12 }}
            sx={{ paddingBottom: { sm: "1rem", xs: "1rem" } }}
          >
            <Typography
              sx={{
                color: "#fff",
                textAlign: {
                  lg: "left",
                  md: "left",
                  sm: "center",
                  xs: "center",
                },
                fontSize: {
                  lg: "2.7em",
                  md: "2.4em",
                  sm: "1.5em",
                  xs: "1.5em",
                },
              }}
            >
              Read our articles, news and product blog
            </Typography>
          </Grid2>
          <Grid2
            size={{ lg: 3, md: 3, sm: 12, xs: 12 }}
            sx={{
              display: "flex",
              justifyContent: {
                lg: "flex-end",
                md: "flex-end",
                sm: "center",
                xs: "center",
              },
            }}
          >
            <Button
              sx={{
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
              Visit Blog
            </Button>
          </Grid2>
        </Grid2>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { sm: "column", xs: "column" },
            paddingTop: "3rem",
          }}
        >
          {blogCard?.map((cardDatas) => {
            return (
              <Grid2
                container
                spacing={2}
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
                key={cardDatas?.id}
              >
                <Grid2 size={4} sx={{ paddingTop: { sm: "2rem", xs: "2rem" } }}>
                  <Card
                    sx={{
                      // maxWidth: 345,
                      width: "330px",
                      height: "400px",
                      background: "#030516",
                      borderRadius: "30px",
                      "&:hover": {
                        borderBottom: "1px solid #fff",
                      },
                    }}
                  >
                    <CardMedia
                      sx={{
                        height: 180,
                        "&:hover": {
                          height: 200,
                        },
                      }}
                      image={cardDatas?.cardImg.src}
                      title="blog-pics"
                    />
                    <CardContent>
                      <Box
                        sx={{
                          borderLeft: "1px solid #fff",
                          paddingLeft: "0.5rem",
                          "&:hover": {
                            paddingLeft: "1.2rem",
                          },
                        }}
                      >
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{ color: "#fff" }}
                        >
                          {cardDatas?.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "#fff", fontSize: "1em" }}
                        >
                          The Reformist <GoDotFill /> May 29th, 2024
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#fff",
                            fontSize: "1.3em",
                            paddingTop: "1rem",
                          }}
                        >
                          {cardDatas?.body}
                        </Typography>
                      </Box>
                    </CardContent>
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
            paddingTop: "4rem",
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
                color: "#1685EC",
                fontSize: {
                  lg: "2.7em",
                  md: "2.4em",
                  sm: "1.5em",
                  xs: "1.5em",
                },
                textAlign: "center",
              }}
            >
              Ready to Scale?
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                fontSize: {
                  lg: "2.7em",
                  md: "2.4em",
                  sm: "1.5em",
                  xs: "1.5em",
                },
                textAlign: "center",
                width: { lg: "70%", md: "80%", sm: "90%", xs: "90%" },
              }}
            >
              Join successful brands that chose us as their growth accelerator
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
              >
                Book a call
              </Button>
            </Box>
          </Stack>
        </Box>
      </Box>
      <Box sx={{ padding: "6rem" }}>
        <Footer />
      </Box>
    </div>
    // <div style={{ background: "#1D1E2E", height: "100vh" }}>
    // </div>
  );
};

export default LandingPage;
