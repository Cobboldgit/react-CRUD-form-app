import React, { Component } from 'react'

class UserList extends Component {
    render() {
        const users = this.props.data
        return (
                users.map((user, index)=>{
                    return(
                        <div className="list">
                            <div key={index}>
                                <p>Name: {user.name}</p>
                                <p>Email: {user.email}</p>
                                <p>Gen: {user.gen}</p>
                        </div>
                        </div>
                    )
                })
            
        )
    }
}

export default UserList;
