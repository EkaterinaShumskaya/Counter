
type PropsCount = {
    count: number
    maxValue: number
    minValue: number
}

export const Counter = ({ count, maxValue, minValue }: PropsCount) => {
    const isError = count === maxValue
    return (
        <div className={isError ? "countStyle_error" : "countStyle"}> {count} </div>
    );
};

