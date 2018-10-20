import React, { Component } from 'react';
import axios from 'axios';
import UserCard from './components/UserCard'
import RepoCard from './components/RepoCard'

import 'bootstrap/dist/css/bootstrap.min.css';
class GitDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      isUserView: true,
      searchKeyword: '',
      allResults: true
    };
    this.loadUsers = this.loadUsers.bind(this);
    this.loadReposCB = this.loadReposCB.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }
  loadReposCB(repos_link)
  {
      axios.get(repos_link)
      .then((response) => {
          console.log(response.data);
          this.setState({
              data: response.data,
              isUserView: false
          });
      })
      .catch(function (error) {
          // handle error
          console.log(error);
      })
      .then(function () {
          // always executed
      })
  }
  onSearchChange(event)
  {
      let search = event.target.value;
      this.setState({allResults: search.length == 0? true: false,
          searchKeyword: search});
  }
  loadUsers()
  {
      axios.get('https://api.github.com/users')
          .then((response) => {
              console.log(response.data);
              this.setState({
                  data: response.data
              });
          })
          .catch(function (error) {
              // handle error
              console.log(error);
          })
          .then(function () {
              // always executed
          })
  }
  componentDidMount() {
      this.loadUsers();
  }

  render() {
      let styles = {float: 'none', margin: '0 auto'}
    return (
        <div>
        <h4>Git Dashboard</h4>
            <div className="row">
                <div className="col"></div>
                <input className="col" type="text" onChange={this.onSearchChange} />
                <div className="col"></div>
            </div>
            <div className="row">
                <div className="col"></div>
                <div className="col">{this.state.allResults? <i>Showing All Results!</i>: ""}</div>
                <div className="col"></div>
            </div>
            {this.state.data !== null ? this.state.isUserView ? <div>
                <UserCard userdata={this.state.data.filter(s=> s.login.includes(this.state.searchKeyword))} loadReposCB={this.loadReposCB} /></div> :
                <RepoCard reposdata={this.state.data.filter(s=> s.name.includes(this.state.searchKeyword))}/> : <div>Loading...</div>}
        </div>
    );
  }
}

export default GitDashboard;