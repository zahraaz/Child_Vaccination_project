import React from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import hospital from '../Assets/hospital.png';


const SectionContainer = styled(Container)(({ theme }) => ({
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  }));
  
  const Heading = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    textAlign: 'right', 
  }));
  
  const ServicesSection = () => {

  return (
   
    <SectionContainer id="services">
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }} style={{ textAlign: 'right' }}>
          <Heading variant="h5" component="h2">
            كمركز صحي ستحصل على
          </Heading>
          <hr />
          <div className="servicesBenefit" style={{ textAlign: 'right' }}>
            <p style={{ textAlign: 'right' }}>القدرة على تسجيل الطفل نيابة عن الوالدين</p>
            <p style={{ textAlign: 'right' }} >إمكانية إعادة التأكيد قبل إعطاء الجرعة</p>
            <p style={{ textAlign: 'right' }}>القدرة على تعديل مخطط التطعيم</p>
            <p style={{ textAlign: 'right' }}>و أكثر من ذلك بكثير</p>
          </div>
          <br />
          <Button variant="contained" color="primary" href="/register" id="regBtn" style={{ textAlign: 'right' }}>
            التسجيل كمركز صحي
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
          <img src={hospital} alt="Illustration" className="servicesImg" />
        </Grid>
      </Grid>
    </SectionContainer>
  );
};

export default ServicesSection;
