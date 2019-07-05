import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import TabularInfo from './TabularInfo';
import LoadingImage from '../images/Loading.gif';

const Environmental = (props) => (
	<Query
		query={gql`
      {
        countryVariant(id: "${props.countryVariant}") {
          id
          country_code
          vehicle{
            id
            carbon_emissions_rated
            fuel_consumption_fossil_unit
            fuel_consumption_electric_unit
            range_battery
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
					name="Environmental"
					data={[
						{
							name: 'Carbon Emissions Rated',
							value: `${data.countryVariant.vehicle.carbon_emissions_rated || 'N/A'}`
						},
						{
							name: 'Fuel Consumption Fossil Unit',
							value: `${data.countryVariant.vehicle.fuel_consumption_fossil_unit || 'N/A'}`
						},
						{
							name: 'Fuel Consumption Electric Unit',
							value: `${data.countryVariant.vehicle.fuel_consumption_electric_unit || 'N/A'}`
						},
						{
							name: 'Range Battery',
							value: `${data.countryVariant.vehicle.range_battery || 'N/A'}`
						}
					]}
				/>
			);
		}}
	</Query>
);

export default Environmental;
