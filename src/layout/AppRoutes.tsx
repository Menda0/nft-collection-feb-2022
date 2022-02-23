import React from "react";
import {Routes, Route} from "react-router-dom"
import { Component1, Component8, Component9 } from "../components";
import {CollectionListPage} from "../cointainers/CollectionListPage"
import { CollectionDetailPage } from "../cointainers/CollectionDetailPage";


// /colletions -> Collections List Page
// /collections/:idCollection -> Collection Detail Page


export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/collections/:collectioId" element={<CollectionDetailPage />} />
            <Route path="/collections" element={<CollectionListPage />} />
            <Route path="/component8/:defaultMessage" element={<Component8 message="Other default message"/>} />
            <Route path="/component9" element={<Component9 message="Default Message" />} />
            <Route path="/" element={<Component1 />} />
        </Routes>
    )
}