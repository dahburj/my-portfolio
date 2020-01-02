
import React from "react";

import ATVParallax from './react-atv-parallax/src/index';

import styled from "styled-components";
import "../styles/index-new.scss";

const CardWrapper = styled.div`
  width: 280px;
  height: 380px;
  @media (max-width: 699px) {
    width: 150px;
    height: 250px;
  }
`;

export default function DPCardComponent({data, linkTo}){
    const projectData = data.node;
    
    return(
      <CardWrapper>
        <ATVParallax style={{width: "100%", height: "100%"}} >
          <img src={projectData.image.file.url} />
        {/*}  <span className="cardTitle">
            {projectData.title}
    </span> */}
        </ATVParallax>
      </CardWrapper>

    );
}