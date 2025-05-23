import { User } from "next-auth";


const Profile = ({styles, user}: {styles?: string, user: User}) => {
  const userImage = user?.image || '/user.jpeg'
  return (
    <div className={styles}>
        <img src={userImage} alt="user" className="rounded-full w-20 h-20" />
        <div className="flex flex-col gap-2">
          <p className="text-xs text-gray-950">{user.name}</p>
        </div>
    </div>
  );
};

export default Profile;

