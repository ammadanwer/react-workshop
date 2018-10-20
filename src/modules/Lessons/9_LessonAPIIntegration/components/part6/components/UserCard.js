import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//import './UserCard.css';
const RenderUsers = ({userdata, loadReposCB}) =>
{
    let styles = {
        padding: '10px',
    };
    console.log('halo');
    console.log(loadReposCB);
    return userdata.map((user, index) => {
        return (
        <div className="card" style={styles}>
            <div className="card-text">
                <div className="row">
                    <div className="col-2">
                        <img src={user.avatar_url} height={100} width={100} alt={""}/>
                    </div>
                    <div className="col-7">
                        <b>Login: </b>{user.login}<br/>
                        <b>URL: </b><a href={user.html_url}>{user.login}</a><br/>
                        <b>Type: {user.site_admin? "Admin/" : ""}</b>{user.type}<br/>
                    </div>
                    <div className="col-3">
                        <button onClick={() => loadReposCB(user.repos_url)}>View Repositories</button>
                    </div>
                </div>
        </div>
        </div>)
    });
}
const UserCard = ({userdata,loadReposCB}) => {
    return (
        <div>
            <RenderUsers userdata={userdata} loadReposCB={loadReposCB}/>
        </div>
    );
}

export default UserCard