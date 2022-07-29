import { Pagination } from "@nextui-org/react";

export default function PaginationComponent(props) {
  return <Pagination total={props.data} initialPage={1} color="success" />;
}