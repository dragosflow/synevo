import ScrollableContainer from "./ScrollableContainer";
import user1 from "../assets/svgs/persons/user.svg";
import user2 from "../assets/svgs/persons/man.svg";
import user3 from "../assets/svgs/persons/woman.svg";

export const UsersList = () => {
  const users = [user1, user2, user3, user2, user3];
  return (
    <ScrollableContainer>
      {users.map((user, index) => (
        <div
          key={index}
          className={index !== 0 ? "ml-6 inline-block" : "inline-block"}
        >
          <img src={user} alt='user' className='w-14  rounded-full' />
        </div>
      ))}
    </ScrollableContainer>
  );
};
