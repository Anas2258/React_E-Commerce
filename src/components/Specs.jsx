import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import { Grid,Stack } from "@mui/material";
import { styled } from '@mui/system';
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import CheckIcon from "@mui/icons-material/Check";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
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

const StyledTab = styled(Tab)(({theme}) => ({
  '&.MuiTab-root.Mui-selected': {
    backgroundColor: '#fff',
    color: "#51585e",
    padding: 5,
    border: "1px solid #51585e",
    borderBottom: 0,
    borderRadius: "5px",
    margin: "7px",
    marginBottom: 0,
},
textTransform: 'Capitalize',
  '&.MuiTab-root.Mui-focusVisible':{
    backgroundColor:'red'
  }
}))

export default function Specs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: { xs: "100%", md: "50%" }, marginLeft: { xs: 0, md:'5rem'} }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          // variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{backgroundColor: 'rgba(0,0,0,.03)'}}
        >
          <StyledTab sx={{ color:"#51585e" }}  label="Specification" {...a11yProps(0)} />
          <StyledTab disableRipple={true} label="Warranty info" {...a11yProps(1)} />
          <StyledTab label="Shipping info" {...a11yProps(2)} />
          <StyledTab label="Seller profile" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="body1" sx={{color: '#51585e'}}>
            With supporting text below as a natural lead-in to additional
            content. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Typography>
          <Grid container mt={2} sx={{color:'#51585e'}}>
            {/* {generate( */}
            <Grid item xs={12} md={6}>
              <Stack direction="row" spacing={2}>
              <CheckIcon sx={{color: "#33b750"}} />
                <Typography variant="body1" > 
                  Some great feature name here
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6} >
              <Stack direction="row" spacing={2}>
              <CheckIcon sx={{color: "#33b750"}} />
                <Typography variant="body1" > 
                Lorem ipsum dolor sit amet
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6} disablePadding>
              <Stack direction="row" spacing={2}>
              <CheckIcon sx={{color: "#33b750"}} />
                <Typography variant="body1" > 
                Duis aute irure dolor
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6} disablePadding>
              <Stack direction="row" spacing={2}>
              <CheckIcon sx={{color: "#33b750"}} />
                <Typography variant="body1" > 
                Optical heart sensor
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6} disablePadding>
              <Stack direction="row" spacing={2}>
              <CheckIcon sx={{color: "#33b750"}} />
                <Typography variant="body1" > 
                Easy fast and ver good
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6} disablePadding>
              <Stack direction="row" spacing={2}>
              <CheckIcon sx={{color: "#33b750"}} />
                <Typography variant="body1" > 
                Some great feature name here
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6} disablePadding>
              <Stack direction="row" spacing={2}>
              <CheckIcon sx={{color: "#33b750"}} />
                <Typography variant="body1" > 
                Modern style and design

                </Typography>
              </Stack>
            </Grid>
                
          </Grid>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography variant="body1" sx={{color: '#51585e'}}>
          Tab content or sample information now
        </Typography>
        <Typography variant="body1" sx={{color: '#51585e'}}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography variant="body1" sx={{color: '#51585e'}}>
         Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Typography variant="body1" sx={{color: '#51585e'}}>
          Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </TabPanel>
    </Box>
  );
}
