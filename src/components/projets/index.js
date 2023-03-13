import React from 'react'
import { Container, Grid } from '@mui/material';
import styled from 'styled-components';
import { data } from './data';
import { motion } from 'framer-motion';
import CardMedia from '../cards';
import TextSpan from '../TextSpan';


const Content = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  min-height:100vh;
  background: #232323;
`;






const H1 = styled(motion.h1)`
    font-size:2.5em;
    color:white;
    text-align:center
`;






function Projets({textenter,textleave}) {

  const title = "MES PROJETS".split("");

 
  return (
    <Content id="projets" >

       <Container maxWidth="lg">
                 <Grid container>
                  <Grid marginBottom={5} item xs={12} lg={12}  display="flex" justifyContent="center">
                  {
                    title.map((letter,index)=>{
                      return(
                        <TextSpan enter={textenter} leave={textleave} key={index} >
                          {letter === " " ? "\u00A0" : letter}
                        </TextSpan>
                      )
                    })
                  } 
                  </Grid>
                </Grid>
              <Grid container spacing={2} >
                
                <>
                {
                     data.map((item)=>(
                      <Grid key={item._id} item lg={4} md={4} sm={4} xs={6} >
                          <CardMedia
                            media={item.image}
                            tech={item.technologies}
                            title={item.name}
                            link={item.links}
                            textenter={textenter} 
                            textleave={textleave}

                            viewport={{once:false}}
                            initial={{opacity:0,y:150}}
                            whileInView={{opacity:1,y:0}}
                            transition={{type:"easeIn", duration:0.9,delay:0.15 }}

                          />
                      </Grid>
                     
                       
                     ))
                  } 
                </>
                
              </Grid>
       </Container>
    </Content>

  )
}

export default Projets
