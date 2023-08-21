import { LegacyStoryFn, StoryContext } from '@storybook/types';
import { VariantsParameter } from './types';
export declare class Variants {
    private storyFn;
    private context;
    config: VariantsParameter;
    private _variants;
    constructor(storyFn: LegacyStoryFn | any, context: StoryContext | any);
    private _init;
    isEnabled(): boolean;
    getTemplate(): any;
    private _getVariantContext;
    private _populateStoryTemplate;
    private _getFilters;
    private _getCombinations;
}
