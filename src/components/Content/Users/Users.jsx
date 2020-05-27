import React from 'react';
import s from './Users.module.css'

const Users = (props) => {
    if (!props.users.length){
        props.setUsers([
            {
                id: 1,
                fullName: 'Dima',
                location: {
                    city: 'Kiev',
                    country: `Ukraine`,
                },
                status: `I'm a boss`,
                isFollowed: true,
                photoUrl:`https://upload.wikimedia.org/wikipedia/commons/8/88/Dmitry_Nagiev_2017_4.jpg`
            },
            {
                id: 2,
                fullName: 'Sveta',
                location: {
                    city: 'Ust-Kamenogorsk',
                    country: `KZ`,
                },
                status: `I'm a boss`,
                isFollowed: false,
                photoUrl:`https://upload.wikimedia.org/wikipedia/commons/8/88/Dmitry_Nagiev_2017_4.jpg`
            },
            {
                id: 3,
                fullName: 'Sasha',
                location: {
                    city: 'Moscow',
                    country: `Russia`,
                },
                status: `I'm a boss`,
                isFollowed: true,
                photoUrl:`https://upload.wikimedia.org/wikipedia/commons/8/88/Dmitry_Nagiev_2017_4.jpg`
            },
            {
                id: 4,
                fullName: 'Victor',
                location: {
                    city: 'London',
                    country: `UK`,
                },
                status: `I'm a boss`,
                isFollowed: false,
                photoUrl:`https://upload.wikimedia.org/wikipedia/commons/8/88/Dmitry_Nagiev_2017_4.jpg`
            },
            {
                id: 5,
                fullName: 'Valera',
                location: {
                    city: 'Dallas',
                    country: `USA`,
                },
                status: `I'm a boss`,
                isFollowed: true,
                photoUrl:`https://upload.wikimedia.org/wikipedia/commons/8/88/Dmitry_Nagiev_2017_4.jpg`
            },
        ])
    }
    return (
        <div className={s.users}>
            {
                props.users.map(user => (
                        <div className={s.user}>
                            <div className={s.user_left}>
                                <img src={user.photoUrl} alt=""/>
                            </div>
                            <div className={s.user_right}>
                                <div className={s.text}>
                                    <span className={s.name}>{user.fullName}</span>
                                    <span className={s.location}>{user.location.country}, {user.location.city}</span>
                                    <div className={s.status}>{user.status}</div>
                                </div>
                                { user.isFollowed ?
                                    <button onClick={() =>props.onUnfollow(user.id)}>Отписаться</button> :
                                    <button onClick={() =>props.onFollow(user.id)}>Подписаться</button>
                                }
                            </div>
                        </div>
                    ),
                )
            }
        </div>
    )
};

export default Users;