import TourHome from "../components/pages/Tour/Home";
import Header from "../components/main/Header";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    let workstarts = [];
    if(state.Common.workstarts){
        state.Common.workstarts.forEach((item)=>{
            workstarts.push({id:item.ID, title: item.LOCATION_NAME});
        });
    }
    return {
        data: Object.assign({}, {workstarts: workstarts}, {driver_code: state.MainContent.driver_code, status: state.MainContent.status, arrival_confirm: state.MainContent.arrival_confirm, startdays: state.Common.startdays},
            {arrival_today: state.Common.arrival_today})
    }
}

const mapDispatchToProps = dispatch => {
    return {
        showMessage: (message) =>{
            dispatch(setMessage({message: message}));
        },checkTransportFinish:(driver_code)=>{
            dispatch(setLoad(true));
            dispatch(checkTransportFinish(driver_code)).then(result=>{
                dispatch(setLoad(false));
                if(result===true){
                    let data = getLocation();
                    let latitude = data.split("-")[0];
                    let longitude =  data.split("-")[1];
                    dispatch(updateDataLeaving(driver_code, latitude, longitude)).then(()=>{
                        let phone_number = getPhoneNumber();
                        dispatch(getDriverInfoAPI(phone_number));
                        dispatch(setLoad(false));
                    });
                }
            });
        }
    }
}

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)