import "./styles.css";
import Player from "./Player";
import { Flex, Heading, } from "@chakra-ui/react";
import Header from "./Header";
import React from "react";
import {Routes, Route, Link} from 'react-router-dom'
import Form from "./Form";
export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={
        <Flex flexDir="column" px="1rem" className="App">
        <Heading mb="2rem"></Heading>
        <Header/>
        
        <Player src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
          
        <Link className="liink" to="/two">
            <h3>Second video</h3>
        </Link>
          &nbsp  
        
        <Link className="liink" to="/three">
          <h3>Third video</h3>
        </Link>
        &nbsp
        <Link className="liink" to="/four">
          <h3>Fourth video</h3>
        </Link>
        &nbsp
        </Flex>
      } />
      <Route path="/two" element={
        <Flex flexDir="column" px="1rem" className="App">
        <Heading mb="2rem"></Heading>
        <Header/>
        <Player src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
        <Link className="liink" to="/form">
          <h1>Download content</h1>
        </Link>
        </Flex>
      } />
      <Route path="/three" element={
        <Flex flexDir="column" px="1rem" className="App">
        <Heading mb="2rem"></Heading>
        <Header/>
        <Player src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
        <Link className="liink" to="/form">
          <h1>Download content</h1>
        </Link>
        </Flex>
      } />
      <Route path="/Four" element={
        <Flex flexDir="column" px="1rem" className="App">
        <Heading mb="2rem"></Heading>
        <Header/>
        <Player src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
        <Link className="liink" to="/form">
          <h1>Download content</h1>
        </Link>
        </Flex>
      } />
      <Route path="/form" element={
        <Form/>
      } />
    </Routes>
   
    </>
  );
}


