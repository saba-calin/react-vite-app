import {useEffect, useState} from "react";

const useLifecycleLog = (name) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        console.log(`${name} has mounted`);
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted) {
            console.log(`${name} has rendered`);
        }
        return () => console.log(`${name} has unmounted`)
    });
}

export default useLifecycleLog;
