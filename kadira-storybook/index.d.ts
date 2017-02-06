// Type definitions for kadira-storybook 1.38
// Project: https://github.com/kadirahq/react-storybook#readme
// Definitions by: Marco Falkenberg <https://github.com/mfal>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

export = ReactStorybook;
export as namespace ReactStorybook;

declare namespace ReactStorybook {
    var module: any;

    interface StoryDecorator {
        (story: Function, context: { kind: string, story: string }): Object;
    }

    interface Story {
        add (storyName: string, callback: Function): Story;
        addDecorator (decorator: StoryDecorator): Story;
    }

    function addDecorator(decorator: StoryDecorator): void;
    function linkTo(name: string, ...params: any[]): React.EventHandler<any>;
    function storiesOf(name: string, module: any): Story;
    function action(name: string, ...params: any[]): any;
}