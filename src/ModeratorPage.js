import React from 'react';

class ModeratorPage extends React.Component {
  state = {
    pendingStartups: [{id: 0, name: 'SampleStartupName'}],
    pendingUsers: [{id: 0, name: 'SampleUserName'}],
  };

  render() {
    return (
      <div>
        <h1 className='text-center font-bold text-xl my-5'>Стартапы, требующие подтверждения</h1>
        {this.state.pendingStartups.map(startup => {
          return (
            <ModeratorStartupCard startup={startup} />
          );
        })}

        <h1 className='text-center font-bold text-xl my-5'>Пользователи, требующие подтверждения</h1>
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
      <div className='card bg-card border-solid mx-auto relative w-80 h-80 px-2 py-5 mb-20'>
        <div className='text-center'>
          <p>Id: {this.props.startup.id}</p>
          <p>Name: {this.props.startup.name}</p>
        </div>
        <div className='img'>
          <img className='mx-auto mt-5' width={200} height={400} src='images/batman.svg' alt='документ компании'/>
        </div>
        <div className='text-center'>
          <button className='mt-10 mb-5 py-2 px-4 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'>Одобрить</button>
          <button className='mt-10 ml-5 mb-5 py-2 px-4 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'>Отклонить</button>
        </div>
      </div>
    );
  }
}

class ModeratorUserCard extends React.Component {
  render() {
    return (
      <div className='card bg-card border-solid mx-auto relative w-80 h-80 px-2 py-5 mb-20'>
        <div className='text-center'>
          <p>Id: {this.props.user.id}</p>
          <p>Name: {this.props.user.name}</p>
        </div>
        <div className='img'>
          <img className='mx-auto mt-5' width={200} height={400} src='images/batman.svg' alt='документ компании'/>
        </div>
        <div className='text-center'>
          <button className='mt-10 mb-5 py-2 px-4 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'>Одобрить</button>
          <button className='mt-10 ml-5 mb-5 py-2 px-4 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'>Отклонить</button>
        </div>
      </div>
    );
  }
}

export default ModeratorPage;
