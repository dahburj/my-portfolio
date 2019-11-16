import React, { useState } from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import { Link, graphql } from "gatsby";
import styled from 'styled-components';
/* Own components */
import CardComponent from "../components/card";
/* Third-party CSS */
import 'semantic-ui-css/components/container.css';
import 'semantic-ui-css/components/grid.css';
import 'semantic-ui-css/components/card.css';
import 'semantic-ui-css/components/icon.css';
import 'semantic-ui-css/components/button.css';
import 'semantic-ui-css/components/header.css';
import 'semantic-ui-css/components/form.css';
import 'semantic-ui-css/components/segment.css';

const OurWork = ({data}) => {
  const [filterValue, setFilterValue] = useState('');
  
  const allProjects = data.allContentfulContentfulProject.edges
  console.log(allProjects);
  
  const filteredProjects = allProjects.filter(item => (
    item.node.title.toLowerCase().search(filterValue.toLowerCase()) !== -1 ||
    item.node.description.toLowerCase().search(filterValue.toLowerCase()) !== -1
  ));
  const StyledInput = styled.input`
  
  `
  
  const InputField = (props) => {
    return (
      <StyledInput type="text"
                   autoFocus
                   onChange={props.changeHandler}
                   value={ props.value }
                   placeholder={'Search our projects..'}
      />
    )
  }
  const StyledDiv = styled.div`
    min-height: 100vh;
    overflow: hidden;
    margin-bottom: 5rem;
  `
  
  const linkStyle = {
    color: 'inherit',
    textDecoration: 'none',
  }
  
  return (
    <Layout>
      <SEO title={`Projects`} />
      <StyledDiv className={'ui container'}>
        {/* BACK BUTTON */}
        <div className={'ui vertical aligned segment'}>
          <Link to={`/`}
                style={linkStyle}
          >
            <button className={'ui basic inverted icon button'}>
              <i className={'icon chevron left'} /> Back the website
            </button>
          </Link>
        </div>
        {/* TITLE */}
        <div className="ui vertical aligned segment">
          <h1>Our work</h1>
          <p>Type keywords into the input element to filter our work gallery.</p>
        </div>
        {/* INPUT */}
        <div className="ui vertical aligned segment">
          <div className="ui inverted form">
            <div className="field">
              <label>Filter</label>
              <InputField value={filterValue} changeHandler={(e) => setFilterValue(e.currentTarget.value)} />
            </div>
          </div>
        </div>
        {/* GRID */}
        <div className={'ui stackable three column grid'}>
          {filteredProjects.map(project=> (
            <div className={'column'} key={`${project.node.slug}`}>
              <CardComponent
                linkTo={`/project/${project.node.slug}`}
                data={project}
              />
            </div>
          ))}
        </div>
      </StyledDiv>
    </Layout>
  )
}
export default OurWork;
export const query = graphql`
  query  {

    allContentfulContentfulProject(limit: 1000) {
      edges {
        node {
          id
          type
          title
          slug
          createdAt
          bodyRichText {
            json
          }
          image {
            file {
              url
            }
          }
          tags
          description
        }
      }
    }
  }
`;
