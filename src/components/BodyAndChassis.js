import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import TabularInfo from './TabularInfo';
import LoadingImage from '../images/Loading.gif';

const BodyAndChassis = (props) => (
	<Query
		query={gql`
      {
        countryVariant(id: "${props.countryVariant}") {
          id
          country_code
          full_variant_name
          equipment_standard
          equipment_optional
          vehicle_colours
          features_optional
          vehicle{
            id
            make
            model
            seats
            dimensions_length
            dimensions_width
            dimensions_height
            dimensions_wheelbase
            mass_kerb
            mass_payload
            mass_gvm
            mass_gcm
            towing_braked
            towing_unbraked
            dimensions_ground_clearance
            bodyType {
              name
            }
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
					name="Body & Chassis"
					data={[
						{
							name: 'Body Type',
							value: `${data.countryVariant.vehicle.bodyType.name || 'N/A'}`
						},
						{
							name: 'Mass Kerb',
							value: `${data.countryVariant.vehicle.mass_kerb || 'N/A'}`
						},
						{
							name: 'Mass Payload',
							value: `${data.countryVariant.vehicle.mass_payload || 'N/A'}`
						},
						{
							name: 'Mass GVM',
							value: `${data.countryVariant.vehicle.mass_gvm || 'N/A'}`
						},
						{
							name: 'Mass GCM',
							value: `${data.countryVariant.vehicle.mass_gcm || 'N/A'}`
						},
						{
							name: 'Seats',
							value: `${data.countryVariant.vehicle.seats || 'N/A'}`
						},
						{
							name: 'Towing Braked',
							value: `${data.countryVariant.vehicle.towing_braked || 'N/A'}`
						},
						{
							name: 'Towing Unbraked',
							value: `${data.countryVariant.vehicle.towing_unbraked || 'N/A'}`
						}
					]}
				/>
			);
		}}
	</Query>
);

export default BodyAndChassis;
