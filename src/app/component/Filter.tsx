const Filter = () => {
    return (
        <div className="mt-12 flex justify-between">
            <div className="flex gap-6 flex-wrap">
                <select name="" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]">
                    <option>Type</option>
                    <option value="physical">Physical</option>
                    <option value="digital">Digital</option>
                </select>
                <input type="text" name="min" placeholder="min price" className="text-xs rounded-2xl ol-2 w-24 ring-1 ring-gray-400" />
                <select name="" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]">
                    <option>Color</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                </select>
                <input type="text" name="max" placeholder="max price" className="text-xs rounded-2xl ol-2 w-24 ring-1 ring-gray-400" />
                <select name="" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]">
                    <option>Size</option>
                    <option value="l">L</option>
                    <option value="xl">XL</option>
                </select>
                <select name="" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]">
                    <option>Category</option>
                    <option value="new-arrival">New Arrival</option>
                    <option value="popular">Popular</option>
                </select>
                <select name="" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]">
                    <option>Sort By</option>
                    <option value="new-arrival">Price (low to high)</option>
                    <option value="popular">Price (high to low)</option>
                    <option value="popular">Newest</option>
                    <option value="popular">Oldest</option>
                </select>
            </div>
            <div className=""></div>
        </div>
    )
}

export default Filter