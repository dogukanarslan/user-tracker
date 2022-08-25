import { useEffect } from 'react';
import { connect } from 'react-redux';
import { IUser } from '../../models/User';
import { AppDispatch } from '../../App';
import { fetchUsers } from '../../redux/slices/usersSlice';
import './UserList.css';

const mapStateToProps = (state: any) => {
  const { users } = state;

  return { users };
};

interface UserListProps {
  dispatch: AppDispatch;
  users: IUser[];
}

export const UserList = connect(mapStateToProps)((props: UserListProps) => {
  const { dispatch, users } = props;

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <table className="user-list">
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
});
