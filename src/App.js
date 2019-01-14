import React, { Component } from 'react';
import './css/App.css';
import Constants from './Constants';
import DropdownComponent from './components/DropdownComponent';
import TableContainer from './containers/TableContainer';
import { getGitRepos } from './actions';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  selectUser(userName) {
    let {getGitRepos} = this.props;
    getGitRepos(userName);
    this.setState({
      userName: userName
    });
  }

  render() {
    let {userName} = this.state;
    let {gitUsersData} = this.props;
    let tableData = (gitUsersData && gitUsersData[userName]) || [];
    return (
      <div className="App">
        <div className="container">
        <header className="App-header">{Constants.title}</header>
        <DropdownComponent list={Constants.users} selectUser={this.selectUser.bind(this)} />
        <TableContainer tableData={tableData} />
      </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return{
    gitUsersData: state.GitUsersData,
  }
}
const  mapDispatchToProps = (dispatch) => {
  return {
    getGitRepos: userName => dispatch(getGitRepos(userName)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
