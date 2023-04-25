import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) =>
  createStyles({
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  })
);

const HomePage = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            My Products Catalog
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Welcome to Products Catalog, a funny catalog for a possible interview!
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button variant="contained" color="primary" component={Link} to="/products">
                  See Products Catalog
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          <Grid item key="react-card" xs={12} sm={6} md={6}>
            <div className={classes.card}>
              <div className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  React + MUI
                </Typography>
                <Typography>
                  Frontend project was made with React and MUI
                  in addition to some other complements and libraries.
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item key="express-card" xs={12} sm={6} md={6}>
            <div className={classes.card}>
              <div className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  ExpressJS
                </Typography>
                <Typography>
                  Backend project was made with ExpressJS
                  in addition to some other complements and libraries.
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          A simple exercise website built with React and Material-UI.
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
};

export default HomePage;
