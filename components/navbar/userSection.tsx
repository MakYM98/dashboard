import Image from "next/image";

const UserSection = () => {
    return (
        // Image on left / Username on top (Right) / "Premium" below (Right)
        <div className="w-full h-[120px] flex flex-col">
            {/* User Avatar */}
            <div className=" bg-white w-[60px] h-[60px] rounded-xl">
                <Image
                    src={require('@/public/avatar.jpg')}
                    alt="User Avatar"
                    className="w-[60px] h-[60px] rounded-2xl"
                    
                />
            </div>
            {/* User Details */}
            <div className="ml-2 mt-2">
                <p className="text-xl text-[#2f335b]">
                    Hello, Bruce
                </p>
                <p className="text-sm text-gray-400">
                    Welcome Back
                </p>
            </div>
        </div>
    );
}
 
export default UserSection;