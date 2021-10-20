import { en } from 'i18n'
import { useState, ReactElement } from 'react'
import { Grid, Container } from '@material-ui/core'

import ButtonLink from 'components/ButtonLink'
import MyFullName from 'components/MyFullName'
import ProfileImg from 'components/ProfileImg'
import SimpleList from 'components/SimpleList'

import HomeIcon from '@material-ui/icons/Home'
import EmailIcon from '@material-ui/icons/Email'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import PhoneIcon from '@material-ui/icons/Phone'

function Home (): ReactElement {
  const [lang, setLang] = useState(en)
  const [langID, setLangID] = useState(1)

  const changeLanguage = (id: number): void => {
    setLangID(id)
    if (id === 1) setLang(en)
  }

  const email = 'vinimarfer@gmail.com'
  const phone = '55 51 986386312'

  return (
    <Container id='mainContainer'>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={3}>
          <ProfileImg />
          <MyFullName about={lang.abmeText} showMobile />
          <ButtonLink href={`https://wa.me/${phone}`} text={`+${phone}`} icon={<PhoneIcon />} />
          <ButtonLink href='https://www.google.com.mx/maps/place/Porto+Alegre,+RS/@-30.1085727,-51.4573443,10z/data=!3m1!4b1!4m5!3m4!1s0x95199cd2566acb1d:0x603111a89f87e91f!8m2!3d-30.0368176!4d-51.2089887' text='Porto Alegre,RS - Brazil' icon={<HomeIcon />} />
          <ButtonLink href={`mailto:${email}`} text={email} icon={<EmailIcon />} />
          <SimpleList title={lang.inteMain} contents={lang.inteOpts} />
          <SimpleList title={lang.i18nMain} contents={lang.i18nOpts} />
          <SimpleList title={lang.webSites} />
          <ButtonLink href='https://github.com/viniciusmf39' text='viniciusmf39' icon={<GitHubIcon />} />
          <ButtonLink href='https://www.linkedin.com/in/vinicius-fernandes-1727981a6/' text='Vinicius M. Fernandes' icon={<LinkedInIcon />} />

        </Grid>
        <Grid item xs={12} sm={12} md={9}>
          <MyFullName about={lang.abmeText} />
          <SimpleList title={lang.certific} />
          <SimpleList subtitle={lang.cdlgMain} contents={lang.cdlgText} hr />
          <SimpleList title={lang.estudios} />
          <SimpleList subtitle={lang.tecmMain} contents={lang.tecmText} hr />
          <SimpleList title={lang.workExpe} />
          <SimpleList subtitle={lang.sftkMain} contents={lang.sftkText} />
          <SimpleList title={lang.techMain} />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={4}>
              <SimpleList
                subtitle='Languages' contents={
                  ['JavaScript', 'TypeScript', 'Bash', 'Python']
                }
              />
              <SimpleList
                subtitle='CI/CD' contents={
                  ['Azure Pipelines', 'Bitbucket Pipelines']
                }
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <SimpleList
                subtitle='Frameworks'
                contents={['React (Material)', 'JQuery (Bootstrap)', 'NodeJS (Express)']}
              />
              <SimpleList
                subtitle='Platforms'
                contents={['Azure VMs', 'AWS S3']}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <SimpleList
                subtitle='Containers'
                contents={['Docker']}
              />
              <SimpleList
                subtitle='Databases'
                contents={['PostgreSQL', 'Redis', 'Oracle']}
              />
              <SimpleList
                subtitle='OS'
                contents={['Windows 10', 'Ubuntu']}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home
