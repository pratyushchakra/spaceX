import Context from '../utils/Context'
import Homepage from '../container/Homepage';
import apiConfig from '../utils/apiConfig';
import Axios from 'axios';
const SpaceXProgram = ({ allLaunches }) => (
    <Context.Provider data={allLaunches}>
        <Homepage />
    </Context.Provider>
);

SpaceXProgram.getInitialProps = async () => {
    try {
        const response = await Axios.get(apiConfig.GET_ALL_LAUNCHING_DATA());
        return { allLaunches: response.data };
    } catch (e) {
        console.error(e);
        return { allLaunches: [] };
    }
}
export default SpaceXProgram;