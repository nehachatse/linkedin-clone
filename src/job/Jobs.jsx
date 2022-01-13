import axios from 'axios'
import JobItems from './JobItems';
import { Container } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import Box from '@mui/material/Box';
import {Button} from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import SummarizeIcon from '@mui/icons-material/Summarize';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';


const useStyles = makeStyles({
    root:{
        height: '100%',
        overflow: 'hidden',
        width: '100%'
    },
    buttonBox: {
        width:"75%",
        fontSize: "3rem",
        textAlign: "left",
        
    },
    // buttonIcon: {
    //     // padding:"1.5rem", 
    //     // backgroundColor:"pink"
    // }

        // root:{
        //     height: '100%',
        //     overflow: 'hidden',
        //     width: '100%',
        //     m:0, 
        //     p:0, 
        //     justifyContent:"center", 
        //     background:"rgb(243,242,239)", 
        //     display:"flex"
        // },
    })

    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
      });
    

export default function Jobs(){
    const [data, setData] = useState([]);
    const classes = useStyles();

    useEffect(()=>{
        axios.get("http://localhost:3000/jobs")
        .then(res => {
            const dataItem = res.data;
            setData(dataItem);
          })
          .catch(error=>console.log(error))
    },[])
    console.log("print",data)

    return (
        <div style={{"width":"100%", "margin": "0px", "padding": "0px", "justifyContent":"center", "background":"rgb(243,242,239)", "display":"flex"}}>
            <Box sx={{width:'20%', height:"600px", m:1.5, p:1, border:'1px solid gray', borderRadius:'5px', position:"sticky",top:"1rem", background:"white"}}>
                <Box sx={{m:2, pl:4}} className={classes.buttonBox} style={{"display":"block"}}>
                    <Button color="inherit" style={{"fontSize":"17px"}} startIcon={<BookmarkIcon/>}>My Jobs</Button>
                    <Button color="inherit" style={{"fontSize":"17px"}} startIcon={<NotificationsIcon />}>Job Alerts</Button>
                    <Button color="inherit" style={{"fontSize":"17px"}} startIcon={<CurrencyRupeeIcon />}>Salary</Button>
                    <Button color="inherit" style={{"fontSize":"17px"}} startIcon={<AssignmentTurnedInIcon />}>Skill Assessments</Button>
                    <Button color="inherit" style={{"fontSize":"17px"}} startIcon={<StickyNote2Icon />}>Interview Prep</Button>
                    <Button color="inherit" style={{"fontSize":"17px"}} startIcon={<SummarizeIcon />}>Resume Builder</Button>
                    <Button color="inherit" style={{"fontSize":"17px"}} startIcon={<OndemandVideoIcon />}>Job Seeker Guidance</Button>
                    <Button color="inherit" style={{"fontSize":"17px"}} startIcon={<SettingsIcon />}>Application Settings</Button>
                </Box>
            </Box>
            <Box sx={{width:'50%',m:1.5, p:1, border:'1px solid gray', borderRadius:'5px', background:"white"}}>
                <Box>
                    <h2>Recommended for you</h2>
                    <p>Based on your profile and search history</p>
                </Box>
                <Box>
                    {data.map((item, i) => <JobItems data={item} key={i}/>)}
                </Box>
            </Box>
            <Box sx={{width:'20%',height:"300px", m:1.5, p:1, border:'1px solid gray', borderRadius:'5px', background:"white"}}>
                <h2>Job seeker guidance</h2>
                <p>Recommended based on your activity</p>
                <Grid container direction="row" spacing={1}>
                    <Grid item xs={6} sx={{mt:"30px", fontWeight:"bold"}}>
                        <ButtonBase >
                            <Typography sx={{textDecoration:"underline"}}>I want to improve my resume</Typography>
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={2}>
                        <ButtonBase sx={{ width: 128, height: 128 }}>
                            <Img alt="complex" src="https://www.linkedin.com/dms/C4D0DAQFdDVwn9b17iA/learning-public-crop_60_100/0/1568251157263?m=AQIIvJky0zu2gwAAAX5S0MCNqmQhGyC43nE9ui2cbdZoRcRgevagq01R9g&e=1642153319&v=beta&t=yVmTWwdELE4VPUZeZW7y5ZiKCrkd6rjtPPk7KYFmPvE" />
                        </ButtonBase>
                    </Grid>
                </Grid>
                <Button color="inherit" endIcon={<ArrowForwardIcon/>}>Show more</Button>
            </Box>

        </div>
    )
}