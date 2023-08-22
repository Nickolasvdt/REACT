

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {useState, useEffect, lazy, Suspense} from 'react'

/* import Creator from '../Pages/Creator/Creator'
import Feedback from '../Pages/Feedback/Feedback'
import Spawn from '../Pages/Spawn/Spawn'
import ChooseCharacter from '../Pages/ChooseCharacter/ChooseCharacter' */

const Creator = lazy(() => import('../Pages/Creator/Creator'))
const Feedback = lazy(() => import('../Pages/Feedback/Feedback'))
const Spawn = lazy(() => import('../Pages/Spawn/Spawn'))
const ChooseCharacter = lazy(() => import('../Pages/ChooseCharacter/ChooseCharacter'))

export default function RouterApp() {
    return (
        <>
        
            <BrowserRouter>
            
                <Suspense fallback={<div>Carregando...</div>}>
                <Routes>
                    <Route path="/" element={<ChooseCharacter/>}/>
                    <Route path="/creator" element={<Creator/>}/>
                    <Route path="/feedback" element={<Feedback/>}/>
                    <Route path="/spawn" element={<Spawn/>}/>
                </Routes>
            
                </Suspense>
            </BrowserRouter>

        </>
    )
}