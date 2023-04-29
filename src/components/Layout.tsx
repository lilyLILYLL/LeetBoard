import React from "react";
import "../scss/Layout.scss";
import { SideBar } from "./SideBar";
export const Layout = () => {
    return (
        <div className="container">
            <div className="sidebar">
                <SideBar />
            </div>
            <div className="content">Content</div>
        </div>
    );
};
