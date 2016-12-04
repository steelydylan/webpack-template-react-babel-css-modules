let React = require('react');
let ReactDOM = require('react-dom');
import styles from './css/app.css'

class App extends React.Component {
  render() {
    return <div className={styles.hogeHoge}>hello!!</div>;
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
