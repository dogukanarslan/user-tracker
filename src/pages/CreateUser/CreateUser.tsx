import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../../redux/slices/usersSlice';
import { Button } from '../../components/Button/Button';

export const CreateUser = connect()((props: any) => {
  const { dispatch } = props;
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setName('');
    setUsername('');
    setEmail('');
    dispatch(createUser({ id: Math.random(), name, username, email }));
  };

  return (
    <form className="w-50 mx-auto text-center" onSubmit={handleSubmit}>
      <div>
        <div>
          <label>Name</label>
        </div>
        <input
          className="input"
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Name"
        />
      </div>
      <div>
        <label>Username</label>
      </div>
      <input
        className="input"
        type="text"
        value={username}
        onChange={handleUsernameChange}
        placeholder="Username"
      />
      <div>
        <label>Email</label>
      </div>
      <input
        className="input"
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Email"
      />
      <div>
        <Button type="submit">Create</Button>
      </div>
    </form>
  );
});
