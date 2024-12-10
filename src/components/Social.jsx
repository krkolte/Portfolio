import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: "/" },
    {
        icon: <FaLinkedinIn />,
        path: "https://www.linkedin.com/in/kapil-rao-kolte-380307114",
    },
    {
        icon: <FaTwitter />,
        path: "/",
    },
];

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((link, index) => {
                return (
                    <a
                        target="_blank"
                        href={link.path}
                        key={index}
                        className={iconStyles}
                    >
                        {link.icon}
                    </a>
                );
            })}
        </div>
    );
};

export default Social;

