import _ from 'lodash';
import React from 'react';

import './styles.module.css';
import config from 'config';
import {getContent} from 'utils/vpContentHelper';
import Imdb from 'components/Imdb/Imdb';
import Trailer from 'components/Trailer/Trailer';

export class FilmComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  validateData(data) {
    if (_.isObject(data._embedded['viaplay:blocks'][0]._embedded['viaplay:product'])) {
      const vp = data._embedded['viaplay:blocks'][0]._embedded['viaplay:product'];
      return {
        data: data,
        content: vp.content,
        synopsis: vp.content.synopsis,
        imdb: vp.content.imdb,
        genres: vp._links['viaplay:genres'].map(g => (g.title)),
        duration: vp.content.duration.readable,
        year: vp.content.production.year,
        country: vp.content.production.country,
        actors: vp.content.people.actors,
        directors: vp.content.people.directors,
        parentalRating: vp.content.parentalRating,
        flags: vp.system.flags,
        image: vp.content.images.landscape
      };
    } else {
      return false;
    }
  }

  componentDidMount() {
    const url = `${config.apiBaseUrl}${this.props.location.pathname}`;
    getContent('', url, '')
      .then(data => {
        const obj = this.validateData(data);
        console.log(obj);
        if (obj) {
          this.setState(obj);
        }
      })
      .catch(err => {
        throw err;
      });
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {
    if (this.state.imdb) {
      const trailerData = {
        image: this.state.image.url,
        imdbId: this.state.imdb.id.replace('tt', ''),
        title: this.state.title
      };
      return (
        <div className='film'>

          <div className='media half-panel'>
            <Trailer data={trailerData} />
            <a className='report'>{config.lang.report}</a>
          </div>

          <div className='details half-panel'>
            <div className='title'>{this.state.title}</div>
            <div className='genres'>{this.state.genres.join('/')}</div>
            <div className='year'>{this.state.year}</div>
            <div className='duration'>{this.state.duration}</div>
            <Imdb data={this.state.imdb} lang={config.lang.fan} />
            <div className='synopsis'>{this.state.synopsis}</div>
            <div className='actors'>{config.lang.actors}: {this.state.actors.join(', ')}</div>
            <div className='directors'>{config.lang.directors}: {this.state.directors.join(', ')}</div>
            <div className='country'>{config.lang.country}: {this.state.country}</div>
          </div>
        </div>
      );
    } else {
      return (
        <div>Loading...</div>
      );
    }
  }
}

export default FilmComponent;
