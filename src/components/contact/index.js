import React from 'react'
import { Container, Grid } from '@mui/material';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ImgMail from '../../images/white-mail-icon-22.jpg'
import ImgIn from '../../images/LinkedIn-Icon-Squircle-Dark.png'
import ImgGit from '../../images/github_logo.png';


const Content = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  min-height:50vh;
  background: #232323;
`;



const Box = styled(motion.div)`
    background:#333;
    display:grid;
    font-size:20px;
    place-items:center;
    text-align:center;
    color:fff;
    transition:0.5s;
    margin:10px;
    background:linear-gradiant(180deg,#282828,#202020);
    box-shadow:inset -8px 0 8px rgba(0,0,0,0.15),
    inset 0px -8px 8px rgba(0,0,0,0.25),
    0 0 0 2px rgba(0,0,0,0.75),
    10px 20px 25px rgba(0,0,0,0.4);

    a{
      text-decoration:none;
      cursor:pointer;
    }

    :hover{
      
      background:linear-gradiant(-90deg,#282828,#4a4a4a);
      box-shadow:0 0 7px rgba(255, 255, 255, 0.89),
      0 0 1px #fff,
      0 0 2px #fff,
      0 0 4px rgb(0, 195, 255),
      0 0 8px rgb(0, 195, 255),
      0 0 9px rgb(0, 195, 255),
      0 0 10px rgb(0, 195, 255),
      0 0 15px rgb(0, 195, 255);
      border-right:1px solid #0004;
      border-bottom:1px solid #0004;
      border-top:1px solid #0004;
     
    }

  
`;

const ContentBox = styled.div`
    padding:10px;
    img{
      position:relative;
      top:0px;
      width:100px;
      max-width:100%;
      margin-bottom:10px;
      object-fit:cover;
    }
  
    p {
      color:white;
    }

    @media screen and (max-width: 930px){
    
      p {
        font-size:12px;
      }
  
    }

    @media screen and (max-width: 640px){
      img{
        position:relative;
        top:0px;
        width:50px;
        max-width:100%;
        margin-bottom:10px;
        object-fit:cover;
      }
      p {
        font-size:10px;
      }
  
    }

    @media screen and (max-width: 565px){
      img{
      
        width:40px;
      }
      p {
        font-size:7px;
      }
  
    }
`;

const H1 = styled(motion.h1)`
    font-size:2.5em;
    color:white;
    text-align:center
`




function Contact() {
  return (
    <Content id="contact" >

       <Container maxWidth="lg">
          
              <Grid container >
              
                  <Grid marginBottom={5} item xs={12} lg={12}>
                      <H1
                       viewport={{once:false}}
                       initial={{opacity:0,x:-50}}
                       whileInView={{opacity:1,x:0}}
                       transition={{type:"easeIn", duration:0.9,delay:0.5 }}
                      >
                        CONTACTS
                      </H1>
                  </Grid>
               
                  <Grid item lg={4}  xs={4}  >
                      <Box 
                           viewport={{once:false}}
                           initial={{opacity:0,y:0}}
                           whileInView={{opacity:1,y:0}}
                           transition={{type:"easeIn", duration:0.9,delay:0.15 }}
                        >
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/hanseroland/" >
                              <ContentBox>
                              <img src={ImgGit} alt="HANSE ROLAND PARFAIT - PORTFOLIO"/> 
                                 <p> 
                                    
                                 </p>
                              </ContentBox>
                           </a>
                       </Box>
                  </Grid>
                  <Grid item lg={4}  xs={4}  >
                      <Box 
                           viewport={{once:false}}
                           initial={{opacity:0,y:0}}
                           whileInView={{opacity:1,y:0}}
                           transition={{type:"easeIn", duration:0.9,delay:0.15 }}
                        >
                            <a target="_blank" rel="noopener noreferrer" href="https://sn.linkedin.com/in/hanse-roland-parfait-nguema-ntougou-16a907220?trk=public_profile_browsemap" >
                              <ContentBox>
                                <img src={ImgIn} alt="HANSE ROLAND PARFAIT - PORTFOLIO"/>
                                 <p> 
                                  
                                 </p>
                              </ContentBox>
                           </a>
                       </Box>
                  </Grid>
                  <Grid item lg={4} xs={4} >
                      <Box 
                           viewport={{once:false}}
                           initial={{opacity:0,y:0}}
                           whileInView={{opacity:1,y:0}}
                           transition={{type:"easeIn", duration:0.9,delay:0.15 }}
                        > 
                            <a href="mailto:rolandntougou@gmail.com" >
                              <ContentBox>
                              <img src={ImgMail} alt="HANSE ROLAND PARFAIT - PORTFOLIO"/>
                                 <p> 
                                     
                                 </p>
                              </ContentBox>
                           </a>
                       </Box>
                  </Grid>
              </Grid>
       </Container>
    </Content>

  )
}

export default Contact
