import React from "react";
import "./SearchPage.css"
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow"; 


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
            <hr />
            <VideoRow 
            views="1.5"
            subs= "679K"
            description ="Do you want a FREE online"
            timestamp= "59 seconds ago"
            title ="Let's build a Youtube Clone React"
            image ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyIRQ4xTeI34OAoR-xY4bR6R8D99etzxbZug&usqp=CAU"
            />
             <VideoRow 
            views="1.5"
            subs= "679K"
            description ="Do you want a FREE online"
            timestamp= "59 seconds ago"
            title ="Let's build a Youtube Clone React"
            image ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyIRQ4xTeI34OAoR-xY4bR6R8D99etzxbZug&usqp=CAU"
            />
             <VideoRow 
            views="1.5"
            subs= "679K"
            description ="Do you want a FREE online"
            timestamp= "59 seconds ago"
            title ="Let's build a Youtube Clone React"
            image ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyIRQ4xTeI34OAoR-xY4bR6R8D99etzxbZug&usqp=CAU"
            />
             <VideoRow 
            views="1.5"
            subs= "679K"
            description ="Do you want a FREE online"
            timestamp= "59 seconds ago"
            title ="Let's build a Youtube Clone React"
            image ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyIRQ4xTeI34OAoR-xY4bR6R8D99etzxbZug&usqp=CAU"
            />
             <VideoRow 
            views="1.5"
            subs= "679K"
            description ="Do you want a FREE online"
            timestamp= "59 seconds ago"
            title ="Let's build a Youtube Clone React"
            image ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyIRQ4xTeI34OAoR-xY4bR6R8D99etzxbZug&usqp=CAU"
            />
             <VideoRow 
            views="1.5"
            subs= "679K"
            description ="Do you want a FREE online"
            timestamp= "59 seconds ago"
            title ="Let's build a Youtube Clone React"
            image ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyIRQ4xTeI34OAoR-xY4bR6R8D99etzxbZug&usqp=CAU"
            />

        </div>
    )
}

export default SearchPage;
