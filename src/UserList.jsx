import React, { Component } from 'react'

export class UserList extends Component {
    state = {
      isLoading: true,
      users: [],
      error: null
    };
    fetchUsers() {
      fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then(data =>
          this.setState({
            users: data,
            isLoading: false,
          })
        )
        .catch(error => this.setState({ error, isLoading: false }));
    }
    componentDidMount() {
      this.fetchUsers();
    }
    render() {
      const { isLoading, users, error } = this.state;
      return (
          <>
            <h1>Random User</h1>
            <div className="userList">
            {error ? <p>{error.message}</p> : null}
            {!isLoading ? (
                users.map(user => {
                const { username, name, email } = user;
                return (
                    <div key={username}>
                    <p>Name: {name}</p>
                    <p>Email Address: {email}</p>
                    <hr />
                    </div>
                );
                })
            ) : (
                <h3>Loading...</h3>
            )}
            </div>
        </>
      );
    }
  }

export default UserList