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

  return (
    <Table
      columns={[
        { heading: 'Name', value: 'name' },
        { heading: 'Username', value: 'username' },
        { heading: 'Email', value: 'email' },
        { heading: 'City', value: 'address.city' },
        { heading: 'Lat', value: 'address.geo.lat' },
        { heading: 'Lng', value: 'address.geo.lng' },
      ]}
      data={users.users}
    />
  );
});
