import _ from 'lodash';
import React from 'react';

import './styles.module.css';
import config from 'config';
import {getTrailerEmbed} from 'utils/trailerHelper';

export class Trailer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imdb: props.data.imdbId,
      embed: null
    };
  }

  validateData(data) {
    if (_.isString(data.trailers.trailer[0].embed[0])) {
      return data.trailers.trailer[0].embed[0];
    } else {
      return false;
    }
  }

  componentDidMount() {
    if (this.state.imdb) {
      getTrailerEmbed(config.taBaseUrl, config.taApiKey, this.state.imdb)
        .then(data => {
          this.setState({
            embed: (_.isString(data.trailers.trailer[0].embed[0])) ? data.trailers.trailer[0].embed[0] : null
          });
        })
        .catch(err => {
          throw err;
        });
    }
  }
  componentWillUnmount() {
    this.serverRequest.abort();
  }

  changeContent(item) {
    if (this.state.embed) {
      const tc = document.querySelector('#trailerCnt');
      tc.innerHTML = this.state.embed;
    }
  }

  render() {
    const data = this.props.data;
    return (
      <div id='trailerCnt'>
        <a className='trailer' href='#' onClick={this.changeContent.bind(this)}>
          <img src={data.image} alt={data.title} className='coverImage' />
          <img src={require('assets/play_button.png')} className='playButton' />
        </a>
      </div>
    );
  }
}

export default Trailer;
