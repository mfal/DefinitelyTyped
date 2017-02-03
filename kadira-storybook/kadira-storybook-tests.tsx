import * as React from 'react';
import {storiesOf, action, module} from 'kadira-storybook';

storiesOf('Button', module)
    .add('with text', () => (
        <button onClick={action('clicked')}>My First Button</button>
    ))
    .add('with no text', () => (
        <button></button>
    ));

const CenterDecorator = (story: Function) => (
    <div style={{ textAlign: "center" }}>
        {story()}
    </div>
);

storiesOf('Button', module)
    .addDecorator(CenterDecorator)
    .add('with text', () => (
        <button onClick={action('clicked')}>Hello Button</button>
    ))
    .add('with some emojies', () => (
        <button onClick={action('clicked')}>:-)</button>
    ));