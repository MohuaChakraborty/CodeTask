import React from "react";
import { Routes, Route } from "react-router-dom";
import ContactList from "../Contacts/ContactList";
import Contacts from "../Contacts/addContactPage";
import Edit from "../Contacts/Edit";
import ChartsAndMaps from "../ChartAndMap/Charts/ChartsAndMaps";

function SideBar() {
    return (
        <div className="flex">
            <div className="flex flex-col h-screen p-3 bg-white shadow w-60">
                <div className="space-y-3 py-5">
                    <div className="flex items-center">
                        <h2 className="text-2xl font-bold">Quick Links</h2>
                    </div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-lg">
                            <li className="rounded-sm">
                                <a
                                    href="/ContactManagement"
                                    className="flex items-center p-2 space-x-3 rounded-md text-blue-600 hover:text-blue-800"
                                >
                                    <span>Contact</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href="/ChartsAndMaps"
                                    className="flex items-center p-2 space-x-3 rounded-md text-blue-600 hover:text-blue-800"
                                >
                                    <span>Charts and Maps</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container mx-auto">   
                <Routes>
                  <Route path="/ContactManagement" element={<ContactList />} />
                  <Route path="/contacts" element={<Contacts />} />
                  <Route path="/edit/:id" element={<Edit />} />
                  <Route path="/ChartsAndMaps" element={<ChartsAndMaps />} />
                </Routes>
            </div>
        </div>
    );
}

export default SideBar;