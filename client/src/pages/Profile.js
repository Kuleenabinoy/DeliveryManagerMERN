// import React from "react";

// import { Redirect, useParams } from "react-router-dom";
// import { useQuery } from "@apollo/client";

// import ItemsList from "../components/ItemsList";
// //import ItemForm from "../components/ItemForm";

// import { QUERY_USER, QUERY_ME } from "../utils/queries";

// import Auth from "../utils/auth";

// const Profile = () => {
//     const { username: userParam } = useParams();

//     // If there is no `profileId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
//     const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
//         variables: { username: userParam },
//     });

//     // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_PROFILE` query
//     const user = data?.me || data?.user || {};

//     // Use React Router's `<Redirect />` component to redirect to personal profile page if username is yours
//     if (Auth.loggedIn() && Auth.getProfile().data.username) {
//         return <Redirect to="/me" />;
//     }

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (!user?.name) {
//         return <h4>You need to be logged in to see your page. Use the navigation links above to sign up or log in!</h4>;
//     }

//     return (
//         <div>
//             <h2 className="card-header">Viewing {userParam ? `${user.username}'s` : "your"} profile.</h2>
//             <ItemsList siteinfo={user.siteinfo} createdAt={user.createdAt} items={user.items} />
//             {/* {user.items?.length > 0 && <ItemsList items={user.items} isLoggedInUser={!userId && true} />} */}

//             {/* <div className="my-4 p-4" style={{ border: "1px dotted #1a1a1a" }}>
//                  <ItemForm profileId={user._id} />
//             </div>  */}
//         </div>
//     );
// };

// export default Profile;
