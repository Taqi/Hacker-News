export interface HNBase
{
    by: string;
    id: number;
    time: number;
    type: string;
    kids?: number[];
}

export interface HNStory extends HNBase
{
    descendants: number;
    score: number;
    title: string;
    url: string;
}

export interface HNComment extends HNBase
{
    parent: number;
    text: string;
}