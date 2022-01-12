import React, {useState, useEffect} from "react";
import "./Content.css";
import StoryCard, {AddStory} from "./components/StoryCard";
import PostArea from "./components/PostArea";
import Post from "./components/Post";
import db from "./FirebaseImport";

import userPic from "./usericon.png"
import story1 from "./images/story/story1.jpg";
import story2 from "./images/story/story2.jpg";
import story3 from "./images/story/story3.jpg";
import story4 from "./images/story/story4.jpg";
import story5 from "./images/story/story5.jpg";

import user1 from "./images/profile/001.jpeg"
import user2 from "./images/profile/002.jpeg"
import user3 from "./images/profile/003.jpeg"
import user4 from "./images/profile/004.jpeg"
import user5 from "./images/profile/005.jpeg"

import post1 from "./images/post001.jpeg";

export default function Content() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('1').onSnapshot((snapshot) => 
            setPosts(snapshot.docs.map((doc) => ({id: doc.id, data: doc.data() } )))
        );
    }, []);

{posts.map(post => (<Post name = {post.data.posterName} img = {post.data.posterImg}/>))}

    return (
        <div className="content">
            <div className="story__deck">
                <AddStory img={userPic}/>
                <StoryCard name="Steve Dodson"
                    img={story1}
                    profileP={user1}/>
                <StoryCard name="Melinda Roach"
                    img={story2}
                    profileP={user2}/>
                <StoryCard name="Nathan O'Connor"
                    img={story3}
                    profileP={user3}/>
                <StoryCard name="Kathryn Rich"
                    img={story4}
                    profileP={user4}/>
                <StoryCard name="Belinda Young"
                    img={story5}
                    profileP={user5}/>
            </div>
            <div className="post__area">
                <PostArea/>
            </div>
            <div className="posts">
            {posts.map(post => (<Post name = {post.data.posterName} img = {post.data.posterImg} text = {post.data.postText} postimg = {post.data.postImg} comments = {post.data.comments} shares = {post.data.shares} likes = {post.data.likes} loggedinuser = {userPic} date = {new Date(post.data.postedtime?.toDate()).toUTCString()}/>))}
                
            </div>
        </div>
    )
}
