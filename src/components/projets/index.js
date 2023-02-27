import React from 'react'
import { Container, Grid } from '@mui/material';
import styled from 'styled-components';
import { data } from './data';
import { motion } from 'framer-motion';


const Content = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  min-height:100vh;
  background: #232323;
`;

const Project = styled.div`
    position:relative;
    max-width:100%;
    display:grid;
    grid-template-columns:repeat(auto-fill, minmax(300px,1fr));
    grid-template-rows:minmax(100px,auto);
    grid-auto-flow:dense;
    grid-grap:20px;
`;

const Box = styled(motion.div)`
    background:#333;
    display:grid;
    font-size:20px;
    
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
    padding-bottom:10px;
    img{
      position:relative;
      top:0px;
      max-width:100%;
      margin-bottom:10px;
      object-fit:cover;
      
     
    }
  
    p {
      color:white;
    }
`;

const Tech = styled.p`
   font-size:15px;
   
`;

const H1 = styled(motion.h1)`
    font-size:2.5em;
    color:white;
    text-align:center
`


function Projets() {
  return (
    <Content id="projets" >

       <Container maxWidth="lg">
                 <Grid container>
                  <Grid marginBottom={5} item xs={12} lg={12}>
                      <H1
                       viewport={{once:false}}
                       initial={{opacity:0,x:50}}
                       whileInView={{opacity:1,x:0}}
                       transition={{type:"easeIn", duration:0.9,delay:0.5 }}
                      >
                        MES PROJETS
                      </H1>
                  </Grid>
                </Grid>
              <Project>
                
                <>
                {
                     data.map((item)=>(
                        <Box 
                           key={item._id} 
                           viewport={{once:false}}
                           initial={{opacity:0,y:0}}
                           whileInView={{opacity:1,y:0}}
                           transition={{type:"easeIn", duration:0.9,delay:0.5 }}
                        >
                           <a href={item.links} target="_blank" rel="noopener noreferrer" >
                              <ContentBox>
                                 <img src={item.image} alt="HANSE ROLAND PARFAIT - PORTFOLIO"/>
                                 <p> 
                                 <b>{item.name}</b> 
                                 </p>
                                 <Tech> 
                                 {item.technologies}
                                 </Tech>
                              </ContentBox>
                           </a>
                     </Box>
                     ))
                  } 
                </>
                
              </Project>
       </Container>
    </Content>

  )
}

export default Projets
