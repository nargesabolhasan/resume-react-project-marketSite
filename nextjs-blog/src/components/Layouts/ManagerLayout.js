import React from 'react'

const ManagerLayout = (Component) => {
    function  WithLayout ({ ...props }){
        return (
            <>
             <Component
                name={user.firstName}
                logout={logOutUser}
                data={user}
              {...props}
              />
            </>
          );
        }
        return WithLayout;
    }

export default ManagerLayout