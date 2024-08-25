import React from "react";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contactList = useSelector((state) => state.contactList);
  const searchName = useSelector((state) => state.searchName);
  console.log(contactList);
  console.log("search name :", searchName);

  const filterContactList = contactList.filter((item) =>
    item.name.includes(searchName)
  );
  console.log("Filter List :", filterContactList);

  return (
    <div>
      <SearchBox />
      {filterContactList.map((item, index) => (
        <ContactItem key={index} item={item} />
      ))}
    </div>
  );
};

export default ContactList;
