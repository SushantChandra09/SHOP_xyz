import React, { useState, useEffect } from "react";
import StranderUserProfilePicture from "../../assets/stranderUserProfilePicture.jpg";
import PropTypes from "prop-types";
const Renter = ({ userId }) => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const fetchUserById = async () => {
      try {
        const response = await fetch(
          `${process.env.BASE_SERVER_URL}/api/user/${userId}`
        );
        const data = await response.json();
        if (data.success) {
          setUserData(data.result);
        } else {
          throw ("Error fetching user data:", data.error);
        }
      } catch (error) {
        throw ("Error fetching user data:", error);
      }
    };
    fetchUserById();
  }, [userId]);
  return (
    <div className="product-item__owner">
      {userData ? (
        <>
          <img
            src={userData.userImageURL || StranderUserProfilePicture}
            alt="Renter"
          />
          <span>
            {userData.firstName || userData.lastName
              ? `${userData.firstName} ${userData.lastName}`
              : userData.username}
          </span>
        </>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};
Renter.propTypes = {
  userId: PropTypes.string.isRequired,
};
export default Renter;
