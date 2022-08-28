import './Table.css';

interface TableProps {
  data: any[];
  columns: { heading: string; value: string }[];
}

export const Table = (props: TableProps) => {
  const { data, columns } = props;

  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.value}>{column.heading}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            {columns.map((column) => {
              // Check if data is nested
              if (column.value.indexOf('.') !== -1) {
                const keys = column.value.split('.');
                let value = item;
                keys.forEach((key) => {
                  value = value[key];
                });
                return <td key={item.id + column.value}>{value}</td>;
              }

              return <td key={item.id + column.value}>{item[column.value]}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
