import React, {Component} from 'react';
import imgPath from '../data/imgPath';
import s from '../data/style';
import uuid from 'node-uuid';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: null,
      check: false
    }
    this.initialSetting = this.initialSetting.bind(this);
    this.windowChange()
  }

  componentWillUpdate() {
    this.windowChange()
  }

  componentDidMount() {
    this.initialSetting();
  }

  initialSetting() {
    const windowSize = window.innerWidth;
    const check = windowSize > 100
    if (windowSize === this.state.width) {
      return false;
    } else {
      if (windowSize > 768) {
        this.setState({
          check: true,
          width: windowSize
        })
      } else if (windowSize < 768) {
        this.setState({
          check: false,
          width: windowSize
        })
      }
    }
  }

  windowChange() {
    window.addEventListener('resize', () => this.initialSetting())
  }

  render() {
    const imageList = imgPath.map((img, i) => {
      return (
        <div style={this.state.check ? s.gridBox_Pc : s.gridBox_Mobile} key={uuid.v4()}>
          <div style={s.imgBox}>
            <img src={img.path} style={s.imgStyle} />
          </div>
        </div>
      )
    })

    return (
      <main>
        <header style={s.header}>window width/{this.state.width}</header>
        <section style={s.container}>
          {imageList}
        </section>
      </main>
    )
  }
}
