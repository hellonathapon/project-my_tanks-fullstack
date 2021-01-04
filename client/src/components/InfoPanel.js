import React from 'react'
import { Grid, Typography, Button, Card, CardActionArea, CardActions, 
    CardContent, CardMedia, 
} from '@material-ui/core'
import useStyles from '../themes/theme'

export default function InfoPanel({ data }) {

  // instance custome style to be used in this fn()
  const classes = useStyles();

  console.log(data)

    // conditional reder data
  const rederData = data ? (
    <>
      <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://upload.wikimedia.org/wikipedia/commons/8/8c/Bundesarchiv_Bild_183-J14953%2C_Sizilien%2C_Panzer_VI_%28Tiger_I%29.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  { data.tank.name }
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  { data.tank.type }
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  { data.tank.country }
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  { data.tank.desc }
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                INTERESTING
              </Button>
            </CardActions>
          </Card>
    </>
    ) : "";


    return (
        <Grid item xs={12} sm={4} md={8} className={classes.image}>
            <div className={classes.paper}>
        
                { rederData }
            
            </div>
        </Grid>
    )
}
