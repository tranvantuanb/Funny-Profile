export default class Homes extends BaseComponent {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log('Home Component WILL MOUNT!')
  }

  componentDidMount() {
    console.log('Home Component DID MOUNT!')
  }

  componentWillReceiveProps(newProps) {
    console.log('Home Component WILL RECIEVE PROPS!')
  }

  shouldComponentUpdate(newProps, newState) {
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('Home Component WILL UPDATE!');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Home Component DID UPDATE!')
  }

  componentWillUnmount() {
    console.log('Home Component WILL UNMOUNT!')
  }

  render() {
    return (
      <div>
        <h1>Hello world from Home</h1>
      </div>
    );
  }
}
