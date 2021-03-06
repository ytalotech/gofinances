import React from 'react';
import { render } from '@testing-library/react-native';

import { Input } from '.';// aponta para a pasta

describe('Input component', () => {
    it('must have specific border color when active', () => {
        const { getByTestId } = render(
            <Input
                testID='input-email'
                placeholder='E-mail'
                keyboardType='email-address'
                autoCorrect={false}
                active={true}
            />
        );

        const inputComponent = getByTestId('input-email');
        expect(inputComponent.props.style[0].borderColor)
            .toEqual('#E83F5B')
    });
});