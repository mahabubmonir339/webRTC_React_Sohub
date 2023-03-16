import React, { useState, useEffect } from 'react';

function MyComponent() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('api.php')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            {data.map((item, index) => (
                <div key={index}>
                    <span>{item.name}</span>
                    <span>{item.age}</span>
                </div>
            ))}
        </div>
    );
}

export default MyComponent;