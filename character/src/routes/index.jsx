

import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState, useEffect} from 'react'
import Creator from "../Pages/Creator/Creator";
import Feedback from "../Pages/Feedback/Feedback";
import Spawn from "../Pages/Spawn/Spawn";
import ChooseCharacter from "../Pages/ChooseCharacter/ChooseCharacter";

export default function RouterApp() {
    return (
        <>
        
            <BrowserRouter>
            
                <Routes>
                    <Route path="/" element={<ChooseCharacter/>}/>
                    <Route path="/creator" element={<Creator/>}/>
                    <Route path="/feedback" element={<Feedback/>}/>
                    <Route path="/spawn" element={<Spawn/>}/>
                </Routes>
            
            </BrowserRouter>

        </>
    )
}