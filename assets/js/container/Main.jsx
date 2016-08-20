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
    this.windowChange = this.windowChange.bind(this);
    this.windowChange();
  }

  componentDidUpdate() {
    console.log('test')
    window.addEventListener('resize', () => console.log('関数'))
  }

  windowChange() {
    console.log(window.innerWidth)
    const windowSize = window.innerWidth;
    const check = windowSize > 100
    if (windowSize > 768) {
      this.setState({})
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
