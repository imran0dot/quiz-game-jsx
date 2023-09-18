import { useEffect, useState } from "react";
import loaderPng from "../../../assets/loader.png";

const Loading = ({ children }) => {
    const [loadingNumbers, setLoadingNumbers] = useState(0);
    const [loadingComplete, setLoadingComplete] = useState(false);

    const increaseLoadingNum = () => {
        const numbers = setInterval(() => {
            setLoadingNumbers(prev => {
                if (prev === 100) {
                    clearInterval(numbers);
                    setLoadingComplete(true);
                    return prev;
                } else {
                    return prev + 1;
                }
            });
        }, 10);
    };

    useEffect(() => {
        increaseLoadingNum();
    }, []);

    return (
        <>
            {!loadingComplete ? <div className="min-h-screen flex flex-col justify-center items-center text-white">
                <img src={loaderPng} alt="" />
                <p>{loadingNumbers}</p>
            </div> :

                children

            }
        </>
    );
};

export default Loading;