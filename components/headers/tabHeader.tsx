interface HeaderProps {
    title: string
}

const TabHeader = ({title} : HeaderProps) => {
    return ( 
        <h1 className="text-3xl text-black">
            {title}
        </h1>
    );
}
 
export default TabHeader;