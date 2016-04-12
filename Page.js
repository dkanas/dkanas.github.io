import React from 'react';
import ReactDOM from 'react-dom';
import Paper from 'material-ui/lib/paper';
import AppBar from 'material-ui/lib/app-bar';
import Card from 'material-ui/lib/card/card';
import CardTitle from 'material-ui/lib/card/card-title';
import CardText from 'material-ui/lib/card/card-text';

class Page extends React.Component {
  render() {
    var cardText = 'Nice guy diving into the world of JavaScript';
    return (
    <Paper>
      <AppBar title="Daniel Kanas" />
      <Card>
        <CardTitle title="About me" />
        <CardText>{cardText}</CardText>
      </Card>
    </Paper>
    );
  }
}

export default Page
