import React from 'react';
import { authenticationService } from "../../services/API";
import './HomePage.css';

// import { history } from "./helpers/history";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: authenticationService.currentUserValue,
            users: null
        };
    }


    componentDidMount() {
        // userService.getAll().then(users => this.setState({ users }));
    }

    render() {

        return (
            <div>
                {/* {users &&
                    <ul>
                        {users.map(user =>
                            <li key={user.id}>{user.firstName} {user.lastName}</li>
                        )}
                    </ul>
                } */}

            </div>
        );
    }
}

export { HomePage };