export interface HNBase
{
    by: string;
    id: number;
    time: number;
    type: string;
    kids: number[]; //Could be undefined so add '?'
}