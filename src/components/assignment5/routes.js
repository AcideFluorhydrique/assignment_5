import React from "react";

function Routes(props){
    const {projection, routes, selectedAirline} = props;
    // TODO: 
    // return the routes of the selected airline; 
    // If the selectedAirlineID is null (i.e., no airline is selected), return <g></g>.
    if (selectedAirline == null) {
        return <g></g>;
    }
    const selectedRoutes = routes.filter(route => route.AirlineID === selectedAirline);

    const routelines = selectedRoutes.map((route, index) => {
        const sourceCoords = projection([route.SourceLongitude, route.SourceLatitude]);
        const destCoords = projection([route.DestLongitude, route.DestLatitude]);
        
        if (!sourceCoords || !destCoords) {
            return null; // Skip if coordinates are not available
        }

        return (
            <line 
                key={index} // Use AirlineID and index to ensure uniqueness
                x1={sourceCoords[0]} 
                y1={sourceCoords[1]} 
                x2={destCoords[0]} 
                y2={destCoords[1]} 
                stroke="#992a5b" // color for the selected airline routes
                strokeWidth={0.1}
            />
        );
    });
    return <g>{routelines}</g>
    
}

export { Routes }