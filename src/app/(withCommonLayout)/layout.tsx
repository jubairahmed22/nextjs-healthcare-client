import Navbar from "@/components/Shared/Navbar/Navbar";

const CommonLayout = ({children} : {children: React.ReactNode}) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default CommonLayout;