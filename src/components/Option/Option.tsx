import './Option.scss';

function Option({  option }: { option: number | string }) {
    return(<div className="option">{ option }</div>)
}

export default Option;