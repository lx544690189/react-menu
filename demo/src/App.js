import React, { Component } from 'react';
import ScorpioMenu from 'scorpio-menu';
import * as monaco from 'monaco-editor';
import menuData from './data.json';
import './App.css';
import * as code from './code'

console.log('menuData: ', menuData);
class App extends Component {

  state = {
    position: {
      x: 0,
      y: 0,
    },
    show: false,
  }

  componentDidMount() {
    this.initCode();
  }

  onContextMenu = (event) => {
    event.preventDefault();
    this.setState({
      position: {
        x: event.pageX - event.target.offsetLeft,
        y: event.pageY - event.target.offsetTop,
      },
      show: true,
    })
  }

  onClose = (e) => {
    this.setState({
      show: false,
    })
  }

  initCode = () => {
    monaco.editor.create(document.getElementById('code-json'), {
      value: code.json,
      language: 'json',
      readOnly: true,
      theme: "vs-dark",
    });
    monaco.editor.create(document.getElementById('code-js'), {
      value: code.js,
      language: 'javascript',
      readOnly: true,
      theme: "vs-dark",
    });
  }

  render() {
    const { position, show } = this.state;

    return (
      <div>
        <header>
          <h1>scorpio-menu</h1>
        </header>
        <section>
          <code>npm install scorpio-menu --save</code>
        </section>
        <section>
          <div
            onContextMenu={this.onContextMenu}
            className="demo">
            <span>
              DEMO 右键点我
            </span>
            <ScorpioMenu
              data={menuData}
              position={position}
              show={show}
              onClose={this.onClose}
            />
          </div>
        </section>
        <section>
          <div id="code-json" style={{ height: 400, width: '40%', float: 'left' }}></div>
          <div id="code-js" style={{ height: 400, width: '55%', float: 'right' }}></div>
        </section>
      </div>
    );
  }
}

export default App;
