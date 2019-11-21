import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
import 'semantic-ui-css/components/list.css';
import 'semantic-ui-css/components/icon.css';
import { Button, Icon } from 'semantic-ui-react'

import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import postcss from "postcss";


const Project = ({ data }) => {
	const { title, body, bodyRichText, image, tags, description, files, slug, type} = data.contentfulContentfulProject;
	const StyledDiv = styled.div`
    min-height: 100vh;
    overflow: hidden;
    margin-bottom: 5rem;
    a.button {
    font-family: 'Roboto', sans-serif;
    }
    .project-tags {
    	*:not(h3) {
    		font-family: 'Roboto', sans-serif;
    	}
    }
    .project-downloads {
    		.downloads-list {
    			*:not(.icon) {
    				font-family: 'Roboto', sans-serif;
    			}
	        a, a:visited, a:hover, a:active {
	        	font-family: 'Roboto', sans-serif;
	          text-decoration: none;
	          color: white;
	        }
    		}
    	}
    .project-content {
	    .project-image {
	      width: 100%;
	    }
    	.project-title {
    		padding: 0.5rem;
    		line-height: 1.6;
    		margin-top: 0;
    	}
    	.project-description {
    		// text-transform: uppercase;
    		line-height: 1.3;
    	}
    	.project-body {
    		line-height: 1.4;
    		font-size: 115%;
    	}
    }
  `
	
	const linkStyle = {
		color: 'inherit',
		textDecoration: 'none',
	}
	const TagLabel = styled.button`
	
	`
	return (
		<Layout>
			<SEO title={title} />
			<StyledDiv className={'ui container'}>
				{/* BACK BUTTON */}
				<div className={'ui vertical aligned segment'}>
					<Link to={`/our-work/`}
					      style={linkStyle}
					>
						<button className={'ui basic inverted icon button'}>
							<i className={'icon chevron left'} /> Back
						</button>
					</Link>
				</div>
				{/* IMAGE TITLE DESCRIPTION */}
				<div className="ui vertical aligned segment project-content">
					<img className={'project-image'} alt={title} src={image.file.url} />
					<h1>
						<span className={'gradient-animation project-title'}>
							{title}
						</span>
					</h1>
					<h3 className={'project-description'}>{description}</h3>
					{documentToReactComponents(bodyRichText.json)}
				</div>
				{/*<div>{documentToReactComponents(bodyRichText.json)}</div>*/}
				{/* FILES */ }
				{files &&
				<div className={'ui very basic vertical aligned segment project-downloads'}>
					<h3>Downloads</h3>
					<div className="ui relaxed inverted divided list downloads-list">
						{files.map((file, i) => (
							<div className="item" key={`file-${i}`}>
								<i className="large download middle aligned icon" />
								<div className="content">
									<a className="header download-link"
										 href={file.file.url}
									   target={'_blank'}
									   rel={'noopener'}
									>
										{file.title}
									</a>
									<div className="description">
										{file.file.fileName} (File type: {file.file.contentType.split('/')[1]})
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
				}
				<div className={'ui very basic vertical aligned segment project-tags'}>
					{type ? (
						<h3>Share this {type}</h3>
					) : (
						<h3>Share this</h3>
					)}
					<a href={`https://twitter.com/intent/tweet?text=https://www.jdahbur.com/project/${slug}`}
					   style={linkStyle}
					   target={'_blank'}
					>
						<TagLabel className="ui blue inverted tiny button">
							Share on Facebook
						</TagLabel>
					</a>
					<a href={`https://www.facebook.com/sharer/sharer.php?u=https://www.jdahbur.com/project/${slug}`}
					   style={linkStyle}
					   target={'_blank'}
					>
						<TagLabel className="ui blue inverted tiny button">
							Share on Twitter
						</TagLabel>
					</a>
				</div>
				{/* TAGS */ }
				{tags &&
				<div className={'ui very basic vertical aligned segment project-tags'}>
					<h3>Project tags</h3>
					{tags.map(tag => (
						<TagLabel className="ui basic inverted tiny button" style={{pointerEvents: 'none'}} key={tag}>
							{tag}
						</TagLabel>
					))}
				</div>
				}
			</StyledDiv>
		</Layout>
	);
};
export default Project;
export const query = graphql`
  query($slug: String!) {
    contentfulContentfulProject(slug: { eq: $slug }) {
      title
      slug
      description
	  body {
		body
	  }
	  bodyRichText{
		  json
	  }
      files {
        id
          file {
            url
            fileName
            contentType
          }
        title
        description
      }
      image {
        file {
          url
        }
      }
      tags
      type
    }
  }
`;
