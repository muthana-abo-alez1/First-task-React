import { MemberCard } from "../memberCard/MemberCard";
import Search from "../search/Search";
import "./MembersCardsSection.css";

export const MembersCardsSection = ({ showSearch }) => {
  const members = [
    { name: "Carolien Bloeme", selected: false },
    { name: "Sun Jun", selected: true },
    { name: "Song Bao", selected: false },
    { name: "Olivia Arribas", selected: true },
    { name: "Bonginkosi Mdladlana", selected: false },
    { name: "Arina Belomestnykh", selected: true },
    { name: "Jacqueline Likoki", selected: true },
  ];

  return (
    <>
      {showSearch && <Search />} 
      <div className="member-list">
        {members.map((member, index) => (
          <MemberCard
            key={index}
            name={member.name}
            selected={member.selected}
          />
        ))}
      </div>
    </>
  );
};
