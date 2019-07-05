import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import TabularInfo from './TabularInfo';
import LoadingImage from '../images/Loading.gif';

const SafetyAndSecurity = (props) => (
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
            ancap_rating
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
					name="Safety & Security"
					data={[
						{
							name: 'ANCAP Rating',
							value: `${data.countryVariant.vehicle.ancap_rating || 'N/A'}`
						}
					]}
				/>
			);
		}}
	</Query>
);

export default SafetyAndSecurity;
