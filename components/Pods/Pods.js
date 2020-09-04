import { withContext } from '../../utils/Context';
import { Fragment, useEffect } from 'react';
import styles from './Pods.style'
import { fetchPodsData } from '../../utils/utils';

const Pod = ({ launch }) => (
    <div className="pod">
        <div className="image-container">
            <img src={launch.links.mission_patch} width="200" />
        </div>
        <p className="mission-name">{launch.mission_name} #{launch.flight_number}</p>
        <div className="text-holder"><p className="bold-text">Mission IDs:</p><p>{launch.mission_id}</p></div>
        <div className="text-holder"><p className="bold-text">Launch Year:</p><p>{launch.launch_year}</p></div>
        <div className="text-holder"><p className="bold-text">Successful Launch:</p><p>{launch.launch_success ? 'True' : 'False'}</p></div>
        <div className="text-holder"><p className="bold-text">Successful Landing:</p><p>{launch.isLandingTrue ? 'True' : 'False'}</p></div>
        <style jsx>{styles}</style>
    </div>
)
const Pods = ({ store: { launchConfig: { allLaunches, setLaunchData }, filterConfig: { filterData } } }) => {
    useEffect(() => {
        if (!filterData || Object.entries(filterData).length === 0) return
        fetchPodsData(filterData, setLaunchData);
    }, [filterData])
    return (
        <Fragment>
            {
                allLaunches.map(launch => (
                    <Pod key={launch.flight_number} launch={launch} />
                ))
            }
            <style jsx>{styles}</style>
        </Fragment>
    )
}

export default withContext(Pods);