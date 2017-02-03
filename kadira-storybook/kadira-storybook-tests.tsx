import * as React from 'react';
import {storiesOf, action, module, linkTo, addDecorator} from 'kadira-storybook';

// storiesOf
storiesOf('Button', module)
    .add('with text', () => (
        <button onClick={action('clicked')}>My First Button</button>
    ));

// addDecorator (Story)
const CenterDecorator = (story: Function) => (
    <div style={{ textAlign: "center" }}>
        {story()}
    </div>
);

storiesOf('Button', module)
    .addDecorator(CenterDecorator)
    .add('with text', () => (
        <button onClick={action('clicked')}>Hello Button</button>
    ));

// addDecorator (globally)
addDecorator((story) => (
    <div style={{textAlign: 'center'}}>
        {story()}
    </div>
));

// linkTo
storiesOf('Button', module)
    .add('First', () => (
        <button onClick={linkTo('Button', 'Second')}>Go to "Second"</button>
    ));
