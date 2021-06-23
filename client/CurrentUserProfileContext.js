import React, { useContext, useState, useEffect } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { UserProfiles } from '../imports/api/UserProfiles';

const CurrentUserProfileContext = React.createContext();

export function useCurrentUserProfile() {
    return useContext(CurrentUserProfileContext);
}

const CurrentUserProfileProvider = (props,{ children }) => {
    const [currentUser, setCurrentUser] = useState();
    
    useEffect(() => {
        const getData = () => {
            if (props != undefined){
                setCurrentUser(props.actualData[0])
            }
        }
        getData()
    },[props])
    
	return (
		<CurrentUserProfileContext.Provider value={currentUser}>
			{props.children}
		</CurrentUserProfileContext.Provider>
	);
}
export default withTracker(() => {
   const subscribeData = Meteor.subscribe('currentUserProfile');
   const loading = !subscribeData.ready();
   const data = UserProfiles.find();
   const dataExist = !loading && !!data;

   //return data as props
   return {
       loading,
       dataExist,
       actualData: UserProfiles.find({
            owner: Meteor.userId()
      }).fetch()
}
})(CurrentUserProfileProvider);
