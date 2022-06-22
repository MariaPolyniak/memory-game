import id from '../../utils/generate-id';
import shuffle from '../../utils/shuffle-array';
import './Grid.scss';
import Option from '../Option/Option';

function Grid({ optionPairsCount }: { optionPairsCount: number }) {
    const uniqueOptionList = Array.from(Array(optionPairsCount).keys());
    const shuffledOptionPairsList =  shuffle(uniqueOptionList.concat(uniqueOptionList));

    return(
        <div className="grid grid-6">
            { shuffledOptionPairsList.map(option => <Option option={option} key={id()}/>) }
        </div>
    )
}

export default Grid;