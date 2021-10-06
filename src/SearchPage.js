import React from "react";
import "./SearchPage.css"
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";


function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPagge_filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow
            image ="https://avatars.githubusercontent.com/u/47221439?v=4"
            channel = "VladanStar"
            verified
            subs="659K"
            noOfVideos={382}
            description ="You can find awesome programing"
            />
        </div>
    )
}

export default SearchPage;
