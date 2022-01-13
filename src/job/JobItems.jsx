import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

export default function JobItems({data}){
    console.log("in n", data)
    return (
    //     <div id={data.title} onClick={(e) => alert(e.target.id)}>
    //         <Grid container spacing={2}>
    //             <Grid item xs={2}>
    //                 <h1>xs=2</h1>
    //             </Grid>
    //             <Grid item xs={8}>
    //                 <h2>{data.title}</h2>
    //                 <p>{data.comp_name}</p>
    //             </Grid>
    //             <Grid item xs={2}>
    //                 <h1>xs=2</h1>
    //             </Grid>

    //         </Grid>

    //         <hr/>
    //     </div>
    // )
    <Paper sx={{ p: 2, margin: 'auto', maxWidth: '100%', flexGrow: 1 }}>
        <Grid container spacing={2}>
            <Grid item>
                <ButtonBase sx={{ width: 128, height: 128 }}>
                <Img alt="complex" src={data.logo} />
                </ButtonBase>
            </Grid>

            <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                        <Typography gutterBottom variant="subtitle1" component="div">
                            {data.title}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            {data.comp_name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {data.location}
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Typography sx={{ cursor: 'pointer' }} variant="body2">
                        Time
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    <IconButton aria-label="delete" size="large">
                        <BookmarkBorderOutlinedIcon fontSize="inherit" />
                    </IconButton>
                </Grid>
            </Grid>
        </Grid>
        <hr/>
    </Paper>

    )
}