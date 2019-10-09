import React, {Component} from 'react';
import CommentComponent from "./Comment";
import faker from 'faker';
import './CommentList.scss';
import ContentProjectionContentComponent from "../content-projection/ContentProjectionContent";
import ContentProjectionComponent from "../content-projection/ContentProjection";

export class CommentListComponent extends Component {
    render() {
        const date1 = new Date().toLocaleDateString();
        const date2 = new Date(new Date().setDate(new Date().getDate() - 1)).toLocaleDateString();
        const date3 = new Date(new Date().setDate(new Date().getDate() - 2)).toLocaleDateString();

        const commentsData = [
            {
                name: faker.name.firstName() + ' ' + faker.name.lastName(),
                content: faker.lorem.sentence(),
                date: date1,
                img: faker.image.avatar(),
                id: 1
            },
            {
                name: faker.name.firstName() + ' ' + faker.name.lastName(),
                content: faker.lorem.sentence(),
                date: date2,
                img: faker.image.avatar(),
                id: 2
            },
            {
                name: faker.name.firstName() + ' ' + faker.name.lastName(),
                content: faker.lorem.sentence(),
                date: date3,
                img: '/images/icons/bell.svg',
                id: 3
            }
        ];

        const comments = commentsData.map((comment, index) => {
            return <ContentProjectionComponent
                key={index}
                projectFromProp={<ContentProjectionContentComponent content={faker.name.jobTitle()}
            />}>
                <CommentComponent
                    {...comment}
                />
            </ContentProjectionComponent>;
        });

        return (
            <ul className="comment-list">
                {comments}
            </ul>
        );
    }
}

// прикольное использование вместо
// <CommentComponent
//     name={name}
//     content={content}
//     date={date}
//     img={img}
//     id={id}
// />

// использую

// <CommentComponent
//     {...comment}
// />
