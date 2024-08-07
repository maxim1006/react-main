import React, { memo } from 'react';
import MainMenu from '../../components/menu/MainMenu';
import { Route, Routes } from 'react-router-dom';
import TypescriptHooks from './hooks/typescript-hooks.component';
import TypescriptDefaultProps from './default-props/typescript-default-props.component';
import TypescriptForm from './form/typescript-form.component';
import TypescriptEnum from './enum/typescript-enum.component';

const TypescriptPage = () => {
    return (
        <>
            <TypescriptEnum />
            <MainMenu routes={[{ to: '/typescript/hooks', title: 'Hooks' }]} />
            <Routes>
                <Route path='/typescript/hooks' element={<TypescriptHooks />} />
            </Routes>
            <TypescriptDefaultProps />
            <TypescriptForm />
        </>
    );
};

export default memo(TypescriptPage);
