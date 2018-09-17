const js =
  `
import React, { Component } from 'react';
import ScorpioMenu from 'scorpio-menu';
import menuData from './data.json';
import './App.css';

class App extends Component {

  state = {
    position: {
      x: 0,
      y: 0,
    },
    show: false,
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
    console.log(e);
    this.setState({
      show: false,
    })
  }

  render() {
    const { position, show } = this.state;

    return (
      <div className="app">
        <div
          {/* 父元素一定要相对定位！ */}
          style={{ position: 'relative', height: 200 }}
          onContextMenu={this.onContextMenu}
          className="demo">
          <ScorpioMenu
            data={menuData}
            position={position}
            show={show}
            onClose={this.onClose}
          />
        </div>
      </div>
    );
  }
}
`;

const json =
  `
// data.json
[
  {
    "label": "菜单1",
    "value": "1",
    "disabled": true
  },
  {
    "label": "菜单2",
    "value": "2"
  },
  {
    "label": "菜单3",
    "value": "3"
  },
  {
    "divider": true
  },
  {
    "label": "菜单4",
    "value": "4",
    "subMenu": [
      {
        "label": "菜单4-1"
      },
      {
        "label": "菜单4-2",
        "value": "4",
        "subMenu": [
          {
            "label": "菜单4-2-1"
          },
          {
            "label": "菜单4-2-2"
          },
          {
            "label": "菜单4-2-3"
          }
        ]
      },
      {
        "label": "菜单4-3"
      }
    ]
  },
  {
    "label": "菜单5",
    "value": "5",
    "subMenu": [
      {
        "label": "菜单5-1"
      },
      {
        "label": "菜单5-2"
      },
      {
        "label": "菜单5-3"
      }
    ]
  }
]
`

module.exports = { js, json }