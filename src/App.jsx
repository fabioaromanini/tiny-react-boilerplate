import React, {Component} from 'react'
import { render } from 'react-dom'

class App extends Component {
    render() {
        return <div>Welcome to React Boilerplate App</div>
    }
}

export default () => {
	render(<App />, document.getElementById('root'));
};
