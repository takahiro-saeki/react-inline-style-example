import React, {Component} from 'react';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: null
    }
  }

  render() {
    const s = {
      header: {
        textAlign: 'center',
        background: '#E91E63',
        padding: '1rem',
        color: '#FFF',
        fontSize: '1.2rem'
      },
      container: {
        display: 'flex',
        margin: '0 auot',
        boxSizing: 'border-box',
        flexDirection: 'row',
        flexWrap: 'wrap'
      },
      gridBox: {
        boxSizing: 'border-box',
        maxWidth: '33.33333%',
        flexBasis: '33.33333%',
        padding: '1rem'
      }
    }
    return (
      <main>
        <header style={s.header}>window width/</header>
        <section style={s.container}>
          <div style={s.gridBox}>
            <div style={{padding: '1rem', borderRadius: '1rem', border: '1px solid #CCC'}}>テスト</div>
          </div>
          <div style={s.gridBox}>テスト</div>
          <div style={s.gridBox}>テスト</div>
          <div style={s.gridBox}>テスト</div>
          <div style={s.gridBox}>テスト</div>
          <div style={s.gridBox}>テスト</div>
        </section>
      </main>
    )
  }
}
