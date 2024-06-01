import React from 'react';
import Appbar from '../Components/Appbar';
import AccountProvider from '../context/AccountProvider';
import { Container, Typography, Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';

function Services() {
  const { t } = useTranslation();

  return (
    <>
      <AccountProvider>
        <Appbar />
      </AccountProvider>

      <Container sx={{ width: '100%', position: 'relative', top: '9rem', left: '0.4rem' }}>
        <Typography variant="header1" fontWeight="bold">
          {t('welcome')}
        </Typography>

        <Typography variant="body1" sx={{ marginTop: '1rem', width: '90%', marginLeft: '1rem', textAlign: 'justify', fontFamily: 'Montserrat' }}>
          {t('servicesIntro')}
        </Typography>
        <Divider sx={{ marginTop: '1rem', width: '90%', marginLeft: '1rem' }}></Divider>
      </Container>

      <Container sx={{ width: '100%', position: 'relative', top: '10.5rem', left: '0.4rem' }}>
        <Typography variant="header2" fontWeight="bold" sx={{ marginTop: '1rem', width: '90%', marginLeft: '1rem' }}>
          {t('iceBreaking')}
        </Typography>

        <Typography variant="body1" sx={{ marginTop: '1rem', width: '90%', marginLeft: '1rem', textAlign: 'justify', fontFamily: 'Montserrat' }}>
          {t('iceBreakingintro')}
        </Typography>
      </Container>

      <Container sx={{ width: '100%', position: 'relative', top: '12.5rem', left: '0.4rem' }}>
        <Typography variant="header2" fontWeight="bold" sx={{ marginTop: '1rem', width: '90%', marginLeft: '1rem' }}>
          {t('debateClubs')}
        </Typography>

        <Typography variant="body1" sx={{ marginTop: '1rem', width: '90%', marginLeft: '1rem', textAlign: 'justify', fontFamily: 'Montserrat' }}>
          {t('debateClubsintro')}
        </Typography>
      </Container>

      <Container sx={{ width: '100%', position: 'relative', top: '14.5rem', left: '0.4rem' }}>
        <Typography variant="header2" fontWeight="bold" sx={{ marginTop: '1rem', width: '90%', marginLeft: '1rem' }}>
          {t('groupDiscussions')}
        </Typography>

        <Typography variant="body1" sx={{ marginTop: '1rem', width: '90%', marginLeft: '1rem', textAlign: 'justify', fontFamily: 'Montserrat' }}>
          {t('groupDiscussionsintro')}
        </Typography>
      </Container>

      <Container sx={{ width: '100%', position: 'relative', top: '16.5rem', left: '0.4rem' }}>
        <Typography variant="header2" fontWeight="bold" sx={{ marginTop: '1rem', width: '90%', marginLeft: '1rem' }}>
          {t('videoCallFeature')}
        </Typography>

        <Typography variant="body1" sx={{ marginTop: '1rem', width: '90%', marginLeft: '1rem', textAlign: 'justify', fontFamily: 'Montserrat' }}>
          {t('videoCallFeatureintro')}
        </Typography>
      </Container>

      <Container sx={{ width: '100%', position: 'relative', top: '18.5rem', left: '0.4rem' }}>
        <Typography variant="header2" fontWeight="bold" sx={{ marginTop: '1rem', width: '90%', marginLeft: '1rem' }}>
          {t('communitySupport')}
        </Typography>

        <Typography variant="body1" sx={{ marginTop: '1rem', width: '90%', marginLeft: '1rem', textAlign: 'justify', fontFamily: 'Montserrat' }}>
          {t('communitySupportintro')}
        </Typography>
        <Divider sx={{ marginTop: '1rem', width: '90%', marginLeft: '1rem' }}></Divider>

        <Typography variant="body1" fontWeight="bold" sx={{ marginTop: '1rem', width: '90%', marginLeft: '1rem', textAlign: 'justify', fontFamily: 'Montserrat' }}>
          {t('startyour')}
        </Typography>
      </Container>
    </>
  );
}

export default Services;
 