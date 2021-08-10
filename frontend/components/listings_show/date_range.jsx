import { DateRangePicker, DateRange  } from 'react-date-range';
import React from 'react';

class MyDateRange extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            
                startDate: new Date(),
                endDate: new Date()
            
        }
        this.handleSelect = this.handleSelect.bind(this);
    }
    
    handleSelect(e) {
        const { startDate, endDate } = e.selection
        this.setState({ 
           startDate: startDate,
            endDate: endDate})
    }

    render(){
        const selectionRange = {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        }

        return(
            <DateRange
                ranges={[selectionRange]}
                // onChange={this.handleSelect}
                onChange={this.handleSelect}
                editableDateInputs={true}
                showSelectionPreview={true}
                months={2}
                direction="horizontal"
                showDateDisplay={false}
                showMonthAndYearPickers={false}
                // showMonthArrow={false}
                />
        )
    }
}

// export default MyDateRange;