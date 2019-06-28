import React, {Component} from 'react';
import Button from '@material/react-button';

import '@material/react-text-field/index.scss';
import TextField, {HelperText, Input} from '@material/react-text-field';

import '@material/react-material-icon/index.scss';
import MaterialIcon from '@material/react-material-icon';


import './App.scss';
import "./react-button-overrides.scss";
// add the appropriate line(s) in Step 3a if you are using compiled CSS instead.

class App extends Component {
  state = {value: 'Woof'};

  render() {
    return (
      <div>
        <br/>
        <TextField
          label='Dog'
          helperText={<HelperText>Help Me!</HelperText>}
          onTrailingIconSelect={() => this.setState({value: ''})}
          //trailingIcon={<MaterialIcon role="button" icon="delete"/>}
          outlined='true'
        ><Input
           value={this.state.value}
           onChange={(e) => this.setState({value: e.currentTarget.value})} />
        </TextField>
        
        <Button
          raised
          className='button-alternate'
          onClick={() => console.log('clicked!')}
        >
          Click Me!
        </Button>
      </div>
    );
  }
}

export default App;