import {
  Label,
  Table,
  TableRow,
  TableCell,
  TableColumn,
} from "@ui5/webcomponents-react";

const tableData = [
  {
    id: 1,
    title: "Chair leg broken",
    status: "Completed",
  },
  {
    id: 2,
    title: "Paint on floor",
    status: "In Progress",
  },
  {
    id: 3,
    title: "Important work",
    status: "Not Started",
  },
  {
    id: 4,
    title: "Getting a dog",
    status: "Blocked",
  },
];

const columns = Object.keys(tableData[0]);

function Solution() {
  return (
    <>
      <Label>Display table below</Label>
      {/* Put table component here */}

      <Table>
        {columns.map((col) => (
          <TableColumn scope="col" onClick={() => handleColumnClick({ col })}>
            <Label>{col}</Label>
          </TableColumn>
        ))}

        {tableData.map((item) => (
          <TableRow key={item.id}>
            <TableCell>
              <Label>{item.id}</Label>
            </TableCell>
            <TableCell>
              <Label>{item.title}</Label>
            </TableCell>
            <TableCell>
              <Label>{item.status}</Label>
            </TableCell>
          </TableRow>
        ))}
      </Table>
    </>
  );
}

export default Solution;
