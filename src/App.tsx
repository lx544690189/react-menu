import * as React from 'react';
import './App.less';
import menuData from './data.json';
import ScorpioMenu from './scorpio-menu/index';

class App extends React.Component {
  public state = {
    position: {
      x: 0,
      y: 0,
    },
    show: false,
  }

  public render() {
    const { position, show } = this.state;
    return (
      <div className="app">
        <div className="demo-1" onContextMenu={this.onContextMenu} >
          <ScorpioMenu
            menuData={menuData}
            position={position}
            show={show}
            onClose={this.onClose}
          />
        </div>
      </div>
    );
  }

  private onContextMenu = (event: any) => {
    event.preventDefault();
    this.setState({
      position: {
        x: event.pageX - event.target.offsetLeft,
        y: event.pageY - event.target.offsetTop,
      },
      show: true,
    })
  }

  private onClose = (e: any) => {
    this.setState({
      show: false,
    })
  }
}

export default App;
