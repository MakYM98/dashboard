interface HeaderProps {
    title: string
}

const TabHeader = ({title} : HeaderProps) => {
    return ( 
        <h1 className="text-3xl text-[#2f335b]">
            {title}
        </h1>
    );
}
 
export default TabHeader;