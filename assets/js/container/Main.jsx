import React, {Component} from 'react';
import imgPath from '../data/imgPath';
import s from '../data/style';
import uuid from 'node-uuid';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: null
    }
  }

  render() {
    const imageList = imgPath.map((img, i) => {
      return (
        <div style={s.gridBox} key={uuid.v4()}>
          <div style={s.imgBox}>
            <img src={img.path} style={s.imgStyle} />
          </div>
        </div>
      )
    })
    return (
      <main>
        <header style={s.header}>window width/</header>
        <section style={s.container}>
          {imageList}
        </section>
      </main>
    )
  }
}
