import Image from "next/image";

const Profile = ({styles}: {styles?: string}) => {
  return (
    <div className={styles}>
        <Image src="/user.jpeg" alt="user" width={100} height={100} />
        <p className="text-xs text-gray-950">@user_name</p> 
    </div>
  );
};

export default Profile;

