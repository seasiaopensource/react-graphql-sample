import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import TabularInfo from './TabularInfo';
import LoadingImage from '../images/Loading.gif';

const BodyAndChassisAdditional = (props) => (
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
            dimensions_ground_clearance
            mass_payload
            body_doors
            mass_gvm
            boot_space_max
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
							name: 'Dimensions Ground Clearance',
							value: `${data.countryVariant.vehicle.dimensions_ground_clearance || 'N/A'}`
						},
						{
							name: 'Mass Payload',
							value: `${data.countryVariant.vehicle.mass_payload || 'N/A'}`
						},
						{
							name: 'Body Doors',
							value: `${data.countryVariant.vehicle.body_doors || 'N/A'}`
						},
						{
							name: 'Boot Space Max',
							value: `${data.countryVariant.vehicle.boot_space_max || 'N/A'}`
						}
					]}
				/>
			);
		}}
	</Query>
);

export default BodyAndChassisAdditional;
