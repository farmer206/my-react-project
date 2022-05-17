import { Outlet } from "react-router-dom";
import { CustomLink } from "../../CustomLink";
import cl from './Layout.module.css';
import { useAuth } from "../../../hooks/useAuth";
import MyButton from "../button/MyButton";
import { useNavigate } from "react-router-dom";


const Layout = () => {
    const {signout} = useAuth();
    const navigate = useNavigate();

    return (
        <>
        <header className={cl.layout}>
            <MyButton onClick={() => signout(() => navigate('/', {replace: true}))}>
                Sign out
            </MyButton>
            <div className={cl.layout__links}>
                <CustomLink to="/">About</CustomLink>
                <CustomLink to="/blog">Blog</CustomLink>
                <CustomLink to="/posts">Posts</CustomLink>
            </div>
        </header>
        <main className="container">
            <Outlet />
        </main>
        <footer className="container">2022</footer>
        </>
    );
};

export default Layout;