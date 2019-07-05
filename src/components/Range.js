import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import TabularInfo from './TabularInfo';
import LoadingImage from '../images/Loading.gif';

const Range = (props) => (
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
            range_real_battery_combined
            range_real_battery_urban
            range_real_battery_extra_urban
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
					name="Range"
					data={[
						{
							name: 'Range Battery',
							value: `${data.countryVariant.vehicle.range_battery || 'N/A'}`
						},
						{
							name: 'Range Fossil',
							value: `${data.countryVariant.vehicle.range_fossil || 'N/A'}`
						},
						{
							name: 'Range Real Battery Combined',
							value: `${data.countryVariant.vehicle.range_real_battery_combined || 'N/A'}`
						},
						{
							name: 'Range Real Battery Urban',
							value: `${data.countryVariant.vehicle.range_real_battery_urban || 'N/A'}`
						},
						{
							name: 'Range Real Battery Extra Urban',
							value: `${data.countryVariant.vehicle.range_real_battery_extra_urban || 'N/A'}`
						}
					]}
				/>
			);
		}}
	</Query>
);

export default Range;
