// Type definitions for kadira-storybook 1.38
// Project: https://github.com/kadirahq/react-storybook#readme
// Definitions by: Marco Falkenberg <https://github.com/mfal>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

export = ReactStorybook;
export as namespace ReactStorybook;

declare namespace ReactStorybook {
    export var module: any;

    export interface StoryDecorator {
        (story: Function, context: { kind: string, story: string }): Object;
    }

    export interface Story {
        add (storyName: string, callback: Function): Story;
        addDecorator (decorator: StoryDecorator): Story;
    }

    export function addDecorator(decorator: StoryDecorator): void;
    export function linkTo(name: string, ...params: any[]): React.EventHandler<any>;
    export function storiesOf(name: string, module: any): Story;
    export function action(name: string, ...params: any[]): any;
}