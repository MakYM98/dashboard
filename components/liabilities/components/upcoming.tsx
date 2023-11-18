const UpcomingCard = () => {
    return ( 
        <div className="w-full h-full border-2 rounded-2xl p-5">
            <h1 className="text-lg text-gray-400">
                Due by 20 June 2023
            </h1>
            <h1 className="text-3xl py-3">
                $291.52
            </h1>
            <div className="bg-blue-500 p-2 rounded-2xl text-center text-sm md:text-lg">
                Make Payment
            </div>
        </div>
    );
}
 
export default UpcomingCard;