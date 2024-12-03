import React, { memo, FC } from 'react';
import cn from 'classnames';
import { getIndexedReactKey } from '@app/common/utils/common.utils';

type ComponentProxyContainerProps = {};

export enum ComponentProxyEnum {
    RadioGroup = 'RADIO_GROUP',
    Checkbox = 'CHECKBOX',
    StringInput = 'STRING_INPUT',
    NumberInput = 'NUMBER_INPUT',
    DateInput = 'DATE_INPUT',
}

export type ComponentProxyProps = {
    id: string;
    name: string;
    setting: {
        controlType: ComponentProxyEnum;
    };
};

function FormCheckbox({ name }: ComponentProxyProps) {
    return <input type='checkbox' name={name} defaultChecked={false} />;
}

export const componentProxyConfig: Map<string, FC<ComponentProxyProps>> = new Map([
    [ComponentProxyEnum.Checkbox, props => <FormCheckbox {...props} />],
    // [ComponentProxyEnum.RadioGroup, props => <FormRadioGroup {...props} />],
    // [ComponentProxyEnum.StringInput, props => <FormTextInput {...props} />],
    // [ComponentProxyEnum.NumberInput, props => <FormNumberInput {...props} />],
    // [ComponentProxyEnum.DateInput, props => <FormDateInput {...props} />],
]);

const ComponentProxyResolver: FC<ComponentProxyProps> = ({ setting, ...props }) => {
    if (!setting?.controlType || !componentProxyConfig.has(setting.controlType)) {
        console.warn(`Control with type '${setting?.controlType}' does not exist`);
        return null;
    }

    const Control = componentProxyConfig.get(setting.controlType);

    if (!Control) {
        return null;
    }

    return <Control setting={setting} {...props} />;
};

const ComponentProxyContainer: FC<ComponentProxyContainerProps> = () => {
    return (
        <div className={cn('taComponentProxyContainer')}>
            <ComponentProxyResolver
                id={getIndexedReactKey(0, ComponentProxyEnum.Checkbox)}
                setting={{ controlType: ComponentProxyEnum.Checkbox }}
                name='Checkbox'
            />
        </div>
    );
};

export default memo(ComponentProxyContainer);
