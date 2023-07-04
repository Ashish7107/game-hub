import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  OrderedList,
} from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";
interface Props {
  onSelectSortOrder: (sortOrder: String) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", labels: "Relevence" },
    { value: "-added", labels: "Date added" },
    { value: "name", labels: "name" },
    { value: "-released", labels: "Release date" },
    { value: "-metacritic", labels: "Popularity" },
    { value: "-rating", labels: "Average Rating" },
  ];
  const currentSortOrder = sortOrders.find(
    (object) => object.value === sortOrder
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.labels || "Relevence"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.labels}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
