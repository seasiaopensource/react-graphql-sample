import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import TabularInfo from './TabularInfo';
import LoadingImage from '../images/Loading.gif';

const RealRange = (props) => (
	<Query
		query={gql`
      {
        countryVariant(id: "${props.countryVariant}") {
          id
          country_code
          full_variant_name
          vehicle{
            id
            fuel_consumption_fossil_city
            fuel_consumption_fossil_hwy
            fuel_consumption_fossil_combined
            fuel_consumption_fossil_unit
            fuel_consumption_electric_city
            fuel_consumption_electric_hwy
            fuel_consumption_electric_combined
            fuel_consumption_electric_unit
          }
        }
      }
    `}
	>
		{({ loading, error, data }) => {
			if (loading)
				return (
					<div className="loading">
						<img src={LoadingImage} alt="" />;
					</div>
				);
			if (error) return <p>Error :(</p>;
			return (
				<TabularInfo
					name="Real Range"
					data={[
						{
							name: 'Fuel Consumption Fossil City',
							value: `${data.countryVariant.vehicle.fuel_consumption_fossil_city || 'N/A'}`
						},
						{
							name: 'Fuel Consumption Fossil Hwy',
							value: `${data.countryVariant.vehicle.fuel_consumption_fossil_hwy || 'N/A'}`
						},
						{
							name: 'Fuel Consumption Fossil Combined',
							value: `${data.countryVariant.vehicle.fuel_consumption_fossil_combined || 'N/A'}`
						},
						{
							name: 'Fuel Consumption Fossil Unit',
							value: `${data.countryVariant.vehicle.fuel_consumption_fossil_unit || 'N/A'}`
						},
						{
							name: 'Fuel Consumption Electric City',
							value: `${data.countryVariant.vehicle.fuel_consumption_electric_city || 'N/A'}`
						},
						{
							name: 'Fuel Consumption Electric Hwy',
							value: `${data.countryVariant.vehicle.fuel_consumption_electric_hwy || 'N/A'}`
						},
						{
							name: 'Fuel Consumption Electric Combined',
							value: `${data.countryVariant.vehicle.fuel_consumption_electric_combined || 'N/A'}`
						},
						{
							name: 'Fuel Consumption Electric Unit',
							value: `${data.countryVariant.vehicle.fuel_consumption_electric_unit || 'N/A'}`
						}
					]}
				/>
			);
		}}
	</Query>
);

export default RealRange;
