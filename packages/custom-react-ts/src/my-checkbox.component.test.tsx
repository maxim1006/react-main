import React from 'react';
import { shallow } from 'enzyme';
import MyCheckbox from './my-checkbox.component';

// npx jest - в корне проекта - стартанет тесты

describe('Some message', () => {
    const setState = jest.fn();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const useStateMock: any = (initState: any) => [initState, setState];

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('Is a test where we want to mock useState', () => {
        jest.spyOn(React, 'useState').mockImplementation(useStateMock);
        const wrapper = shallow(<MyCheckbox labelOff={'off'} labelOn={'on'} />);
        // trigger setState somehow
        wrapper.find('input').simulate('change');
        expect(setState).toHaveBeenCalledTimes(1);
        // Other tests here
    });
});
