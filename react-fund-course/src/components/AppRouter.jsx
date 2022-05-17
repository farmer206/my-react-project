import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Posts from '../pages/Posts';
import Layout from "./UI/Layout/Layout";
import Login from '../pages/Login';
import NotFoundPage from '../pages/NotFoundPage';
import PostIdPage from "../pages/PostIdPage";
import RequireAuth from "../hoc/RequireAuth";
import { AuthProvider } from "../hoc/AuthProvider";
import { PostsOne } from "../pages/PostsOne";
import { SinglPage } from "../pages/SinglPage";

const AppRouter = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<About />} />
                    <Route path="login" element={<Login />} />
                    <Route path="blog"element={
                        <RequireAuth>
                            <Blog /> 
                        </RequireAuth>
                    }/>
                    <Route path="posts" element={<PostsOne />} />
                    <Route path="posts/:id" element={<SinglPage />} />
                    {/* <Route path="posts" element={<Posts />} />         */}
                    {/* <Route path="posts/:id" element={<PostIdPage />} /> */}
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </AuthProvider>
    );
};

export default AppRouter;