import axios from "axios";
import { useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const Profile = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { user }: any = useAuthContext();
  const username = user?.user.username;

  useEffect(() => {
    if (!user) return;
    if (user) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
      axios.get("http://localhost:5001/api/profile").then((res) => {
        console.log(res.data);
      });
    }
  }, [user]);
  return (
    <div>
      <div>profile</div>
      {user && <div>username: {username}</div>}
      {!user && (
        <div>
          <div>you should login first</div>
        </div>
      )}
    </div>
  );
};

export default Profile;
