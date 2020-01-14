import PropTypes from 'prop-types'
import React from 'react'
import { Link } from "gatsby";
import "../assets/scss/index-new.scss"
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



const ButtonGrid = () => {

  return(
    <div className="sectionOne">
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                
                  <Link to="/FaceMark/">
                    <Grid item xs className="boxgrid__item boxgrid__item">
                      <div className="box box--facemark">
                        <div /><div /><div />
                      </div>
                    </Grid>
                  </Link>
                  <Link to="/PosePage">
                    <Grid item xs className="boxgrid__item">
                        <div className="box box--posenet">
                          <img src="https://img.icons8.com/ios/96/000000/yoga.png" style={{maxHeight: '75px', maxWidth:'75px', bottom: 0, position: "inherit"}} />
                        </div>
                      </Grid>
                  </Link>
                  <Link to="/faceDetector/">
                    <Grid item xs className="boxgrid__item boxgrid__item--wide">
                      <div className="box box--image">
                      </div>
                    </Grid>
                  </Link>
                  <Link to="/OpticalFlowPage/">
                    <Grid item xs className="boxgrid__item boxgrid__item">
                      <div className="box box--opticalflow">
                        <div /><div />
                      </div>
                    </Grid>
                  </Link>
              </Grid>
          </div>
  )
}

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        
        <article
          id="playground"
          className={`${this.props.article === 'playground' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Playground</h2>
            <div>
              <div>
                <ButtonGrid />
              </div>
            </div>
          {close}
        </article>
        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/jamaldahbur"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
