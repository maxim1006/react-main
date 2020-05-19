import React, { Component } from "react";
import customAxios from "../../common/api/axios";

export class JsxListComponent extends Component {
    state = {
        family: []
    };

    async componentDidMount() {
        this.cancelGetFamilyRequest = customAxios.CancelToken.source();

        try {
            const { data: family } = await customAxios.get("/family", {
                cancelToken: this.cancelGetFamilyRequest.token
            });

            this.setState({
                family
            });
        } catch (e) {
            console.log("JsxListComponent get('/family'... ", e);
        }
    }

    componentWillUnmount() {
        this.cancelGetFamilyRequest.cancel(
            "JsxListComponent get('/family'... canceled"
        );
    }

    // Тут классный пример деструктуризации входных свойств
    render() {
        return (
            <ul>
                {this.state.family.map(member => (
                    <li key={member.id}>
                        <FamilyMember {...member} />
                    </li>
                ))}
            </ul>
        );
    }
}

function FamilyMember({ name, age, occupation }) {
    return (
        <>
            Name: {name}, age: {age}, occupation: {occupation}
        </>
    );
}
