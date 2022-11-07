import './App.less';
import Button from '@mui/material/Button';

function App() {


  const openWindow = () => {
    // const { BrowserWindow } = global.remote;
    // let win = new BrowserWindow({ width: 800, height: 600 });
    // win.loadUrl("https://www.baidu.com");
    // win.on("close", () => {
    //   win = null;
    // })
  }

  return (
    <div className="App">
      <Button variant="contained" onClick={openWindow}>Hello World</Button>
    </div>
  );
}

export default App;
