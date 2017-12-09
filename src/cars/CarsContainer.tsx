import { connect, Dispatch } from 'react-redux';
import * as fromCarAction from './carsActions';
import CarsComponent from './CarsComponent';

//tslint:disable
function mapStateToProps(state: any) {
    return {
        cars: state.carsReducer.carList,
        carDetails: state.carsReducer.selectedCar
    };
}

function mapDispatchToProps(dispatch: Dispatch<fromCarAction.CarsAction>) {
    return {
        onCarSelected: (carModel: string) => {
            dispatch(fromCarAction.getCarDetails(carModel));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(CarsComponent);