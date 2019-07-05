import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import TabularInfo from './TabularInfo';
import LoadingImage from '../images/Loading.gif';

const BatteryAndChargingAdditional = (props) => (
	<Query
		query={gql`
      {
        countryVariant(id: "${props.countryVariant}") {
          id
          country_code
          full_variant_name
          vehicle{
            id
            range_battery
            range_fossil
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
					name=" "
					data={[
						{
							name: 'Range Battery',
							value: `${data.countryVariant.vehicle.range_battery || 'N/A'}`
						},
						{
							name: 'Range Fossil',
							value: `${data.countryVariant.vehicle.range_fossil || 'N/A'}`
						}
					]}
				/>
			);
		}}
	</Query>
);

export default BatteryAndChargingAdditional;
