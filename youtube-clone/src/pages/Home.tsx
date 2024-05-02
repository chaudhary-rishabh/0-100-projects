import React from 'react'
import {Header} from "@/components/Header";
import SideBar from '@/components/SideBar';
import VideoCard from '@/components/VideoCard';


const Home = () => {
    return (
        <div>
            <Header />
            <SideBar />
            <VideoCard />
        </div>
    )
}

export default Home