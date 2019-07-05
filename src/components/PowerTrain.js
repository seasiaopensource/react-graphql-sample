import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import TabularInfo from './TabularInfo';
import LoadingImage from '../images/Loading.gif';

const PowerTrain = (props) => (
	<Query
		query={gql`
      {
        countryVariant(id: "${props.countryVariant}") {
          id
          country_code
          full_variant_name
          vehicle{
            id
            make
            model
            engine_size
            engine_induction
            engine_configuration
            engine_cylinders
            engine_camshaft
            engine_power
            engine_torque
            engine_power_weight
            engine_location
            engine_type
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
					name="Powertrain"
					data={[
						{
							name: 'Engine Size',
							value: `${data.countryVariant.vehicle.engine_size || 'N/A'}`
						},
						{
							name: 'Engine Induction',
							value: `${data.countryVariant.vehicle.engine_induction || 'N/A'}`
						},
						{
							name: 'Engine Power',
							value: `${data.countryVariant.vehicle.engine_power || 'N/A'}`
						},
						{
							name: 'Engine Torque',
							value: `${data.countryVariant.vehicle.engine_torque || 'N/A'}`
						},
						{
							name: 'Engine Cylinders',
							value: `${data.countryVariant.vehicle.engine_cylinders || 'N/A'}`
						}
					]}
				/>
			);
		}}
	</Query>
);

export default PowerTrain;
