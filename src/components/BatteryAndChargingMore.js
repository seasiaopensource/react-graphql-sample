import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import TabularInfo from './TabularInfo';
import LoadingImage from '../images/Loading.gif';

const BatteryAndChargingMore = (props) => (
	<Query
		query={gql`
      {
        countryVariant(id: "${props.countryVariant}") {
          id
          country_code
          full_variant_name
          vehicle{
            id
            electric_charge_port_type
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
							name: 'Electric Charge Port Type',
							value: `${data.countryVariant.vehicle.electric_charge_port_type || 'N/A'}`
						}
					]}
				/>
			);
		}}
	</Query>
);

export default BatteryAndChargingMore;
