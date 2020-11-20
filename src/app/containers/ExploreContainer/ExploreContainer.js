import React, {useState, useEffect} from 'react';
import Explore from '../../components/Explore/Explore';
import axios from 'axios';

const ExploreContainer = () => {
    const [userData, setUserData] = useState([]);  //for storing userdata
    const [lastIndex, setLastIndex] = useState(0);  //to store the last fetched id
    const [error, setError] = useState('');

    const fetchData = (lastIndexId=lastIndex, presentUserData=[], size=4) => {
        let config = {
            method: 'get',
            url: `https://api.github.com/users?since=${lastIndexId}`
        };
        axios(config)
            .then(({data}) => {
                //update the state data
                setUserData([
                    ...presentUserData,
                    ...data.slice(0,size)
                ]);
                setLastIndex(data[size-1].id);
            })
            .catch(() => {
                setError('Something Went Wrong');
            });
    };
    //First call to fetch data
    useEffect(() => fetchData(), []);

    //Function for deleting a suggestion
    const handleDeleteUser = (id) => {
        let newUserData = userData.filter(user => user.id !== id);
        fetchData(lastIndex, [...newUserData], 1);
    };
    //Refresh the suggestions
    const handleRefresh = () => fetchData();

    return <Explore handleDeleteUser={handleDeleteUser} handleRefresh={handleRefresh} userData={userData} erorr={error} />;
};

export default ExploreContainer;
