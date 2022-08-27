import { useEffect } from 'react';
import { connect } from 'react-redux';
import { AppDispatch, RootState } from '../../App';
import { Table } from '../../components/Table/Table';
import { IUser } from '../../models/User';
import { fetchUsers } from '../../redux/slices/usersSlice';

export const mapStateToProps = (state: RootState) => {
  const { users } = state;

  return { users };
};

interface UsersProps {
  users: { users: IUser[] };
  dispatch: AppDispatch;
}

export const Users = connect(mapStateToProps)((props: UsersProps) => {
  const { dispatch, users } = props;

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return <Table data={users.users} />;
});
