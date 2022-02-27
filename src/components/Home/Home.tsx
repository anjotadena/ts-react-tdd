import { useEffect, useState } from "react";

type HeaderProps = {
}

// const defaultProps = {
//     label: "Button Label"
// }

const Home: React.FC<HeaderProps> = (props) => {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        const homePromise = Promise.resolve([{ title: 'Home title', image: 'xx', price: 23.2, location: 'locaiton' }]);

        homePromise.then(o =>  setData(o))
    }, []);
    
    return (
        <div>
            {data.map((h, i) => <div key={i} data-testid="home">{h.title}</div>)}
        </div> 
    );
}

export default Home;
