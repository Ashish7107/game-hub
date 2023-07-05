import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchInputs = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />}></InputLeftElement>
      <Input borderRadius={20} placeholder="SearchGames..." variant="filled" />
    </InputGroup>
  );
};

export default SearchInputs;
