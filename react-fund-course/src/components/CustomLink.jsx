import { Link, useMatch } from "react-router-dom";

const CustomLink = ({children, to, ...props}) => {
    const match = useMatch(to);
    console.log({match})

    return (
        <Link
            to={to}
            style={{
                color: match ? '#833ab4' : '#0a84ad',
                textDecoration: 'none',
                textTransform: "uppercase",
                marginLeft: '20px',
            }}
            {...props}
        >
            {children}
        </Link>
    );
};

export {CustomLink};