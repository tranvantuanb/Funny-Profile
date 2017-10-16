import {Link} from 'react-router-dom'
export default class App extends BaseComponent {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log('App Component WILL MOUNT!');
  }

  componentDidMount() {
    console.log('App Component DID MOUNT!');
  }

  componentWillReceiveProps(newProps) {
    console.log('App Component WILL RECIEVE PROPS!')
  }

  shouldComponentUpdate(newProps, newState) {
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('App Component WILL UPDATE!');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('App Component DID UPDATE!')
  }

  componentWillUnmount() {
    console.log('App Component WILL UNMOUNT!')
  }

  render() {
    return (
      <div>
        <h1>Welcome to the Tuan's Website</h1>
        <ul>
          <li><Link to="/homepage">Home</Link></li>
        </ul>
      </div>
    );
  }
}
