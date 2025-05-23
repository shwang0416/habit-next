import UserContainer from "@/app/components/UserContainer";
import { auth } from "@/app/api/auth/auth";
import { redirect } from "next/navigation";
import { User } from "next-auth";

const UserPage = async () => {
  const session = await auth()
  if(!session) {
    redirect('/')
  }

  return (
    <div className="bg-stone-200 min-h-screen flex justify-center items-center px-4">
      <UserContainer user={session.user as User} />
    </div>
  );
};

export default UserPage;
