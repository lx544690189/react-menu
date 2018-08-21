import * as React from 'react';
import './App.less';
import ScorpioMenu from './component/Menu';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <ScorpioMenu/>
      </div>
    );
  }
}

export default App;
