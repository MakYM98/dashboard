const UserSection = () => {
    return (
        // Image on left / Username on top (Right) / "Premium" below (Right)
        <div className="w-full h-[40px] flex">
            {/* User Avatar */}
            <div className="col-span-1 bg-white w-[40px] h-full rounded-full">
                
            </div>
            {/* User Details */}
            <div className="ml-2">
                <p className="text-sm text-gray-300">
                    Motion AI
                </p>
                <p className="text-xs text-gray-400">
                    Premium
                </p>
            </div>
        </div>
    );
}
 
export default UserSection;