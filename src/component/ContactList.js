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
      <div>
        {searchName === "" ? (
          <p>
            총 연락처 수 :{" "}
            <span style={{ color: "red" }}>{filterContactList.length}</span>명
          </p>
        ) : (
          <p>
            검색된 연락처 수 :{" "}
            <span style={{ color: "red" }}>{filterContactList.length}</span>명
          </p>
        )}
      </div>
      <SearchBox />
      {filterContactList.map((item, index) => (
        <ContactItem key={index} item={item} />
      ))}
    </div>
  );
};

export default ContactList;
