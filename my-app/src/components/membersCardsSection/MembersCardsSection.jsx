import { MemberCard } from "../memberCard/MemberCard";
import Search from "../search/Search";
import "./MembersCardsSection.css";

export const MembersCardsSection = ({ showSearch = true }) => {
  const members = [
    { id: "1a", name: "Carolien Bloeme", selected: false },
    { id: "2b", name: "Sun Jun", selected: true },
    { id: "3c", name: "Song Bao", selected: false },
    { id: "4d", name: "Olivia Arribas", selected: true },
    { id: "5e", name: "Bonginkosi Mdladlana", selected: false },
    { id: "6f", name: "Arina Belomestnykh", selected: true },
    { id: "7g", name: "Jacqueline Likoki", selected: true },
  ];

  return (
    <>
      {showSearch && <Search />} 
      <div className="member-list">
        {members.map((member) => (
          <MemberCard
            key={member.id}
            name={member.name}
            selected={member.selected}
          />
        ))}
      </div>
    </>
  );
};
