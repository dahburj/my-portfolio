
import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import ParallaxCard from "react-parallax-card";
import Img from "gatsby-image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import CardMedia from "@material-ui/core/CardMedia";
import { maxHeight } from '@material-ui/system';
import "../styles/index-new.scss";


export default function DPCardComponent({data, linkTo}){
    const projectData = data.node;
    
    return(
        <ParallaxCard label={""} enableRotate={false} enableTransform={true} style={{ margin: "0 auto", width: 350, height: 250 }}>
  
        <div>

          <img src={projectData.image.file.url} style={{maxWidth: "100vh", maxHeight: "350px" }} />
        </div>
        
        
        {/*<div className="astro" style={{ maxWidth: '100%', height: '100%' }} />
        <div>
          {projectData.description}
    </div>*/}
        <div className="cardTitle">
          {projectData.title}
        </div>
      </ParallaxCard>
    );
}