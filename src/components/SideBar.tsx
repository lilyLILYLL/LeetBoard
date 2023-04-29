import React from "react";
import { FiMenu } from "react-icons/fi";
import "../scss/SideBar.scss";
import { colors } from "../constants/constants";

export const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-title">
                <div>LeetBoard</div>
                <FiMenu style={{ fontSize: "100%", color: colors.black }} />
            </div>
            <div className="sidebar-user-info">
                <img
                    className="sidebar-user-avatar"
                    src={require("../assets/avatar.jpeg")}
                    alt="Avatar"
                />
                <div className="sidebar-user-name">Lilly Nguyen</div>
            </div>
            <div className="sidebar-menu">
                <div>Your Progress</div>
                <div>Top 100 Common Questions</div>
                <div>Account Settings</div>
            </div>
        </div>
    );
};
