import './App.css';
import { useEffect, useState } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Container } from '@mui/material';
import { CardActionArea, CardActions, Box, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import Carousel from 'react-material-ui-carousel';



function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let API = '/wp-json/communities/all/';
    fetch(API, {
      method: 'GET',
      headers: {
        'Authorization': 'Basic bmVoYTowI21JdkJCdzRBdWJoKTU5QXhEQ0hIQTU='
      }
    })
      .then(response => response.json())
      .then(result => {
        setData(result.data)
        console.log(result.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [setData]);


  return (
    <div className="App">
      <Container >
        <h1 className=''>COMMUNITIES WE MANAGE</h1>
        <Container className='card-container'>
          <Box >
            <Grid sx={{ flexGrow: 1 }} spacing={0} container justifyContent="space- 
       evenly">
              {
                data.map((item) => {
                  return (
                    <Card sx={{ maxWidth: 320, margin: 1.5 }}  >
                      <CardActionArea >
                        <CardMedia
                          component="img"
                          // height="140"
                          image={item.image_url}
                          alt={item.ID}
                        />
                        <CardContent>
                          <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Typography gutterBottom variant="h5" component="div">
                          {item.post_name.toUpperCase()}
                        </Typography>
                      </CardActions>
                    </Card>
                  )
                })
              }
            </Grid>
          </Box>
        </Container>
        <Container >
          <h1 className=''>OUR SERVICES</h1>
          <Container >
            <Carousel
              navButtonsAlwaysVisible

            >
              {
                data.map((item, index) => {
                  return (
                    <Card>
                      <CardMedia
                        component="img"
                        height="440"
                        // width='1'
                        image={item.image_url}
                        alt={item.ID}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          width: '100%',
                          bgcolor: 'rgba(0, 0, 0, 0.54)',
                          color: 'white',
                          padding: '10px',
                        }}
                      >{item.post_name.toUpperCase()}</Box>

                    </Card>
                  )
                })
              }
            </Carousel>
          </Container>
        </Container>
      </Container>
    </div>
  );
}

export default App;
