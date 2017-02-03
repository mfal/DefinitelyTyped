// Type definitions for kadira-storybook 1.38
// Project: https://github.com/kadirahq/react-storybook#readme
// Definitions by: Marco Falkenberg <https://github.com/mfal>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

export = ReactStorybook;
export as namespace ReactStorybook;

declare namespace ReactStorybook {
    export let module: any;

    export interface StoryCreator {
        (): React.ReactElement<any>;
    }

    export interface StorySet extends StoryCreator {
    }

    export interface Story {
        add (storyName: string, storyCreator: StoryCreator): Story;
        addDecorator (fn: (stories: StorySet) => any): Story;
    }

    export function storiesOf(name: string, module: any): Story;

    export function action(name: string): React.EventHandler<any>;
}