import React from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import hero from '../Assets/hero.png';
import ServicesSection from '../Components/Services'

const Home = () => {
  const Hero = styled('header')({
    background: '#f5fbff',
    position: 'relative',
    height: 'inherit',
    zIndex: 2,
  });

  const HeroContent = styled(Grid)({
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  });

  const HeroImage = styled('img')({
    width: '100%',
    height: 'auto',
  });

  return (
    <Hero>
      <Container>
        <HeroContent container spacing={3}>
          <Grid item xs={12} md={6}>
            <div>
              <Typography variant="h3" id="heroHeadline">
                رعاية صحية المناسبة لطفلك
              </Typography>
              <Typography variant="body1" id="heroSubHeadline">
                توفر الخطوة الأولى نظامًا كاملاً للآباء والمستشفيات لإدارة تطعيم الأطفال حديثي الولادة لإنقاذهم من الأمراض الفتاكة.
              </Typography>
              <Button variant="contained" color="primary" href="/register" id="regBtn">
                سجل الان
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <HeroImage src={hero} alt="Hero illustration" />
          </Grid>
        </HeroContent>
      </Container>
      <ServicesSection/>
    </Hero>
  );
};

export default Home;
