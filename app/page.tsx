import axios from "axios";

const getUserDetails = async () => {
  const response = await axios.get("http://localhost:3000/api/user");
  return response.data;
}

export default async function Home() {
  const userDetails = await getUserDetails();
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="border p-3 rounded-md">Name: {userDetails?.name} <br /> Email: {userDetails?.email} </div>
    </div>
  );
}
