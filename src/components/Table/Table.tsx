import './Table.css';

interface TableProps {
  data: any[];
}

export const Table = (props: TableProps) => {
  const { data } = props;

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {data.map((el) => (
          <tr key={el.id}>
            <td>{el.name}</td>
            <td>{el.username}</td>
            <td>{el.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
