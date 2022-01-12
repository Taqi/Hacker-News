import { HNBase } from "./hn-base.model";

export interface HNComment extends HNBase
{
    parent: number;
    text: string;
}