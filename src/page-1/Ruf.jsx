import React, { useState } from 'react';
const Ruf = () => {
    const [selects, setSelects] = useState("");
    return (
        <div>
            <select className="form-control input input-bordered w-full max-w-xs" onChange={(e) => {
                const selectedItems = e.target.value;
                setSelects(selectedItems);
            }} value={selects}>
                <option>Rectangular</option>
                <option>Round</option>
                <option>Triangle</option>
            </select>
            mahabub-{selects}
        </div>
    );
};

export default Ruf;