import React from 'react';

class ModeratorPage extends React.Component {
  state = {
    pendingStartups: [],
    pendingUsers: [],
  };

  render() {
    return (
      <div>
        <h1>Стартапы, требующие подтверждения</h1>
        {this.state.pendingStartups.map(startup => {
          return (
            <ModeratorStartupCard startup={startup} />
          );
        })}

        <h1>Пользователи, требующие подтверждения</h1>
        {this.state.pendingUsers.map(user => {
          return (
            <ModeratorUserCard user={user} />
          );
        })}
      </div>
    );
  }
}

class ModeratorStartupCard extends React.Component {
  render() {
    return (
      <div>
        <p>Id: {this.props.startup.id}</p>
        <p>Name: {this.props.startup.name}</p>
      </div>
    );
  }
}

class ModeratorUserCard extends React.Component {
  render() {
    return (
      <div>
        <p>Id: {this.props.user.id}</p>
        <p>Name: {this.props.user.name}</p>
      </div>
    );
  }
}

export default ModeratorPage;
