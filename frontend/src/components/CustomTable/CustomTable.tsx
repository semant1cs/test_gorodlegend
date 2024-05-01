/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Table, withTableActions } from "@gravity-ui/uikit";
import { CustomTableProps } from "./CustomTable.types.ts";
import "./CustomTable.scss";

const MyTable = withTableActions(Table);
const columns = [{ id: "name" }, { id: "date" }, { id: "gifts_count" }];

const getRowActions = () => {
  return [
    {
      text: "Print",
      handler: () => {},
    },
    {
      text: "Remove",
      handler: () => {},
      theme: "danger",
    },
  ];
};

const data = [
  { name: "asd", date: "asd", gifts_count: 30 },
  { name: "asd", date: "asd", gifts_count: 30 },
];

export function CustomTable({ searchValue }: CustomTableProps): React.FC<CustomTableProps> {
  const newData = data.filter((row) => row.name.includes(searchValue));

  //@ts-ignore
  return <MyTable data={searchValue !== "" ? newData : data} columns={columns} getRowActions={getRowActions} />;
}
