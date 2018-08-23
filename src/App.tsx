import * as React from 'react';
import './App.less';
import ScorpioMenu from './scorpio-menu/index';

class App extends React.Component {
  
  public render() {
    return (
      <div className="app">
        <div className="demo-1"  onContextMenu={this.onContextMenu} />
        <div style={{position:'absolute'}}>
          <ScorpioMenu name="test"/>
        </div>
      </div>
    );
  }

  private onContextMenu = (event:any)=>{
    event.preventDefault();
    console.log(event.clientX);
    console.log(event.clientY);
  }
}

export default App;
