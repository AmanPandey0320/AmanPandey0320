import { Box, Typography } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
// import { GrBackTen } from "react-icons/gr";
import { MdExposurePlus2, MdFlag } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";
import constants from "../../../../assets/constant";

function DeskTopView(props: any) {
  return (
    <Box>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="white"
          >
            <i>2019 - present</i>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <FaUniversity />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "2px", px: 2 }}>
            <Typography
              variant="h6"
              fontSize={"18px"}
              color={constants.color.text}
              component="span"
            >
              National Institute of Technology, Jamshedpur
            </Typography>
            <Typography fontSize={"14px"}>
              <ul>
                <li>B.Tech (Hons.) in Computer Science and Engineering</li>
                <li>
                  CGPA&nbsp;:&nbsp;8.41{" "}
                  <small>
                    <i>(out of 10)</i>
                  </small>
                </li>
                <li>
                  SGPA&nbsp;
                  <i>
                    (6<sup>th</sup> semester)
                  </i>
                  &nbsp;:&nbsp;8.72{" "}
                  <small>
                    <i>(out of 10)</i>
                  </small>
                </li>
              </ul>
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="white"
          >
            <i>May, 2019</i>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="success">
              <MdFlag />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography
              variant="h6"
              fontSize={"18px"}
              color={constants.color.textSec}
              component="span"
            >
              JEE Mains
            </Typography>
            <Typography fontSize={"14px"}>secured AIR 7764</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="white"
          >
            <i>May, 2018</i>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            <TimelineDot color="warning" variant="filled">
              <MdExposurePlus2 />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography
              variant="h6"
              fontSize={"18px"}
              color={constants.color.textSec}
              component="span"
            >
              Hem Sheela Model School, Durgapur
            </Typography>

            <Typography fontSize={"14px"}>
              passes AISSCE 2018 with a score of 92%
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="white"
          >
            <i>May, 2016</i>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="info">
              <small>10</small>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography
              variant="h6"
              fontSize={"18px"}
              color={constants.color.textSec}
              component="span"
            >
              S.K.S Public School, Mangalpur
            </Typography>

            <Typography fontSize={"14px"}>
              secured 9.8{" "}
              <small>
                <i>(out of 10)</i>
              </small>{" "}
              CGPA in AISSE 2016
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
}

export default DeskTopView;
