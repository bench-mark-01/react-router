import React from 'react';
import { 
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

import { BasicInfoHeader, BasicInfo } from './basicinfo';
import { PaginationBtn as BasicInfoPagination } from './basicinfo/PaginationBtn';

import { ServeyHeader, Servey } from './servey';
import { PaginationBtn as ServeyPagination } from './servey/PaginationBtn';

import { ConsultationHeader, Consultation } from './consultation';
import { PaginationBtn as ConsultationPagitation } from './consultation/PaginationBtn';

import { NotFound } from './NotFound';

export default function Layout(){
    return(
        <>
            <BrowserRouter>
                <section className="columns is-full is-centered is-vcentered">
                    <div className="column is-half my-6">
                        <article className="message">
                            <div className="message-header">
                                <Routes>
                                    <Route path='/' element={<BasicInfoHeader/>}/>
                                    <Route path='/inputservey' element={<ServeyHeader/>}/>
                                    <Route path='/consultation' element={<ConsultationHeader/>}/>
                                    <Route element={<NotFound/>}/>
                                </Routes>
                            </div>
                            <div className="message-body">
                                <Routes>
                                    <Route path='/' element={<BasicInfo/>}/>
                                    <Route path='/inputservey' element={<Servey/>}/>
                                    <Route path='/consultation' element={<Consultation/>}/>
                                </Routes>
                            </div>
                        </article>
                        <div className="buttons is-centered">
                            <Routes>
                                    <Route path='/' element={<BasicInfoPagination/>}/>
                                    <Route path='inputservey' element={<ServeyPagination/>}/>
                                    <Route path='consultation' element={<ConsultationPagitation/>}/>
                            </Routes> 
                        </div>
                    </div>
                </section>
            </BrowserRouter>
        </>
    );
}
