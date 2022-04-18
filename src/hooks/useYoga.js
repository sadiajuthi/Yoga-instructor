import { useEffect, useState } from 'react';

const useYoga = () => {
    const [yogas, setYogas] = useState([]);
    useEffect(() => {
        fetch('yoga.json')
            .then(res => res.json())
            .then(data => setYogas(data));
    }, []);
    return [yogas, setYogas];
};

export default useYoga;