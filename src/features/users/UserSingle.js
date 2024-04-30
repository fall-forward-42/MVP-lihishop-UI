import {  useGetSingleUserQuery } from "./usersApiSlice";
import { Link } from "react-router-dom";

const UserSingle = () => {
  const {
    data: singleUser,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetSingleUserQuery();

  let content;
  if (isLoading) {
    content = <p>"Loading..."</p>;
  } else if (isSuccess) {
    content = (
      <section className="users">
        <h1>User Information</h1>
        <ul>
          <li>Username: {singleUser.username}</li>
          <li>Full Name: {singleUser.fullName}</li>
          <li>Address: {singleUser.address}</li>
          <li>Created At: {singleUser.createdAt}</li>
          <li>Updated At: {singleUser.updatedAt}</li>
          <li>Role: {singleUser.role}</li>
        </ul>
        <Link to="/welcome">Back to Welcome</Link>
      </section>
    );
  } else if (isError) {
    content = <p>{JSON.stringify(error)}</p>;
  }

  return content;
};
export default UserSingle;
