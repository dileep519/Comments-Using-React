import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApproveCard from './ApprovalCard';
import Faker from 'faker';

const App=()=>{
    return (
    <div className="ui container comments">
        <ApproveCard>
            <CommentDetail author="Sam" timeAgo="Today at 06:00AM" comment="Nice blog post!" image={Faker.image.avatar()}/>
        </ApproveCard>
        <ApproveCard>
            <CommentDetail author="Mike" timeAgo="8 Nov 2019" comment="Hooray" image={Faker.image.avatar()} />
        </ApproveCard>
        <ApproveCard>
            <CommentDetail author="Dave" timeAgo="7 Dec 2018" comment="Good to see" image={Faker.image.avatar()}/>
        </ApproveCard>
        <ApproveCard>Do you want to enter??</ApproveCard>
    </div>);
};
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);