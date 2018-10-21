import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

//import './UserCard.css';
const RenderRepos = ({reposdata}) =>
{
    let styles = {
        padding: '10px',
    };
    return reposdata.map((repo, index) => {
        return (
            <div key={index} className="card" style={styles}>
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col">
                    {repo.name}
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">Description</div>
                    <div className="col">{repo.description}</div>
                </div>
                <div className="row">
                    <div className="col-3">Default Branch</div>
                    <div className="col"><code>{repo.default_branch}</code></div>
                </div>
                <div className="row">
                    <div className="col-3">Language</div>
                    <div className="col">{repo.language ? repo.language: "N/A"}</div>
                </div>
                <div className="row">
                    <div className="col-3">Last Updated</div>
                    <div className="col">{repo.updated_at}</div>
                </div>
                <div className="row">
                    <div className="col-3">License</div>
                    <div className="col">{repo.license ? repo.license.name : "N/A"}</div>
                </div>
                <div className="row">
                    <div className="col-3">Stars</div>
                    <div className="col">{repo.stargazers_count}</div>
                </div>
                <div className="row">
                    <div className="col-3">Open Issues</div>
                    <div className="col">{repo.open_issues_count}</div>
                </div>
                <div className="row">
                    <div className="col-3">Public</div>
                    <div className="col">{repo.private ? "Private" : "Public"}</div>
                </div>
            </div>)
    });
}
const RepoCard = ({reposdata}) => {
    return (
        <div>
            <Link to="/lesson/api-integration"><button>Back to Users</button></Link>
            <RenderRepos reposdata={reposdata} />
        </div>
    );
}

export default RepoCard