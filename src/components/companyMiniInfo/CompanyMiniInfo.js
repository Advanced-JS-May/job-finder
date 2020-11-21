import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 345,
    display: 'inline-block',
    marginTop: '3%',
    marginBottom: '2%',
  },
  media: {
    height: 140,
  },
});

function ifDescription(prop) {
    if(typeof prop != 'undefined') {
      if(prop.trim != ''){
        if(prop.length < 150) {
          return prop
        }
         return prop.substr(0,150) + '...';
        }
      }
      return 'No description'
    }

export default function CompanyMiniInfo(
	{
 	companyName,
 	companyDesc,
 	companyImg,
 	companyId,
 	buttonFunction,
}
) {
	const classes = useStyles();
	return (
		<Card className={classes.root} key={companyId}>
                <CardActionArea>
                  <CardMedia
                    className={ classes.media }
                    image={ companyImg ? companyImg : 'No Image' }
                    title="logo"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                     { companyName }
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      { 
                      	ifDescription(companyDesc)
                      }
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" onClick={buttonFunction}>
                    More Info
                  </Button>
               </CardActions>
            </Card>
	)
}


