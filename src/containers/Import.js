import React from 'react'
import { connect } from 'react-redux'
import Import from '../components/Import'
import Car from '../components/Car'
import { fetchMakes, deleteMakes } from '../redux/actions'




const mapStateToProps = (state) => {
    return {
        makes: state.makes

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // fetchMakes: () => dispatchEvent(fetchMakes())
        fetchMakes: () => dispatch(fetchMakes()),
        deleteMakes: (index) => dispatch(deleteMakes(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Import)
