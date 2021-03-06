import _ from 'lodash';
import React from 'react';

import './styles.module.css';
import Badges from 'components/Badges/Badges';
import config from 'config';
import {getContent} from 'utils/vpContentHelper';
import Imdb from 'components/Imdb/Imdb';
import Star from 'components/Star/Star';
import Trailer from 'components/Trailer/Trailer';

export class FilmComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stared: false
    };
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
        image: vp.content.images.landscape,
        title: vp.content.title
      };
    } else {
      return false;
    }
  }

  componentDidMount() {
    const url = `${config.apiBaseUrl}${this.props.location.pathname}`;
    getContent(url)
      .then(data => {
        const obj = this.validateData(data);
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
            <a className='report' href='#'>{config.lang.report}</a>
          </div>

          <div className='details half-panel'>
            <h1 className='title'>{this.state.title}</h1>
            <div className='subhead'>
              <div className='genres'>{this.state.genres.join('/')}</div>
              <div className='year'>{this.state.year}</div>
              <div className='duration'>{this.state.duration}</div>
            </div>

            <Imdb data={this.state.imdb} lang={config.lang.fan} />

            <p className='synopsis'>{this.state.synopsis}</p>
            <div className='actors item-list'><b>{config.lang.actors}</b>: {this.state.actors.map((item, index) => {
              return (
                <a key={index} href='#'>{item}</a>
              );
            })}
            </div>
            <div className='directors item-list'><b>{config.lang.directors}</b>: {this.state.directors.map((item, index) => {
              return (
                <a key={index} href='#'>{item}</a>
              );
            })}</div>
            <div className='country'><b>{config.lang.country}</b>: {this.state.country}</div>
            <Badges badges={[this.state.flags[0], this.state.parentalRating]} />
            <Star stared={this.state.stared}/>
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
