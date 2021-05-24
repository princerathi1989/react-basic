export interface IExpenseItemProps {
    id?: number | string;
    title: string;
    amount: number;
    date: string;
}

export interface Datapoint {
    label: string;
    value: number;
}