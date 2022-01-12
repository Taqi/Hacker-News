import { HNBase } from "./hn-base.model";

export interface HNStory extends HNBase
{
    descendants: number;
    score: number;
    title: string;
    url: string;
}
