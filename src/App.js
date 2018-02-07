import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Router, Route } from 'react-router-dom';
import { history, store } from './Store';

import PostListContainer from './containers/posts/PostListContainer';
import PostDetailsContainer from './containers/posts/PostDetailsContainer';
import PostNewContainer from './containers/posts/PostNewContainer';

import { 
  Container, Row, Col, 
  Nav, NavItem, NavLink
} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <header className="App-header">
            <h1 className="App-title">Welcome to Toudou App</h1>
          </header>
          <Row>
            <Col sm="3">
              <Nav vertical>
                <NavItem>
                  <NavLink href="#">Posts</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Todos</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Albums</NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col sm="9">
              <Router history={history}>
                <div>
                  <Route exact path="/posts" component={PostListContainer} />
                  <Route exact path="/posts/:postId" component={PostDetailsContainer} />
                  <Route exact path="/posts/new" component={PostNewContainer} />
                  <Route exact path="/posts/:postId/edit" component={PostDetailsContainer} />
                </div>
              </Router>
            </Col>
          </Row>
        </Container>
      </Provider>
    );
  }
}

export default App;
